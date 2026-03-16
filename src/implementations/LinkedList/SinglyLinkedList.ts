import type INode from "../../interfaces/LinkedList/INode";
import Node from "./Node";

export class SinglyLinkedList<T> {
    public head: INode<T> | null = null;

    /**
     * Adds given node to the front of the list
     * @param node T
     */
    prepend(node: T): void {
        const newNode = new Node<T>(node);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * Adds given node to the back of the list
     * @param data T
     * @returns 
     */
    append(data: T): void {
        const newNode = new Node<T>(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    /**
     * Delete head by moving head to the next node
     */
    deleteHead(): void {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    /**
     * Delete tail by 
     */
    deleteTail(): void {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;

        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    delete(data: T): void { }

    find(data: T): INode<T> | null {
        return null;
    }

    traverse(): void { }

    insertAt(pos: number, data: T): void { }
}