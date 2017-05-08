/**
 * Implementation of a Queue
 * Queue performs operations as LIFO
 */

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(e) {
        this.queue.push(e);
    }

    dequeue() {
        return this.queue.pop();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports.Queue = new Queue();