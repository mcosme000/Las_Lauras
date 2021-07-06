"use strict";

const body = document.querySelector("body");
const gallery = document.querySelector("#gallery");
document.addEventListener("DOMContentLoaded", creategallery);

//CREATE GALLERY
function creategallery() {
  for (let i = 1; i <= 9; i++) {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = `/media/laslauras-gallery/small/${i}-min.jpg`;
    image.id = i;
    image.classList.add("gallery-img");
    container.appendChild(image);
    gallery.appendChild(container);
  }
}

//CREATE OVERLAY
gallery.addEventListener("click", getId);

function getId(e) {
  console.log(e.target);
  if (e.target.classList.contains("gallery-img")) {
    let clicked = e.target.getAttribute("id");
    createOverlay(clicked);
  }
}

function createOverlay(id) {
  //create overlay
  let overlay = document.createElement("div");
  overlay.classList.add("gallery-overlay");

  //create img
  let wideimg = document.createElement("img");
  wideimg.src = `/media/laslauras-gallery/${id}-min.jpg`;
  wideimg.classList.add("wide-img");

  //create close btn
  let closeBtn = document.createElement("a");
  closeBtn.classList.add("close-btn");
  closeBtn.innerText = "X";

  overlay.appendChild(wideimg);
  overlay.appendChild(closeBtn);
  body.appendChild(overlay);

  //close overlay
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}
