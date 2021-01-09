let toggleBtn = document.getElementById('js-navbar-toggle');
let menu = document.getElementById('js-navbar-menu');
let icons = document.getElementById('js-navbar-icons');

toggleBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
