/*--- EJERCICIO 1 ----*/
let numeros=0;
function añadirNumero(){
    numeros=(Math.floor(Math.random()* (10-1)));
    document.getElementById('solucion').innerHTML+='<li>'+numeros+'</li>';
    
}

document.getElementById('boton').onclick=añadirNumero;
console.log(numeros)

/*--- EJERCICIO 2 ----*/
let posicion='';
function movimientoMouse(mousemove){
    posicion=mousemove.clientX+' '+mousemove.clientY;
    document.getElementById('posRaton').innerHTML = posicion;
}

document.addEventListener('mousemove',movimientoMouse);

/*--- EJERCICIO 3 ----*/
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const restartP=document.getElementById('restartP');


function p1none(evento){
    console.log('dentro la funcion');
    if(evento.type == 'click'){
        p1.style.opacity=0;
    }
    if(evento.type =='contextmenu'){
        p1.remove();
    }
}
p1.addEventListener('click',p1none);
p1.addEventListener('contextmenu',p1none);

function p2none(evento){
    console.log('dentro la funcion');
    if(evento.type == 'click'){
        p2.style.opacity=0;
    }
    if(evento.type =='contextmenu'){
        p2.remove();
    }
}
p2.addEventListener('click',p2none);
p2.addEventListener('contextmenu',p2none);

function p3none(evento){
    console.log('dentro la funcion');
    if(evento.type == 'click'){
        p3.style.opacity=0;
    }
    if(evento.type =='contextmenu'){
        p3.remove();
    }
}
p3.addEventListener('click',p3none);
p3.addEventListener('contextmenu',p3none);

restartP.addEventListener('click',restart);
function restart(evento){
    if(evento.type=='click'){        
        p1.style.opacity=1;
        p2.style.opacity=1;
        p3.style.opacity=1;
    }
}
/*--- EJERCICIO 4 ----*/

const radios = document.getElementsByName('persona');

