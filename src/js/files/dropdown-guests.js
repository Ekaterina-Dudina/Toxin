"use strict"

const clickDropdownHeader = () => {
	const dropdownHeader = document.querySelector('.dropdown-guests__header');
	const dropdown = document.querySelector('.dropdown-guests');
	dropdownHeader.addEventListener('click', function () {
		dropdown.classList.toggle('is-active');
		console.log('click');
	})
}

clickDropdownHeader();


const guestsAmount = () => {
	let dropdown = document.querySelector('.dropdown-guests');
	const dropdownHeader = document.querySelector('.dropdown-guests__header');

	dropdown.addEventListener('click', function (event) {

		let counter;
		if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
			const dropdownAmount = event.target.closest('.dropdown-guests__amount');
			console.log(dropdownAmount);
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

		if (event.target.hasAttribute('data-action') && event.target.closest('.dropdown-guests__amount')) {
			dropdownCalculate();
		}

		if (event.target.dataset.action === 'clean') {
			let dropdownCounters = document.querySelectorAll('.dropdown-guests__counter');
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
	const dropdownItems = document.querySelectorAll('.dropdown-guests__item');
	const dropdownCurrent = document.querySelector('.dropdown-guests__current');

	let totalAmount = 0;

	dropdownItems.forEach(function (item) { //foreach перебирает коллекцию
		const amountEl = item.querySelector('[data-counter]'); //получаем кол-во
		console.log(parseInt(amountEl.innerText));
		//теперь считаем общую стоимость товаров в корзине
		totalAmount += parseInt(amountEl.innerText);
	})

	if (totalAmount === 1) {
		return dropdownCurrent.innerText = totalAmount + ' гость';
	} else if (totalAmount > 1 && totalAmount < 5) {
		return dropdownCurrent.innerText = totalAmount + ' гостя';
	} else {
		return dropdownCurrent.innerText = totalAmount + ' гостей';
	}

}

const cleanFunction = () => {
	const dropdownCurrent = document.querySelector('.dropdown-guests__current');
	return dropdownCurrent.innerText = 'Сколько гостей';
}

