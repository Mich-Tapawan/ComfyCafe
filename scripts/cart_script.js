document.addEventListener("DOMContentLoaded", function () {
  var panels = {
    b1: document.querySelector(".view-order"),
    b2: document.querySelector(".payment"),
    b3: document.querySelector(".receipt"),
  };

  var boxes = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
  ];

  function showStep(stepId) {
    Object.keys(panels).forEach(function (key) {
      var p = panels[key];
      if (p) p.classList.remove("panel--active");
    });
    var active = panels[stepId];
    if (active) active.classList.add("panel--active");

    boxes.forEach(function (b) {
      if (b) b.classList.remove("active");
    });
    var box = document.getElementById(stepId);
    if (box) box.classList.add("active");
  }

  boxes.forEach(function (box) {
    if (!box) return;
    box.addEventListener("click", function () {
      showStep(box.id);
    });
  });

  showStep("b1");

  var rcptReturn = document.getElementById("rcpt-return");
  if (rcptReturn) {
    rcptReturn.addEventListener("click", function () {
      window.location.href = "../pages/menu.html";
    });
  }

  document.querySelectorAll("#method img").forEach(function (img) {
    img.addEventListener("click", function () {
      document.querySelectorAll("#method img").forEach(function (i) {
        i.classList.remove("selected");
      });
      img.classList.add("selected");
    });
  });
});
