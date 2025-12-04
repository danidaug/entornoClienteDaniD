async function cuenta() {
    const finCuenta = new Promise((resolve,reject) =>{
        
        let i =5;
        const p = document.createElement('p');
        const cuentaAtras = setInterval(function(){
            p.innerText = i;
            i--;
            document.body.appendChild(p);
            if(i <0){
                clearInterval(cuentaAtras);
                resolve();
            }

        },1000)
    })
    await finCuenta;
    let permiso = Notification.permission;
    if (permiso === 'default') {
        Notification.requestPermission().then((resp) => {
            if (resp === 'granted') {
                noti();
            }
        });
    } else if (permiso === 'granted') {
        noti();
    }
 
}
cuenta();



function noti() {
    let n = new Notification('Video', {
        body: '¡Mira Este Video!',
        icon: './media/icon.png'
    });

    n.addEventListener('click', () => {
        window.open('./video.html');
    });
    
}