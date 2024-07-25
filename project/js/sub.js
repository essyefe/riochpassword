function sub() {
    const entrada = window.document.querySelector('#entrada');
    let cont = parseInt(entrada.value) || 0;
    if (entrada.value > 0) {
        cont--;
        entrada.value = cont;
        console.log(cont);
    }
    else {
        console.log('limite minimo atingido')
    }
}