// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum, div } = require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })
})

describe("Test maths file div function", () => {
    it("should return 0 because first num given is 0", () => {
        const result = div(0,4);
        assert.equal(result, 0, "Result should be 0");
    })

    it("should return 0 because second num given is 0", () => {
        const result = div(4,0);
        assert.equal(result, 0, "Result should be 0");
    })

    it("should return div of two numbers", () => {
        const result = div(4,2);
        assert.equal(result, 2, "Result should be 0");
    })
})