import * as THREE from 'three';
import {mergeGeometries,mergeVertices} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {ConvexGeometry} from 'three/examples/jsm/geometries/ConvexGeometry.js';
import {TessellateModifier} from 'three/examples/jsm/modifiers/TessellateModifier.js';
import {MarchingCubes} from 'three/examples/jsm/objects/MarchingCubes.js';

const gray=()=>new THREE.MeshStandardMaterial({color:'#adb1ae',roughness:1,side:THREE.DoubleSide});
const random=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};

function roughRock(radius,detail,offset,scale,seed){
  let geometry=mergeVertices(new THREE.IcosahedronGeometry(radius,detail));
  const a=geometry.attributes.position;
  for(let i=0;i<a.count;i++){
    let x=a.getX(i),y=a.getY(i),z=a.getZ(i);
    const undulation=1+.09*Math.sin(y*5.7+z*3.1+seed)+.055*Math.sin(x*7.1-z*4.3+seed*.7);
    x*=undulation;y*=1+.045*Math.cos(x*8.2+z*6.1);z*=undulation;
    // Broad planes and shallow strata remain real geometry in every direction.
    x+=.045*Math.sin(y*8.1+seed)*Math.sin(z*3.2);
    y=Math.max(y,-radius*.84);
    a.setXYZ(i,x*scale[0]+offset[0],y*scale[1]+offset[1],z*scale[2]+offset[2]);
  }
  geometry.computeVertexNormals();geometry.deleteAttribute('uv');return geometry;
}

export function createBlockInkRock(){
  const points=[[-.80,-.80,-.58],[.70,-.80,-.63],[.90,-.72,.30],[.55,-.80,.70],[-.63,-.80,.64],[-.98,-.35,.15],[-.67,.32,-.62],[.52,.43,-.59],[.78,.15,.38],[.35,.88,.48],[-.55,.82,.24],[-.64,.78,-.19],[.05,1.23,-.31]].map(p=>new THREE.Vector3(...p));
  const hull=new ConvexGeometry(points),tessellator=new TessellateModifier(.13,8);
  const refined=tessellator.modify(hull),main=mergeVertices(refined);hull.dispose();refined.dispose();
  const parts=[main,roughRock(.33,2,[-.74,-.62,.27],[1.1,.65,.95],7)];
  const geometry=mergeGeometries(parts,false);parts.forEach(g=>g.dispose());
  const mesh=new THREE.Mesh(geometry,gray());mesh.name='Three-dimensional ink stone';
  mesh.userData.inkProfile={flow:new THREE.Vector3(.25,1,.12),reserveDirection:new THREE.Vector3(1,0,0),toneRange:[.18,.72],reserveStrength:0,geometryInfluence:.45,ridgeReserve:.45,brushPaths:[
    {kind:'ink',points:[[.22,.90,.47],[.27,.40,.61],[.38,-.20,.62],[.25,-.72,.64]],radius:.24,amount:.72,pressure:[.3,1,.8,.2]},
    {kind:'reserve',points:[[-.23,.83,.43],[-.43,.45,.60],[-.22,-.06,.69],[-.43,-.66,.60]],radius:.12,amount:.85,pressure:[.3,.9,1,.25]},
  ]};
  const group=new THREE.Group();group.add(mesh);group.userData.specimen={kind:'stone',source:'procedural 3D geometry',imageInputs:0};return group;
}

