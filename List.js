/**
 * List
 * @constructor
 */
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

/**
 * append
 * @param element
 */
function append(element) {
  this.dataStore[this.listSize++] = element;
}

/**
 * find
 * @param element
 * @returns {number}
 */
function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

/**
 * remove
 * @param element
 * @returns {boolean}
 */
function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

/**
 * length
 * @returns {number}
 */
function length() {
  return this.listSize;
}

/**
 * toString
 * @returns {[]}
 */
function toString() {
  return this.dataStore;
}

/**
 * insert
 * @param element
 * @param after
 * @returns {boolean}
 */
function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

/**
 * clear
 */
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

/**
 * contains
 * @param element
 * @returns {boolean}
 */
function contains(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

/**
 * front
 */
function front() {
  this.pos = 0;
}

/**
 * end
 */
function end() {
  this.pos = this.listSize-1;
}

/**
 * prev
 */
function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

/**
 * next
 */
function next() {
  if (this.pos < this.listSize-1) {
    ++this.pos;
  }
}

/**
 * currPos
 * @returns {*}
 */
function currPos() {
  return this.pos;
}

/**
 * moveTo
 * @param position
 */
function moveTo(position) {
  this.pos = position;
}

/**
 * getElement
 * @returns {*}
 */
function getElement() {
  return this.dataStore[this.pos];
}

module.exports = List;
