


let usuInput
const palabras = new Map();
do{
    usuInput=prompt("Introduce una palabra","")
    if(usuInput===''){
        break;
    }
    if(palabras.has(usuInput)){
        palabras.set(usuInput,palabras.get(usuInput)+1);
    }
    else{
        palabras.set(usuInput,1);
    }
    console.log(usuInput);
}while(usuInput!='');
let claves=palabras.keys();
let valores= palabras.values();
const res=[];
for (let [clave, valor] of palabras){
    res.push('( '+clave+' : '+valor+' )');
}
console.log(res);

document.getElementById('solucion').innerHTML= res;