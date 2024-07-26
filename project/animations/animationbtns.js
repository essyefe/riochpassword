// Animação para o botão de soma
function coloringSum() {
    const $btn = window.document.querySelector('.btn-sum');
    $btn.style.backgroundColor = '#0066FF';
    $btn.style.border = '1px solid white';
    $btn.style.color = '#white';
    
    setTimeout(() => {
        $btn.style.backgroundColor = 'white';
        $btn.style.border = '1px solid #0066FF';
        $btn.style.color = '#0066FF'
    }, 50);
}

// Animação para o botão de subtração
function coloringSub() {
    const $btn = window.document.querySelector('.btn-sub');
    $btn.style.backgroundColor = '#0066FF';
    $btn.style.border = '1px solid white';
    $btn.style.color = '#white';
    
    setTimeout(() => {
        $btn.style.backgroundColor = 'white';
        $btn.style.border = '1px solid #0066FF';
        $btn.style.color = '#0066FF'
    }, 50);
}