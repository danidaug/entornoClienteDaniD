const inicio = document.getElementById('inicio');
const usuario = document.getElementById('login');

usuario.style.display='none';
let controlInicio = false;

function login(){
    if(!controlInicio){
        inicio.innerHTML= ``;
    }
    usuario.style.display='inline';
}



document.addEventListener('keydown', function(evento){
    if(evento.ctrlKey && evento.key === 'e' && !controlInicio){
        
        login();
        controlInicio = true;
    }
})

const intervalo = setInterval(function(){
    login();
    controlInicio =true

},5000);

function emailEsValido(email) {
    return email.includes('@');
}

document.getElementById('usuario').addEventListener('input',function(){
    let email = document.getElementById('email').value;
    if(!emailEsValido(email)){
        document.getElementById('emailError').innerHTML='El email debe contener una @';
    }else{
        document.getElementById('emailError').innerHTML='';
    }
})