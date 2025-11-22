// === МАГИЯ АКТИВАЦИИ ANIMA MUNDI ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🕯️ Портал ANIMA MUNDI активирован...');
    
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 40, density: { enable: true, value_area: 800 }},
                color: { value: "#d4af37" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#d4af37",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            }
        });
    }

    const cursor = document.querySelector('.cursor-follower');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }

    const mantras = [
        "Время - это иллюзия",
        "Пространство - это холст", 
        "Искусство - это мост между мирами",
        "Красота спасет вселенные"
    ];
    const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
    console.log(`📜 Мантра дня: "${randomMantra}"`);
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const energyOrb = document.querySelector('.energy-orb');
    if (energyOrb) {
        energyOrb.style.transform = `translate(-50%, ${-50 + scrolled * 0.3}%)`;
    }
});
