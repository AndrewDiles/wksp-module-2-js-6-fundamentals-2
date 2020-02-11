let verifyEquals = require('../../assets/verify-equals');

// Problem 7
// ---------
// Step 1
// - The function input is an array. 
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array. 
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function f(arr) {
    if (arr.length != 2) return undefined;
    else if (arr[1] <= 0) return '';
    else if (!((arr[1])>0)) return undefined;
    else {
        let result = '';
        for (i=0; i<arr[1]; i++){
            result += arr[0];
        }
        return result
    }
    
}

// Step 2
// We need 7 test cases.
// Don't forget to test all of the question parameters

let inputs = [["foo", 3],["", 2], ["hmm", 3, 2], ["yohoho", 4], ["pyo", -1], ['l', 0], ["he", "he"], ['rrr', 2]];
let outputs = ["foofoofoo", "", undefined, "yohohoyohohoyohohoyohoho", "", "", undefined, 'rrrrrr'];


// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
