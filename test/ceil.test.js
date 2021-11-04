import { assert } from "chai";
import ceil from "../src/ceil.js";

describe("ceil", () => {

    // TC9001
    it("TC9001: Test with a simple floating point number and positive precision", () => {
        assert.equal(ceil(13.14159, 2), 13.15);
    });

    // TC9002
    it("TC9002: Test with an integer and positive precision", () => {
        assert.equal(ceil(123, 5), 123.00000);
    });

    // TC9003
    it("TC9003: Test with negative precision", () => {
        assert.equal(ceil(13.14159, -1), 20);
    });

    // TC9004
    it("TC9004: Test with negative precision beyond the size of the number", () => {
        assert.equal(ceil(123, -5), 100000);
    });

});