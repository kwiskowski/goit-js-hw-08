import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('ul.gallery');
const galleryImages = galleryItems
  .map(
    image =>
      `<li><a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" title="${image.description}" alt="${image.description}" />
    </a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.5,
});
console.log(galleryItems);
