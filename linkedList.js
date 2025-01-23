class Node {
  value = null;
  next = null;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  _head = null;

  get head() {
    if (this._head == null) {
      return this._head;
    }
    return this._head.value;
  }

  get tail() {
    if (this._head == null) {
      return this._head;
    } else {
      let temp = this._head;
      while (temp.next != null) {
        temp = temp.next;
      }
      return temp.value;
    }
  }

  get size() {
    let length = 0;
    if (this._head == null) {
      return length;
    } else {
      let temp = this._head;
      while (temp.next != null) {
        length++;
        temp = temp.next;
      }
      length++; //Last element with null
      return length;
    }
  }

  append(value) {
    if (this._head == null) {
      this._head = new Node(value, null);
    } else {
      let temp = this._head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new Node(value, null);
    }
  }

  prepend(value) {
    if (this._head == null) {
      this._head = new Node(value, null);
    } else {
      let temp = new Node(value, this._head);
    }
  }

  at(index) {
    if (this.size < index && index >= 0) {
      return new Error("The Index is out of bound to the entered values");
    } else {
      let temp = this._head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp.value;
    }
  }

  pop() {
    if (this._head == null) {
      return new Error("There exists no element to pop");
    } else {
      let temp = this._head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      temp.next = null;
    }
  }

  contains(value) {
    if (this._head == null) {
      return false;
    } else {
      let contains = false;
      let temp = this._head;
      while (temp.next != null) {
        if (temp.value == value) {
          contains = true;
        }
        temp = temp.next;
      }
      return contains;
    }
  }

  find(value) {
    if (this._head == null) {
      return null;
    } else {
      let temp = this._head;
      let index = 0;
      while (temp.value != value && temp.next != null) {
        index++;
        temp = temp.next;
      }
      if (temp.value == value) {
        return index;
      } else {
        return null;
      }
    }
  }

  toString() {
    let linkedListString = "";
    if (this._head == null) {
      linkedListString = "null";
    } else {
      let temp = this._head;
      while (temp.next != null) {
        linkedListString = linkedListString + `(${temp.value}) ->`;
        temp = temp.next;
      }
      linkedListString = linkedListString + `(${temp.value}) -> null`;
    }
    return linkedListString;
  }

  insertAt(value, index) {
    if (this.size <= index && index >= 0) {
      return new Error(
        "The Index value is out of bound for the existing values"
      );
    } else {
      let temp = this._head;
      let previousNode;
      for (let i = 0; i < index; i++) {
        previousNode = temp;
        temp = temp.next;
      }
      let newNode = new Node(value, temp);
      previousNode.next = newNode;
    }
  }

  removeAt(index) {
    if (this.size < index && index >= 0) {
      return new Error(
        "The Index value is out of bound for the existing values"
      );
    } else {
      let temp = this._head;
      let previousNode;
      for (let i = 0; i < index; i++) {
        previousNode = temp;
        temp = temp.next;
      }
      previousNode.next = temp.next;
    }
  }
}
