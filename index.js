import { LinkedList } from "./linkedlist.js";

let list = LinkedList();

list.append(100);
list.append(200);
list.append(300);

list.toString();

list.prepend(400);

list.toString();
list.prepend(50);
list.toString();

console.log(list.head());
console.log(list.tail());