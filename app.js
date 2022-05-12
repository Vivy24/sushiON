const { sushiMenu, sashimiMenu } = window;

function toggleNavBar() {
  const navbar = document.querySelector(".navbarHead");

  if (navbar.className == "navbarHead") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbarHead";
  }
}

function navigateBar() {
  const navbar = document.querySelector(".navbarHead");
  navbar.className = "navbarHead";
}

function readMore() {
  const dots = document.querySelector("#dots");
  const more = document.querySelector("#more");

  const readMore = document.querySelector("#readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    readMore.textContent = "Read more";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    readMore.textContent = "Read less";
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.querySelectorAll(".reviewCar");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[1].className = "dot";
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

setInterval(() => {
  currentSlide(Math.floor(Math.random() * (4 - 1) + 1));
}, 4000);

function menuDisplay() {
  const menuSushi = document.querySelector(".sushiMenu").children[0];

  for (let i = 0; i < sushiMenu.length; i++) {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const price = document.createElement("td");
    name.innerHTML = `<p>${sushiMenu[i].code} ${sushiMenu[i].name}<span class="des"><br />${sushiMenu[i].description}</span></p>`;
    price.innerHTML = `<p>${sushiMenu[i].price}<br />&nbsp</p>`;

    row.appendChild(name);
    row.appendChild(price);

    menuSushi.appendChild(row);
  }

  const sashiMenu = document.querySelector(".sashimiMenu").children[0];
  for (let i = 0; i < sashimiMenu.length; i++) {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const price = document.createElement("td");
    name.innerHTML = `<p>${sashimiMenu[i].code} ${sashimiMenu[i].name}<span class="des"><br />${sashimiMenu[i].description}</span></p>`;
    price.innerHTML = `<p>${sashimiMenu[i].price}<br />&nbsp</p>`;

    row.appendChild(name);
    row.appendChild(price);

    sashiMenu.appendChild(row);
  }
}

menuDisplay();
