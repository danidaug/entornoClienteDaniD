fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    if (response.ok) {
        return response.json(); 
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
})
.then((data) => {
    console.log('Datos recibidos:', data);
})
.catch((error) => {
    console.error('Error en la petición:', error);
});