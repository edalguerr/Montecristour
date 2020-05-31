var screen = {
	Xlarge: 1200
};

if(window.innerWidth < screen.Xlarge){
	initLisenerForNavItemsResponsive();
}

function initLisenerForNavItemsResponsive() {
	var navbar = document.getElementById("navbar");
	var display = false;

	navbar.addEventListener('click', () => {

		navbar.style.height = ((display) ? "40px" : "222px");
		display = !display;

	});
}
