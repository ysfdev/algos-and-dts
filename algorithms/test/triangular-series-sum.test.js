const triangularSeriesSum =
  require("../triangular-series-sum").findTriangularSeriesSum;

describe("#triangularSeriesSum() Test", () => {
  test("Expect triangular series sum of 8 to be 36", () => {
    expect(triangularSeriesSum(8)).toEqual(36);
  });

  test("Expect triangular series sum of 20 to be 210", () => {
    expect(triangularSeriesSum(20)).toEqual(210);
  });

  test("Expect triangular series sum Non Integer to be Null", () => {
    expect(triangularSeriesSum("21")).toEqual(null);
  });
});
