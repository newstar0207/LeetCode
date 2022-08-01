
var MyQueue = function() {
  this.stack = [];  
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if(!this.stack.length) {
    this.stack[0] = x;
    return;
  }    
  this.stack[this.stack.length] = x;
  
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let result = this.stack[0];
  for (let i = 1; i < this.stack.length; i++) {
    this.stack[i - 1] = this.stack[i]
  }
  this.stack.length = this.stack.length - 1;
  
  return result;  
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[0]    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.length ? false : true    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */