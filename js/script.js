"use strict"

window.onload = function () {
	const parallax = document.querySelector('.parallax')

	if(parallax){
		const content = document.querySelector('.parallax__container')
		const clouds = document.querySelector('.images-parallax__clouds')
		const mountains = document.querySelector('.images-parallax__mountains')
		const human = document.querySelector('.images-parallax__human');

		const forClouds = 70;
		const forMountains = 50;
		const forHuman = 140;

		const speed = 0.03;

		let positionX = 0, positionY= 0;
		let coordXprocent = 0, coordYprocent= 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX =  positionX + (distX + speed);
			positionY =  positionY + (distY + speed);

			clouds.style.cssText = `transform: translate(${positionX/forClouds}%,${positionY/forClouds}%)`;
			mountains.style.cssText = `transform: translate(${positionX/forMountains}%,${positionY/forMountains}%)`;
			human.style.cssText = `transform: translate(${positionX/forHuman}%,${positionY/forHuman}%)`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageX - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});
////scroll
		// let thresholSets = [];
		// for (let i = 0; 1 <= 1.0; i += 0.001){
		// 	thresholSets.push(i);
		// }
		// const callback = function (entries, observer) {
		// 	const scrollToProcent = window.pageYOffset /  parallax.offsetHeight * 100;
		// 	setParallaxItemsStyle(scrollTopProcent);
		// };
		// const observer = new IntersectionObserver(callback, {
		// 	threshold: thresholdSets
		// });
		// observer.observe(document.querySelector('.content'));

		// function setParallaxItemsStyke(scrollTopProcent) {
		// 	content.style.cssText = `transform: translate(0% - ${scrollTopProcent / 9}%);`;
		// 	mountains.parentElement.style.cssText = `transform: translate(0%, - ${scrollTopProcent / 6}%);`;
		// 	human.parentElement.style.cssText = `transform: translate(0%, - ${scrollTopProcent / 3}%);`;
		// }
	}
}