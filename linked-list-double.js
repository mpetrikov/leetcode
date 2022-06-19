class Element {
  constructor(value = null, prev = null, next = null) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

class DoubleLinkedList {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Element(value);
      return;
    }

    let currentElement = this.root;
    while (currentElement.next !== null) {
      currentElement = currentElement.next;
    }

    currentElement.next = new Element(value, currentElement);
  }

  print() {
    let currentElement = this.root;
    while (currentElement !== null) {
      console.log(currentElement.value);
      currentElement = currentElement.next;
    }
  }
}

const list = new DoubleLinkedList();
list.add(1);
list.add(3);
list.add(7);
list.add(-1);
list.add(15);
list.print();
