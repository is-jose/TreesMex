console.log("Hackeando la consola");
alert("This it's a Website about trees");

/* Sandwich Menu */
const hamburger =
  document.querySelector(
    ".hamburger"
  ); /* Seleccionando la clase hamburger y asignandole una constante */
const nav__ul =
  document.querySelector(
    ".nav__ul"
  ); /* Seleccionando la clase nav__ul y asignandole una constante */

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle(
    "active"
  ); /* Esta linea hace que se convierta nuestro menu de sandwich a "x" */
  nav__ul.classList.toggle(
    "active"
  ); /* Esta linea aparece el menu con los elementos */
}

const navLink =
  document.querySelectorAll(
    ".nav__link"
  ); /* Seleccionando la clase nav__link y asignandole una constante */

navLink.forEach((n) => n.addEventListener("click", closeMenu)); /* Al momento de dar click en alguno de los elementos del menu este se cerrara por completo */

function closeMenu() {
  hamburger.classList.remove("active"); /* Hace que la "x" regrese a ser un menu de sandwich */
  nav__ul.classList.remove("active"); /* Cierra el menu, manda los elementos devuelta a la izquierda*/
}
