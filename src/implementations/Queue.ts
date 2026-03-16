import type IQueue from "../interfaces/IQueue";

/**
 * Queue
 */
export default class Queue<T> implements IQueue<T> {
  private dataStore: T[];
  size: number;

  constructor() {
    this.dataStore = [];
    this.size = 0;
  }

  /**
   * enqueue
   */
  enqueue(element: T) {
    this.size++;
    this.dataStore.push(element);
  }

  /**
   * dequeue
   */
  dequeue(): T | undefined {
    this.size--;
    return this.dataStore.shift();
  }

  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }

  /**
   * front
   */
  front(): T | undefined {
    return this.dataStore[0];
  }

  /**
   * back
   */
  back(): T | undefined {
    return this.dataStore[this.dataStore.length - 1];
  }

  /**
   * toString
   */
  toString(): string {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }

  /**
   * empty
   */
  isEmpty(): boolean {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }

}
