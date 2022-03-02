"use strict"

const clickDropdownHeader = () => {
	const dropdownHeader = document.querySelector('.dropdown-comfort__header');
	const dropdown = document.querySelector('.dropdown-comfort');
	dropdownHeader.addEventListener('click', function () {
		dropdown.classList.toggle('is-active');
	})
}

clickDropdownHeader();


const guestsAmount = () => {
	let dropdown = document.querySelector('.dropdown-comfort');


	dropdown.addEventListener('click', function (event) {

		let counter;
		if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
			const dropdownAmount = event.target.closest('.dropdown-comfort__amount');
			counter = dropdownAmount.querySelector('[data-counter]');
			if (event.target.dataset.action === 'plus') {
				counter.innerHTML = ++counter.innerHTML;
			}
			if (event.target.dataset.action === 'minus') {
				if (parseInt(counter.innerText) > 0) {
					//уменьшаем счетчик на 1 при клике
					counter.innerHTML = --counter.innerHTML;
				}
			}
		}

		if (event.target.hasAttribute('data-action') && event.target.closest('.dropdown-comfort__amount')) {
			dropdownCalculate();
		}

		if (event.target.dataset.action === 'clean') {
			let dropdownCounters = document.querySelectorAll('.dropdown-comfort__counter');
			for (let i = 0; i < dropdownCounters.length; i++) {
				dropdownCounters[i].innerText = 0;
			}
			cleanFunction();
		}

		if (event.target.dataset.action === 'close') {
			dropdown.classList.remove('is-active');
		}
	})

}

guestsAmount();

const dropdownCalculate = () => {
	const dropdownItems = document.querySelectorAll('.dropdown-comfort__item');
	const dropdownCurrent = document.querySelector('.dropdown-comfort__current');

	let totalAmount = 0;
	let amountEl = 0;
	let bedrooms = 0;
	let beds = 0;
	let bathrooms = 0;

	for (let i = 0; i <= dropdownItems.length - 1; i++) {
		amountEl = dropdownItems[i].querySelector('[data-counter]');

		if (i === 0) {
			bedrooms = parseInt(amountEl.innerText);
		} else if (i === 1) {
			beds = parseInt(amountEl.innerText);
		} else if (i === 2) {
			bathrooms = parseInt(amountEl.innerText);
		}
	}

	if (bedrooms === 0) {
		bedrooms = '';
	} else if (bedrooms === 1) {
		bedrooms = bedrooms + ' спальня';
	} else if (bedrooms > 1 && bedrooms < 5) {
		bedrooms = bedrooms + ' спальни';
	} else {
		bedrooms = bedrooms + ' спален';
	}
	if (beds === 0) {
		beds = ' ..., ';
	} else if (beds === 1) {
		beds = ', ' + beds + ' кровать';
	} else if (beds > 1 && beds < 5) {
		beds = ', ' + beds + ' кровати';
	} else {
		beds = ', ' + beds + ' кроватей';
	}

	if (bathrooms === 0) {
		bathrooms = '...';
	} else if (bathrooms === 1) {
		bathrooms = ', ' + bathrooms + ' ванная комната';
	} else if (bathrooms > 1 && bathrooms < 5) {
		bathrooms = ', ' + bathrooms + ' ванные комнаты';
	} else {
		bathrooms = ', ' + bathrooms + ' ванных комнат';
	}

	return dropdownCurrent.innerText = bedrooms + beds + bathrooms;


}

const cleanFunction = () => {
	const dropdownCurrent = document.querySelector('.dropdown-comfort__current');
	return dropdownCurrent.innerText = '2 спальни, 2 кровати...';
}

