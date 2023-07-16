"use strict";

// Nav Menu Functionality
const navLinks = Array.from(
  document.body.querySelectorAll("a.navigation__link")
);
const navCheckbox = document.body.querySelector(".navigation__checkbox");

navLinks.forEach(function (link) {
  link.addEventListener("click", () => navCheckbox.click());
});
