/*global console:false */
"use strict";

// debugging functions
function log(output) {
 console.log(output);
}

function test(name, assertion) {
  if (assertion) {
    log("passed " + name + " test");
  } else {
    log("FAILED " + name + " test");
  }
}

// Max function for 2 numbers
function max(a, b) {
  if ((isNaN(a) || isNaN(b)) || arguments.length !== 2) {
    return "incorrect input";
  }

  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Tests for max()
test("last arguement is maximum", max(9,10) === 10);
test("first arguement is maximum", max(9,8) === 9 );
test("arguements must be numbers", max('a',9) === "incorrect input");
test("only two arguements are passed", max(9,8,6) === "incorrect input");