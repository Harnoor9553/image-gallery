let currentImageIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".gallery img"));
});

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = src;
  currentImageIndex = images.findIndex(img => img.src === src);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function navigate(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;

  document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function filterImages(category) {
  const imageDivs = document.querySelectorAll(".gallery .image");
  imageDivs.forEach(div => {
    if (category === "all" || div.classList.contains(category)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}
