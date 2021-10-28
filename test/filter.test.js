import { assert } from "chai";
import filter from "../src/filter.js";

describe("filter", () => {

    // TC5001
    it("TC5001: Test with a simple arithmetic function, should return [3.14, 9000]", () => {
        const numbers = [3.14, 0, 9000, -5, NaN, 'foo'];
        const expOutput = [3.14, 9000];
        assert.deepEqual(filter(numbers, (num) => num > 0), expOutput);
    });

    // TC5002
    it("TC5002: Test with an empty array, should return an empty array", () => {
        assert.deepEqual(filter([], (x) => typeof(x) === 'number'), []);
    });

    // TC5003
    it("TC5003: Test with an array of arrays and various other things, should return [['foo', 'bar'], [0, 1, 2], 'foo']", () => {
        const ar = [['foo', 'bar'], [], [0, 1, 2], 0, 'foo'];
        const expOutput = [['foo', 'bar'], [0, 1, 2], 'foo'];
        assert.deepEqual(filter(ar, (x) => x.length), expOutput);
    });

});