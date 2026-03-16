export default interface INode<T> {
    data: T;
    next: INode<T> | null;
}
