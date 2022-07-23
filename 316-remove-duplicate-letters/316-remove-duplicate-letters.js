/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const counter = {};
  const seen = new Set();
  const stack = [];

  // create dictionary
  for (const char of s) {
    if (counter[char]) {
      counter[char] += 1;
      continue;
    }
    counter[char] = 1;
  }

  for (const char of s) {
    counter[char] -= 1;
    if (seen.has(char)) {
      continue;
    }

    while (
      stack.length &&
      char < stack[stack.length - 1] &&
      counter[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop());
    }
    stack.push(char);
    seen.add(char);
  }

  return stack.join("");
};