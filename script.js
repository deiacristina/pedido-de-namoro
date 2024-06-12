const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const heartContainer = document.querySelector('.heart-container');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    const giantHeart = document.createElement('div');
    giantHeart.className = 'giant-heart';
    document.body.appendChild(giantHeart);
    setTimeout(() => {
        giantHeart.remove();
    }, 3000);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${window.innerHeight}px`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);