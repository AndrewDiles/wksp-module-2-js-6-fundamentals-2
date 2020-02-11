let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    let sum = 0;
    if (arr.length === 0) return 0;
    else {
        for (i=0; i<arr.length; i++) {
        if (arr[i]<= 0 || arr[i] > 0) {sum += arr[i]}
        }
    }
    return sum;
}

// Test cases
let inputs = [[1,2,3,4], [2,-1,-1], [], [10,10,10,10,10,10], ['hmm', 2, 3]];
let outputs = [10, 0, 0, 60, 5];

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
