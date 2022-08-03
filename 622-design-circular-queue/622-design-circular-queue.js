/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queueLength = k;
  this.queue = Array.from({length: k}, () => undefined);
  this.rear = 0;
  this.front = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  // array[rear]에 값이 없으면 true, 없으면 false
  if (this.queue[this.rear] !== 0 && !this.queue?.[this.rear]) {
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.queueLength;
    
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.queue[this.front] !== 0 && !this.queue?.[this.front]) {
    return false;
  }
  this.queue[this.front] = undefined;
  this.front = (this.front + 1) % this.queueLength;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.queue[this.front] === 0 || this.queue?.[this.front]) {
    return this.queue[this.front];
  }
  return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  let lastItem = this.rear - 1;
  if (lastItem === -1) {
    lastItem += this.queueLength;
  }
  if (this.queue[lastItem] === 0 || this.queue?.[lastItem]) {
    return this.queue[lastItem];
  }
  return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.front === this.rear && !this.queue?.[this.front] ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.front === this.rear && this.queue?.[this.front] ? true : false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */