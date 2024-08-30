// scripts.js
document.addEventListener('scroll', function() {
    const container = document.querySelector('.scroll-container');
    const slideWidth = container.querySelector('.slide').offsetWidth;
    const totalSlides = document.querySelectorAll('.slide').length;

    // Calculate the total width of all slides combined
    const totalWidth = totalSlides * slideWidth;

    // Calculate the current scroll position
    const scrollPosition = window.scrollY;

    // Calculate the translateX value based on scroll position
    let translateX = scrollPosition % totalWidth;

    // Apply the translation to the container
    container.style.transform = `translateX(-${translateX}px)`;

    // Handle circular scroll by resetting position if it goes beyond the total width
    if (translateX >= totalWidth - window.innerWidth) {
        container.style.transform = `translateX(0)`;
        window.scrollTo(0, 0); // Optional: Reset scroll position
    }
});
