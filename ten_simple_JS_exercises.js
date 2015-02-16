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

// Max function for 2 numbers
function max(a, b) {
  if ((isNaN(a) || isNaN(b)) || arguments.length !== 2) {
    return errorStatement;
  }
  return (a > b) ? a : b;
}

function maxOfThree(a, b, c) {
  return max(max(a,b), c);
}

function isVowel(letter) {
  if (!(typeof arguments[0] === 'string' && arguments[0].length === 1)) {
    return errorStatement;
  }
  return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1;
}

function translate (text) {
  return text.split("").map(translateLetter).join("");
}

function translateLetter(x) {
  return (isVowel(x) || x === ' ') ? x : x + 'o' + x;
}


//Tests for max()
log("The max() function:");
test("last arguement is maximum", max(9,10) === 10);
test("first arguement is maximum", max(9,8) === 9 );
test("arguements must be numbers", max('a',9) === errorStatement);
test("only two arguements are passed", max(9,8,6) === errorStatement);

// Tests for maxOfThree()
log("The maxOfThree() function: ");
test("finding the maximum", maxOfThree(1,2,3) === 3);
test("handling the correct input", (maxOfThree(1,'a',3) && maxOfThree(1,2,'c')) === errorStatement);

// Tests isVowel()
log("The isVowel() function:");
test("matches a vowel", isVowel('a') === true);
test('returns false when given a consonant', isVowel('d') === false);
test('handles incorrect input', (isVowel('dasad') && isVowel(['a', 'b'])) === errorStatement);

//  Tests translate()
log("The translate() function:")
test("translates text", translate("this is fun") === "tothohisos isos fofunon")
