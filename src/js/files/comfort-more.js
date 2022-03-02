"use strict"

const clickComfortMore = () => {
	const comfortMoreHeader = document.querySelector('.more-comfort__header');
	const comfortBody = document.querySelector('.more-comfort');
	comfortMoreHeader.addEventListener('click', function () {
		comfortBody.classList.toggle('is-active');
	})
}

clickComfortMore();