var navbar = document.getElementById("navbar");
var display = false;

navbar.addEventListener('click', () => {
	
	navbar.style.height = ((display)? "40px":"222px");
	display = !display;
	
});