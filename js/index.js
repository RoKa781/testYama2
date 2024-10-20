const imgItem = document.querySelector('.main__img-item');
const circle = document.querySelector('.main__img-circle');
let startTime = null;

function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    
    const duration = 2000;
    const progress = Math.min(elapsed / duration, 1);

    const currentBottom = -100 + (progress * 100);
    imgItem.style.bottom = `${currentBottom}%`;

    if (progress < 1) {
        requestAnimationFrame(animate);
    }
}


setTimeout(() => requestAnimationFrame(animate), 700)

