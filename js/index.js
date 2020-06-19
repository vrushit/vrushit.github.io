
window.addEventListener('load', () => {

    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');

    const display = document.querySelector(".display");
    display.style.display = "inline";
    
    window.onload = function() {
        //considering there aren't any hashes in the urls already
        if(!window.location.hash) {
            //setting window location
            window.location = window.location + '#loaded';
            //using reload() method to reload web page
            window.location.reload();
        }
    }


});




// document.onreadystatechange = function(){
//     if(document.readyState === 'complete'){
//         location.reload();
//     }
// }