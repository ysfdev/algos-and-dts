/**
 * Test HashTable functionality 
 */

const HashTable = require('../hashtable').HashTable;
const DataItem = require('../hashtable').DataItem;

describe('HasTable tests', () => {
    const hTable = new HashTable();
    const maxValue = 10;
    let randomKey = 0;

    //generate 10 random values up to maxValue
    for(let i = 0; i < 10; i++) {
        randomKey = Math.floor(Math.random() * (maxValue - 1) + 1);
        let dItem = new DataItem(randomKey);
        hTable.insert(dItem);
    }
    test('Should have 10 data items on table', () => {
        expect(hTable.getTable().length).toEqual(10);
    })

    test('Should find correct key data', () => {
        expect(hTable.find(randomKey).getKey()).toEqual(randomKey);
    })

    test('Should delete key from table', () => {
        expect(hTable.delete(randomKey).getKey()).toEqual(randomKey);
        expect(hTable.getTable().length).toEqual(9);
    })
})