
let slideIndex = 1;
let autoSlideInterval;


document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementsByClassName("slide").length > 0) {
        showSlides(slideIndex);
        autoSlideInterval = setInterval(nextSlide, 5000); 
    }
});


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

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

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


function toggleDropdown(event) {
    event.preventDefault(); 
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
}


document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
