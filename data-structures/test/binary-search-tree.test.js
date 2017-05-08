const Tree = require('../binary-search-tree').Tree;

describe('binarySearchTree Test', () => {
    const binarySearchTree = new Tree();

    binarySearchTree.insert(1, {name: "Yeramin", title: "Software Engineer"});
    binarySearchTree.insert(4, {name: "Mark", title: "Product Manager"});
    binarySearchTree.insert(3, {name: "Jenn", title: "Consultant"});

    test('Should find correct node', () => {
        const foundEmployee = binarySearchTree.find(4);
        //binarySearchTree.traverse();
        expect(foundEmployee.data.name).toEqual('Mark');
    })
});