
var MyStack = function() {
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if(!this.stack.length) {
    this.stack[0] = x;
    return;
  }
  this.stack[this.stack.length] = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  // let result = this.stack[0];
  // for (let i = 1; i < this.stack.length; i++){
  //   this.stack[i - 1] = this.stack[i]
  // }
  // this.stack.length = this.stack.length - 1;
  // return result;
  let result = this.stack[this.stack.length - 1];
  this.stack.length = this.stack.length - 1;
  return result
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length ? false : true;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */