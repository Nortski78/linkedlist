import { Node } from "./node.js";

export function LinkedList() {

    let headNode = null;
    let length = 0;

    // Append works because obj names are references to javascript objects
    function append(value) {
        const newNode = Node(value);       

        if ( headNode === null ) return (headNode = newNode);

        let pointer = headNode;
        
        while (pointer.getNextNode() !== null) {
            pointer = pointer.getNextNode();
        }

        pointer.setNextNode(newNode);
        length++;
    }

    function prepend(value) {
        const newNode = Node(value);

        if ( headNode === null ) return (headNode = newNode);

        const temp = headNode;
        headNode = newNode;
        headNode.setNextNode(temp);
        length--;
    }
    
    function size() {
        return length;
    }

    function head() {
        if(!headNode) return null;
        return headNode.getValue();
    }

    function tail() {
        if(!headNode) return null;

        let pointer = headNode;
        while(pointer.getNextNode() !== null) {
            pointer = pointer.getNextNode();
        }
        return pointer.getValue();
    }
    
    function at(pos) {

    }
    function pop() {

    }
    function contains() {

    }
    function find(val) {

    }

    const toString = () => {
        if (!headNode) return null;
        
        let pointer = headNode;
        let result = "";

        while (pointer.getNextNode() !== null) {
            result = result.concat(`( ${pointer.getValue()} ) --> `);
            pointer = pointer.getNextNode();
        }

        // for the tail
        result = result.concat(`( ${pointer.getValue()} ) --> ${pointer.getNextNode()}`);
        return console.log(result);
      }; 

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, };
}