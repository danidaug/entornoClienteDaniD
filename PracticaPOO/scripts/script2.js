class Ordenador {
    constructor(marca, modelo, ram = 4, discoDuro = 512, pulgadas = 17) {
        if (!marca || !modelo) {
            throw new Error("La marca y el modelo son obligatorios");
        }

        this.marca = marca;
        this.modelo = modelo;
        this.ram = Number(ram);
        this.discoDuro = Number(discoDuro);
        this.pulgadas = Number(pulgadas);
    }

    toString() {
        return '<strong>Ordenador:</strong> '+this.marca +' '+this.modelo+'<br> RAM: '+this.ram+' GB<br> Disco duro: '+this.discoDuro+' GB<br> Pantalla: '+this.pulgadas;
    }
}

class Portatil extends Ordenador {
  constructor(marca, modelo, ram = 4, discoDuro = 256, pulgadas = 12, autonomia = 4) {
    super(marca, modelo, ram, discoDuro, pulgadas);
    this.autonomia = Number(autonomia);
  }

  toString() {
    return `
      <strong>Portátil:</strong> ${this.marca} ${this.modelo}<br>
      RAM: ${this.ram} GB<br>
      Disco duro: ${this.discoDuro} GB<br>
      Pantalla: ${this.pulgadas}"<br>
      Autonomía: ${this.autonomia} horas`;
  }
}


const resultado = document.getElementById('resultado');


const pc1 = new Ordenador("Dell", "OptiPlex 3000");
const pc2 = new Ordenador("HP", "Envy", 8, 1000, 19);
const portatil1 = new Portatil("Lenovo", "ThinkPad");
const portatil2 = new Portatil("Apple", "MacBook Air", 8, 512, 13, 10);

const ordenadores = [pc1, pc2, portatil1, portatil2];

ordenadores.forEach(obj => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = obj.toString();
    resultado.appendChild(div);
});
