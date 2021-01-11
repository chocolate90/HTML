let Btn = document.getElementById('btn');
let title = document.getElementById('title-clamp');

Btn.addEventListener('click', function () {
  Btn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
