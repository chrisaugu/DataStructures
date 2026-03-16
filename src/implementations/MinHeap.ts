import type IHeap from "../interfaces/IHeap";

export default class MinHeap<T> implements IHeap<T> {
    private heap: T[] = [];

    insert(item: T): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    remove(): T | undefined {
        if (this.heap.length < 2) return this.heap.pop();
        const removedItem = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return removedItem;
    }

    private bubbleUp(): void {
        // Logic for maintaining heap order
    }

    private bubbleDown(): void {
        // Logic for maintaining heap order
    }
}