let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  let arrOfWords = str.split(" ");
  let temp = '';
  let result = '';
  console.log(arrOfWords);
  for (i=0; i<arrOfWords.length; i++){
    temp = ''
    for (j=0; j<arrOfWords[i].length; j++){
      if (j===0){temp+=arrOfWords[i][j].toUpperCase();}
      else {temp+=arrOfWords[i][j].toLowerCase();}
    }
    if (i === arrOfWords.length-1) {result += temp;}
    else result += `${temp} `;
  }
  return result;


  // arrOfWords.forEach(element => {
  //   for (i=1; i<element.length; i++) {
  //     temp += element.split('')[i].toLowerCase();
  //     console.log(temp);
  //   }
  //   element = element.split('')[0].toUpperCase()+temp;
  //   result += element;
  // });

}

f('Hellow over THERE');

// Test cases
let inputs = ["hello OVER tHERE", "I AM VERY content", "intruth THIS is fUN", "the truth", "will set you FREE"];
let outputs = ["Hello Over There", "I Am Very Content", "Intruth This Is Fun", "The Truth", "Will Set You Free"];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
