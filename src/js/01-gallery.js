// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");


function markup() {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}" />
</a>
</div>`
    ).join('');
    }

galleryEl.insertAdjacentHTML("beforeEnd", markup());

    let gallery = new SimpleLightbox('.gallery a', {captionPosition: "bottom", captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	
});
 
