// target progress for setting the width
const progress = document.getElementById('progress')
// target prev button
const prev = document.getElementById('prev')
// target next button
const next = document.getElementById('next')
// target the collection of circles
const circles = document.querySelectorAll('.circle')

// set current active to 1
let currentActive = 1;

// put event listener on next button
    // increate current active by 1
        // set cap is current active is greater than the length of circles
    // call update function
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }


    update();
})

// put event listener on prev button
    // decrement current active by one
    // if current actice is less than 1 set value to 1
    // call update function
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();

})


// create update function - called from our prev, next event listeners
    // call forEach on circles with name circle, and index
        // check if index is less than current active
            // if so, add class active
            // if not, remove class active
    // create const actices and select all the .active class
    // set the width of `progress` to a formula that will go from one circle to the next - hint use the lengh of actices and circles 
    // if current active is 1, disable prev button
    // else if current active is equal to the length of circles, disable next button
    // else (neigher of those are true), make sure neither are disabled
function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length  - 1) / (circles.length -1)) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}