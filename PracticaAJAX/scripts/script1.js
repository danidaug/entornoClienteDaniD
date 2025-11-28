fetch ('https://randomuser.me/api/')
.then((response) => {
    if (response.ok) {
        return response.json(); 
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
})
.then((data) => {
    const result = document.getElementById('results');
    let pName = document.createElement('p');
    pName.innerText=data.results[0]['name']['first']+' '+data.results[0]['name']['last'];
    let pMail = document.createElement('p');
    pMail.innerText='Email: '+data.results[0]['email'];
    let pStreet = document.createElement('p');
    pStreet.innerText=data.results[0]['location']['street']['number']+' '+data.results[0]['location']['street']['name'];
    let pCity = document.createElement('p');
    pCity.innerText=data.results[0]['location']['city']+' '+data.results[0]['location']['state'];
    let newImg = document.createElement('img');
    newImg.setAttribute('src',data.results[0]['picture']['large']);
    result.appendChild(newImg);
    result.appendChild(pName);
    result.appendChild(pMail);
    result.appendChild(pStreet);
    result.appendChild(pCity);
    
})
.catch((error) => {
    console.error('Error en la petición:', error);
});