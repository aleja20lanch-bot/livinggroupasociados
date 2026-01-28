document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       NOTICIAS
    ========================== */
    const noticias = [
        {
            titulo: "Reformas clave al derecho civil en 2026",
            resumen: "Análisis jurídico de las reformas que impactan contratos, obligaciones y procesos civiles.",
            fecha: "12 Ene 2026",
            categoria: "Derecho Civil",
            destacada: true,
            url: "#"
        },
        {
            titulo: "Garantías procesales en la imputación penal",
            resumen: "Aspectos fundamentales que toda persona debe conocer frente a una investigación penal.",
            fecha: "05 Ene 2026",
            categoria: "Derecho Penal",
            destacada: false,
            url: "#"
        }
    ];

    const featuredContainer = document.getElementById("featured-news");
    const newsList = document.getElementById("news-list");

    if (featuredContainer && newsList) {
        noticias.forEach(noticia => {
            if (noticia.destacada) {
                featuredContainer.innerHTML = `
                    <h2>${noticia.titulo}</h2>
                    <p>${noticia.resumen}</p>
                `;
            } else {
                const article = document.createElement("article");
                article.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumen}</p>
                `;
                newsList.appendChild(article);
            }
        });
    }

    /* ==========================
       BUSCADOR
    ========================== */
    const searchInput = document.getElementById('blogSearch');
    const articles = document.querySelectorAll('.blog-card');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const value = searchInput.value.toLowerCase();

            articles.forEach(article => {
                article.style.display =
                    article.innerText.toLowerCase().includes(value)
                        ? 'block'
                        : 'none';
            });
        });
    }

    /* ==========================
       MODAL
    ========================== */
    const modal = document.getElementById('blogModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeModal = document.querySelector('.close-modal');

    articles.forEach(card => {
        card.addEventListener('click', () => {
            modalImage.src = card.dataset.image;
            modalTitle.textContent = card.dataset.title;
            modalText.textContent = card.dataset.text;

            modal.style.display = 'flex';
            document.body.style.overflow = "hidden";
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = "";
        });
    }

    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = "";
            }
        });
    }

});
