/**
 * Implementation of ShellShort Algorihth
 * Efficiency: O(N*Log N)
 */

class ShellSort {
    constructor(arr) {
        this.array = arr;
        //this.shellSort(arr);
    }

    shellSort() {
        let inner, outer;
        let h = 1;

        //Find the value of h 
        while (h <= this.array.length/3)
            h = (h * 3) + 1;
        
        while (h > 0) {
            //console.log('h =', h);
            for (outer = h; outer < this.array.length; outer++) {
                let temp = this.array[outer];
                inner = outer;

                while(inner > h -1 && this.array[inner -h] >= temp) {
                    this.array[inner] = this.array[inner -h];
                    inner -= h;
                }

                this.array[inner] = temp;
            }
            //decrease h 
            h = (h -1) / 3;
        }
    }

    getSortedArray() {
        return this.array;
    }
}

module.exports.ShellSort = ShellSort;