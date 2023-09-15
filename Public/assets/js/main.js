// sticky header
const header = document.querySelector(".header-s3");

function stickyNav() {
  if (window.scrollY > 500) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

if (header !== null) {
  window.addEventListener("scroll", stickyNav);
}

// mobile nav
const openBtn = document.querySelector("#nav-opn-btn");
const closeBtn = document.querySelector("#nav-cls-btn");
const offcanvasContainer = document.querySelector("#offcanvas-nav");

function openNav() {
  document.body.style.overflowY = "hidden";
  offcanvasContainer.classList.add("open");
}

function closeNav() {
  document.body.style.overflowY = "";
  offcanvasContainer.classList.remove("open");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// tabs
const tabButtons = document.querySelectorAll(".tab-btn");

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", openTab);
}

function openTab(event) {
  // get all tab panes
  const tabPanes = event.target.closest(".tab").querySelectorAll(".tab-pane");
  // reset all tab panes
  for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].classList.remove("active");
  }
  // reset all tab buttons
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // active the correct tab pane
  const tabId = event.target.getAttribute("data-tab");
  document.getElementById(tabId).classList.add("active");

  // active the correct tab button
  event.target.classList.add("active");
}

// progress bar
const progessBars = Array.from(document.querySelectorAll(".progress-bar"));

window.addEventListener("scroll", animateProgress);

function animateProgress() {
  const triggerPoint = window.innerHeight - 120;

  for (let i = 0; i < progessBars.length; i++) {
    // checking elment positon comparing to viewport
    if (progessBars[i].getBoundingClientRect().y <= triggerPoint) {
      const progressPercent = progessBars[i].getAttribute("data-progress");
      progessBars[i].firstElementChild.style.width = `${progressPercent}%`;

      // after triggered remove element from array.
      progessBars.splice(i, 1);
    }
  }
}

// accordion accordion
const accordions = document.querySelectorAll(".s-accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", openAccordion);
}

function openAccordion(event) {
  // sibling accordions
  const siblingTabs = event.target
    .closest(".accordion")
    .querySelectorAll(".s-accordion");
  const target = event.currentTarget;

  // if accordion is already active
  const targetWasActive = target.classList.contains("active");

  // remove active from sibling accordions
  for (let i = 0; i < siblingTabs.length; i++) {
    siblingTabs[i].classList.remove("active");
    siblingTabs[i].lastElementChild.style.height = '';
  }

  if (targetWasActive) {
    // if target was alreay active remove class active
    target.classList.remove("active");
  } else {
    // if target was not active add class active
    target.classList.add("active");
    const height = getHeight(target.lastElementChild);
    target.lastElementChild.style.height = height + "px";
  }
}

function getHeight(target) {
  target.style.display = "block";
  const height = target.scrollHeight;
  target.style.display = "";

  return height;
}

// cursor animation
const cursor = document.querySelector("#cursor");

function showCursor(event) {
  cursor.style.top = event.clientY + "px";
  cursor.style.left = event.clientX + "px";
}

if (cursor !== null) {
  window.addEventListener("mousemove", showCursor);
}

// Home 6 Search box
const headerSearchBtn = document.querySelector(".header-search-btn");
const searchWhite = document.querySelector(".search-white");
const searchFormMain = document.querySelector(".search-form-main");

headerSearchBtn.addEventListener("click", ()=> {
  searchFormMain.classList.toggle("active-search");
  if (searchFormMain.classList.contains("active-search")) {
    searchWhite.src = "assets/images/icons/x-lg.svg";
  } else {
    searchWhite.src = "assets/images/icons/search-white.svg";
  };
});
