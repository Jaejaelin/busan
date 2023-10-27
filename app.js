const nav_icon = document.querySelector('.nav_icon');
const nav_menu = document.querySelector('.nav_menu');

nav_icon.addEventListener('click', ()=>{
    nav_menu.classList.toggle('active');
});

