
const numerosDoble = [1,2,3,4,5,6];
const numerosFactorial = [1,2,3,4,5,6];
const palabras = ['neblina', 'tornillo', 'eclipse', 'mandarina', 'horizonte'];

function mayusculas(x){return x.toUpperCase();}

function doble(x){return x *2;} 

function factorial(x) {
    let res=1;
    while(x!=1){
        res = res * (x);
        x--;
    }
    return res;
}

function filtro(array,funcion){
    for(let i=0; i<array.length;i++){
        array[i]= funcion(array[i]);
    }
    return array;
}



document.getElementById('solucion1').innerHTML= filtro(numerosDoble,doble);
document.getElementById('solucion2').innerHTML= filtro(palabras,mayusculas);
document.getElementById('solucion3').innerHTML= filtro(numerosFactorial,factorial);