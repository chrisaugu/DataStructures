export default interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    isEmpty(): boolean;
    size: number;
    peek(): T | undefined;
}