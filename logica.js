// Efecto de scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Cerrar menú móvil al hacer click
            document.getElementById('check').checked = false;
        }
    });
});

// Cambio de color en la navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(4, 18, 25, 0.98)';
        navbar.style.padding = '10px 8%';
    } else {
        navbar.style.background = 'rgba(4, 18, 25, 0.95)';
        navbar.style.padding = '15px 8%';
    }
});
