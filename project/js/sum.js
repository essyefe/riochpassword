function sum() {
    const entrada = window.document.querySelector('#entrada');
    let cont = parseInt(entrada.value) || 0;
    if (entrada.value <= 999) {
        cont++;
        entrada.value = cont;
        console.log(cont);
    }
    else {
        console.log('você está tentando colocar um número muito grande de caracteres para sua senha')
    }
}