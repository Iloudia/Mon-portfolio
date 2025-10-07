const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.textContent = menu.classList.contains('open') ? '×' : '☰';
});

// fermer lorsqu'on click en dehors menu burger
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    burger.textContent = '☰';
  }
});

// fermer lorsuq'on clique sur un lien de menu
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.textContent = '☰';
  });
});