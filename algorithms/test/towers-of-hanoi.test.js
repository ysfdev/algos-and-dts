const Towers = require("../towers-of-hanoi").Towers;

describe("Towers of Hanoi Test", () => {
  const towers = new Towers({ totalDisks: 5, from: "A", inter: "B", to: "C" });
  towers.start();

  test("Should move all disk from tower A to C", () => {
    expect(towers.getTowersContainer()["C"]).toEqual([1, 2, 3, 4, 5]);
  });
});
