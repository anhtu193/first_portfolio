function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");

	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

const slider = document.querySelector(".projects-slider");
const slides = document.querySelectorAll(".project-card");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + 32; // 32px is the gap between slides

let currentSlide = 0;

function autoSlide() {
	currentSlide = (currentSlide + 1) % totalSlides;
	slider.scrollTo({
		left: currentSlide * slideWidth,
		behavior: "smooth",
	});
}

let slideInterval = setInterval(autoSlide, 3000); // Adjust the interval as needed

// Pause on hover
slider.addEventListener("mouseenter", () => {
	clearInterval(slideInterval);
});

// Resume on mouse leave
slider.addEventListener("mouseleave", () => {
	slideInterval = setInterval(autoSlide, 3000);
});
