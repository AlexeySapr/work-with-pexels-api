import './sass/main.scss';

import card from './template/card.hbs';
import apiService from './js/api-service';

const galleryList = document.querySelector('.list');
const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore(event) {
  event.preventDefault();
  apiService.incrementPage();
  showFotos();
}

function onSubmit(event) {
  event.preventDefault();
  apiService.config.params.query = event.currentTarget.elements.text.value;
  showFotos();
  searchForm.reset();
}

async function showFotos() {
  try {
    const photos = await apiService.getFotos();
    galleryList.insertAdjacentHTML('beforeend', card(photos));
  } catch (error) {
    console.error(error);
  }
}
