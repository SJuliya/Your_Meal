import {getData} from "./getData.js";
import {API_URL, PREFIX_PRODUCT} from "./const.js";
import {catalogList} from "./elements.js";
import {createCardProduct} from "./createCardProduct.js";

export const renderListProduct = (category = 'burger') => {
	catalogList.textContent = '';
	getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`)
		.then(listProduct => {
			const listCard = listProduct.map(createCardProduct);
			catalogList.append(...listCard);
		});
}