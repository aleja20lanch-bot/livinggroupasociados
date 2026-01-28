document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    if (!form || !messageBox) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const formData = new FormData(form);
        const submitBtn = form.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.innerText = "Enviando...";

        fetch("enviar_local.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(data => {
            messageBox.style.display = "block";
            messageBox.style.opacity = "1";

            if (data.includes("✔")) {
                messageBox.style.color = "#15a1b3";
                messageBox.innerText = "✔ Solicitud enviada correctamente.";
                form.reset();
            } else {
                messageBox.style.color = "red";
                messageBox.innerText = "❌ Error al enviar.";
            }

            setTimeout(() => {
                messageBox.style.opacity = "0";
            }, 4000);

            submitBtn.disabled = false;
            submitBtn.innerText = "Enviar Solicitud";
        })
        .catch(() => {
            messageBox.innerText = "❌ Error de conexión.";
            submitBtn.disabled = false;
        });
    });

});
