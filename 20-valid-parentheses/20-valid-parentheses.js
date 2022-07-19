/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const table = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (char of s) {
    if (!(char in table)) {
      stack.push(char);
      continue;
    }

    if (stack.length === 0 || table[char] !== stack.pop()) {
      return false;
    }
  }

  return stack.length ? false : true;
  
};