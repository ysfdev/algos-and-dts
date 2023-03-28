const Queue = require('../queue').Queue;


describe('Queue Tests', () => {
    Queue.enqueue(4);
    Queue.enqueue(5);

    test('Should return the first element from Queue', () => {
        expect(Queue.dequeue()).toBe(4);
    })

    test('Expect Queue to not be Empty', () => {
        expect(Queue.isEmpty()).toBe(false);
    })

    test('Expect Queue to  be Empty', () => {
        Queue.dequeue();
        expect(Queue.isEmpty()).toBe(true);
    })
})