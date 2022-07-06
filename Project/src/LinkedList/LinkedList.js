import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const node = new LinkedListNode(value, this.head);

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    linkedListValues() {
        const values = [];

        let currentNode = this.head;

        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return values;
    }
}
