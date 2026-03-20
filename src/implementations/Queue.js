/**
 * Queue
 * @constructor
 */
function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

/**
 * enqueue
 * @param element
 */
function enqueue(element){
  this.dataStore.push(element);
}

/**
 * dequeue
 */
function dequeue(){
  this.dataStore.shift();
}

/**
 * front
 * @returns {*}
 */
function front(){
  return this.dataStore[0];
}

/**
 * back
 * @returns {*}
 */
function back(){
  return this.dataStore[this.dataStore.length-1];
}

/**
 * toString
 * @returns {string}
 */
function toString(){
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

/**
 * empty
 * @returns {boolean}
 */
function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = Queue;
