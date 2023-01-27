import { LinkedList } from "./linkedlist.js";

let list = LinkedList();

list.append(100);
list.append(200);
list.append(300);
console.log(list.toString());

list.prepend(400);
console.log(list.toString());
list.prepend(50);
console.log(list.toString());

console.log(list.head());
console.log(list.tail());
console.log(list.at(5));
console.log(list.size());

list.pop();
console.log(list.toString());
list.pop();
console.log(list.toString());