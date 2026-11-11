import * as THREE from 'three';
import {MeshSurfaceSampler} from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import {inkMotionGLSL} from './ink-motion.js';

// Estimate the least-curved tangent direction from neighboring positions/normals.
// Cylindrical forms naturally produce longitudinal strokes; flat areas fall back
// to an art-directable preferred direction. The field is generated once per mesh.
function geometricFlow(geometry,preferred){
  const positions=geometry.attributes.position,normals=geometry.attributes.normal;
  const count=positions.count,axisA=new Float32Array(count*3),axisB=new Float32Array(count*3);
  const tensors=new Float32Array(count*3),result=new Float32Array(count*3);
  const n=new THREE.Vector3(),a=new THREE.Vector3(),b=new THREE.Vector3(),fallback=new THREE.Vector3();
  for(let i=0;i<count;i++){
    n.fromBufferAttribute(normals,i).normalize();a.copy(preferred).addScaledVector(n,-n.dot(preferred));
    if(a.lengthSq()<.025){fallback.set(Math.abs(n.y)<.9?0:1,Math.abs(n.y)<.9?1:0,0);a.crossVectors(n,fallback);}
    a.normalize();b.crossVectors(n,a).normalize();a.toArray(axisA,i*3);b.toArray(axisB,i*3);
  }
  function edge(i,j){
    const k=i*3;
    const dx=positions.getX(j)-positions.getX(i),dy=positions.getY(j)-positions.getY(i),dz=positions.getZ(j)-positions.getZ(i);
    const length2=dx*dx+dy*dy+dz*dz;if(length2<1e-16)return;
    const nx=normals.getX(j)-normals.getX(i),ny=normals.getY(j)-normals.getY(i),nz=normals.getZ(j)-normals.getZ(i);
    const x=dx*axisA[k]+dy*axisA[k+1]+dz*axisA[k+2],y=dx*axisB[k]+dy*axisB[k+1]+dz*axisB[k+2];
    const u=nx*axisA[k]+ny*axisA[k+1]+nz*axisA[k+2],v=nx*axisB[k]+ny*axisB[k+1]+nz*axisB[k+2];
    tensors[k]+=u*x/length2;tensors[k+1]+=(u*y+v*x)*.5/length2;tensors[k+2]+=v*y/length2;
  }
  const indices=geometry.index,triangles=indices?indices.count:count;
  for(let i=0;i<triangles;i+=3){
    const x=indices?indices.getX(i):i,y=indices?indices.getX(i+1):i+1,z=indices?indices.getX(i+2):i+2;
    edge(x,y);edge(y,x);edge(x,z);edge(z,x);edge(y,z);edge(z,y);
  }
  for(let i=0;i<count;i++){
    const k=i*3,xx=tensors[k],xy=tensors[k+1],yy=tensors[k+2];
    const radius=Math.sqrt((xx-yy)**2*.25+xy*xy),middle=(xx+yy)*.5;
    const plus=middle+radius,minus=middle-radius;
    let angle=Math.atan2(2*xy,xx-yy)*.5;
    if(Math.abs(minus)<Math.abs(plus))angle+=Math.PI*.5;
    const confidence=THREE.MathUtils.clamp((Math.max(Math.abs(plus),Math.abs(minus))-Math.min(Math.abs(plus),Math.abs(minus)))/(Math.abs(plus)+Math.abs(minus)+.001),0,1);
    a.fromArray(axisA,k);b.fromArray(axisB,k);
    n.copy(a).multiplyScalar(Math.cos(angle)).addScaledVector(b,Math.sin(angle));
    if(n.dot(a)<0)n.negate();
    a.lerp(n,confidence*.82).normalize().toArray(result,k);
  }
  return result;
}

