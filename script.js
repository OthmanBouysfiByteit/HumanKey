document.querySelector(".hamburger").addEventListener("click", function () {
	this.classList.toggle("active");
	document.querySelector(".header__nav").classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
	// Get all links inside the dropdown menu
	const links = document.querySelectorAll(".dropdown__menu a");

	// Get the current URL path
	const currentPath = window.location.pathname;

	// Define directories that should be removed from the link href if they're already in the current path
	const directoriesToRemove = ["entreprise"];

	// Loop through each link
	links.forEach((link) => {
		directoriesToRemove.forEach((dir) => {
			// Check if the current URL contains the directory name
			if (currentPath.includes(`/${dir}/`)) {
				// If it does, remove the directory name from the link href
				link.href = link.href.replace(`./${dir}`, "");
			}
		});
	});
});
