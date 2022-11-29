function setCircle(color) {
    let item = document.querySelector(".inside-circle-container");
    let span = document.querySelector(".inside-circle-container span");
    item.style.backgroundColor = color === "yellow" ? "#ffcc33" : color === "red" ? "#ff3737" : "#707070";
    span.innerHTML = `Texto com fundo <b>${color === "yellow" ? "amarelo" : color === "red" ? "vermelho" : "cinza"}!</b>`
}