// Animação de opacidade para o elemento resultado criado dinamicamente
function dinamicsOpacity() {
    const result = window.document.querySelector('#result');
    const opacity = new KeyframeEffect(
        result,
        [
            {opacity: 0},
            {opacity: 1}
        ],
        {duration:300}
    )
    const animeopacity = new Animation(opacity, document.timeline);
    animeopacity.play();
}