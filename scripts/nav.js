document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("fixedNav");
  var navToggle = document.getElementById("navToggle");
  var pageLinks = document.getElementById("page-links");
  var navBackdrop = document.getElementById("navBackdrop");

  if (!navbar) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#3B2929";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });

  function setMenuOpen(open) {
    document.body.classList.toggle("nav-menu-open", open);
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    if (navBackdrop) {
      navBackdrop.setAttribute("aria-hidden", open ? "false" : "true");
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  if (navToggle && pageLinks) {
    navToggle.addEventListener("click", function () {
      setMenuOpen(!document.body.classList.contains("nav-menu-open"));
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMenu);
  }

  if (pageLinks) {
    pageLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) closeMenu();
  });
});
