// import CSS
import './style.css';

// import images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g)$/));

/*
const divImg = document.querySelector('.divImg');
const camba = new Image();
camba.src = images['camba.png'];
divImg.appendChild(camba);
*/

// List beers
const myTemplate = require('./partials/beerCards.handlebars');
const ourRequest = new XMLHttpRequest();
ourRequest.open('GET', './beers.json');
ourRequest.onload = () => {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        let data = JSON.parse(ourRequest.responseText);
        createHTML(data);
    }
};
ourRequest.onerror = () => console.log('Connection error');
ourRequest.send();
const createHTML = (beerListData) => {
    const beerContainer = document.getElementById('beerContainer');
    beerContainer.innerHTML = myTemplate(beerListData);
};

// Modal
const modalTemplate = require('./partials/modal.handlebars');
document.addEventListener('DOMContentLoaded', () => {
    const div = document.createElement('div');
    div.innerHTML = modalTemplate();
    document.body.appendChild(div);
});

//const myModal = document.querySelector('.myModal');
//myModal.addEventListener('click', () => {
//    const featherWindow = document.querySelector('.featherlight-content');
//    featherWindow.classList.add('bottom-0', 'transition', 'duration-600', 'ease-in-out');
//});

$('.myModal').click(function() {
    $('.featherlight-content').animate({ 'bottom': '+=800px' }, 'slow' );
});

//$('.myModal').click(function() {$('.featherlight-content').animate({ 'bottom': '-=800px' }, 'slow' );});

//$('myModal').click(function() {
//    $('.featherlight-content').animate({ 'bottom': '-=800px' }, 'slow' );
//});
