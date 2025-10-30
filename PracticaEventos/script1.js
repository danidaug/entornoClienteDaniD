
const btnSaludar = document.getElementById('btnSaludar');
const btnCrear = document.getElementById('btnCrear');
const btnRand = document.getElementById('btnRand');
const randNum= document.getElementById('randNum');
const btnRestart= document.getElementById('btnRestart');

btnSaludar.addEventListener('click',() => {
    alert('Saludos ; ) ')
})

btnCrear.addEventListener('click', () => {
    const element = document.createElement('div');
    element.innerText = 'Nueva Caja';
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.backgroundColor = 'red';
    element.classList.add("element");
    document.body.append(element);
});

btnRand.addEventListener('click', () => {
    let rand = Math.floor(Math.random()*100 *1);
    randNum.innerHTML=rand;
})

btnRestart.addEventListener('click', () =>{
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.remove();
    });
    randNum.innerHTML=' ';
   
})