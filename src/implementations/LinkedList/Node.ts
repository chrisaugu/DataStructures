import type INode from "../../interfaces/LinkedList/INode";

export default class Node<T> implements INode<T> {
    public data: T;
    public next: INode<T> | null = null;

    constructor(value: T) {
        this.data = value;
    }

    public getData() {
        return this.data;
    }
    public setData(data: T) {
        return this.data = data;
    }
    public getNext() {
        return this.next;
    }
    public setNext(next: INode<T>) {
        return this.next = next;
    }

}