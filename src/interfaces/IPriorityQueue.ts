import type IQueue from "./IQueue"

export interface IPriorityQueueItem<T> {
    key: number
    value: T
}

export interface IPriorityQueue<T> extends IQueue<T> { }
