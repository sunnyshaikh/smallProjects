// selectors
const btn = document.getElementById('btn');
const show = document.getElementById('show')

btn.addEventListener('click', () => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	let color = `rgb(${r}, ${g}, ${b})`;
	document.body.style.background = color;
	show.innerText = color;

});
