// Elementi
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');

// Kada se klikne na DA dugme
yesBtn.addEventListener('click', () => {
    successMessage.classList.remove('hidden');
    setTimeout(() => {
        successMessage.classList.add('show');
    }, 10);
    
    // Dodaj confetti efekat (opcionalno)
    createConfetti();
});

// Dugme NE beži od miša
noBtn.addEventListener('mouseover', (e) => {
    const btn = e.target;
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    
    // Dobij dimenzije kontejnera
    const maxX = containerRect.width - btn.offsetWidth;
    const maxY = containerRect.height - btn.offsetHeight;
    
    // Generiši random poziciju
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    
    // Postavi novu poziciju
    btn.style.position = 'absolute';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    btn.style.transform = 'none';
});

// Funkcija za kreiranje confetti efekta
function createConfetti() {
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#ffc0cb', '#ff69b4'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            // Animacija padanja
            let top = -10;
            let left = parseFloat(confetti.style.left);
            const fallSpeed = 2 + Math.random() * 3;
            const sway = (Math.random() - 0.5) * 2;
            
            const fall = setInterval(() => {
                top += fallSpeed;
                left += sway;
                confetti.style.top = top + 'px';
                confetti.style.left = left + 'px';
                confetti.style.opacity = 1 - (top / window.innerHeight);
                
                if (top > window.innerHeight) {
                    clearInterval(fall);
                    confetti.remove();
                }
            }, 20);
        }, i * 30);
    }
}

// Dodatna animacija za srca
document.addEventListener('DOMContentLoaded', () => {
    // Kreiranje lebdećih srca u pozadini
    setInterval(createFloatingHeart, 2000);
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '30px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-50px';
    heart.style.opacity = '0.6';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    
    document.body.appendChild(heart);
    
    let bottom = -50;
    const riseSpeed = 2;
    
    const rise = setInterval(() => {
        bottom += riseSpeed;
        heart.style.bottom = bottom + 'px';
        
        if (bottom > window.innerHeight + 50) {
            clearInterval(rise);
            heart.remove();
        }
    }, 30);
}