export function createInkRock(){
  const resolution=48,material=gray(),marcher=new MarchingCubes(resolution,material,false,false,40000);marcher.isolation=0;
  const smoothUnion=(a,b,k)=>{const h=THREE.MathUtils.clamp(.5+.5*(b-a)/k,0,1);return THREE.MathUtils.lerp(b,a,h)-k*h*(1-h);};
  const ellipsoid=(x,y,z,c,r)=>(Math.sqrt(((x-c[0])/r[0])**2+((y-c[1])/r[1])**2+((z-c[2])/r[2])**2)-1)*Math.min(...r);
  for(let iz=0;iz<resolution;iz++)for(let iy=0;iy<resolution;iy++)for(let ix=0;ix<resolution;ix++){
    const x=ix/resolution*2-1,y=iy/resolution*2-1,z=iz/resolution*2-1;
    let d=ellipsoid(x,y,z,[0,-.02,0],[.68,.83,.50]);
    d=smoothUnion(d,ellipsoid(x,y,z,[-.34,-.53,.10],[.43,.28,.34]),.15);
    d=smoothUnion(d,ellipsoid(x,y,z,[.20,.42,-.05],[.37,.39,.30]),.13);
    d+=.024*Math.sin(x*16+y*7+z*11)+.013*Math.sin(y*27-z*18+x*6);
    const h1=(Math.hypot((x+.10+.025*Math.sin(z*9))/.21,(y-.25)/.28)-1)*.21;
    const h2=(Math.hypot((x+.30)/.17,(y+.33+.025*Math.sin(z*8))/.20)-1)*.17;
    const h3=(Math.hypot((y+.09)/.17,(z+.06)/.15)-1)*.15;
    d=Math.max(d,-h1,-h2,-h3,-.79-y);
    marcher.field[ix+iy*resolution+iz*resolution*resolution]=-d;
  }
  marcher.update();const count=marcher.geometry.drawRange.count,raw=new THREE.BufferGeometry();
  raw.setAttribute('position',new THREE.Float32BufferAttribute(marcher.geometry.attributes.position.array.slice(0,count*3),3));
  raw.setAttribute('normal',new THREE.Float32BufferAttribute(marcher.geometry.attributes.normal.array.slice(0,count*3),3));
  const geometry=mergeVertices(raw);raw.dispose();marcher.geometry.dispose();
  const mesh=new THREE.Mesh(geometry,material);mesh.name='Eroded three-dimensional ink stone';
  mesh.userData.inkProfile={flow:new THREE.Vector3(.2,1,.12),reserveDirection:new THREE.Vector3(1,-.4,.2).normalize(),toneRange:[.08,.70],reserveStrength:.05,geometryInfluence:.70,ridgeReserve:.55,macroInk:.65,inkPooling:.65};
  const group=new THREE.Group();group.add(mesh);group.userData.specimen={kind:'eroded stone',source:'signed-distance sculpting and MarchingCubes; no image input',imageInputs:0};return group;
}

function taperedBranch(points,radius,endRadius,seed){
  const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),false,'centripetal');
  const rows=32,sides=9,frames=curve.computeFrenetFrames(rows,false),positions=[],indices=[];
  for(let i=0;i<=rows;i++){
    const t=i/rows,p=curve.getPointAt(t),r=endRadius+(radius-endRadius)*Math.pow(1-t,.9);
    for(let j=0;j<sides;j++){
      const angle=j/sides*Math.PI*2,rough=1+.10*Math.sin(angle*4+t*29+seed);
      const v=p.clone().addScaledVector(frames.normals[i],Math.cos(angle)*r*rough).addScaledVector(frames.binormals[i],Math.sin(angle)*r*rough);positions.push(...v.toArray());
    }
  }
  for(let i=0;i<rows;i++)for(let j=0;j<sides;j++){const a=i*sides+j,b=i*sides+(j+1)%sides,c=b+sides,d=a+sides;indices.push(a,b,d,b,c,d);}
  const startCap=positions.length/3;positions.push(...curve.getPointAt(0).toArray(),...curve.getPointAt(1).toArray());
  for(let j=0;j<sides;j++){const next=(j+1)%sides;indices.push(startCap,next,j,startCap+1,rows*sides+j,rows*sides+next);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}

function addNeedle(positions,indices,origin,direction,length,width,seed){
  const axis=direction.clone().normalize(),cross=new THREE.Vector3().crossVectors(axis,new THREE.Vector3(0,1,0));
  if(cross.lengthSq()<.01)cross.set(1,0,0);cross.normalize();
  const start=positions.length/3;
  for(let i=0;i<4;i++){
    const t=i/3,p=origin.clone().addScaledVector(axis,length*t);p.y+=Math.sin(Math.PI*t)*length*.1;
    const r=width*Math.pow(1-t,.7);
    positions.push(...p.clone().addScaledVector(cross,-r).toArray(),...p.clone().addScaledVector(cross,r).toArray());
  }
  for(let i=0;i<3;i++){const a=start+i*2,b=a+1,c=a+2,d=a+3;indices.push(a,c,b,b,c,d);}
}

