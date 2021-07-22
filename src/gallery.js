"use strict";

/* - - - - - 
GALLERY CODE
- - - - - - */
const body = document.querySelector("body");
const gallery = document.querySelector("#gallery");
document.addEventListener("DOMContentLoaded", creategallery);

//CREATE GALLERY
function creategallery() {
  for (let i = 1; i <= 9; i++) {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = `/media/images/thumb/0${i}thumb.jpg`;
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
  let overlayContainer = document.createElement("div");
  overlayContainer.classList.add("overlayCont");
  overlayContainer.innerHTML = `
  <img src="/media/images/0${id}.webp" class="wide-img">`;

  //create close btn
  let closeBtn = document.createElement("a");
  closeBtn.classList.add("close-btn");
  closeBtn.innerText = "X";

  overlay.appendChild(overlayContainer);
  overlay.appendChild(closeBtn);
  body.appendChild(overlay);

  //close overlay
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}

/* - - - - - - - - - 
MEMBERS GALLERY CODE
- - - - - - - - - - */

const member = document.querySelector("#members");
member.addEventListener("click", memberInfo);

function memberInfo(e) {
  console.log(e.target);
}
