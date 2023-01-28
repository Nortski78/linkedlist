import { Node } from "./node.js";

export function LinkedList() {

    let headNode = null;
    let length = 0;

    // Append works because obj names are references to javascript objects
    function append(value) {
        const newNode = Node(value);      
        length ++; 

        if ( headNode === null ) return (headNode = newNode);

        let pointer = headNode;
        
        while (pointer.getNextNode() !== null) {
            pointer = pointer.getNextNode();
        }

        pointer.setNextNode(newNode);
    }

    function prepend(value) {
        const newNode = Node(value);
        length++;

        if ( headNode === null ) return (headNode = newNode);

        const temp = headNode;
        headNode = newNode;
        headNode.setNextNode(temp);
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
        if (!headNode) return null;
        if (pos >= length) return "Out of bounds";

        let pointer = headNode;
        for(let i = 0; i < pos; i++) {
            pointer = pointer.getNextNode();
        }
        return pointer.getValue();
    }

    function pop() {
        if(!headNode) return null
        if(length === 1) return headNode = null;

        let pointer = headNode;
        for(let i = 0; i < length - 2; ++i) {
            pointer = pointer.getNextNode();
        }
        pointer.setNextNode(null);
        length--;
    }

    function contains(val) {
        if(!headNode) return false;

        let pointer = headNode;
        for(let i = 0; i < length; ++i) {
            if(pointer.getValue() === val) return true;
            pointer = pointer.getNextNode();
        }

        return false;
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
        return result;
      }; 

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, };
}