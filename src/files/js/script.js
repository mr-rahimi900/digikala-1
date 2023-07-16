$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
  rtl: true,
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 5,
    },
  },
});
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
