window.onload = function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const checkbox = document.getElementById('check');

    links.forEach(link => {
        link.onclick = function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetSection.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (checkbox) checkbox.checked = false;
            }
        };
    });
};
document.addEventListener("DOMContentLoaded", () => {

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
        },
        {
            titulo: "Obligaciones legales para sociedades comerciales",
            resumen: "Cambios normativos que deben implementar empresas y comerciantes en 2026.",
            fecha: "22 Dic 2025",
            categoria: "Derecho Comercial",
            destacada: false,
            url: "#"
        }
    ];

    const featuredContainer = document.getElementById("featured-news");
    const newsList = document.getElementById("news-list");

    noticias.forEach(noticia => {
        if (noticia.destacada) {
            featuredContainer.innerHTML = `
                <span class="featured-label">Noticia Destacada</span>
                <h2 class="featured-title">${noticia.titulo}</h2>
                <p class="featured-excerpt">${noticia.resumen}</p>
                <a href="${noticia.url}" class="featured-link">Leer análisis</a>
            `;
        } else {
            const article = document.createElement("article");
            article.classList.add("news-item");

            article.innerHTML = `
                <div class="news-meta">
                    <span class="news-date">${noticia.fecha}</span>
                    <span class="news-tag">${noticia.categoria}</span>
                </div>
                <h3>${noticia.titulo}</h3>
                <p>${noticia.resumen}</p>
                <a href="${noticia.url}" class="news-read">Leer análisis</a>
            `;

            newsList.appendChild(article);
        }
    });

});
const counter = document.getElementById("counter");
let count = 0;
const target = 350; // CAMBIA ESTE NÚMERO

const interval = setInterval(() => {
    if (count < target) {
        count++;
        counter.textContent = count;
    } else {
        clearInterval(interval);
    }
}, 10);
document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    if (!counter) return;

    let count = 0;
    const target = 350;
    const speed = 10;

    const updateCounter = () => {
        if (count < target) {
            count++;
            counter.textContent = count;
            setTimeout(updateCounter, speed);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
});
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

setTimeout(() => {
    messageBox.style.opacity = "0";
}, 4000);


if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const submitBtn = form.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.innerText = "Enviando...";

        fetch("enviar_local.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {

            messageBox.style.display = "block";
messageBox.style.opacity = "1";

setTimeout(() => {
    messageBox.style.opacity = "0";
}, 4000); // desaparece a los 4 segundos

setTimeout(() => {
    messageBox.style.display = "none";
}, 4500);

            if (data.includes("✔")) {
                messageBox.style.color = "#15a1b3";
                messageBox.innerText = "✔ Solicitud enviada correctamente. Nos pondremos en contacto.";
                form.reset();
            } else {
                messageBox.style.color = "red";
                messageBox.innerText = "❌ Ocurrió un error. Inténtelo nuevamente.";
            }

            submitBtn.disabled = false;
            submitBtn.innerText = "Enviar Solicitud";
        })
        .catch(() => {
            messageBox.style.display = "block";
            messageBox.style.color = "red";
            messageBox.innerText = "❌ Error de conexión.";
            submitBtn.disabled = false;
            submitBtn.innerText = "Enviar Solicitud";
        });
    });
}
