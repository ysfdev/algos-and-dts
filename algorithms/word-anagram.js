/**
 * Search for anagrams of a word
 * @param {String} word
 */

class WordAnagram {
    constructor(word) {
        this.wordsArr = word.split("");
        this.size = this.wordsArr.length;
        this.totalPermutations = 0;
        this.wordAnagrams = [];

        this.doAnagram(this.size);
    }

    doAnagram(newSize) {
        if (newSize === 1) { //if too small
            return; 
        }

        for (let i = 0; i < newSize; i++) {
            this.doAnagram(newSize-1);
            if (newSize === 2) { //if innermost
                this.appendWord();
            }
            this.rotate(newSize);
        }
    }

    rotate(newSize) {
         let position =  this.size - newSize;
         let temp = this.wordsArr[position];
         let j;
         for (j = position+1; j < this.size; j++) {
             this.wordsArr[j-1] = this.wordsArr[j]; //shift letter to left
         }
         this.wordsArr[j-1] = temp; //Put the first letter on right
    }

    appendWord() {
        let newWord = "";
        //Create new word
        for (let i = 0; i < this.size; i++) {
            newWord  += this.wordsArr[i];  
        }
        //Append the new word to the list
        this.wordAnagrams.push(newWord);
    }
    getAllAnagrams() {
        return this.wordAnagrams;
    }
    getTotalPermutations() {
        return this.wordAnagrams.length;
    }
}

//Get an input word
const input = process.argv[2];

if (input) {
    const anagram = new WordAnagram(input);
    const totalPermutations = anagram.getTotalPermutations();
    //console.log(`Found ${totalPermutations} Permutations for word: '${input}'`);
    //console.log('Anagram Words Found', anagram.getAllAnagrams());
}

module.exports.WordAnagram = WordAnagram;