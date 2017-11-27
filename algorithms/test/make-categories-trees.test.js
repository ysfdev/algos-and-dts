const makeTree = require('../make-categories-tree').makeTree;

describe('Make Categories Tree ', () => {
    let beltCategories = [
        {id: 'black', parent: null},
        {id: 'first_dan', parent: 'black'},
        {id: 'second_dan', parent: 'black'},
        {id: 'junior_black', parent: 'black'},
        {id: 'high_red', parent: 'junior_black'},
        {id: 'red', parent: 'high_red'},
        {id: 'high_blue', parent: 'red'},
        {id: 'blue', parent: 'high_blue'},
        {id: 'high_green', parent: 'blue'},
        {id: 'green', parent: 'high_green'},
        {id: 'high_yellow', parent: 'green'},
        {id: 'yellow', parent: 'high_yellow'},
        {id: 'high_white', parent: 'yellow'},
        {id: 'white', parent: 'high_white'},
    ];
    
    let expectedOutput = {
            "black": {
              "first_dan": null,
              "second_dan": null,
              "junior_black": {
                "high_red": {
                  "red": {
                    "high_blue": {
                      "blue": {
                        "high_green": {
                          "green": {
                            "high_yellow": {
                              "yellow": {
                                "high_white": {
                                  "white": null
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
        }
    
    test('Should create belts categories tree', () => {
        // console.log(JSON.stringify(makeTree(beltCategories), null, 2));
        expect(makeTree(beltCategories)).toEqual(expectedOutput);
    })
})