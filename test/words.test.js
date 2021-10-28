import { assert } from "chai";
import words from "../src/words.js";

describe("words", () => {

    // TC8001
    it("TC8001: Test with the default pattern, should return ['lorum', 'ipsum', '3', '14', 'dolor', 'sit']", () => {
        const str = 'lorum    ipsum? 3.14! dolor, sit';
        const expOutput = ['lorum', 'ipsum', '3', '14', 'dolor', 'sit'];
        assert.deepEqual(words(str), expOutput);
    });

    // TC8002
    it("TC8002: Test with an empty string, should return an empty array", () => {
        assert.deepEqual(words(''), []);
    });

    // TC8003
    // Should the function be able to handle undefined input? Maybe not. Rework the case?
    it("TC8003: Test with an undefined string, should return an empty array", () => {
        assert.deepEqual(words(undefined), []);
    });

    // TC8004
    // This case should probably be reworked, we had a wrong idea about how the custom regexp would work
    it("TC8004: Test with a custom string as regular expression", () => {
        const str = 'lorum:ipsum::do:lor:sit:';
        const regExp = ':';
        const expOutput = ['lorum', 'ipsum', 'do', 'lor', 'sit'];
        assert.deepEqual(words(str, regExp), expOutput);
    });

});