import * as THREE from 'three';
/** Original procedural rig: a reproducible example without external model assets. */
export function createSerpent(){
 const geometry=new THREE.CylinderGeometry(.095,.17,3,16,72).rotateZ(Math.PI/2),positions=geometry.attributes.position,indices=[],weights=[],count=13,step=3/(count-1);
 for(let i=0;i<positions.count;i++){const x=positions.getX(i),u=THREE.MathUtils.clamp((x+1.5)/step,0,count-1),a=Math.min(count-2,Math.floor(u)),f=u-a;indices.push(a,a+1,0,0);weights.push(1-f,f,0,0);}
 geometry.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(indices,4));geometry.setAttribute('skinWeight',new THREE.Float32BufferAttribute(weights,4));geometry.deleteAttribute('uv');
 const bones=Array.from({length:count},()=>new THREE.Bone());bones[0].position.x=-1.5;for(let i=1;i<count;i++){bones[i].position.x=step;bones[i-1].add(bones[i]);}
 const mesh=new THREE.SkinnedMesh(geometry,new THREE.MeshStandardMaterial({color:'#aeb5b2',roughness:1}));mesh.add(bones[0]);mesh.bind(new THREE.Skeleton(bones));mesh.userData.inkProfile={flow:new THREE.Vector3(1,0,0),toneRange:[.08,.60],ridgeReserve:.1};
 const root=new THREE.Group();root.add(mesh);return{root,bones,update(time){for(let i=1;i<count;i++)bones[i].rotation.z=Math.sin(time*1.6-i*.43)*.12;root.updateMatrixWorld(true);}};
}
