document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos del DOM
    const jugador = document.getElementById('jugador');
    const juego = document.getElementById('juego');

    // 2. Definir variables de Física
    const FUERZA_IMPULSO = 1.0; 
    const FRICCION = 0.95;    
    const VELOCIDAD_MAXIMA = 8; 

    // 3. Variables de Posición, Velocidad y ESTADO DE TECLAS
    let posX = juego.clientWidth / 2;
    let posY = juego.clientHeight / 2;
    let velX = 0; 
    let velY = 0; 

    // Objeto para almacenar qué teclas están pulsadas (el "estado")
    const teclasPulsadas = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };

    // 4. Función de Entrada: Detecta y registra el estado de las teclas
    
    // KeyDown: La tecla se ha pulsado
    document.addEventListener('keydown', (e) => {
        if (teclasPulsadas.hasOwnProperty(e.code)) {
            teclasPulsadas[e.code] = true;
            e.preventDefault(); // Evita que la flecha mueva la página
        }
    });

    // KeyUp: La tecla se ha soltado
    document.addEventListener('keyup', (e) => {
        if (teclasPulsadas.hasOwnProperty(e.code)) {
            teclasPulsadas[e.code] = false;
        }
    });


    // 5. Función de Actualización: Aplica la fuerza según el estado de las teclas
    function actualizarFuerza() {
        if (teclasPulsadas.ArrowUp) {
            velY -= FUERZA_IMPULSO; 
        }
        if (teclasPulsadas.ArrowDown) {
            velY += FUERZA_IMPULSO; 
        }
        if (teclasPulsadas.ArrowLeft) {
            velX -= FUERZA_IMPULSO; 
        }
        if (teclasPulsadas.ArrowRight) {
            velX += FUERZA_IMPULSO; 
        }

        // Limitar la velocidad
        velX = Math.min(Math.max(velX, -VELOCIDAD_MAXIMA), VELOCIDAD_MAXIMA);
        velY = Math.min(Math.max(velY, -VELOCIDAD_MAXIMA), VELOCIDAD_MAXIMA);
    }


    // 6. Función Principal del Bucle de Juego
    function bucleJuego() {
        
        // A. Aplicar Fuerza (según el estado actual de las teclas)
        actualizarFuerza();

        // B. Aplicar Fricción (efecto hielo)
        velX *= FRICCION;
        velY *= FRICCION;

        // C. Actualizar Posición
        posX += velX;
        posY += velY;

        // D. Limitar al Borde del Área de Juego (colisiones)
        const jugadorSize = 50;
        const halfSize = jugadorSize / 2;
        const anchoJuego = juego.clientWidth;
        const altoJuego = juego.clientHeight;

        // Eje X
        if (posX < halfSize) {
            posX = halfSize;
            velX *= -0.5; // Rebote suave en lugar de detenerse abruptamente
        } else if (posX > anchoJuego - halfSize) {
            posX = anchoJuego - halfSize;
            velX *= -0.5; // Rebote suave
        }

        // Eje Y
        if (posY < halfSize) {
            posY = halfSize;
            velY *= -0.5; // Rebote suave
        } else if (posY > altoJuego - halfSize) {
            posY = altoJuego - halfSize;
            velY *= -0.5; // Rebote suave
        }

        // E. Renderizar
        jugador.style.left = `${posX - halfSize}px`;
        jugador.style.top = `${posY - halfSize}px`;

        // F. Volver a llamar al bucle para el siguiente frame
        requestAnimationFrame(bucleJuego);
    }

    // Inicializa el bucle de juego
    bucleJuego();
});