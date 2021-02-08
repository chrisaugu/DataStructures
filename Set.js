/**
 * Set
 * Math Set
 * @constructor
 */
function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.difference = difference;
  this.show = show;
}

/**
 * add
 * This function adds data to the set
 * @param data
 * @returns {boolean}
 */
function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  }
  else {
    return false;
  }
}

/**
 * remove
 * This function remove the data from the set
 * @param data
 * @returns {boolean}
 */
function remove(data) {
  let pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  }
  else {
    return false;
  }
}

/**
 * size
 * This function returns the size of the set
 * @returns {number}
 */
function size() {
  return this.dataStore.length;
}

/**
 * contains
 * This function checks if the data is in the set
 * @param data
 * @returns {boolean}
 */
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * subset
 * This function checks if the proposed set is a subset of the main set by checking its members against the main set.
 * @param set
 * @returns {boolean}
 */
function subset(set) {
  if (this.size() > set.size()) {
    return false;
  }
  else {
    for (var member in this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * union
 * This function combines first set and second set together.
 * @param set
 * @returns {Set}
 */
function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

/**
 * intersect
 * This function returns a set that contains those members that are in first and second set.
 * @param set
 * @returns {Set}
 */
function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

/**
 * difference
 * This function returns a set that contains those members of the first set that are not in the second set.
 * @param set
 * @returns {Set}
 */
function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

/**
 * show
 * This function displays all the data in the set
 * @returns {[]}
 */
function show() {
  return this.dataStore;
}
