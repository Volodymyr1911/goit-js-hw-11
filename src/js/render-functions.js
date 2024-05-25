import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('image-card');

    card.innerHTML = `
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <div class="info">
                <div>
                    <span>Likes</span>
                    <p>${image.likes}</p>
                </div>
                <div>
                    <span>Views</span>
                    <p>${image.views}</p>
                </div>
                <div>
                    <span>Comments</span>
                    <p>${image.comments}</p>
                </div>
                <div>
                    <span>Downloads</span>
                    <p>${image.downloads}</p>
                </div>
            </div>
        `;

    gallery.appendChild(card);
  });

  new SimpleLightbox('#gallery a');
}
