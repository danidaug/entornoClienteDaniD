const output = document.getElementById('output');
const chart = document.getElementById('chart');

let val = 100;
let valorAnterior = val;

const interval = setInterval(() => {
    let rand = Math.floor(Math.random() * 11) - 5;
    valorAnterior = val;
    val += rand;

    output.textContent = `Valor: ${val}`;

    // ---- Crear vela nueva ----
    const vela = document.createElement("div");
    vela.classList.add("candle");

    const mechaArriba = document.createElement("div");
    mechaArriba.classList.add("mecha");

    const cuerpo = document.createElement("div");
    cuerpo.classList.add("cuerpo");

    const mechaAbajo = document.createElement("div");
    mechaAbajo.classList.add("mecha");

    // Determinado por el cambio (cuánto se movió)
    let diferencia = Math.abs(rand);

    // Alturas (multiplico para que sea más visual)
    cuerpo.style.height = `${diferencia * 6}px`;
    mechaArriba.style.height = `${Math.random() * 20}px`;
    mechaAbajo.style.height = `${Math.random() * 20}px`;

    // Color según suba o baje
    if (val > valorAnterior) {
        cuerpo.style.background = "green"; // subió
    } else {
        cuerpo.style.background = "red"; // bajó
    }

    // Agregar elementos a la vela
    vela.appendChild(mechaArriba);
    vela.appendChild(cuerpo);
    vela.appendChild(mechaAbajo);

    // Agregar vela al chart
    chart.appendChild(vela);

    // detener si el valor sale del range
    if (val <= 80 || val >= 120) {
        output.textContent = `Valor: ${val} — ¡MAXIMO O MINIMO ALCANZADO!`;
        clearInterval(interval);
    }

}, 1000);
