// jQuery の読み込み
// import $ from 'jquery';
// $('body').css('color', 'pink');




// 他の JavaScriptファイルの読み込み
import './modules/common.js';

// import { greet } from './modules/common';
// console.log(greet('上杉'));




// Sassファイルの読み込み
import '../scss/style.scss';




// const thumbnailImages = document.querySelectorAll('.productSection__thumbnailImage');

// const figures = document.querySelectorAll('.productSection__figure');

// const mainImages = document.querySelectorAll('.productSection__image');


// thumbnailImages.forEach((thumbnailImage) => {
//   thumbnailImage.addEventListener('click', (e) => {
//     thumbnailImages.forEach((thumbnailImage) => {
//       thumbnailImage.ariaSelected = 'false';
//     });

//     e.target.ariaSelected = 'true';


//     figures.forEach((figure) => {
//       figure.style.display = 'none';
//     });

//     mainImages.forEach((mainImage) => {
//       if (mainImage.src === e.target.src) {
//         mainImage.parentElement.style.display = 'block';
//       }
//     });
//   }, false);
// });




const thumbnailImages = document.querySelectorAll('.productSection__thumbnailImage');

const mainImage = document.querySelector('.productSection__image');


thumbnailImages.forEach((thumbnailImage) => {
  thumbnailImage.addEventListener('click', (e) => {
    mainImage.src = e.target.src;

    document.querySelector('.productSection__thumbnail--current').classList.remove('productSection__thumbnail--current');

    e.target.parentElement.classList.add('productSection__thumbnail--current');
  }, false);
});
