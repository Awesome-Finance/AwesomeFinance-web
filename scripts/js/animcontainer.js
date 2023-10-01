//animation container script for Lottie
document.addEventListener("DOMContentLoaded", function() {
const animationContainer = document.getElementById('lottie-container');
const animationData = {
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/fin/bus-chart-01-anim.json',
};
const anim = lottie.loadAnimation(animationData);

});