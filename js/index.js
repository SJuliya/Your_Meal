const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');

const product = {
	title: 'Бургер',
	price: 1000,
	weight: 500,
	calories: 1500,
	description: 'Big burger ig burger ig burger ig burger',
	image: 'img/megaburger.jpg',
	ingredients: [
		'bread',
		'meat',
		'cheese',
		'salad',
		'sauce'
	],
}

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
//const modal-product = document.querySelector('.modal-product__ingredients');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
modalProductDescription.textContent = product.description;

ingredientsList.textContent = '';

const ingredientsListItems = product.ingredients.map((item) => {
	const li = document.createElement('li');
	li.classList.add('ingredients__item');
	li.textContent = item;
	return li;
});

ingredientsList.append(...ingredientsListItems);

ingredientsCalories.textContent = product.calories;
modalProductPriceCount.textContent = product.price;

catalogList.addEventListener('click', (event) => {
	const target = event.target;

	if (target.closest('.product__detail') || target.closest('.product__image')) {
		modalProduct.classList.add('modal_open');
	}
})

modalProduct.addEventListener('click', (event) => {
	const target = event.target;

	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
})
