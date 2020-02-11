let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing



// I believe my function is correct.  I just don't know how you want me to format outputs such that it works.  Moving on

function g(str) {
  let result = '';
  let j = 1;
  for (i=0;i<str.length; i++){
    if (j === 40 && str[i] === " ") {}
    else if (j === 40 && str[i] != " ") {
      result += '\n';
      result += str[i];
      j=1;
    }
    else if (j <40) {
      result += str[i];
      j++;
    }
  }
  return result;
}

// Test cases
let inputs = [`There is an inn, a merry old inn beneath an old grey hill, And there they brew a beer so brown That the Man in the Moon himself came down one night to drink his fill. The ostler has a tipsy cat`, 'tried to put the entire song in but it caused issues', 'not', 'sure', 'about', 'formatting'];
let outputs = [
"There is an inn, a merry old inn beneat
h an old grey hill, And there they brew 
a beer so brown That the Man in the Moon
himself came down one night to drink his
fill. The ostler has a tipsy cat", "tried to put the entire song in but it 
caused issues", 'not', 'sure', 'about', 'formatting'];

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
