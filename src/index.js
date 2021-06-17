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
