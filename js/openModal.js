import {
	ingredientsCalories,
	ingredientsList,
	modalProduct,
	modalProductDescription,
	modalProductImage,
	modalProductPriceCount,
	modalProductTitle
} from "./elements.js";

export const openModal = (product) => {
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

	ingredientsCalories.textContent = `${product.weight}г, ${product.calories} ккал`;
	modalProductPriceCount.textContent = product.price;

	modalProduct.classList.add('modal_open');
}