const LinkedList = require('../linked-list').LinkedList;

describe('LinkedList List Test', () => {
    const list = new LinkedList();
    list.insertFirst(23, 65.6);
    list.insertFirst(20, 32.98);
    list.insertFirst(32, 54.43);

    //list.displayList();
    test('Should find item with key #23', () => {
        expect(list.find(23)).toEqual({"iData" : 23, "dData" : 65.6})
    })

    test('Should delete item with key #23', () => {
        expect(list.delete(23)).toEqual({"iData" : 23, "dData" : 65.6})
    })

    describe('Delete first', () => {
        const list = new LinkedList();
        list.insertFirst(23, 65.6);

        test('Should delete fist link on list', () => {
            expect(list.deleteFirst()).toEqual({"iData" : 23, "dData": 65.6})
        })
    })
})