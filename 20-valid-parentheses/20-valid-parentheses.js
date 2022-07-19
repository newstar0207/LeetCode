/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i of s) {
    console.log(i);
    if (i === "{" || i === "(" || i === "[") {
      stack.push(i);
      continue;
    }

    if (i === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
      continue;
    }

    if (i === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
      continue;
    }

    if (i === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      continue;
    }
    return false;
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
  
};