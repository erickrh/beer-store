// import CSS
import "./style.css";

// import images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("./img", false, /\.(png|jpe?g|svg)$/)
);



const divImg = document.querySelector('.divImg');

const camba = new Image()
camba.src = images['camba.png'];
divImg.appendChild(camba);

console.log("It work");

document.querySelector('.saludo').innerHTML = "Hey there Axia! This is a test. Because I'm learning Webpack but it'll work soon, I promise.";