/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  // n*(n+1)/2 >= candies;
  // n*n + n + 1/4 >= 2*candies + 1/4;
  // (n + 1/2) >= Math.sqrt(2*candies + 1/4);
  // n >= Math.sqrt(2*candies + 1/4) - 1/2
  let n = Math.floor(Math.sqrt(2 * candies + 0.25) - 0.5);
  let remain = candies - n * (n + 1) / 2;
  let ret = [];
  for (let i = 0; i < num_people; i++) {
    let m = Math.floor(n / num_people) + (i < n % num_people ? 1 : 0);
    let num = m * (i + 1) + m * (m - 1) * num_people / 2;
    if (i === n % num_people) {
      num += remain;
    }
    ret.push(num);
  }
  return ret;
};