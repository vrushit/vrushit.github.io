// document.addEventListener("DOMContentLoaded", ()=>{
//     alert("Windows Loaded");
// });

//Preloader

window.addEventListener('load', () => {

    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');

});

window.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector(".display");
    display.style.display= 'inline';
});