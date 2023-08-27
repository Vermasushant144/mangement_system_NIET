// Get references to the loading and main page elements
const loadingPage = document.getElementById('loadingPage');
const mainPage = document.getElementById('mainPage');

// Show the loading page
loadingPage.style.display = 'flex';

// After 5 seconds, hide the loading page and show the main page
setTimeout(() => {
    loadingPage.style.display = 'none';
    mainPage.style.display = 'flex';
}, 1000);
// animation media
function toggleShareMenu(){
    document.getElementsByClassName("share-menu")[0].classList.toggle("active");
  }
  