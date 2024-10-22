window.addEventListener("load", init);

var kepLista = [
  "img/IMG_8671.jpeg",
  "img/IMG_8672.jpeg",
  "img/IMG_8673.jpeg",
  "img/IMG_8677.jpeg",
  "img/IMG_8678.jpeg",
  "img/IMG_8691.jpg",
  "img/IMG_8692.jpg",
  "img/IMG_8693.jpg",
  "img/IMG_8694.jpg",
  "img/IMG_8695.jpg",
  "img/IMG_8696.jpg",
  "img/IMG_8697.jpg",
  "img/IMG_8698.jpg",
  "img/IMG_8699.jpg",
  "img/IMG_8700.jpg",
  "img/IMG_8701.jpg",
  "img/IMG_8702.jpg",
  "img/IMG_8703.jpg",
  "img/IMG_8704.jpg",
  "img/IMG_8705.jpg",
  "img/IMG_8706.jpg",
  "img/IMG_8709.jpg",
  "img/IMG_8710.jpg",
  "img/IMG_8711.jpg",
  "img/IMG_8712.jpg",
  "img/IMG_8713.jpg",
  "img/IMG_8714.jpg",
  "img/IMG_8715.jpg",
  "img/IMG_8716.jpg",
  "img/IMG_8717.jpg",
  "img/IMG_8718.jpg",
  "img/IMG_8719.jpg",
  "img/IMG_8720.jpg",
  "img/IMG_8722.jpg",
];

var slideIndex = 0;

function init() {
    showSlides();
}

function showSlides() {
    let slideshowContainer = document.querySelector(".slideshow-container");
    let dotsContainer = document.querySelector(".dots-container");

    slideshowContainer.innerHTML = ""; // Clear previous slides
    dotsContainer.innerHTML = ""; // Clear previous dots

    for (let i = 0; i < kepLista.length; i++) {
        // Create a slide
        let slideDiv = document.createElement("div");
        slideDiv.classList.add("slide", "fade");
        
        let img = document.createElement("img");
        img.src = kepLista[i];
        img.style.width = "100%";
        slideDiv.appendChild(img);

        slideshowContainer.appendChild(slideDiv);

        // Create a dot
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => currentSlide(i + 1));
        dotsContainer.appendChild(dot);
    }

    showSlidesAuto(); // Start the automatic slideshow
}

// Function to show the current slide
function showSlidesAuto() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides and remove "active" from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 3 seconds (you can adjust the timing)
    setTimeout(showSlidesAuto, 3000);
}

function currentSlide(n) {
    slideIndex = n;
    showSlidesAuto();
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlidesAuto();
}
