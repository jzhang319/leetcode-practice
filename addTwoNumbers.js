class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }

add(newNode){
    let node = this.Head;
    if(node==null){
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
}

// let l1 = [2,4,3]
// let l2 = [5,6,4]

// const addTwoNumbers = (l1, l2) => {

// }


// addTwoNumbers(l1, l2)
