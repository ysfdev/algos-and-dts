/**
 * Implementation of a Stack
 * Stack perform operation as LIFO
 */

class Stack {
    constructor() {
        this.stack = [];
    }

    addElement(e) {
        this.stack.unshift(e);
    }

    getElement() {
        return this.stack.shift();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

module.exports.Stack = new Stack();