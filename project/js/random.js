function simbolspassword() {
    return "!@#$%^&*()";
}

function numberpassword() {
    return "0123456789";
}

function uppercasepassword() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function generatePassword() {

    const input = window.document.querySelector('#input').value;
    const result = window.document.querySelector('#result');

    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (window.document.querySelector('#simbolos').checked) {
        characters += simbolspassword();
    }
    if (window.document.querySelector('#numeros').checked) {
        characters += numberpassword();
    }
    if (window.document.querySelector('#maiusculas').checked) {
        characters += uppercasepassword();
    }

    let password = "";
    for (let i = 0; i < input; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (password.length >= 5000) {
        console.log('senha grande de mais para ser exibida');
    }
    else {
        result.innerText = password;
    }

}

