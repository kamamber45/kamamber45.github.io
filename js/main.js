const bur = document.querySelector('[data-burger]')
const nav = document.querySelector('[data-menu]');


bur.addEventListener('click', () => {
	bur.classList.toggle('menu__btn--active');
	nav.classList.toggle('menu--visible');
	document.querySelector('body').classList.toggle('stop-scroll');
});

