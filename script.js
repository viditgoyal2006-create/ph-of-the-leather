const imageFolder = "images/";
const images = [];
for (let i = 1; i <= 66; i++) {
  images.push(`Slide${i}.PNG`);
}

let currentIndex = 0;
const slideImage = document.getElementById("slide-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

function showSlide(index) {
  slideImage.style.opacity = 0;
  
  setTimeout(() => {
    slideImage.src = imageFolder + images[index];
    slideImage.onload = () => {
      slideImage.style.opacity = 1;
    };
  }, 150);

  const slideNum = index + 1;
  
  progressBar.style.width = `${(slideNum / images.length) * 100}%`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === images.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

// Arrow key navigation
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  } else if (e.key === "ArrowLeft") {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }
});

// Initial load
showSlide(currentIndex);

// Click anywhere on the image/body to go forward
document.querySelector('.card-body').addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});
