import { assert } from "chai";
import reduce from "../src/reduce.js";

describe("reduce", () => {

    // TC6001
    it("TC6001: Test with a simple function and a negative accumulator, should return 1", () => {
        const ar = [-0, 'foo', 3.14, 'bar', NaN];
        assert.equal(reduce(ar, (sum, x) => sum + (typeof(x) === 'number'), -2), 1);
    });

    // TC6002
    it("TC6002: Test with an array as the accumulator, should return [5, 3.14]", () => {
        const ar = [5, 0, 3.14, -5];
        const expOutput = [5, 3.14];
        assert.deepEqual(reduce(ar, (result, x) => {
            if (x > 0)
                result.push(x);
            return result;
        }, []), expOutput);
    });

    // TC6003
    // There was an error in the test case, used both 'word' and 'w' as keys, when only one of them was intended
    it("TC6003: Test with objects and default accumulator, should return {'w': 'lorum ipsum dolor sit'}", () => {
        const ar = [{'w': 'lorum'}, {'w': 'ipsum'}, {'w': 'dolor'}, {'w': 'sit'}];
        const expOutput = {'w': 'lorum ipsum dolor sit'};
        assert.deepEqual(reduce(ar, (result, x) => {
            result.w += ' ' + x.w;
            return result;
        }), expOutput);
    });

});