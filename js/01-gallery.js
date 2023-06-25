import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
const listContent = generateGalleryList(galleryItems);


function generateGalleryList(galleryItems) {
    return galleryItems.flatMap((image) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${image.preview}
      data-source="large-image.jpg"
      alt="${image.description}"
    />
  </a>
</li>`)
  .join("");
}
list.insertAdjacentHTML("beforeend", listContent);



