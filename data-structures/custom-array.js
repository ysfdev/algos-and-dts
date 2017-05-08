'use strict';

class DataArray {
  constructor(options) {
    this.Array = [];
    this.maxSize = options.maxSize;
    this.currentSize = 0;
    this.allowDuplicates = options.allowDuplicates;
  }

  getLength() {
    return this.Array.length;
  }

  insertItem(personName) {
    if (this.currentSize < this.maxSize) {
      if (!this.findPerson(personName) && !this.allowDuplicates) {
        this.Array[this.currentSize] = personName;
        this.currentSize++;
        console.log('inserted new person');
        return 'Inserted';
      } else {
        console.log("Cannot insert duplicates");
        return 'No duplicates';
      }
    } else {
      console.log('Max persons allowed on list exceded');
    }
  }

  findPerson(key) {
    let i;
    for (i = 0; i < this.Array.length; i++) {
      if (key === this.Array[i]) {
        break;
      }
     }
      if (i === this.Array.length) {
        return null; //Not found
      } else {
        return i;
      }
    }

    deletePerson(personName) {
      let pIndex = this.findPerson(personName);
      if (pIndex) {
        for (let j = pIndex; j < this.Array.length; j++) {
          this.Array[j] = this.Array[j+1];
        }
        this.currentSize--; //Reduce size;
      } else {
        console.log(personName + 'is not on the list to delete it');
      }
    }

    displayPersonList() {
      if (this.Array.length > 0) {
        console.log('**** PERSONS LIST ***');
        for (let i = 0; i < this.Array.length; i++) {
          console.log(this.Array[i]);
        }
      } else {
        console.log('No persons on list');
      }
    }
}

let myArr = new DataArray({allowDuplicates: false, maxSize : 3});
myArr.insertItem('Mark');
myArr.insertItem('George');
myArr.insertItem('George');
myArr.insertItem('Julia');
myArr.insertItem('Steven');

console.log(myArr.findPerson('Mark'))
myArr.displayPersonList();
myArr.deletePerson('Julia');
myArr.displayPersonList();
