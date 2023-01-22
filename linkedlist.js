import { Node } from "./node.js";

export function LinkedList() {

    let head = null;
    let length = 0;

    // Append works because obj names are references to javascript objects
    function append(value) {
        const newNode = Node(value);
        length++;

        if ( head === null ) return (head = newNode);

        let pointer = head;
        
        while (pointer.getNextNode() !== null) {
            pointer = pointer.getNextNode();
        }

        pointer.setNextNode(newNode);
    }

    function prepend(node) {
        length--;
    }
    function size() {
        return length;
    }
    /* function head() {

    } */
    function tail() {

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
        if (!head) return null;
        
        let pointer = head;
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