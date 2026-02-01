document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');
    const checkbox = document.getElementById('check');

    links.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                const offset = 80;
                const elementPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });

                if (checkbox) checkbox.checked = false;
            }
        });
    });

    // Link activo
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

});
// Servicios

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {

        // Solo en dispositivos sin hover (móvil)
        if (window.matchMedia('(hover: none)').matches) {
            card.classList.toggle('active');
        }

    });
});
