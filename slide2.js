const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let isDragging = false;
let startPosX;
let startTranslateX;
let currentTranslateX = 0;

function handleMouseDown(event) {
    isDragging = true;
    startPosX = event.clientX;
    startTranslateX = currentTranslateX;
    imgs.style.cursor = "grabbing";
}

function handleMouseMove(event) {
    if (isDragging) {
        const deltaX = event.clientX - startPosX;
        currentTranslateX = startTranslateX + deltaX / imgs.clientWidth * 100;
        setTranslateX(currentTranslateX);
    }
}

function handleMouseUp() {
    if (isDragging) {
        isDragging = false;
        imgs.style.cursor = "grab";
    }
}       

function handleMouseLeave() {
    handleMouseUp();
}

function setTranslateX(translateX) {
    imgs.style.transform = `translateX(${translateX}%)`;
}

function carrossel() {
    if (!isDragging) {
        currentTranslateX -= 1; // Ajuste a velocidade conforme necessário
        setTranslateX(currentTranslateX);
    }

    requestAnimationFrame(carrossel);
}

imgs.addEventListener("mousedown", handleMouseDown);
imgs.addEventListener("mousemove", handleMouseMove);
imgs.addEventListener("mouseup", handleMouseUp);
imgs.addEventListener("mouseleave", handleMouseLeave);

requestAnimationFrame(carrossel);



