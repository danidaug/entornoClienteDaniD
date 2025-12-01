const btnSearch = document.getElementById('search');

btnSearch.addEventListener('click',() =>{
    console.log('si')
    async function fetchProducts() {
        const productId = document.getElementById('input').value
        console.log(productId)

         document.getElementById('results').innerHTML = '';
        try{
            const getResponse = await fetch(`https://dummyjson.com/products/${productId}`);

            const getStatus = getResponse.status;

            if (!getResponse.ok) {
                throw new Error(`Error HTTP: ${getResponse.status}`);
            }
            const productData = await getResponse.json();
            
            OutputProduct(productData)
            
            OutputStatus(getStatus);

            const postResponse = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: productData.id,
                    title: productData.title,
                    price: productData.price
                })
            });
            
            const postData = await postResponse.json();
            
            OutputPost(postData);

            const postStatus = postResponse.status;
            
            OutputStatus(postStatus);
                
        }
        catch(error) {

            const errorOutput = document.createElement('h2')
            errorOutput.innerText=` ERROR: ${error}`;
            document.getElementById('results').appendChild(errorOutput);
            console.error('Error:', error);
        }
    }

    fetchProducts();
})

function OutputProduct(data){
    const output = document.getElementById('results');
    
    const productDiv = document.createElement('div');
    
    const title = document.createElement('h3');
    title.innerText = 'DATOS DEL PRODUCTO (GET):';
    productDiv.appendChild(title);
    
    let p = document.createElement('p');
    p.innerHTML = `<strong>ID:</strong> ${data.id}<br>
                   <strong>Título:</strong> ${data.title}<br>
                   <strong>Precio:</strong> $${data.price}`;

    productDiv.appendChild(p);
    
    output.appendChild(productDiv);
}

function OutputPost(data){
    const output = document.getElementById('results');
    
    const postDiv = document.createElement('div');

    const title = document.createElement('h3');
    title.innerText = 'RESPUESTA DEL POST:';
    postDiv.appendChild(title);
    
    let p = document.createElement('p');
    p.innerHTML = `<strong>Título devuelto:</strong> ${data.json.title}`;
    postDiv.appendChild(p);
    
    output.appendChild(postDiv);
}

function OutputStatus(status){
    const output = document.getElementById('results');
    
   
    const statusDiv = document.createElement('div');
    
    
    const title = document.createElement('h3');
    title.innerText = 'STATUS:';
    statusDiv.appendChild(title);
    
    let p = document.createElement('p');
    p.innerHTML = `<strong>Código:</strong> ${status}`;
    
    
    if (status === 200) {
        p.innerHTML += ' Éxito';
    } else if (status === 404) {
        p.innerHTML += ' Producto no encontrado';
    } else if (status >= 400 && status < 500) {
        p.innerHTML += '  Error del cliente';
    } else if (status >= 500) {
        p.innerHTML += ' Error del servidor';
    }
    
    statusDiv.appendChild(p);
    output.appendChild(statusDiv);
}