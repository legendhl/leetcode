/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let total = 0, dis = 0, len = distance.length;
  let s = Math.min(start, destination), d = Math.max(start, destination);
  for (let i = 0; i < len; i++) {
    let idx = (i + s) % len;
    total += distance[idx];
    if (i + s < d) {
      dis += distance[idx];
    }
  }
  return Math.min(dis, total - dis);
};