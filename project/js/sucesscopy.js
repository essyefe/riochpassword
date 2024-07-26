const copysucess = window.document.createElement('span');
let tracker = false;

// Função para personalizar o span de sucesso ( senha copiada )
function createSpanCopySucess() {
    copysucess.classList.add('copysucess');
    copysucess.textContent = 'copiado com sucesso';
    copysucess.style.width = '100%';
    copysucess.style.fontFamily = 'sans-serif';
    copysucess.style.marginLeft = '25vmin';
    copysucess.style.marginTop = '20vmin';
    copysucess.style.backgroundColor = '#0066FF';
    copysucess.style.padding = '15px';
    copysucess.style.color = 'white';
    copysucess.style.fontSize = '4vmin';
    copysucess.style.borderRadius = '100px';
}

// Função para adicionar o span de sucesso
function sucessCopy() {
    if (tracker) {
        return;
    }

    createSpanCopySucess();

    window.document.body.appendChild(copysucess);
    tracker = true;

    // Temporizador para remover o span de sucesso
    setTimeout(() => {
        copysucess.remove();
        tracker = false;
    }, 1000);
}

