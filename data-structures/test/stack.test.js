const Stack = require('../stack').Stack;


describe('Stack Tests', () => {
    Stack.addElement(4);
    Stack.addElement(5);

    test('Should return the last element added to stack', () => {
        expect(Stack.getElement()).toBe(5);
    })

    test('Expect stack to not be Empty', () => {
        expect(Stack.isEmpty()).toBe(false);
    })

     test('Expect stack to  be Empty', () => {
        Stack.getElement();
        expect(Stack.isEmpty()).toBe(true);
    })
})