/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  let rect1 = [A, B, C, D], rect2 = [E, F, G, H];
  let xLen = 0, yLen = 0;
  if (rect2[2] >= rect1[0] && rect1[2] >= rect2[0]) {
    xLen = Math.min(rect1[2], rect2[2]) - Math.max(rect1[0], rect2[0]);
  }
  if (rect2[3] >= rect1[1] && rect1[3] >= rect2[1]) {
    yLen = Math.min(rect1[3], rect2[3]) - Math.max(rect1[1], rect2[1]);
  }
  let overlapArea = xLen * yLen,
    area1 = (rect1[2] - rect1[0]) * (rect1[3] - rect1[1]),
    area2 = (rect2[2] - rect2[0]) * (rect2[3] - rect2[1]);
  return area1 + area2 - overlapArea;
};