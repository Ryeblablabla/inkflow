# Shared rendering resources

- Three.js 0.181.2: MIT. See `THREE-LICENSE.txt`.
- three-mesh-bvh 0.9.18: MIT. See `MESH-BVH-LICENSE.txt`.
- Optional gradient-flow watercolor pass: adapted to GLSL from Keijiro Takahashi's [KinoAqua](https://github.com/keijiro/KinoAqua), released under the Unlicense. The original effect credits Florian Berger / flockaroo as inspiration. See `KINO-AQUA-LICENSE.txt`. This adaptation keeps grayscale, uses six integration steps and processes the live rendered framebuffer.
- Shared brush opacity masks and paper-height channel: David Revoy (Deevad), [Krita brushes 2023-01 bundle](https://www.davidrevoy.com/article953/krita-brushes-2023-01-bundle), CC0-1.0. The downloaded archive matches the author's published SHA-256. See `public/ink/shared-ink-resources.json` and `public/ink/DEEVAD-CC0-meta.xml` for exact selected resources and transformations. Demonstration artworks from the article are not included.
- The flow-vector noise channels are generated deterministic tileable value noise (seed 230118), as recorded in the resource manifest.

These shared resources contain generic brush marks and paper grain, not the dragon, rock, tree, original design colors, or the old model material. They are sampled as brush footprints / flow noise. Model UVs and source albedo are not used for these effects.
