let rastreador = false;
function copysucess() {

    if (rastreador) {
        return;
    }

    const copysucess = window.document.createElement('span');
    copysucess.classList.add('copysucess');
    copysucess.textContent = 'copiado com sucesso!';
    copysucess.style.width = '100%';
    copysucess.style.fontFamily = 'sans-serif';
    copysucess.style.marginLeft = '30vmin';
    copysucess.style.backgroundColor = '#white';
    copysucess.style.padding = '20px';
    copysucess.style.color = '#0066FF';
    copysucess.style.fontSize = '4vmin';
    copysucess.style.border = '5px solid #0066FF';

    window.document.body.appendChild(copysucess);
    console.log('deu certo');
    rastreador = true;

    setTimeout(() => {
        copysucess.remove();
        rastreador = false;
        console.log('elemento removido');
    }, 1000);
}