export function createInkPine(){
  const branches=[],positions=[],indices=[];
  const trunk=[[-.12,-1.5,0],[-.20,-.9,.05],[-.38,-.35,.03],[-.03,.25,-.04],[-.20,.88,.02],[.16,1.46,.02]];
  branches.push(taperedBranch(trunk,.15,.023,1));
  const limbs=[
    {points:[[-.35,-.35,.03],[-.64,-.22,.05],[-1.14,-.15,.12],[-1.34,.04,.15]],crown:[-1.18,.15,.16],spread:.52},
    {points:[[-.04,.22,-.04],[.37,.12,-.12],[.81,.25,-.16],[1.11,.55,-.1]],crown:[.98,.63,-.1],spread:.66},
    {points:[[-.18,.76,.02],[-.44,.82,.1],[-.71,1.02,.14],[-.95,1.14,.15]],crown:[-.83,1.26,.15],spread:.52},
    {points:[[-.02,1.18,.0],[.30,1.18,-.09],[.56,1.40,-.12]],crown:[.55,1.49,-.1],spread:.45},
    {points:[[.05,1.32,0],[.16,1.5,.02],[.15,1.63,.03]],crown:[.11,1.74,.04],spread:.56},
    {points:[[-.23,-.1,0],[-.29,.02,.52],[-.28,.20,.84]],crown:[-.28,.28,.88],spread:.44},
    {points:[[-.17,.83,0],[-.06,1.02,-.48],[.15,1.16,-.79]],crown:[.15,1.24,-.84],spread:.48},
  ];
  for(let i=0;i<limbs.length;i++){
    const limb=limbs[i];branches.push(taperedBranch(limb.points,.065-i*.007,.012,i+4));
    const center=new THREE.Vector3(...limb.crown);
    for(let j=0;j<12;j++){
      const angle=j*2.39996323,r=Math.sqrt((j+.5)/12)*limb.spread;
      const cluster=center.clone().add(new THREE.Vector3(Math.cos(angle)*r,(random(i*40+j)-.5)*.13,Math.sin(angle)*r*.53));
      const branchStart=new THREE.Vector3(...limb.points.at(-2));
      branches.push(taperedBranch([branchStart.toArray(),cluster.clone().add(new THREE.Vector3(0,-.08,0)).toArray(),cluster.toArray()],.012,.003,i*50+j));
      for(let k=0;k<120;k++){
        const theta=k*2.39996323+angle*.3,z=.06+random(k+i*700+j*43)*.24;
        const growth=cluster.clone().sub(branchStart).normalize();growth.y*=.25;growth.normalize();
        const fanSide=new THREE.Vector3().crossVectors(growth,new THREE.Vector3(0,1,0)).normalize();
        const dir=growth.clone().multiplyScalar(.68).addScaledVector(fanSide,Math.cos(theta)*.48).add(new THREE.Vector3(0,z*.8,Math.sin(theta)*.15)).normalize();
        const origin=cluster.clone().addScaledVector(growth,-random(k+j*17)*.10).addScaledVector(fanSide,(random(k*3+i)-.5)*.045);
        addNeedle(positions,indices,origin,dir,.18+random(k*7+j*17+i)*.20,.0035+random(k+j)*.003,k);
      }
    }
  }
  for(let i=0;i<6;i++){
    const angle=i/6*Math.PI*2,end=[-.12+Math.cos(angle)*(.32+random(i)*.14),-1.55,Math.sin(angle)*.30];
    branches.push(taperedBranch([trunk[0],[-.12+Math.cos(angle)*.18,-1.43,Math.sin(angle)*.12],end],.075,.012,i+50));
  }
  const woodGeometry=mergeGeometries(branches,false);branches.forEach(g=>g.dispose());
  const wood=new THREE.Mesh(woodGeometry,gray());wood.name='Pine trunk and branches';
  wood.userData.inkProfile={flow:new THREE.Vector3(0,1,0),reserveDirection:new THREE.Vector3(.5,-.1,1).normalize(),toneRange:[.36,.92],reserveStrength:0,geometryInfluence:.35,ridgeReserve:.1,brushPaths:[
    {kind:'reserve',points:trunk.map((p,i)=>[p[0]+.025,p[1],p[2]+.15*(1-i/(trunk.length-1))+.025]),radius:.025,amount:.65,pressure:[.15,.85,.2,.95,.1,.75,.1]},
  ]};
  const foliageGeometry=new THREE.BufferGeometry();foliageGeometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));foliageGeometry.setIndex(indices);foliageGeometry.computeVertexNormals();
  const needles=new THREE.Mesh(foliageGeometry,gray());needles.name='Volumetric pine needle groups';
  needles.userData.inkProfile={toneRange:[.35,.72],twoSidedInk:true,geometryInfluence:0,strokes:false,reserveStrength:0};
  const group=new THREE.Group();group.add(wood,needles);group.userData.specimen={kind:'pine tree',source:'procedural 3D branches and needle ribbons',imageInputs:0};return group;
}
