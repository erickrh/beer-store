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

    // Filter

    const filtrarBtn = document.getElementById('filtrarBtn');

    const filterFunction = (filtersValues) => {
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
            let beerFilter = beerListData.products.filter(products => products.filterId == filtersValues);
            let products = {};
            products.products = beerFilter;
            beerContainer.innerHTML = myTemplate(products);
            console.log(products);
        };
    };

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const grabCheckboxValues = () => {
        let checkboxValues = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) checkboxValues.push(checkbox.value);
        });
        return checkboxValues;
    };
    checkboxes.forEach((box) => {
        box.checked = false;
        box.addEventListener('change', () => console.log(grabCheckboxValues()));
        box.addEventListener('change', () => filterFunction(grabCheckboxValues()));
    });
});

const openWindow = () => $('.featherlight-content').animate({ 'bottom': '+=800px' }, '500');
const closeWindow = () => $('.featherlight-content').animate({ 'bottom': '-=800px' }, '500');

$.extend($.featherlight.defaults, {
    beforeOpen: () => openWindow(),
    openSpeed: 500,
    beforeClose: () => closeWindow(),
    closeSpeed: 500,
    afterClose: $.featherlight.close(),
    persist: true
});
