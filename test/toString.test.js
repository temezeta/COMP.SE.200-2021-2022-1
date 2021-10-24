import { assert } from "chai";
import toString from "../src/toString.js";

describe("toString", () => {
  it("Should return empty string with null", () => {
    assert.equal(null, "");
  });
  it("Should return exact value with string", () => {
    assert.equal(toString("foo"), "foo");
  });
});
