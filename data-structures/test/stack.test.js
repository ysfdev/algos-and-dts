const Stack = require('../stack').Stack;


describe('Stack Tests', () => {
    Stack.addElement(4);
    Stack.addElement(5);

    test('Should return the first element from stack', () => {
        expect(Stack.getElement()).toBe(4);
    })

    test('Expect stack to not be Empty', () => {
        expect(Stack.isEmpty()).toBe(false);
    })

     test('Expect stack to  be Empty', () => {
        Stack.getElement();
        expect(Stack.isEmpty()).toBe(true);
    })
})