const lista = document.getElementById('lista')

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    if (response.ok) {
        return response.json(); 
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
})
.then((data) => {
    console.log('Datos recibidos:', data[0]['name']);
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerText = 'nombre: '+element['name']+' | email: '+element['email'];
        console.log(li.textContent)
        lista.appendChild(li);    
    });
})
.catch((error) => {
    console.error('Error en la petición:', error);
});
