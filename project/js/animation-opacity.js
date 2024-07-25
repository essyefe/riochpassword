function opacity() {
    const resultado = window.document.querySelector('#resultado');
    const opacity = new KeyframeEffect(
        resultado,
        [
            {opacity: 0},
            {opacity: 1}
        ],
        {duration:300}
    )
    const animeopacity = new Animation(opacity, document.timeline);
    animeopacity.play();
}