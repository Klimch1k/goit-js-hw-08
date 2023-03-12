import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(
      image => `<a class="gallery__item" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
  />
</a>`
    )
    .join('');
}

const lightBox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: '250',
});
