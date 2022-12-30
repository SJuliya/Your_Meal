import {modalDeliveryContainer, modalDeliveryForm} from "./elements.js";
import {clearCart} from "./cart.js";
import {getData} from "./getData.js";
import {API_URL, PREFIX_PRODUCT} from "./const.js";

export const orderController = (getCart) => {
	const checkDelivery = () => {
		if (modalDeliveryForm.format.value === 'pickup') {
			modalDeliveryForm['address-info'].classList
				.add('modal-delivery__fieldset-input_hide');
		}

		if (modalDeliveryForm.format.value === 'delivery') {
			modalDeliveryForm['address-info'].classList
				.remove('modal-delivery__fieldset-input_hide');
		}
	}
	modalDeliveryForm.addEventListener('change', checkDelivery);

	modalDeliveryForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(modalDeliveryForm);
		const data = Object.fromEntries(formData);

		data.order = getCart();
		const productIds = data.order.map(item => item.id);

		Promise.all([
			fetch('https://reqres.in/api/users', {
				method: 'post',
				body: JSON.stringify(data),
			}),
			getData(`${API_URL}${PREFIX_PRODUCT}?list=${productIds}`)
		]).then(async ([response, products]) => {
			response = await response.json();

			clearCart();

			modalDeliveryContainer.innerHTML = `
		  			<h2>Спасибо за заказ!</h2>
		  			<h3>Ваш номер заказа: ${response.id}</h3>
		  			<p>В ближайшее время с вами свяжется менеджер</p>
		  			<br/>
		  			<p>Ваш заказ:</p>
		  		`;

			const ul = document.createElement('ul');
			let productsMap = {};
			products.forEach(product => {
				productsMap[product.id] = product
			});

			data.order.map(item => {
				ul.insertAdjacentHTML('beforeend', `<li>${productsMap[item.id].title} - ${item.count}шт.</li>`);
			});

			modalDeliveryContainer.insertAdjacentElement('beforeend', ul)
		}).catch(respose => alert(respose));
	})
}