
function copy() {

    const span = window.document.querySelector('#resultado');

    navigator.clipboard.writeText(span.textContent).then(() => {
        alert('copiado com sucesso!' + span.textContent);
    })
}