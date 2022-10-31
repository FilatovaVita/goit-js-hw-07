import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(basicLightbox);
console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryCard = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCard);
galleryContainer.addEventListener("click", onClickImg);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}"
    alt="${description}"/></a></div>`;
    })
    .join(" ");
}

let instance = " ";
function onClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();
  document.addEventListener("keydown", onModalCloseToEscape);
}
function onModalCloseToEscape(evt) {
  if (evt.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onModalCloseToEscape);
  }
}
console.log(dataset.source);
