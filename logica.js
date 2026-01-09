// Validación simple del formulario y efecto de envío
document.getElementById('law-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulación de envío
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Enviando...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    setTimeout(() => {
        alert("Gracias por contactar a Lex & Co. Un abogado se pondrá en contacto con usted en las próximas 24 horas.");
        btn.innerText = originalText;
        btn.style.opacity = "1";
        btn.disabled = false;
        this.reset();
    }, 2000);
});

// Cambio de color del Navbar al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#050c16';
        nav.style.padding = '1rem 10%';
    } else {
        nav.style.background = '#0a192f';
        nav.style.padding = '1.5rem 10%';
    }
});