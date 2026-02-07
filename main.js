// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-bar ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-bar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Gallery Slider =====
const gallerySlider = document.querySelector('#slider-js');
const prevBtn = document.querySelector('.slider-button.prev');
const nextBtn = document.querySelector('.slider-button.next');

let galleryIndex = 0;
const galleryImages = gallerySlider.children;

function updateGallery() {
    const imageWidth = galleryImages[0].offsetWidth + 20; // include margin-right
    gallerySlider.style.transform = `translateX(-${galleryIndex * imageWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (galleryIndex < galleryImages.length - 1) {
        galleryIndex++;
        updateGallery();
    }
});

prevBtn.addEventListener('click', () => {
    if (galleryIndex > 0) {
        galleryIndex--;
        updateGallery();
    }
});
