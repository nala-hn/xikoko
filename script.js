document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animate-from-above');
    animatedElement.classList.add('opacity-100');
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animate-from-left');
    animatedElement.classList.add('opacity-100');
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animate-from-right');
    animatedElement.classList.add('opacity-100');
});


document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animate-from-below');
    animatedElement.classList.add('opacity-100');
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animate-top-left-corner');
    animatedElement.classList.add('opacity-100');
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.querySelector('.animate-bottom-right-corner');
    animatedElement.classList.add('opacity-100');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});
