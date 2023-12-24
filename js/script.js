let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const dotsContainer = document.querySelector('.carousel-dots');

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.carousel-container').style.transform = 'translateX(' + newTransformValue + ')';
    updateDots();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function createDots() {
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

createDots();



function toggleMenu() {
    const wrapMenu = document.querySelector('.wrap-menu');
    const menuItems = document.querySelector('.menu-items');
    const burgerIcon = document.querySelector('.burger-icon');
    menuItems.classList.toggle('active');
    wrapMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
}
