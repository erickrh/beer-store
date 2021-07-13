// Import CSS
import './style.css';

// Import Images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g)$/));


/*

** How to import only one image (This is not in use yet) **

const divImg = document.querySelector('.divImg');
const camba = new Image();
camba.src = images['camba.png'];
divImg.appendChild(camba);

*/


// List Beers

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


// Shop Car Number

let counter = 0;
const addNumber = () => {
    counter += 1;
    console.log(counter);
};

const addNumberFunction = () => {
    const addBtn = document.querySelectorAll('#addBtn');
    for (let i = 0; i < addBtn.length; i++) {
        addBtn[i].addEventListener('click', addNumber);
    }
};

window.onload = () => { addNumberFunction(); };


// Modal

const modalTemplate = require('./partials/modal.handlebars');
document.addEventListener('DOMContentLoaded', () => {
    const div = document.createElement('div');
    div.innerHTML = modalTemplate();
    document.body.appendChild(div);


    // Filter

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
            let mainBeerFilter = [];
            for (let i = 0; i < beerListData.products.length; i++) {
                let beerFilter = beerListData.products.filter(products => products.filterId == filtersValues[i]);
                if (beerFilter[1]) {
                    mainBeerFilter.push(beerFilter);
                }
            }
            let bridge = [];
            for (let i = 0; i < mainBeerFilter.length; i++) {
                for (let z = 0; z < mainBeerFilter[i].length; z++) {
                    bridge.push(mainBeerFilter[i][z]);
                }
            }
            let products = {};
            products.products = bridge;

            if (products.products == false) {
                cleaning();
            } else {
                beerContainer.innerHTML = myTemplate(products);
            }
            addNumberFunction();
        };
    };


    // Operations Buttons

    $('#filtrarBtn').on('click', function () {
        $('.featherlight-close').click();
    });

    const cleaning = () => {
        $('input:checkbox').attr('checked', false);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const grabCheckboxValues = () => {
            let checkboxValues = [];
            checkboxes.forEach((checkbox) => {
                if (checkbox) checkboxValues.push(checkbox.value);
            });
            return checkboxValues;
        };
        filterFunction(grabCheckboxValues());
    };
    $('#btnClean').click(function () { cleaning(); });


    // Operation Checkboxes

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
        box.addEventListener('change', () => filterFunction(grabCheckboxValues()));
    });
});


// Filter Effects

const openWindow = () => $('.featherlight-content').animate({ 'bottom': '+=800px' }, '500');
const closeWindow = () => $('.featherlight-content').animate({ 'bottom': '-=800px' }, '500');


// Featherlight Configuration

$.extend($.featherlight.defaults, {
    beforeOpen: () => openWindow(),
    openSpeed: 500,
    beforeClose: () => closeWindow(),
    closeSpeed: 500,
    afterClose: $.featherlight.close(),
    persist: true,
    closeIcon: null,
});
