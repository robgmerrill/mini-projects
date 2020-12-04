// create variable that holds all the panels
const panels = document.querySelectorAll('.panel');
console.log(panels)


// loop over all the panels
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // alert("hello"); 
        removeActiveClasses();
        panel.classList.add('active');
        console.log(panels)
    })
})
  // add event listener to each panel
    // call a custom removeActiveClass() function
    // call classList.add() method and add .active

// create removeActiveClasses() function
    // loop over all the panels and call classList.remove() method on each panel removing .active class
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })

}