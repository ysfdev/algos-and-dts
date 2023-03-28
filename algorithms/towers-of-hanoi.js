/**
 * Solving the Towers of Hanoi Puzzle
 * Move the disks 'from' tower to distination tower following the towers of Hanoi rules
 * @param {Object} options {totalDisks, from, inter, to}
 */

class Towers {
  constructor(options) {
    Object.assign(this, options);

    this.towersContainer = {};
    this.towersContainer[options.from] = Array.from(
      new Array(options.totalDisks),
      (x, i) => i + 1
    );
    this.towersContainer[options.inter] = [];
    this.towersContainer[options.to] = [];
  }

  getTowersContainer() {
    return this.towersContainer;
  }

  start() {
    this.doTowers(this.totalDisks, this.from, this.inter, this.to);
  }

  doTowers(topN, from, inter, to) {
    if (topN === 1) {
      this.moveDisk(topN, from, to);
    } else {
      this.doTowers(topN - 1, from, inter, to);
      this.moveDisk(topN, from, to);
      this.doTowers(topN - 1, inter, from, to);
    }
  }

  moveDisk(disk, from, to) {
    //find disk
    const diskPosition = this.towersContainer[from].indexOf(disk);

    if (diskPosition !== -1) {
      const diskValue = this.towersContainer[from][diskPosition];
      //move the disk value
      this.towersContainer[to].push(diskValue);
      //remove disk from container
      this.towersContainer[from].splice(diskPosition, 1);
    }
  }
}

module.exports.Towers = Towers;
