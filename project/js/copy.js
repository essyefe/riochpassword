
function copy() {
    const span = window.document.querySelector('#resultado');
    navigator.clipboard.writeText(span.textContent);
}