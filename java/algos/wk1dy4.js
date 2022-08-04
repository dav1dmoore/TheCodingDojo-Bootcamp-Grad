
class SLL {
    constructor(){
        this.head = null;
    }

    isEmpty(){
        if(this.head == null){
            return true;
        } return false;
    }

    inserAtFront(valueInput){
        let item = new Node(valueInput);
        item.next = this.head;
        this.head = item;
        }

    insertAtBack(valueInput){
        let item = new Node(valueInput);
        if(this.isEmpty()){
            this.head = item;
        } else {
            let nextItem = this.head;
            while(nextItem.next != null){ nextItem = nextItem.next}
            nextItem.next = item;
        }
    }

    removeFromFront(valueInput){
        if(!this.isEmpty()){
            this.head = this.head.next;
        } return;
    }


    display(){
        if (this.isEmpty()){
            console.log('This list is empty');
        } else {
            let runner = this.head;
            console.log('This node: ' + runner.value);
            while(runner.next){
                runner = runner.next;
                console.log('This node: ' + runner.value)
            }
        }
    }

    seedFromArray(arr){
        // * Calls insertAtBack on each item of the given array.
        // * - Time: O(n * m) n = list length, m = arr.length.
        // * - Space: O(1) constant.
        // * @param {Array<any>} vals The data for each new node.
        // * @returns {SinglyLinkedList} This list.
        this.head = null
        for(let item of arr){
            this.insertAtBack(item);
        }
        return 
    }

    toArray(){
        let arr = [];
        if(this.isEmpty()){
            return arr;
        } else {
            let runner = this.head;
            while(runner.next){
                arr.push(runner.value);
                runner = runner.next;
            }
            arr.push(runner.value);
            return arr;
        }
    }

    insertAtBackRecursive(data, runner = this.head){
        if(runner == null){
            runner = new Node(data);
            return runner;
        } elseif(runner.next == null){
            let node = new Node(data);
            runner.next = node;
            return node;
        }
        this.insertAtBackRecursive(data, runner.next)
    }

}


class Node{
    constructor(valueInput){
        this.value = valueInput;
        this.next = null;
    }
}

let chipotleLine = new SLL();
console.log(chipotleLine.isEmpty());
chipotleLine.display();
chipotleLine.insertAtBack('David');
chipotleLine.insertAtBack('Coren');
chipotleLine.insertAtBack('Caleb');
chipotleLine.display();

let newChipotle = new SLL();
let newArr = ['david', 'tom', 'tim']
newChipotle.seedFromArray(newArr);
newChipotle.display();



