/**
 * Implemementation of a LinkedList
 */

class Link {
  constructor(id, data) {
    if (id && data) {
      this.iData = id;
      this.dData = data;
      this.next = null;
    } else {
      throw new Error("Missing id or data to create Link");
    }
  }

  displayLink() {
    console.log(`{ ${this.iData}, ${this.dData}, next:${this.next} }`);
  }
}

class LinkedList {
  constructor() {
    this.first = null;
  }

  isEmpty() {
    return this.first === null;
  }

  insertFirst(id, data) {
    this.newLink = new Link(id, data);
    this.newLink.next = this.first;
    this.first = this.newLink;
  }

  deleteFirst() {
    //TODO: delete link from memory
    const temp = { iData: this.first.iData, dData: this.first.dData };
    this.first = this.first.next;
    return temp; //return the deleted link
  }

  displayList() {
    console.log("First--> Last");
    let current = this.first;
    while (current) {
      current.displayLink();
      current = current.next;
    }
    console.log("done");
  }

  find(key) {
    if (!this.isEmpty()) {
      let current = this.first;
      while (current.iData !== key) {
        if (current.next === null) {
          //Check if we are at the end of list
          return null;
        } else {
          current = current.next;
        }
      }
      //We found the item
      return { iData: current.iData, dData: current.dData };
    } else {
      return null;
    }
  }

  delete(key) {
    let current = this.first;
    let previous = this.first;

    if (!this.isEmpty()) {
      while (current.iData !== key) {
        if (current.next === null) {
          //Did not find key
          return null;
        } else {
          //Go to next link
          previous = current;
          current = current.next;
        }
      }
      //If it is the first link change it, otherwise bypass it
      if (current === this.first) this.first = this.first.next;
      else previous.next = current.next;

      //Return deleted item
      return { iData: current.iData, dData: current.dData };
    } else {
      return null;
    }
  }
}

module.exports.LinkedList = LinkedList;
