// Xolo Cinco — shared site behavior (all pages)

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Footer copyright year
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------
  // GTM / GA4 hook point: elements carrying [data-cta] are the primary
  // conversion touchpoints on the site (hero, service tiles, final CTA).
  // Once GTM is installed, these can be wired up either via a GTM Click
  // trigger on [data-cta], or by pushing to dataLayer directly here, e.g.:
  //
  // document.querySelectorAll("[data-cta]").forEach(function (el) {
  //   el.addEventListener("click", function () {
  //     window.dataLayer = window.dataLayer || [];
  //     window.dataLayer.push({
  //       event: "cta_click",
  //       cta_id: el.getAttribute("data-cta"),
  //     });
  //   });
  // });
  // ------------------------------------------------------------------
});
