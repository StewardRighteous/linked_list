class Node {
  value = null;
  next = null;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;

  get head() {
    if (this.head == null) {
      return this.head;
    }
    return this.head.value;
  }

  get tail() {
    if (this.head == null) {
      return this.head;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      return temp.value;
    }
  }

  get size() {
    let length = 0;
    if (this.head == null) {
      return length;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        length++;
        temp = temp.next;
      }
      return length;
    }
  }

  append(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new Node(value, null);
      this.head = temp;
    }
  }

  prepend(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let temp = new Node(value, this.head);
      this.head = temp;
    }
  }

  at(index) {
    if (this.size < index) {
      return new Error("The Index is out of bound to the entered values");
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp.value;
    }
  }

  pop() {
    if (this.head == null) {
      return new Error("There exists no element to pop");
    } else {
      let temp = this.head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      temp.next = null;
      this.head = temp;
    }
  }

  contains(value) {
    if (this.head == null) {
      return false;
    } else {
      let contains = false;
      let temp = this.head;
      while (temp.next != null) {
        if (temp.value == value) {
          contains = true;
        }
        temp = temp.next;
      }
      return contains;
    }
  }
}
