// Função que copia o a senha gerada
function copy() {
    const span = window.document.querySelector('#result');
    navigator.clipboard.writeText(span.textContent);
}