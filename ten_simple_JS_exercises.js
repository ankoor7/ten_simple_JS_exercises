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


// Answers
var errorStatement = "incorrect input";

//  Q 1
// Max function for 2 numbers
function max(a, b) {
  if ((isNaN(a) || isNaN(b)) || arguments.length !== 2) {
    return errorStatement;
  }
  return (a > b) ? a : b;
}

//  Q 2
function maxOfThree(a, b, c) {
  return max(max(a,b), c);
}

//  Q 3
function isVowel(letter) {
  if (!(typeof arguments[0] === 'string' && arguments[0].length === 1)) {
    return errorStatement;
  }
  return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1;
}

//  Q 4
function translate (text) {
  return text.split("").map(translateLetter).join("");
}

function translateLetter(x) {
  return (isVowel(x) || x === ' ') ? x : x + 'o' + x;
}


//  Q 5
function sum(numbers) {
  return numbers.reduce(function(a, b) {
    return a + b;
  });
}

function multiply(numbers) {
  return numbers.reduce( function(a, b) {
    return a * b;
  })
}

// Tests for 5, sum()
log("The sum() function:");
test("adding numbers correctly", sum([1,2,3,4]) === 10 )
// Tests for 5, multiply()
log("The multiply() function:");
test("mulitiplying numbers correctly", multiply([1,2,3,4]) === 24 )


// //Tests for max()
// log("The max() function:");
// test("last arguement is maximum", max(9,10) === 10);
// test("first arguement is maximum", max(9,8) === 9 );
// test("arguements must be numbers", max('a',9) === errorStatement);
// test("only two arguements are passed", max(9,8,6) === errorStatement);

// // Tests for maxOfThree()
// log("The maxOfThree() function: ");
// test("finding the maximum", maxOfThree(1,2,3) === 3);
// test("handling the correct input", (maxOfThree(1,'a',3) && maxOfThree(1,2,'c')) === errorStatement);

// // Tests isVowel()
// log("The isVowel() function:");
// test("matches a vowel", isVowel('a') === true);
// test('returns false when given a consonant', isVowel('d') === false);
// test('handles incorrect input', (isVowel('dasad') && isVowel(['a', 'b'])) === errorStatement);

// //  Tests translate()
// log("The translate() function:")
// test("translates text", translate("this is fun") === "tothohisos isos fofunon")
