const output = document.getElementById('output');
let val = 100;
let palito = document.getElementById('palito');

const interval = setInterval(function(){
    let rand = Math.floor(Math.random() * 11) - 5; 
    val += rand;
    output.textContent = `Valor: ${val}`;
    if(rand<0){
        palito.style.backgroundColor='red';
    }else{
        palito.style.backgroundColor='green';
    }
    palito.style.height = `${val}px`; // ← Aquí se cambia

    if (val <= 80 || val >= 120) {
        if(val<=80){
            output.textContent = 'MINIMO ALCANZADO!!';
        }else{
            output.textContent = 'Maximo alcanzado';
        }
        
        clearInterval(interval); 
    }
}, 1000);
