import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('search-button')
    .addEventListener('click', async () => {
      const query = document.getElementById('search-input').value.trim();

      if (query === '') {
        iziToast.error({
          title: 'Error',
          message: 'Please enter a search query',
        });
        return;
      }

      try {
        const data = await fetchImages(query);
        if (data.hits.length === 0) {
          iziToast.warning({
            title: 'No results',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          renderGallery(data.hits);
        }
      } catch (error) {
        iziToast.error({
          title: 'Error',
          message: 'Failed to fetch images',
        });
      }
    });
});
