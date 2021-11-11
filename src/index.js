import './sass/main.scss';
import axios from 'axios';
import card from './template/card.hbs';
const querystring = require('querystring');

const AUTH_KEY = '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd';
const pages = 12;
let page = 1;
let searchQuery = '';

axios.defaults.headers.common['Authorization'] = AUTH_KEY;

const galleryList = document.querySelector('.list');
const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore(event) {
  event.preventDefault();
  page++;
  getFotos(searchQuery);
}

function onSubmit(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.elements.text.value;
  getFotos(searchQuery);
  searchForm.reset();
}

async function getFotos(searchQuery) {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchQuery}&page=${page}&per_page=${pages}`,
    );
    const photos = response.data.photos;
    console.log(photos);
    galleryList.insertAdjacentHTML('beforeend', card(photos));
  } catch (error) {
    console.error(error);
  }
}

// getFotos(query);

// function getFotos() {
//   return fetch('https://api.pexels.com/v1/search?query=nature&per_page=10', {
//     method: 'GET',
//     headers: {
//       Authorization: '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd',
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.photos);
//       return data.photos;
//     });
// }

// getFotos();

// async function getFotos() {
//   const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=10', {
//     method: 'GET',
//     headers: {
//       Authorization: '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd',
//     },
//   });

//   const data = await response.json();

//   return data;
// }

// getFotos().then(data => {
//   console.log(data);
// });
