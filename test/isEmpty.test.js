import { assert } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  it("TC1001: Should return true with number", () => {
    assert.equal(isEmpty(3.14), true);
  });
  it("TC1002: Should return true with empty string", () => {
    assert.equal(isEmpty(""), true);
  });
  it("TC1003: Should return false with non-empty string", () => {
    assert.equal(isEmpty("foo"), false);
  });
  it("TC1004: Should return true with empty array", () => {
    assert.equal(isEmpty([]), true);
  });
  it("TC1005: Should return false with non-empty array", () => {
    assert.equal(isEmpty([0]), false);
  });
  it("TC1006: Should return true with empty object", () => {
    assert.equal(isEmpty({}), true);
  });
  it("TC1007: Should return false with non-empty object", () => {
    assert.equal(isEmpty({ foo: "bar" }), false);
  });
  it("TC1008: Should return true with undefined", () => {
    assert.equal(isEmpty(undefined), true);
  });
  it("TC1009: Should return true with empty set", () => {
    const set = new Set();
    assert.equal(isEmpty(set), true);
  });
  it("TC1010: Should return false with non-empty map", () => {
    const map = new Map([
      ["a", 0],
      ["b", 1],
    ]);
    assert.equal(isEmpty(map), false);
  });
  it("TC1011: Should true with null value", () => {
    assert.equal(isEmpty(null), true);
  });
  it("TC1012: Should return true with boolean values", () => {
    assert.equal(isEmpty(true), true);
    assert.equal(isEmpty(false), true);
  });
});
