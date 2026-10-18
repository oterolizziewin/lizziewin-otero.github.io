// Enhancements only: every page works without JavaScript.
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var list = document.getElementById("menu");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
  }

  // Header border once the page scrolls
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Gentle rise for content below the fold (content is visible at rest)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove("wait"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".rise").forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("wait"); io.observe(el); }
    });
  }

  // Portfolio filters
  var filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      var f = b.getAttribute("data-filter");
      filterBtns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      document.querySelectorAll(".piece").forEach(function (p) {
        p.hidden = !(f === "all" || (p.getAttribute("data-cat") || "").split(" ").indexOf(f) > -1);
      });
    });
  });

  // Lightbox for portfolio images
  var box = document.getElementById("lightbox");
  if (box && typeof box.showModal === "function") {
    var bImg = box.querySelector("img");
    var bCap = box.querySelector("p");
    document.querySelectorAll(".piece button").forEach(function (b) {
      b.addEventListener("click", function () {
        var img = b.querySelector("img");
        bImg.src = img.src; bImg.alt = img.alt;
        bCap.textContent = b.parentNode.querySelector("b").textContent;
        box.showModal();
      });
    });
    box.querySelector(".close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  }

  // Copy email
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var text = b.getAttribute("data-copy");
      var out = document.getElementById(b.getAttribute("data-status"));
      function done(msg) { if (out) out.textContent = msg; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done("Email address copied."); }, function () { done("Copy didn't work. The address is " + text); });
      } else { done("The address is " + text); }
    });
  });
})();
