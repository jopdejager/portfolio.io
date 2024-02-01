const trigger = document.querySelector('.burger-munu-button');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelectorAll('.check');

trigger.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop[0].addEventListener('click', () => nav.classList.remove('open-nav'));
backdrop[1].addEventListener('click', () => nav.classList.remove('open-nav'));
backdrop[2].addEventListener('click', () => nav.classList.remove('open-nav'));
backdrop[3].addEventListener('click', () => nav.classList.remove('open-nav'));
backdrop[4].addEventListener('click', () => nav.classList.remove('open-nav'));

