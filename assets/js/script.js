document.addEventListener("DOMContentLoaded", function () {
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navbar = document.querySelector("[data-nav]");
  const logo = document.querySelector(".logo-burger");

  navOpenBtn.addEventListener("click", function () {
    navbar.classList.add("active");
    logo.style.display = "none";
    navOpenBtn.style.display = "none";
  });

  navCloseBtn.addEventListener("click", function () {
    navbar.classList.remove("active");
    logo.style.display = "block";
    navOpenBtn.style.display = "block";
  });

  navbar.style.display = "block";
});
