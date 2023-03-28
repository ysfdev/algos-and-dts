/**
 * Implementation of a Queue
 * Queue performs operations as FIFO
 */

class Queue {
    constructor() {
        this.queue = [];
        this.idx = -1;
    }

    enqueue(e) {
        this.queue.push(e);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports.Queue = new Queue();