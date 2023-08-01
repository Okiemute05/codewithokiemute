"use script";
/*
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");

// const banner = Math.trunc(Math.random() * 3) + 1;

// for (let banner = 1; banner <= 3; banner++) {
//   document.querySelector(".img2").classList.remove("hidden");
//   document.querySelector(".img2").classList.add("popular-img");
//   document.querySelector(".img1").classList.add("hidden");
// }

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
console.log(slides);

const showSlide = function (index) {
  slides[currentSlide].classList.remove("active");
  slides[index].classList.add("active");
  currentSlide = index;
};

const showNextSlide = function () {
  let nextSlide = currentSlide + 1;
  if (nextSlide >= slides.length) {
    nextSlide = 0;
  }
  showSlide(nextSlide);
};

const showPreviousSlide = function () {
  let prevSlide = currentSlide - 1;
  if (prevSlide < 0) {
    prevSlide = slides.length - 1;
  }
  showSlide(prevSlide);
};

btnLeft.addEventListener("click", showPreviousSlide);
btnRight.addEventListener("click", showNextSlide);
*/

// const banner = Math.trunc(Math.random() * 3) + 1;

// for (let banner = 1; banner <= 3; banner++) {
//   document.querySelector(".img2").classList.remove("hidden");
//   document.querySelector(".img2").classList.add("popular-img");
//   document.querySelector(".img1").classList.add("hidden");
// }

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

///////////////////////////////////////////////////////////
//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
//Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
