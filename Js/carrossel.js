let slides = document.querySelectorAll(".slide");
let index = 0;

function mostrarSlide() {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[index].classList.add("ativo");
}

function proximoSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    mostrarSlide();
}

function voltarSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    mostrarSlide();
}

setInterval(proximoSlide, 5000);