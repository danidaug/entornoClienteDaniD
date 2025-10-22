let palabras= pedirpalabras();
palabras =elimnarRepes(palabras);
ordenar(palabras);

document.getElementById('solucion').innerHTML=palabras;

function pedirpalabras(){
    let usuInput
    let palabras=[];
    do{
        usuInput=prompt("Introduce una palabra","")
        palabras.push(usuInput) ;
        console.log(usuInput);
    }while(usuInput!='');
    console.log(palabras);
    return palabras;
}

function elimnarRepes(palabras){
    let eliminarPalabras= new Set(palabras);
    palabras = [...eliminarPalabras];
    return palabras;

}

function ordenar(palabras){
    palabras.sort();
    palabras.reverse();
    return palabras;
}



