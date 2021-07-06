"use strict";

const gallery = document.querySelector("#gallery");
document.addEventListener("DOMContentLoaded", creategallery);

function creategallery() {
  for (let i = 1; i <= 9; i++) {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = `/media/laslauras-gallery/${i}_small.jpg`;
    container.appendChild(image);
    gallery.appendChild(container);
  }
}

//CREATE GALLERY
