const DottedMap = require('dotted-map').default;

const map = new DottedMap({ height: 100, grid: "diagonal" });
const points = map.getPoints();

console.log('Total points:', points.length);
console.log('First point:', points[0]);

// Find min/max x and y
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
points.forEach(p => {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
});

console.log('Bounds:', { minX, maxX, minY, maxY });
