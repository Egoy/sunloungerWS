let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', (e) => {
  mainNav.classList.toggle('active');
  e.preventDefault();
});

mainNav.addEventListener('click', () => {
  mainNav.classList.remove('active');
});

window.addEventListener("scroll", () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});