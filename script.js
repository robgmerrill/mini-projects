// target open id
const open = document.getElementById('open')
console.log(open)
// target close id
const close = document.getElementById('close');
// target container class
const container = document.querySelector('.container');

// event listener on open that adds show nav class to container
open.addEventListener('click', () => {
    container.classList.add('show-nav');
})


// event listener on close that remove show nav class from container 
close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})