console.log('hola');
const btnCrear  = document.getElementById('crear');
const rectDisplay = document.getElementById('rectDisplay');
const formCreate = document.getElementById('crearRect');
const btnArea = document.getElementById('area');
let rectanguloSeleccionado = null;
const btnActualizar = document.getElementById('actualizar')
btnCrear.addEventListener('click', () => {
    const xValue = document.getElementById('xValue').value;
    const yValue = document.getElementById('yValue').value;

    if (!xValue || !yValue) {
        alert('Por favor ingresa ancho y alto');
        return;
    }

    const rect = new Rectangulo(xValue, yValue);
    const elementoHTML = rect.crearElemento();
    rectDisplay.append(elementoHTML);
});

class Rectangulo{
    constructor(xValue,yValue){
        this.xValue = this.validarValor(xValue);
        this.yValue = this.validarValor(yValue);
    }
    crearElemento() {
        const div = document.createElement('div');
        div.style.margin = 20 +'px';
        div.style.width = this.xValue + 'px';
        div.style.height = this.yValue + 'px';
        div.style.backgroundColor = 'aquamarine';
        div.style.border='2px white solid';
        div.style.borderRadius='20px'
        div.classList.add("element");
        

        div.addEventListener('click', () => {
            document.querySelectorAll('.element').forEach(el => el.classList.remove('selected'));
              div.classList.add('selected');
              rectanguloSeleccionado = div;
              document.getElementById('xValueEdit').value = parseInt(div.style.width);
              document.getElementById('yValueEdit').value = parseInt(div.style.height);
        });
        return div;
    }
    validarValor(valor){
        if(valor<=0){
            return 1;
        }else{
            return valor;
        }

    }
    calucalarArea (){
        return this.xValue*this.yValue;
    }
}
btnArea.addEventListener('click',() => {
    if (!rectanguloSeleccionado) {
        alert('Selecciona un rectángulo primero');
        return;
    }
    
});
btnActualizar.addEventListener('click', () => {
    if (!rectanguloSeleccionado) {
        alert('Selecciona un rectángulo primero');
        return;
    }

    const newX = document.getElementById('xValueEdit').value;
    const newY = document.getElementById('yValueEdit').value;

    rectanguloSeleccionado.style.width = newX + 'px';
    rectanguloSeleccionado.style.height = newY + 'px';
});