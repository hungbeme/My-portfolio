"use script";

const menuBtn = document.querySelector(".menu-outline");
const closeBtn = document.querySelector(".close-outline");
const menuEl = document.querySelector(".menu");
const modeEl = document.querySelector(".mode");
const heroSectionEl = document.querySelector(".hero-section");
const sectionAll = document.querySelectorAll([
  ".about_features",
  ".skills",
  ".project-section",
  ".contact-me",
]);
const bodyEl = document.body;
const sendMessageBtn = document.querySelector(".contact-btn");
const inputEl = document.querySelector("#full-name");
const emalEL = document.querySelector("#email");
const phoneEl = document.querySelector("#number");
const messageEl = document.querySelector("#message");

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

////////////////////////////////////////////////////
///////// REVEALING ELEMENTS ON SCROLL ////////////
////////////////////////////////////////////////////

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sectionAll.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

////////////////////////////////////////////////////
///////// SENDING MESSSAGES ////////////
////////////////////////////////////////////////////

sendMessageBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputElValue = inputEl.value;
  const emalElValue = emalEL.value;
  const phoneElValue = phoneEl.value;
  const messageElValue = messageEl.value;

  console.log(inputElValue, emalElValue, phoneElValue, messageElValue);

  // ("https://api.whatsapp.com/send?phone=2349137746866&text=Hi%20Samuel%20I%20Want%20to%20join%20your%20FREE%20graphic%20Design%20Class%20My%20Name%20Is%20");

  window.location.href = `https://api.whatsapp.com/send?phone=2349137746866&text=${{
    name: inputElValue,
    email: emalElValue,
    Phone: phoneElValue,
    message: messageElValue,
  }}`;

  console.log("first");
});
