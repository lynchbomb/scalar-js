"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOutOfBounds = exports.getDistanceBetweenR2Vectors = exports.generateRandomToken = exports.getDegrees = exports.getRadians = exports.getHeadingRadians = exports.getHeadingDegrees = exports.getRandomColor = exports.randomIntBetween = exports.generateMatrix = void 0;
function generateMatrix(rows, columns, fillWith = 0) {
    return new Array(rows).fill(fillWith).map(() => new Array(columns).fill(fillWith));
}
exports.generateMatrix = generateMatrix;
function randomIntBetween(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randomIntBetween = randomIntBetween;
function getRandomColor() {
    return `# ${Math.floor(Math.random() * (9999999 - 0o0)).toString(16)}`;
}
exports.getRandomColor = getRandomColor;
function getHeadingDegrees(coords) {
    return Math.atan2(coords.y, coords.x) * 180 / Math.PI;
}
exports.getHeadingDegrees = getHeadingDegrees;
function getHeadingRadians(coords) {
    return Math.atan2(coords.y, coords.x);
}
exports.getHeadingRadians = getHeadingRadians;
function getRadians(degrees) {
    return degrees * (Math.PI / 180);
}
exports.getRadians = getRadians;
function getDegrees(radians) {
    return radians * (180 / Math.PI);
}
exports.getDegrees = getDegrees;
function generateRandomToken() {
    return Math.floor(Math.random() * (9999999 - 0o0)).toString(16);
}
exports.generateRandomToken = generateRandomToken;
function getDistanceBetweenR2Vectors(V1, V2) {
    let _deltaV = {
        x: V1.x - V2.x,
        y: V1.y - V2.y
    };
    return Math.sqrt(Math.pow(_deltaV.x, 2) + Math.pow(_deltaV.y, 2));
}
exports.getDistanceBetweenR2Vectors = getDistanceBetweenR2Vectors;
function isOutOfBounds(coords, boundary) {
    let { x, y } = coords;
    let { boundaryHeight, boundaryWidth, boundaryPadding } = boundary;
    // above is for testing and below for performance
    // in relation to viewport
    // above, right, below, left
    return (y < 0) || (x > boundaryWidth + boundaryPadding) || (y > boundaryHeight + boundaryPadding) || (x < 0);
}
exports.isOutOfBounds = isOutOfBounds;
//# sourceMappingURL=utils.js.map