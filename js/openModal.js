import {
	ingredientsCalories,
	ingredientsList,
	modalProduct,
	modalProductBtn,
	modalProductDescription,
	modalProductImage,
	modalProductPriceCount,
	modalProductTitle
} from "./elements.js";
import {getData} from "./getData.js";
import {API_URL, PREFIX_PRODUCT} from "./const.js";

export const openModal = async (id) => {
	const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
	modalProductTitle.textContent = product.title;
	modalProductImage.src = `${API_URL}/${product.image}`;
	modalProductDescription.textContent = product.description;

	ingredientsList.textContent = '';

	const ingredientsListItems = product.ingredients.map((item) => {
		const li = document.createElement('li');
		li.classList.add('ingredients__item');
		li.textContent = item;
		return li;
	});

	ingredientsList.append(...ingredientsListItems);

	ingredientsCalories.textContent = `${product.weight} г, ${product.calories} ккал`;
	modalProductPriceCount.textContent = product.price;
	modalProductBtn.dataset.idProduct = product.id;

	modalProduct.classList.add('modal_open');
}