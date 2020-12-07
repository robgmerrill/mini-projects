// target progress for setting the width
// target prev button
// target next button
// target the collection of circles

// set current active to 1

// put event listener on next button
    // increate current active by 1
        // set cap is current active is greater than the length of circles
    // call update function

// put event listener on prev button
    // decrement current active by one
    // if current actice is less than 1 set value to 1
    // call update function


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