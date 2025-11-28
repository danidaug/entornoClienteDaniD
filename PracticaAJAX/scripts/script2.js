const btn = document.getElementById('search');
btn.addEventListener('click',()=>{
    id =input();
    fetch('https://dummyjson.com/products/'+id)
    .then((response) => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    })
    .then((data) => {
        let p =  document.createElement('p')
        p.innerText = data['id']+' '+data['title']+' '+data['price'];
        document.getElementById('results').appendChild(p)
    })
    .catch((error) => {
        console.error('Error en la petición:', error);
    });
})
function input (){
    let id = document.getElementById('input').value;
    return id;
}