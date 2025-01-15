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

  get head(){
    return this.head.value;
  }   

  get size(){
    let length = 0;
    if(this.head == null){
        return length;
    }else{
        let temp = this.head;
        while(temp.next != null){
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
}
