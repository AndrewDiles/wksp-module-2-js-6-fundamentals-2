let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No


// Funny note here, the reason why it looks like a crazy mess because I solved this 2 ways and couldn't figure out my error
// Turns out weird Al's "A Toyota's a Toyota" isn't a palindrome when you include the '
// Took me an hour to figure that out... :(


function f(str) {

    // console.log(reversearr);
    // console.log(reversearr.join(''));
    // console.log(reversearr.join('').toUpperCase());
    // console.log(reversearr.join('').toUpperCase().replaceAll(' ',''));
    // let a = str.split('').join('');
    // a = a.toUpperCase();
    // let b;
    //     while (a != b){ b = a;
    //         a = a.replace(/\s/,"");
    //     }
        // console.log(a);
        // console.log(reversearr.join('').toUpperCase());

    // console.log(x.split('').reverse().join(''));
    // console.log('a:');
    // console.log(a);
    // console.log(q);
    // console.log(a);
    // console.log(x);


    let splitstr = str.split('');
    let reversearr = splitstr.reverse();
    let x = reversearr.join('').toUpperCase();
    let y;
        while (x != y){ y = x;
            x = x.replace(/\s/,"");
        }
        console.log('x :');
    let q = str.toUpperCase();
    let p;
    while (q != p){ p = q;
        q = q.replace(/\s/,"");
    }
    return (q === x)
    // console.log(str.split('').join('').toUpperCase().replaceAll(' ',''));

    // return ( reversearr.join('').toUpperCase().replaceAll(' ','') === str.split('').join('').toUpperCase().replaceAll(' ','') );
}

// Test cases
let inputs = ["wow", "Do nine men Interpret Nine men I nod", "A Toyotas a Toyota", "fail", "hmmm"];
let outputs = [true, true, true, false, false];

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
