

const tabItem = document.querySelectorAll('.tabs__btn-item');   //найдем все кнопки
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function (element) {           //циклом по всем табам
	element.addEventListener('click', open);           //а на какой нажали отработает функция опен


})

function open(evt) {                         //описываем функц
	const tabTaraget = evt.currentTarget;     //отслеживаем  по ip
	const button = tabTaraget.dataset.button;  // используем значение (data-buton = content-1)


	tabItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active')   //убераем класс
		tabTaraget.classList.add('tabs__btn-item--active') //добавляем

	});



	tabContent.forEach(function (item) {
		item.classList.remove('tabs__content-item--active')   //убераем класс

	});

	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');  //#-id  $-data-buton



}
//burger
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu__list--active');
});



//slider
const swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
	},
});