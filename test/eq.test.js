import { assert } from "chai";
import eq from "../src/eq.js";

describe("eq", () => {
  it("TC2001: Should return true with number and string representing that number", () => {
    assert.equal(eq(5, "5"), true);
  });
  it("TC2002: Should return false with different objects containing same values", () => {
    const o1 = { a: 0, b: 3.14 };
    const o2 = { a: 0, b: 3.14 };
    assert.equal(eq(o1, o2), false);
  });
  it("TC2003: Should return true with unidentified, null, NaN", () => {
    assert.equal(eq(NaN, NaN), true);
    assert.equal(eq(null, null), true);
    assert.equal(eq(undefined, undefined), true);
  });
  it("TC2004: Should return false with different arrays containing same values", () => {
    assert.equal(eq(["foo", 0, null], ["foo", 0, null]), false);
  });
  it("TC2005: Should return true with same function return value as both parameters", () => {
    const func = () => {};
    assert.equal(eq(func(), func()), true);
  });
});
