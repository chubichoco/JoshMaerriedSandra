// Lightweight procedural geometry — no model files to download.
import { Shape, ExtrudeGeometry, ShapeGeometry } from "three";

// Classic bezier heart, extruded with a soft bevel, centred and normalised to ~1 unit wide.
export function heartGeometry(detail = 10) {
  const s = new Shape();
  s.moveTo(5, 5);
  s.bezierCurveTo(5, 5, 4, 0, 0, 0);
  s.bezierCurveTo(-6, 0, -6, 7, -6, 7);
  s.bezierCurveTo(-6, 11, -3, 15.4, 5, 19);
  s.bezierCurveTo(12, 15.4, 16, 11, 16, 7);
  s.bezierCurveTo(16, 7, 16, 0, 10, 0);
  s.bezierCurveTo(7, 0, 5, 5, 5, 5);
  const g = new ExtrudeGeometry(s, {
    depth: 3.2,
    bevelEnabled: true,
    bevelThickness: 2.2,
    bevelSize: 1.6,
    bevelSegments: 4,
    curveSegments: detail,
  });
  g.center();
  g.rotateZ(Math.PI); // point downwards
  g.scale(1 / 22, 1 / 22, 1 / 22);
  g.computeVertexNormals();
  return g;
}

// A single cupped petal: teardrop outline, then bent so it catches light as it tumbles.
export function petalGeometry() {
  const s = new Shape();
  s.moveTo(0, -0.5);
  s.bezierCurveTo(0.46, -0.32, 0.56, 0.2, 0.18, 0.46);
  s.quadraticCurveTo(0, 0.56, -0.18, 0.46);
  s.bezierCurveTo(-0.56, 0.2, -0.46, -0.32, 0, -0.5);
  const g = new ShapeGeometry(s, 10);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    p.setZ(i, 0.55 * x * x + 0.12 * (y + 0.5) * (y + 0.5));
  }
  g.computeVertexNormals();
  return g;
}