const vertexShader=/* glsl */`
attribute vec3 aAnchor;
attribute vec3 aNormal;
attribute vec3 aFlow;
attribute vec3 aSize;
attribute vec4 aGeometry;
varying vec3 vAnchor;
varying vec3 vRestAnchor;
varying vec3 vRestNormal;
varying vec3 vRestFlow;
varying vec3 vSurfaceNormal;
varying vec3 vFlow;
varying vec3 vSize;
varying vec3 vGeometry;
varying float vReserve;
uniform float uScale;
uniform float uCoarseRatio;
uniform float uInkFlow;
#include <skinning_pars_vertex>
#ifdef USE_SKINNING
attribute vec4 aSkinIndexB;
attribute vec4 aSkinWeightB;
attribute vec4 aSkinIndexC;
attribute vec4 aSkinWeightC;
attribute vec3 aDeltaA;
attribute vec3 aDeltaB;
#endif
void main(){
  vec3 anchor=aAnchor,surfaceNormal=aNormal,tangent=normalize(aFlow);
  vec3 side=normalize(cross(aNormal,tangent));
  vec2 stretch=vec2(1.0);
  vRestAnchor=aAnchor;vRestNormal=aNormal;vRestFlow=aFlow;
  #ifdef USE_SKINNING
    #include <skinbase_vertex>
    mat4 skinA=boneMatX*skinWeight.x+boneMatY*skinWeight.y+boneMatZ*skinWeight.z+boneMatW*skinWeight.w;
    mat4 skinB=getBoneMatrix(aSkinIndexB.x)*aSkinWeightB.x+getBoneMatrix(aSkinIndexB.y)*aSkinWeightB.y+getBoneMatrix(aSkinIndexB.z)*aSkinWeightB.z+getBoneMatrix(aSkinIndexB.w)*aSkinWeightB.w;
    mat4 skinC=getBoneMatrix(aSkinIndexC.x)*aSkinWeightC.x+getBoneMatrix(aSkinIndexC.y)*aSkinWeightC.y+getBoneMatrix(aSkinIndexC.z)*aSkinWeightC.z+getBoneMatrix(aSkinIndexC.w)*aSkinWeightC.w;
    mat4 deform=bindMatrixInverse*(skinA+skinB+skinC)*bindMatrix;
    // Each vertex keeps its own four weights, multiplied by the anchor's
    // triangle barycentric coordinate. No bone influences are discarded.
    float baryA=dot(skinWeight,vec4(1.0)),baryB=dot(aSkinWeightB,vec4(1.0)),baryC=dot(aSkinWeightC,vec4(1.0));
    vec3 deltaC=-(aDeltaA*baryA+aDeltaB*baryB)/max(baryC,.0000001);
    anchor=(bindMatrixInverse*(skinA*bindMatrix*vec4(aAnchor+aDeltaA,1.0)+skinB*bindMatrix*vec4(aAnchor+aDeltaB,1.0)+skinC*bindMatrix*vec4(aAnchor+deltaC,1.0))).xyz;
    vec3 longAxis=mat3(deform)*tangent,wideAxis=mat3(deform)*side;
    stretch=vec2(length(longAxis),length(wideAxis));
    surfaceNormal=normalize(mat3(deform)*aNormal);
    tangent=normalize(longAxis-surfaceNormal*dot(longAxis,surfaceNormal));
    side=normalize(cross(surfaceNormal,tangent));
  #endif
  float factor=fract(aSize.z*.731)<uCoarseRatio?2.8:1.0;
  vAnchor=anchor;vSurfaceNormal=surfaceNormal;vFlow=tangent;vSize=vec3(aSize.xy*factor*stretch,aSize.z);
  vGeometry=aGeometry.xyz;
  vReserve=aGeometry.w;
  // Rasterize a conservative screen rectangle around the fixed 3D brush
  // volume; the fragment shader still evaluates the real surface position.
  vec4 center=modelViewMatrix*vec4(anchor,1.0);
  vec3 e1=mat3(modelViewMatrix)*(tangent*vSize.x/uScale);
  vec3 e2=mat3(modelViewMatrix)*(side*vSize.y*1.3/uScale);
  vec3 e3=mat3(modelViewMatrix)*(surfaceNormal*vSize.y*.85/uScale);
  vec3 extent=(abs(e1)+abs(e2))*(1.0+uInkFlow*.65)+abs(e3);
  vec2 bounds=(extent.xy*abs(center.z)+abs(center.xy)*extent.z)/max(abs(center.z)-extent.z,.01);
  gl_Position=projectionMatrix*vec4(center.xy+position.xy*bounds,center.z,1.0);
}`;

