document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("introVideo");
    const contenido = document.querySelector(".contenido");
    const videoIntro = document.querySelector(".video-intro");

    video.addEventListener("ended", function() {
        // Desvanece el video
        videoIntro.style.transition = "opacity 1s";
        videoIntro.style.opacity = 0;

        // Espera a que termine la transición y luego oculta el video
        setTimeout(() => {
            videoIntro.style.display = "none"; // Oculta el video
            contenido.style.display = "block"; // Muestra el contenido
        }, 1000); // Tiempo de espera igual al tiempo de transición
    });
});