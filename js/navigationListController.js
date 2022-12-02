import {catalogTitle, navigationButtons, navigationList} from "./elements.js";

export const navigationListController = (callback) => {
	navigationList.addEventListener('click', (event) => {
		const categoryItem = event.target.closest('.navigation__button');

		if (!categoryItem) return;

		navigationButtons.forEach((item) => {
			if (item === categoryItem) {
				item.classList.add('navigation__button_active');
				catalogTitle.textContent = item.textContent;
				callback(item.dataset.category);
			} else {
				item.classList.remove('navigation__button_active');
			}
		})
	})
}