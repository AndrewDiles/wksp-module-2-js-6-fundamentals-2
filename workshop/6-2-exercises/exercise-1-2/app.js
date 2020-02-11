// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

// It okay that I don't use a toggle?

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const buttonarr = [button1, button2, button3, button4];
const buttons = document.getElementById('btn-list');

buttonarr.forEach(element => {element.style.backgroundColor = 'gold';});

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
    }
}

buttons.addEventListener('click', modularfunction)