"use script";

const menuBtn = document.querySelector(".menu-outline");
const closeBtn = document.querySelector(".close-outline");
const menuEl = document.querySelector(".menu");
const modeEl = document.querySelector(".mode");
const heroSectionEl = document.querySelector(".hero-section");
const bodyEl = document.body;

////////////////////////////////////////////////////
//////////// MAKING THE NAVIGATION WORK/////////////
////////////////////////////////////////////////////

// menuBtn.addEventListener("click", function () {
//   bodyEl.classList.add("show-nav");
// });

// closeBtn.addEventListener("click", function () {
//   bodyEl.classList.remove("show-nav");
// });

//////// OR ////////
menuEl.addEventListener("click", function () {
  bodyEl.classList.toggle("show-nav");
});

////////////////////////////////////////////////////
///////// MAKING THE LIGHT/DARK MODE WORK///////////
////////////////////////////////////////////////////

modeEl.addEventListener("click", function () {
  bodyEl.classList.toggle("change-mode");
});

////////////////////////////////////////////////////
/////////////// STICKY NAVIGATION //////////////////
////////////////////////////////////////////////////

const observerEl = new IntersectionObserver(
  function (entries) {
    // console.log(entries);
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
observerEl.observe(heroSectionEl);

////////////////////////////////////////////////////
//////////////// SMOOTH SCROLLING /////////////////
////////////////////////////////////////////////////
const linkEl = document.querySelectorAll("a:link");
linkEl.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();

      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });

      sectionEl.classList.add("sticky70");
    }
    bodyEl.classList.remove("show-nav");
  });
});
