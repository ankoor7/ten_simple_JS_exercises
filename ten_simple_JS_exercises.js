"use strict";

// debugging functions
var debugging = true;
var debugVerbose = true;
function log(output) {
  console.log(output);
}

function test(name, assertion) {
  if (assertion) {
    if (debugVerbose) { log("      passed " + name + " test"); }
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
  });
}

//  Q 6
function reverse (text) {
  var result = '';
  for (var i = text.length - 1; i >= 0; i--) {
    result = result + text[i];
  }
  return result;
}

// Q 7
function toSwedish (greeting) {
  var dictionary = {
    "merry":"god",
    "christmas":"jul",
    "and":"och",
    "happy": "gott",
    "new":"nytt",
    "year":"år"
  };
  return greeting.split(/\s/)
      .map( function(a) {
        return dictionary[a];
      })
      .filter(function(word) {
        return (word !== undefined && word.length !== 0);
      })
      .join(' ');

}

// Q 8
function findLongestWord (words) {
    return words.reduce( function(previousWord, currentWord) {
      return (previousWord.length > currentWord.length) ? previousWord : currentWord;
    });
}

// Q9
function filterLongWords (words, minimumLength) {
  return  words.filter( function(word) {
    return (word.length > minimumLength)
  });
}


if (debugging) {
  var answer;
  log("Testing, ...");
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
  log("The translate() function:");
  test("translates text", translate("this is fun") === "tothohisos isos fofunon");

  // Tests for 5, sum()
  log("The sum() function:");
  test("adding numbers correctly", sum([1,2,3,4]) === 10 );
  // Tests for 5, multiply()
  log("The multiply() function:");
  test("mulitiplying numbers correctly", multiply([1,2,3,4]) === 24 );

  // Tests for Q6
  log("The reverse() function:");
  test("reverses a string", reverse("jag testar") === "ratset gaj");

  // Tests for Q7
  log("The toSwedish() function:");
  test("to translate properly", toSwedish("merry christmas and a happy new year") === "god jul och gott nytt år");

  // Tests for Q8
  log("The findLongestWord function");
  test("finds longest word", findLongestWord(['a', 'the', 'maximum', 'small']) === 'maximum');

  // Tests for Q9
  log("The filterLongWords function");
  answer = filterLongWords(['a', 'the', 'maximum', 'small'], 4);
  test("filters words correctly", answer[0] === 'maximum' && answer[1] === 'small' && answer.length === 2);
  answer = null;

  // Tests for Q10
  log("The charFreq function");
  answer = charFreq("abbabcbdbabdbdbabababcbcbab");
  test("counts numbers correctly", (answer.a === 0 && answer.b === 0 && answer.c === 0 && answer.d === 0 ) );
}
