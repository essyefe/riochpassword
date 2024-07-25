function oncopyz() {
    const entrada = window.document.querySelector('#entrada');
    if (entrada.value <= 0) {
        console.log('numero muito pequeno')
    }
    else {
        const boxcopy = window.document.querySelector('.box-createpassword');
        boxcopy.style.display = 'flex';
    }
    
}