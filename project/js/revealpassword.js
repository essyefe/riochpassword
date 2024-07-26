// Função que revela a senha gerada para o usuario
function revealPassword() {
    const input = window.document.querySelector('#input');
    if (input.value <= 0) {
    }
    else {
        const boxcopy = window.document.querySelector('.box-createpassword');
        boxcopy.style.display = 'flex';
    }
    
}