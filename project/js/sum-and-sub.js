let cont = 0;


function sum() {
    const entrada = window.document.querySelector('#entrada');
    cont++;
    entrada.value = cont;
    console.log(cont);
}

function sub() {
    const entrada = window.document.querySelector('#entrada');
    if(entrada.value > 0) {
        cont--;
    }
    entrada.value = cont;
    console.log(cont);
}

/*
let cont = 0;

function sum() {
    let entrada = window.document.querySelector('#entrada');
    cont++;
    entrada.value = cont;
    console.log(cont);
}*/
