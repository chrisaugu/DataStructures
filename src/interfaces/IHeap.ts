export default interface IHeap<T> {
    insert(item: T): void;
    remove(): T | undefined;
}