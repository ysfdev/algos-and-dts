/**
 * Solving the Towers of Hanoi Puzzle
 */

class Towers {
    constructor(options) {
        Object.assign(this,options);
    }
    start() {
        this.doTowers(this.totalDisks, this.from, this.inter, this.to)
    }
    doTowers(topN, from, inter, to) {
        if (topN === 1) {
            console.log(`Disk 1 from ${from} to ${to}`);
        } else {
            this.doTowers(topN-1, from, inter, to);
            console.log(`Disk ${topN} from ${from} to ${to}`);
            this.doTowers(topN-1, inter, from, to);
        }
    }
}

const towers = new Towers({totalDisks: 3, from: 'A', inter: 'B', to :'C'});
towers.start()