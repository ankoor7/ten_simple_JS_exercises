"use strict";

// debugging functions
function log(output) {
    console.log(output);
}

function test(name, assertion) {
    if (assertion) {
        log("      passed " + name + " test");
    } else {
        log("    FAILED " + name + " test");
    }
}

// Max function for 2 numbers
function max(a, b) {
    if ((isNaN(a) || isNaN(b)) || arguments.length !== 2) {
        return "incorrect input";
    }

    return (a > b) ? a : b;

}

function maxOfThree(a, b, c) {
    return max(max(a,b), c);
}


// Tests for max()
log("The max() function:");
test("last arguement is maximum", max(9,10) === 10);
test("first arguement is maximum", max(9,8) === 9 );
test("arguements must be numbers", max('a',9) === "incorrect input");
test("only two arguements are passed", max(9,8,6) === "incorrect input");

// Tests for maxOfThree()
log("The maxOfThree() function: ");
test("finding the maximum", maxOfThree(1,2,3) === 3);
test("handling the correct input", (maxOfThree(1,'a',3) && maxOfThree(1,2,'c')) === "incorrect input");

