document.addEventListener("DOMContentLoaded", () => {
    let enQuechua = localStorage.getItem("idioma") === "quechua";

    const toggleBtn = document.getElementById("toggle-lang");
    const texts = document.querySelectorAll("[data-es]");
    const imgTraducibles = document.querySelectorAll(".img-traducible");

    function aplicarIdioma() {
        texts.forEach(el => {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = enQuechua ? el.dataset.qu : el.dataset.es;
            } else {
                el.textContent = enQuechua ? el.dataset.qu : el.dataset.es;
            }
        });

        imgTraducibles.forEach(img => {
            img.src = enQuechua ? img.dataset.qu : img.dataset.es;
        });

        if (toggleBtn) {
            toggleBtn.textContent = enQuechua ? "Español" : "Quechua";
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            enQuechua = !enQuechua;
            localStorage.setItem("idioma", enQuechua ? "quechua" : "espanol");
            aplicarIdioma();
        });
    }

    aplicarIdioma();
});
