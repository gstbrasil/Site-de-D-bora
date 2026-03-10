const foto = document.getElementById("fotocoracao");

foto.addEventListener("mousemove", (e) => {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    const rect = foto.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    foto.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);
});