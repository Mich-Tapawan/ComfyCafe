document.addEventListener("DOMContentLoaded", function () {
  // Top nav
  var navbar = document.getElementById("fixedNav");
  var navName = document.getElementById("nav-name");
  var navLogo = document.getElementById("logo");
  var navLinks = document.getElementById("page-links");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#3B2929";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });
});
