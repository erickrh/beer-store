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

// import svg
function importSvg(r) {
    let imagesSvg = {};
    r.keys().map((item, index) => {
        imagesSvg[item.replace('./', '')] = r(item);
    });
    return imagesSvg;
}
const imagesSvg = importSvg(require.context('./svg', false, /\.(svg)$/));

/*
const divSvg = document.querySelector('.divSvg');
const svgMenu = new Image();
svgMenu.src = imagesSvg['menu.svg'];
divSvg.appendChild(svgMenu);
*/
