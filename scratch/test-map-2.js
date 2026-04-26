const DottedMap = require('dotted-map').default;

const map = new DottedMap({ height: 100, grid: "diagonal" });
const points = map.getPoints();

console.log('Keys in point object:', Object.keys(points[0]));
console.log('Point 0:', points[0]);
