// create variable that holds all the panels
const panels = document.querySelectorAll(".panel");
console.log(panels)

// loop over all the panels
  // add event listener to each panel
    // call a custom removeActiveClass() function
    // call classList.add() method and add .active
panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener('click', () => {
      console.log("123")
      removeActiveClasses();
      panel.classList.add('active');
  })
})

// create removeActiveClasses() function
    // loop over all the panels and call classList.remove() method on each panel removing .active class
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}