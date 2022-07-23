/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let result = [];
  for (let i = 0; i < temperatures.length; i++) {
    let day = 1;
    while (true) {
      if (temperatures[i + day] && temperatures[i] < temperatures[i + day]) {
        result.push(day);
        break;
      }

      if (!temperatures[i + day]) {
        result.push(0);
        break;
      }
      day++;
    }
  }

  return result;
};