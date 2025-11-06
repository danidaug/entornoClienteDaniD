const output = document.getElementById('output');
let val = 100;
let palito = document.getElementById('palito');

const intervalo = setInterval(function(){
    let rand = Math.floor(Math.random() * 11) - 5; 
    val += rand;
    output.innerHTML = 'Valor: <span class="val">'+val+'</span>';
    if(rand<0){
        palito.style.backgroundColor='#f52222';
    }else{
        palito.style.backgroundColor='#29a029';
    }
    palito.style.width = val*3+'px'; 

    if (val <= 80 || val >= 120) {
        if(val<=80){
            output.textContent = 'MINIMO ALCANZADO!!';
            output.style.color='#f52222';
        }else{
            output.textContent = 'MÁXIMO ALCANZADO!!';
            output.color='#29a029';
        }
        
        clearInterval(intervalo); 
    }
}, 1000);
