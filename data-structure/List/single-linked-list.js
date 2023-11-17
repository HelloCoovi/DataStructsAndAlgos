class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insertFirst() { }
  insertLast() { }
  insertAt() { }

  removeFirst() { }
  removeLast() { }
  remove() { }

  search() { }
  getSize() {
    return this.size
  }

  isEmpty() {
    return !this.size
  }
}