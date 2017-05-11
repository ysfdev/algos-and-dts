/**
 * Implementation for a Binary Search Tree
 * 
 */

class Node {
    constructor (id = null, data = null, leftChild = null, rightChild = null) {
        this.id = id;
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    displayNode() {
        console.log(`Node ID: ${this.id}`);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(id, data) {
        const newNode = new Node(id, data);

        if (this.root === null) this.root = newNode;
        else {
            let current = this.root; // start at the root;
            let parent;
            while(true) {
                parent = current;
                if (id < current.id) { //go left
                    current = current.leftChild;
                    if (current === null) {
                        parent.leftChild = newNode; //insert node on left
                        return;
                    }
                } else { //go right
                    current = current.rightChild;
                    if (current === null) {
                        parent.rightChild = newNode; //insert node on rihgt
                        return;
                    }
                }
            }
        }
    }

    find(key) {
        let current = this.root;

        while(current.id !== key) {
            if (key < current.id) current = current.leftChild; //Check if it is on the left side
            else current = current.rightChild;

            if (current === null) return null;
        }
        return current; //we found the node;
    }

    traverse(orderType = "inOrder") {
        switch (orderType) {
            case "preOrder":
                this.traversePreOrder(this.root);
                break;
            case "inOrder":
                this.traverseInOrder(this.root);
                break;
            case "postOrder":
                this.traversePostOrder(this.root);
                break;
            default:
                console.log('Invalid traversing order Type');
        }
    }

     traversePreOrder(localRoot) {
        if (localRoot !== null) {
            localRoot.displayNode();
            this.traverseInOrder(localRoot.leftChild);
            this.traverseInOrder(localRoot.rightChild);
        }
    }

    traverseInOrder(localRoot) {
        if (localRoot !== null) {
            this.traverseInOrder(localRoot.leftChild);
            localRoot.displayNode();
            this.traverseInOrder(localRoot.rightChild);
        }
    }

     traversePostOrder(localRoot) {
        if (localRoot !== null) {
            this.traverseInOrder(localRoot.leftChild);
            this.traverseInOrder(localRoot.rightChild);
            localRoot.displayNode();
        }
    }
}

module.exports.Tree = Tree;