/** Sparse, surface-attached procedural strokes. No painted image or model UV. */
export class SurfaceBrushLayer {
  constructor(source,{shared,noise,flow,analysis,objectSize}){
    this.source=source;
    let state=7919;
    const random=()=>{state=(1664525*state+1013904223)>>>0;return state/4294967296;};
    const samplingGeometry=source.geometry.clone();
    samplingGeometry.setAttribute('color',new THREE.Float32BufferAttribute(geometricFlow(source.geometry,flow),3));
    const sampler=new MeshSurfaceSampler(new THREE.Mesh(samplingGeometry)).setRandomGenerator(random).build();
    const area=sampler.distribution[sampler.distribution.length-1]/(objectSize*objectSize);
    // Many weak overlapping marks average into a smooth grey surface. Keep
    // fewer, individually loaded strokes so a brush can still be read.
    const count=Math.round(THREE.MathUtils.clamp(area*1400,180,4200));
    const anchors=new Float32Array(count*3),normals=new Float32Array(count*3),flows=new Float32Array(count*3),sizes=new Float32Array(count*3);
    const features=new Float32Array(count*4);
    const reserves=new Float32Array(count);
    const skinIndices=source.isSkinnedMesh?[0,1,2].map(()=>new Uint16Array(count*4)):null;
    const skinWeights=source.isSkinnedMesh?[0,1,2].map(()=>new Float32Array(count*4)):null;
    const deltas=source.isSkinnedMesh?[0,1,2].map(()=>new Float32Array(count*3)):null;
    this.skinning={enabled:Boolean(source.isSkinnedMesh),interpolation:'exact triangle barycentric, all 12 vertex influences',maximumDiscardedWeight:0};
    const point=new THREE.Vector3(),normal=new THREE.Vector3(),tangent=new THREE.Vector3(),sampledFlow=new THREE.Color();
    const fallback=new THREE.Vector3(),bitangent=new THREE.Vector3();
    const closest={point:new THREE.Vector3(),distance:0,faceIndex:-1},bary=new THREE.Vector3(),triangle=new THREE.Triangle();
    const geometry=source.geometry,indices=geometry.index;
    for(let i=0;i<count;i++){
      sampler.sample(point,normal,sampledFlow);normal.normalize();
      tangent.set(sampledFlow.r,sampledFlow.g,sampledFlow.b);tangent.addScaledVector(normal,-tangent.dot(normal));
      if(tangent.lengthSq()<.025){fallback.set(Math.abs(normal.y)<.9?0:1,Math.abs(normal.y)<.9?1:0,0);tangent.crossVectors(normal,fallback);}
      tangent.normalize();bitangent.crossVectors(normal,tangent).normalize();
      tangent.addScaledVector(bitangent,(random()-.5)*.55).normalize();
      point.toArray(anchors,i*3);normal.toArray(normals,i*3);tangent.toArray(flows,i*3);
      const length=(.028+random()*.052)*objectSize;
      sizes.set([length,length*(.20+random()*.22),random()*100],i*3);
      analysis.bvh.closestPointToPoint(point,closest);
      const face=closest.faceIndex*3,ids=[0,1,2].map(j=>indices?indices.getX(face+j):face+j);
      triangle.a.fromBufferAttribute(geometry.attributes.position,ids[0]);triangle.b.fromBufferAttribute(geometry.attributes.position,ids[1]);triangle.c.fromBufferAttribute(geometry.attributes.position,ids[2]);
      triangle.getBarycoord(point,bary);
      if(skinIndices){
        for(let j=0;j<3;j++){
          const id=ids[j],weight=bary.getComponent(j);
          deltas[j].set([geometry.attributes.position.getX(id)-point.x,geometry.attributes.position.getY(id)-point.y,geometry.attributes.position.getZ(id)-point.z],i*3);
          for(let k=0;k<4;k++){
            skinIndices[j][i*4+k]=geometry.attributes.skinIndex.getComponent(id,k);
            skinWeights[j][i*4+k]=geometry.attributes.skinWeight.getComponent(id,k)*weight;
          }
        }
      }
      for(let c=0;c<3;c++)features[i*4+c]=analysis.attribute.array[ids[0]*3+c]*bary.x+analysis.attribute.array[ids[1]*3+c]*bary.y+analysis.attribute.array[ids[2]*3+c]*bary.z;
      const guides=geometry.attributes.inkGuides;
      reserves[i]=guides.getY(ids[0])*bary.x+guides.getY(ids[1])*bary.y+guides.getY(ids[2])*bary.z;
      features[i*4+3]=reserves[i];
    }
    samplingGeometry.dispose();
    const strokeGeometry=new THREE.InstancedBufferGeometry();
    strokeGeometry.setAttribute('position',new THREE.Float32BufferAttribute([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3));
    strokeGeometry.setIndex([0,1,2,0,2,3]);strokeGeometry.instanceCount=count;
    for(const [name,data]of Object.entries({aAnchor:anchors,aNormal:normals,aFlow:flows,aSize:sizes,aGeometry:features}))strokeGeometry.setAttribute(name,new THREE.InstancedBufferAttribute(data,name==='aGeometry'?4:3));
    if(skinIndices){
      for(let j=0;j<3;j++){
        strokeGeometry.setAttribute(['skinIndex','aSkinIndexB','aSkinIndexC'][j],new THREE.InstancedBufferAttribute(skinIndices[j],4));
        strokeGeometry.setAttribute(['skinWeight','aSkinWeightB','aSkinWeightC'][j],new THREE.InstancedBufferAttribute(skinWeights[j],4));
        if(j<2)strokeGeometry.setAttribute(['aDeltaA','aDeltaB'][j],new THREE.InstancedBufferAttribute(deltas[j],3));
      }
    }
    this.material=new THREE.ShaderMaterial({
      uniforms:{...shared,tSurfaceDepth:{value:null},uViewport:{value:new THREE.Vector2(1,1)},
        uInverseProjection:{value:new THREE.Matrix4()},uInverseView:{value:new THREE.Matrix4()},uWorldToModel:{value:new THREE.Matrix4()}},
      vertexShader,
      fragmentShader:/* glsl */`
        varying vec3 vAnchor;
        varying vec3 vRestAnchor;
        varying vec3 vRestNormal;
        varying vec3 vRestFlow;
        varying vec3 vSurfaceNormal;
        varying vec3 vFlow;
        varying vec3 vSize;
        varying vec3 vGeometry;
        varying float vReserve;
        uniform sampler2D tSurfaceDepth;
        uniform vec2 uViewport;
        uniform mat4 uInverseProjection;
        uniform mat4 uInverseView;
        uniform mat4 uWorldToModel;
        uniform vec3 uLightView;
        uniform float uDensity;
        uniform float uDry;
        uniform float uScale;
        uniform float uGranulation;
        uniform sampler2D uBrushAtlas;
        uniform vec2 uAtlasGrid;
        uniform float uBrushMix;
        uniform float uStrokeStrength;
        uniform float uInkStorageScale;
        uniform float uTonalContrast;
        uniform float uTonalSoftness;
        uniform vec2 uToneRange;
        uniform float uTwoSidedInk;
        uniform float uGeometryInfluence;
        uniform vec3 uCenter;
        uniform float uObjectScale;
        uniform vec3 uReserveDirection;
        uniform float uReserveStrength;
        ${noise}
        ${inkMotionGLSL}
        float brushFootprint(vec2 q,float seed){
          if(any(greaterThan(abs(q),vec2(1.0))))return 0.0;
          float taper=pow(max(0.0,1.0-q.x*q.x),.38);
          float rough=(noise3(vec3(q*vec2(11,19),seed))-.5)*.16;
          float footprint=(1.0-smoothstep(taper-.15,taper+.05,abs(q.y)+rough))*(1.0-smoothstep(.78,1.0,abs(q.x)));
          if(uBrushMix>.001){
            float slot=mod(floor(seed*23.17),uAtlasGrid.x*uAtlasGrid.y);
            vec2 tile=vec2(mod(slot,uAtlasGrid.x),floor(slot/uAtlasGrid.x));
            float mask=texture2D(uBrushAtlas,(tile+clamp(q*.5+.5,vec2(.015),vec2(.985)))/uAtlasGrid).r;
            footprint=mix(footprint,mask,uBrushMix);
          }
          return footprint;
        }
        vec2 brushDeposit(vec2 q,float seed){
          q.y+=(noise3(vec3(q.x*1.7,seed,3.7))-.5)*.28;
          float footprint=brushFootprint(q,seed);
          float fiber=noise3(vec3(q*vec2(1.5,42),seed));
          float pressure=.76+.24*noise3(vec3(q*vec2(2,5),seed+3.7));
          float bristles=smoothstep(.27,.59,fiber);
          float dryCoverage=mix(1.0,bristles,uDry*.90);
          float ragged=noise3(vec3(q*vec2(10,25),seed+9.4));
          float transition=max(.015,uTonalSoftness);
          float mark=smoothstep(.07+uDry*.07,.24+transition,footprint*pressure+(ragged-.5)*.08);
          float coverage=mix(footprint,mark,uTonalContrast)*dryCoverage;
          float pooling=.72+.28*noise3(vec3(q*vec2(5,9),seed));
          return vec2(coverage*pooling,footprint);
        }
        void main(){
          vec2 uv=gl_FragCoord.xy/uViewport;
          float depth=texture2D(tSurfaceDepth,uv).r;
          if(depth>.999999)discard;
          vec4 view=uInverseProjection*vec4(uv*2.0-1.0,depth*2.0-1.0,1.0);
          view/=view.w;
          vec3 surface=(uWorldToModel*uInverseView*view).xyz;
          vec3 delta=surface-vAnchor;
          vec3 across=normalize(cross(vSurfaceNormal,vFlow));
          float length=vSize.x/uScale,width=vSize.y/uScale;
          if(abs(dot(delta,vSurfaceNormal))>width*.85)discard;
          vec2 q=vec2(dot(delta,vFlow)/length,dot(delta,across)/width);
          float seed=vSize.z;
          vec3 massPosition=(vRestAnchor-uCenter)*uObjectScale;
          vec2 brush;
          if(uInkFlow<.0001)brush=brushDeposit(q,seed);
          else{
            vec3 phases=inkPhases(massPosition);
            vec2 shift=vec2(uInkFlow,uInkFlow*.12);
            vec2 a=brushDeposit(q-shift*(phases.x-.5),seed);
            vec2 b=brushDeposit(q-shift*(phases.y-.5),seed);
            brush=mix(b,a,phases.z);
          }
          if(brush.y<.001)discard;
          float orientation=dot(normalize(vRestNormal),-normalize(uReserveDirection));
          float dorsal=mix(orientation*.5+.5,abs(orientation),uTwoSidedInk);
          float field=mix(uToneRange.x,uToneRange.y,pow(dorsal,1.1));
          field+=(vGeometry.z*.12+clamp(vGeometry.x/.12,0.0,1.0)*.16)*uGeometryInfluence;
          float massNoise=movingInkFbm(massPosition,normalize(vRestNormal),normalize(vRestFlow),vec3(5,8,5),vec3(2.7,8.3,1.9));
          field+=(massNoise-.5)*.52;
          float strokeChoice=hash(vec3(seed,18.7,4.1));
          // A stroke is dipped once: coherent pale wash or concentrated ink,
          // with short transitions. Do not quantize the final rendered image.
          float transition=max(.015,uTonalSoftness);
          float loaded=smoothstep(.30-transition,.44+transition,field);
          float load=mix(.07+field*.28,.06+loaded*(.72+strokeChoice*.28),uTonalContrast);
          float pigment=load*uDensity*uStrokeStrength;
          float reserve=smoothstep(.05,.85,dot(normalize(vRestNormal),normalize(uReserveDirection)));
          pigment*=1.0-reserve*uReserveStrength;
          float deposit=brush.x*pigment*(1.0-vReserve);
          float lift=brush.y*smoothstep(.14,.30,vGeometry.y)*(1.0-vGeometry.z*.5)*.13;
          gl_FragColor=vec4(deposit*uInkStorageScale,lift*uInkStorageScale,0.0,1.0);
        }`,
      transparent:true,depthTest:false,depthWrite:false,side:THREE.DoubleSide,
      blending:THREE.CustomBlending,blendSrc:THREE.OneFactor,blendDst:THREE.OneFactor,blendEquation:THREE.AddEquation,
    });
    this.mesh=source.isSkinnedMesh?new THREE.SkinnedMesh(strokeGeometry,this.material):new THREE.Mesh(strokeGeometry,this.material);
    if(source.isSkinnedMesh){this.mesh.bind(source.skeleton,source.bindMatrix);this.mesh.bindMode=source.bindMode;}
    this.mesh.matrixAutoUpdate=false;this.mesh.frustumCulled=false;
    this.count=count;
  }
  update(camera,depthTexture,width,height){
    let visible=true;for(let node=this.source;node;node=node.parent)if(!node.visible){visible=false;break;}
    this.mesh.visible=visible;if(!visible)return;
    this.mesh.matrix.copy(this.source.matrixWorld);
    const u=this.material.uniforms;
    u.tSurfaceDepth.value=depthTexture;u.uViewport.value.set(width,height);
    u.uInverseProjection.value.copy(camera.projectionMatrixInverse);
    u.uInverseView.value.copy(camera.matrixWorld);
    u.uWorldToModel.value.copy(this.source.matrixWorld).invert();
  }
  dispose(){this.mesh.geometry.dispose();this.material.dispose();}
}
