const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

const line1__bars = document.querySelector(".Line1-Bars-menu");
const line2__bars = document.querySelector(".Line2-Bars-menu");
const line3__bars = document.querySelector(".Line3-Bars-menu");

document.querySelector(".bars__menu").addEventListener("click", animateBars);

function animateBars() {
  line1__bars.classList.toggle("activeLine1-Bars-menu");
  line2__bars.classList.toggle("activeLine2-Bars-menu");
  line3__bars.classList.toggle("activeLine3-Bars-menu");
}

function ajustarMenu() {
  if (window.innerWidth >= 800) {
    dropdownContent.classList.toggle("activedropdown-content");
    // Si la pantalla es mayor o igual a 800px, remueve el event listener "click" en el dropdown
    dropdown.removeEventListener("click", toggleDropdown);
  } else if (window.innerWidth < 800) {
    // Si la pantalla es menor a 800px, agrega el event listener "click" en el dropdown
    dropdown.addEventListener("click", toggleDropdown);
  }
}

// Define la función que se usa como event listener "click"
function toggleDropdown() {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Llama a la función al cargar la página
ajustarMenu();

// Llama a la función cada vez que cambia el tamaño de la ventana del navegador
window.addEventListener("resize", ajustarMenu);
