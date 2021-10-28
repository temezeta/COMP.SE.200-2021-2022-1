import { assert } from "chai";
import toString from "../src/toString.js";

describe("toString", () => {
  it("TC0001: Should return empty string with null", () => {
    assert.equal(toString(null), "");
  });
  it("TC0002: Should return exact value with string", () => {
    assert.equal(toString("foo"), "foo");
  });
  it("TC0003: Should return string containing input integer", () => {
    assert.equal(toString(-314159), "-314159");
  });
  it("TC0004: Should return string containing input float", () => {
    assert.equal(toString(3.14159), "3.14159");
  });
  it("TC0005: Should return empty string with empty array input", () => {
    assert.equal(toString([]), "");
  });
  it("TC0006: Should return string with all input array items separated by comma", () => {
    assert.equal(toString([5, "foo", -3.14]), "5,foo,-3.14");
  });
  it("TC0007: Should return default Symbol.toString with Symbols", () => {
    const sym = Symbol("foo");
    assert.equal(toString(sym), sym.toString());
  });
  it("TC0008: Should return default object.toString with objects", () => {
    const obj = { foo: "bar", num: 3.14 };
    assert.equal(toString(obj), obj.toString());
  });
  it("TC0009: Should return -Infinity with fraction -0 as denominator", () => {
    assert.equal(toString(-5 / 0), "-Infinity");
  });
});
