import {catalogTitle, navigationButtons, navigationList} from "./elements.js";

export const navigationListController = () => {
	navigationList.addEventListener('click', (event) => {
		const categoryItem = event.target.closest('.navigation__button');

		if (!categoryItem) return;

		navigationButtons.forEach((item) => {
			if (item === categoryItem) {
				item.classList.add('navigation__button_active');
				catalogTitle.textContent = item.textContent;
			} else {
				item.classList.remove('navigation__button_active');
			}
		})
	})
}