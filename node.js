export function Node(val) {

    let value = val;
    let nextNode = null;

    function changeValue(val) {
        value = val;
    }

    function getValue() {
        return value;
    }

    function getNextNode() {
        return nextNode;
    }

    function setNextNode(val) {
        nextNode = val;
    }

    return { changeValue, getValue, getNextNode, setNextNode };
}