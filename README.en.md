# INKFLOW

Real-time Chinese ink brushes and rendering for Three.js. Concentrated ink, surface bristles, dry-brush gaps, reserved paper, broken outlines, and animated ink flow.

[Live demo](https://ryeblablabla.github.io/inkflow/) · [中文](README.md)

```sh
npm install
npm run dev
npm run build
```

Import `InkWashRenderer`, `InkBrushCanvas`, and `loadInkResources` from `src/index.js`. Register a mesh, update its animation mixer, advance the ink clock, and render. The toolkit supports static meshes and skeletal animation without model UVs or source albedo. Surface brush anchors retain triangle barycentric attachments and all twelve source vertex skin influences.

The public demo includes original procedural rock, pine, and skinned-surface examples, a pressure-aware 2D brush, and local GLB import. The dragon shown in the film is a separate project asset and is not distributed in this repository.

Ink flow is a procedural material effect, not a physical liquid simulation. Morph targets, transparent meshes, changing topology, and dynamically recomputed self-occlusion are not implemented. Performance should be measured on your target hardware.

Original code: MIT. Shared brush masks: David Revoy, CC0. Three.js / three-mesh-bvh: MIT. Optional KinoAqua adaptation: Unlicense. See [THIRD-PARTY.md](THIRD-PARTY.md).
