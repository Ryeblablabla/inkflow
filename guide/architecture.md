# Rendering architecture

## Registration

`InkWashRenderer.register()` clones mesh geometry and preserves the original material/geometry for `unregister()`. Mesh neighborhoods supply curvature, cavity and occlusion signals. A BVH accelerates one-time static queries; it is not a per-frame ray tracer. A fixed seed places surface brush anchors. Optional `brushPaths` carry independent 3D reserve/pigment gestures, never reference-image colors.

A mesh can override these fields in `userData.inkProfile`:

| Field | Meaning |
| --- | --- |
| `flow: Vector3` | Preferred rest-space brush direction |
| `reserveDirection: Vector3`, `reserveStrength: number` | Directional paper reserve |
| `toneRange: [low, high]` | Pigment density range |
| `twoSidedInk: boolean` | Bilateral behavior for thin surfaces |
| `geometryInfluence`, `ridgeReserve` | Geometry-driven ink and paper emphasis |
| `macroInk`, `inkPooling` | Broad occlusion and cavity accumulation |
| `strokes: boolean` | Skip brush instances on tiny elements such as needles |
| `brushPaths: Array` | `{kind:'ink'|'reserve', points:[[x,y,z],...], radius, amount, pressure?, importance?}` |

## Per frame

1. The surface pass writes intrinsic reflectance, paper coverage, grain, and object coverage to an antialiased target with depth.
2. Instanced brush volumes reconstruct the actual visible surface from depth and evaluate marks in their local frame. Float accumulation preserves optical-density range where supported.
3. The composition adds optical density, applies paper reserve, and combines bounded wet edges, canvas grain and optional depth/normal contours. Tonal separation happens at brush generation, not by posterizing the final image.

The optional `flow` / `flowBlur` parameters refer to the separate KinoAqua post effect. `inkFlow` is the object-space time animation; they are distinct effects.

## Skeletal attachment

The mesh shader keeps pigment coordinates in the rest pose and uses Three.js skinning chunks for the rendered position and lighting normal. Each brush anchor stores its triangle attachment. Each triangle vertex contributes four skin influences weighted by that anchor's barycentric coordinate. The vertex shader evaluates all twelve contributions and reconstructs the exact deformed triangle point. The third vertex offset is recovered from the barycentric identity to fit the WebGL2 attribute budget. No influences are truncated.

Brush normal/tangent frames use the combined linear blend and follow the pose. Very strong shear, changing topology or morph targets need a separate implementation. Static cavity and occlusion analysis does not become dynamic because a skeleton moves.

## Time

`advance(dt)` explicitly updates the ink clock; `render()` never changes it implicitly. `setTime(t)` supports deterministic capture. `setMotionPaused(true)` holds the current phase. Two staggered advection phases keep the bounded material motion continuous at resets. This is an appearance model, not a conserved surface-fluid solver.

## Resource inputs

The generic atlas and flow noise are CC0 resources, with selected files and transformations recorded in `public/ink/shared-ink-resources.json`. They are brush footprints and noise, not model albedo. No reference design images are runtime inputs. Public examples are procedural; private game/model assets are not part of the release.
