
if(localStorage.getItem("name")){
    alert('Hola '+localStorage.getItem("name"));
}
const enviar = document.getElementById('enviar');
enviar.addEventListener('click', () =>{
    const name = document.getElementById('name').value;
    localStorage.setItem("name", name);
    console.log('guardado '+name)
    
})