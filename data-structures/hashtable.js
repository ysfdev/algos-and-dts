/**
 * Implementation of a HashTable with linear probing
 */

class DataItem {
  constructor(iData) {
    this.iData = iData;
  }

  getKey() {
    return this.iData;
  }
}

class HashTable {
  constructor() {
    this.hashArray = [];
    this.nonItem = new DataItem(-1);
  }

  displayTable() {
    console.log("Table: ");
    for (let i = 0; i < this.hashArray.length; i++) {
      if (this.hashArray[i]) {
        console.log(`item: ${this.hashArray[i].getKey()}`);
      } else {
        console.log("** noItem");
      }
    }
  }

  getTable() {
    return this.hashArray;
  }

  hashFunc(key) {
    const arrSize = this.hashArray.length === 0 ? 1 : this.hashArray.length;
    return key % arrSize;
  }

  insert(dItem) {
    const key = dItem.getKey();
    let hashVal = this.hashFunc(key); //hash the key

    while (
      this.hashArray[hashVal] !== undefined &&
      this.hashArray[hashVal].getKey() !== -1
    ) {
      ++hashVal;
    }
    this.hashArray[hashVal] = dItem; //insert item at available position
  }

  delete(key) {
    let hashVal = this.hashFunc(key);

    while (this.hashArray[hashVal] !== undefined) {
      if (this.hashArray[hashVal].getKey() === key) {
        let tmp = this.hashArray[hashVal];
        let iIndex = this.hashArray.indexOf[hashVal];
        this.hashArray.splice(iIndex, 1); // delete item from array;
        return tmp;
      }
      ++hashVal;
    }
    return null;
  }

  find(key) {
    let hashVal = this.hashFunc(key);

    while (this.hashArray[hashVal] !== undefined) {
      if (this.hashArray[hashVal].getKey() === key) {
        return this.hashArray[hashVal];
      }
      ++hashVal;
    }
    return null;
  }
}

module.exports.HashTable = HashTable;
module.exports.DataItem = DataItem;
