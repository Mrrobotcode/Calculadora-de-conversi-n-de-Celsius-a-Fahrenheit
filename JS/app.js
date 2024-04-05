const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener('click', () => {
    const clickboton = boton.textContent;

if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
}

if (boton.id === "igual") {
    try {
        if (isNaN(pantalla.textContent)) {
            pantalla.textContent = 'Error'
        } else {
            const resultado = (1.8 * pantalla.textContent) + 32;
            pantalla.textContent = resultado + '°F';
        }
    } catch (error) {
        pantalla.textContent = "Error"
    }
    return;
}

if (pantalla.textContent.length > 14) {
        pantalla.textContent = "Error"
        return;
}

if (boton.id === "borrar") {
    if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        pantalla.textContent = "0"
} else {
    pantalla.textContent = pantalla.textContent.slice(0, -1);
}
    return;
}

if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
    pantalla.textContent = clickboton;
} else {
    pantalla.textContent += clickboton;
}
})
})