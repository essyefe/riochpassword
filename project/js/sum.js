// Função para aumentar o input do usuario ( Mobile )
function sum() {
    const input = window.document.querySelector('#input');
    let cont = parseInt(input.value) || 0;
    if (input.value <= 999) {
        cont++;
        input.value = cont;
        console.log(cont);
    }
    else {
        return;
    }
}