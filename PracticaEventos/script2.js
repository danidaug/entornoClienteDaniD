const form = document.querySelector('form')
const emailField=document.getElementById('email');
const passwordField=document.getElementById('password');

emailField.addEventListener('input',function(){
    let email = document.getElementById('email').value;
    if(!emailEsValido(email)){
        document.getElementById('emailError').innerHTML='El email debe contener una @';
    }else{
        document.getElementById('emailError').innerHTML='';
    }
})

passwordField.addEventListener('input',function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const butt = document.getElementById('enviar')
    if(!passwordEsValido(password)){
        document.getElementById('passwordError').innerHTML='La contraseña debe tener entre 8 y 10 caracteres';
    }else{
        document.getElementById('passwordError').innerHTML='';
    }
    if(passwordEsValido(password) && emailEsValido(email)){
        butt.disabled=false;
    }else{
        console.log('invalid')
        butt.disabled=true;
    }
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = emailField.value;
    const password = passwordField.value;
    const butt = document.getElementById('enviar')
    email.remove;
    password.remove;
  
    
    
});
function emailEsValido(email) {
    return email.includes('@');
}

function passwordEsValido(password){
    return password.length >= 8 && password.length <= 10;
}