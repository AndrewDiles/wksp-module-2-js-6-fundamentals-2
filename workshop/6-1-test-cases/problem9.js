let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
    let result = '';
    if (str.length === 0) return '';
    else {
        let strsplit = str.split(" ");
        console.log(strsplit);
        result = strsplit[0];
        console.log(result);
        console.log(strsplit.length-1);
        for (i=0; i<(strsplit.length-1); i++) {
            if (result.length <= strsplit[i+1].length) {
                console.log(i);
                console.log(result);
                console.log(strsplit[i+1]);
                result = strsplit[i+1];}
            else {
                console.log(i);
                console.log(result);
                console.log(strsplit[i+1]);
                console.log('not long enough');}
        }
    }
    return result;
}

// Test cases
let inputs = ["hide ho Mr Winslow", '', 'mister master get this off me', 'brave the elements', 'overwhelming fog begets your will'];
let outputs = ['Winslow', '', 'master', 'elements', 'overwhelming'];

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
