const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const barsMenu = document.querySelector(".bars__menu");
const line1__bars = document.querySelector(".Line1-Bars-menu");
const line2__bars = document.querySelector(".Line2-Bars-menu");
const line3__bars = document.querySelector(".Line3-Bars-menu");
const navbarContainer = document.querySelector(".navbar-container");

let prevScrollposition = window.pageYOffset;

// Oculta la barra de navegación cuando el usuario hace click en el botón de menú
barsMenu.addEventListener("click", animateBars);

function animateBars() {
  line1__bars.classList.toggle("activeLine1-Bars-menu");
  line2__bars.classList.toggle("activeLine2-Bars-menu");
  line3__bars.classList.toggle("activeLine3-Bars-menu");
}

function ajustarMenu() {
  if (window.innerWidth >= 800) {
    dropdownContent.style.display = "block";
    // Si la pantalla es mayor o igual a 800px, remueve el event listener "click" en el dropdown
    dropdown.removeEventListener("click", toggleDropdown);
  } else if (window.innerWidth < 800) {
    // Si la pantalla es menor a 800px, agrega el event listener "click" en el dropdown
    barsMenu.addEventListener("click", toggleDropdown); // Agregado para dispositivos móviles
  }

  // Si la pantalla es menor a 800px y el dropdown está actualmente visible, cambia su estilo a display: none
  if (window.innerWidth < 800 && dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Define la función que se usa como event listener "click"
function toggleDropdown() {
  dropdownContent.classList.toggle("active");

  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  }
}

// Llama a la función al cargar la página
ajustarMenu();

// Llama a la función cada vez que cambia el tamaño de la ventana del navegador
window.addEventListener("resize", ajustarMenu);

// Oculta la barra de navegación cuando el usuario hace scroll hacia abajo
window.addEventListener("scroll", hideNavbarOnScroll);

function hideNavbarOnScroll() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollposition > currentScrollPos) {
    navbarContainer.style.top = "1px";
  } else {
    navbarContainer.style.top = "-100px";
  }
  prevScrollposition = currentScrollPos;
}
