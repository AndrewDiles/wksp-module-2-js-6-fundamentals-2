// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const buttons = document.getElementById('btn-list');

// const button = document.getElementsByTagName('button');

const modularfunction = function() {
    switch (event.target) {
        case button1:
            console.log('1');
            console.log(event)
            button1.style.display = 'none';
            break;
        case button2:
            console.log('2');
            console.log(event)
            button2.style.backgroundColor = 'crimson';
            break;
        case button3:
            console.log('3');
            console.log(event)
            button3.style.backgroundColor = 'skyblue';
            break;
        case button4:
            console.log('4');
            console.log(event)
            button4.classList.add('jitters');
            break;
    }
}




buttons.addEventListener('click', modularfunction)


