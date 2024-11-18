let slideIndex = 1;
let autoSlideInterval;

// Initialize slider functionality on page load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementsByClassName("slide").length > 0) {
        showSlides(slideIndex);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Attach the event listener to all dropdown menu links
    const dropdownToggles = document.querySelectorAll(".dropdown > a");
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", toggleDropdown);
    });
});

// Slider controls
function plusSlides(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex += n);
    resetAutoSlide();
}

function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex = n);
    resetAutoSlide();
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.opacity = "0";
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1";
    }, 50);
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
}

function resetAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

// Dropdown functionality
function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = event.target.closest('.dropdown'); // Get parent dropdown
    dropdown.classList.toggle('open'); // Toggle the 'open' class
}

// Close dropdowns when clicking outside
document.addEventListener("click", (event) => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
});
// Dropdown toggle functionality
function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = event.target.closest('.dropdown'); // Get parent dropdown
    dropdown.classList.toggle('open'); // Toggle the 'open' class
}

// Attach event listeners to dropdown menu links
document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown > a");
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", toggleDropdown);
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open'); // Close dropdown
        }
    });
});
