import { assert } from "chai";
import countBy from "../src/countBy.js";

describe("countBy", () => {

    // TC7001
    it("TC7001: Test with an array and a simple operation, should return {number: 2, object: 1, string: 1}", () => {
        const ar = ['foo', 0, -3.14, {}];
        const expOutput = {number: 2, object: 1, string: 1};
        assert.deepEqual(countBy(ar, (x) => typeof(x)), expOutput);
    });

    // TC7002
    it("TC7002: Test with an empty collection, should return an empty object", () => {
        assert.deepEqual(countBy([], (x) => x >= 0), {});
    });

    // TC7003
    // Missing quotes in original test case around the key '0,1,2'
    it("TC7003: Test with various objects, should return {'0,1,2': 1, foo: 1, undefined: 2}", () => {
        const objs = [
            {'id': 0, 'data': 'foo'},
            {'id': 1},
            {'id': 2, 'data': [0,1,2]},
            {'id': 3, 'data': undefined}
        ]
        const expOutput = {'0,1,2': 1, foo: 1, undefined: 2};
        assert.deepEqual(countBy(objs, (x) => x.data), expOutput);
    });

});