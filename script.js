if (window.innerWidth < 768) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

let openReadMore = document.querySelector(".readMore");
let readMore__text = document.querySelector(".readMore__text");
let readMore__icon = document.querySelector(".readMore__icon");
let listBrendsOn768px = document.querySelector(".listBrendsOn768px");

openReadMore.addEventListener("click", function () {
  if (openReadMore.classList.contains("hidden")) {
    readMore__text.textContent = "Показать все";
    openReadMore.classList.remove("hidden");
    readMore__icon.style.transform = "rotate(0deg)";
    listBrendsOn768px.style.maxHeight = "175px";
  } else {
    readMore__text.textContent = "Скрыть";
    openReadMore.classList.add("hidden");
    readMore__icon.style.transform = "rotate(-180deg)";
    listBrendsOn768px.style.maxHeight = `${listBrendsOn768px.scrollHeight}px`;
  }
});
