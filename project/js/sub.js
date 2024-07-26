// Função para diminuir o input do usuario ( Mobile )
function sub() {
    const input = window.document.querySelector('#input');
    let cont = parseInt(input.value) || 0;
    if (input.value > 0) {
        cont--;
        input.value = cont;
        console.log(cont);
    }
    else {
        console.log('limite minimo atingido');
    }
}