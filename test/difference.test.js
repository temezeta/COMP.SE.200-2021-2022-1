import { assert } from "chai";
import difference from "../src/difference.js";

describe("difference", () => {
  it("TC4001: Should return differences when array contains multiple variable types", () => {
    const input1 = ["foo", 3.14, null, 0, { a: 1 }];
    const input2 = [null, "foo", 5, { a: 1 }, 3.14, "bar"];

    const expOutput = [0, { a: 1 }];
    assert.deepEqual(difference(input1, input2), expOutput);
  });
  it("TC4002: Should return difference with multiple variables in spread operator", () => {
    assert.deepEqual(
      difference([-0, 0, NaN], -0, 5, ["foo", [NaN, "bar"]]),
      []
    );
  });
  it("TC4003: Should return empty array with empty arrays", () => {
    assert.deepEqual(difference([], [], 0), []);
  });
});
