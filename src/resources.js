import * as THREE from 'three';
/** Load shared CC0 brush footprints; never samples an object's source albedo. */
export async function loadInkResources(baseURL){
  const base=new URL(baseURL,globalThis.location?.href||import.meta.url);
  const loader=new THREE.TextureLoader();
  const [brushAtlas,flowNoise]=await Promise.all(['shared-ink-brush-atlas.png','shared-ink-flow-noise.png'].map(name=>loader.loadAsync(new URL(name,base).href)));
  for(const texture of [brushAtlas,flowNoise]){texture.colorSpace=THREE.NoColorSpace;texture.flipY=false;texture.userData.license='CC0-1.0';texture.userData.source='David Revoy, Krita 2023-01';}
  brushAtlas.wrapS=brushAtlas.wrapT=THREE.ClampToEdgeWrapping;
  flowNoise.wrapS=flowNoise.wrapT=THREE.RepeatWrapping;
  return {brushAtlas,flowNoise,atlasGrid:new THREE.Vector2(4,2)};
}
