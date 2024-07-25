function simbolspassword() {
    return "!@#$%^&*()";
}

function numberpassword() {
    return "0123456789";
}

function maiusculaspassword() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function gerarsenha() {

    console.log('clicado');
    const entrada = window.document.querySelector('#entrada').value;
    const resultado = window.document.querySelector('#resultado');

    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    if (window.document.querySelector('#simbolos').checked) {
        caracteres += simbolspassword();
    }
    if (window.document.querySelector('#numeros').checked) {
        caracteres += numberpassword();
    }
    if (window.document.querySelector('#maiusculas').checked) {
        caracteres += maiusculaspassword();
    }

    let senha = "";
    for (let i = 0; i < entrada; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    if (senha.length >= 5000) {
        console.log('senha grande de mais para ser exibida');
    }
    else {
        resultado.innerText = senha;
    }

}

