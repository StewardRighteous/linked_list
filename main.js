import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.prepend("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size);
console.log(list.head);
console.log(list.tail);
console.log(list.at(2));
console.log(list.contains("dog"));
console.log(list.find("snake"));
console.log(list.toString());

list.pop();
list.insertAt("money", 1);
list.removeAt(2);

console.log(list.toString());
