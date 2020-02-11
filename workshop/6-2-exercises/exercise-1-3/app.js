// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const reset = document.getElementById('reset');
const buttonarr = [button1, button2, button3, button4];
const buttons = document.getElementById('btn-list');

buttonarr.forEach(element => {element.style.backgroundColor = 'gold';});
reset.style.backgroundColor = 'red';

const modularfunction = function() {
    switch (event.target) {
        case button1:
            if (button1.style.opacity === '0') {button1.style.opacity = '1';}
            else button1.style.opacity = '0';
            break;
        case button2:
            if (button2.style.backgroundColor === "gold") {button2.style.backgroundColor = 'crimson';}
            else if (button2.style.backgroundColor === "crimson") {button2.style.backgroundColor = "gold";}
            break;
        case button3:
            if (button3.style.backgroundColor === "gold") {button3.style.backgroundColor = 'skyblue';}
            else if (button3.style.backgroundColor === "skyblue") {button3.style.backgroundColor = "gold";}
            break;
        case button4:
            if(button4.classList == 'jitters') {button4.classList.remove('jitters');}
            else if (button4.classList == '') {button4.classList.add('jitters');}
            break;
        case reset:
            factoryReset();
            break;
    }
}

const factoryReset = function() {
    button1.style.opacity = '1';
    button2.style.backgroundColor = "gold";
    button3.style.backgroundColor = "gold";
    button4.classList.remove('jitters');
}

buttons.addEventListener('click', modularfunction)