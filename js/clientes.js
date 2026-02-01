const openModal = document.getElementById('openClientsModal');
const modal = document.getElementById('clientsModal');
const closeBtn = modal.querySelector('.close-modal');

// ABRIR MODAL
openModal.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// CERRAR CON LA X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// CERRAR AL CLIC FUERA DEL CONTENIDO
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// (OPCIONAL) CERRAR CON ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
