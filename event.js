//! There are 2 ways to add event listeners to our projects...
//! STEP 1 <<< Is inside our index.html. This is by inserting the javascript inside our html element which we want to apply the event to.

//! STEP 2 <<< Is by writing it in our javascript file.
//* This is how it goes...
//* 1 >>> element.addEventListener("here goes the event you want e.g clcik", then the function whcih the eevnt should carry out.)
const box3 = document.querySelector('.box-3');
// console.log(box3);

//* Here, we add event listener and inside the scope, we create teh fucntion is should execute
box3.addEventListener('click', () => {
    console.log('javacrsipt is awesome');
})

//* We can decide to create the fucntion outside the event listener scope.
const box2 = document.querySelector('.box-2');

const logBtn = () => console.log('From box2, javascript is great! 😄');

box2.addEventListener('click', logBtn);

const bx3 = document.querySelector('.box-3');


const changeColor = () => {
   bx3.style.backgroundColor = 'green';
}

bx3.addEventListener('mouseover', changeColor);