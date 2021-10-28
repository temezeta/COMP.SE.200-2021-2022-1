import { assert } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
  it("TC3001: Should return exact string with first letter capitalized", () => {
    assert.equal(
      upperFirst("lOreM ipsUm dolor sit amet, conSEctetur AdipiscI elit."),
      "LOreM ipsUm dolor sit amet, conSEctetur AdipiscI elit."
    );
  });
  it("TC3002: Should return empty string with empty string, null and undefined", () => {
    assert.equal(upperFirst(""), "");
    assert.equal(upperFirst(null), "");
    assert.equal(upperFirst(undefined), "");
  });
  it("TC3003: Should return exact string if already capitalized", () => {
    assert.equal(upperFirst("Foo"), "Foo");
  });
  it("TC3004: Should return exact string if string contains only special symbols", () => {
    assert.equal(upperFirst("@<_?"), "@<_?");
  });
});
