const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrix.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ffff';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

const terminal = document.getElementById('terminal');
const typedText = document.getElementById('typed-text');

const commands = [
    "Iniciando sistema...",
    "Carregando perfil...",
    "Analista: André Militão",
    "Sistema: ONLINE ✓",
    "Pronto para deploy!"
];

let currentLine = 0;
let currentChar = 0;
let isDeleting = false;

function typeTerminal() {
    if (currentLine >= commands.length) {
        currentLine = 0;
        setTimeout(typeTerminal, 2000);
        return;
    }

    const currentCommand = commands[currentLine];
    
    if (!isDeleting) {
        if (currentChar <= currentCommand.length) {
            terminal.innerHTML += `<div class="terminal-line">${currentCommand.substring(0, currentChar)}<span class="cursor">█</span></div>`;
            currentChar++;
            setTimeout(typeTerminal, 50);
        } else {
            isDeleting = true;
            setTimeout(typeTerminal, 1000);
        }
    } else {
        terminal.innerHTML = terminal.innerHTML.replace(/<div class="terminal-line">.*?<span class="cursor">█<\/span><\/div>/, '');
        currentChar--;
        if (currentChar >= 0) {
            setTimeout(typeTerminal, 30);
        } else {
            isDeleting = false;
            currentLine++;
            terminal.innerHTML += '<div class="terminal-line cursor">█</div>';
            setTimeout(typeTerminal, 500);
        }
    }
}

setTimeout(typeTerminal, 1000);

const typedTextElement = document.getElementById('typed-text');
const typingSpeed = 100;
const roles = [
    "André Militão",
    "Analista de Sistemas",
    "Desenvolvedor Full-Stack",
    "Especialista em Cibersegurança",
    "Criador Digital"
];

let roleIndex = 0;
let charIndex = 0;
let isDeletingRole = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeletingRole) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = typingSpeed;

    if (isDeletingRole) {
        typeSpeed /= 2;
    }

    if (!isDeletingRole && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeletingRole = true;
    } else if (isDeletingRole && charIndex === 0) {
        isDeletingRole = false;
        roleIndex++;
        typeSpeed = 500;
        
        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }

    setTimeout(typeRole, typeSpeed);
}

window.addEventListener('load', () => {
    setTimeout(typeRole, 3000);
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer para animações
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.id === 'habilidades') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.width = level + '%';
        }, 200);
    });
}

const cyberNav = document.querySelector('.cyber-nav');
const logoText = document.querySelector('.logo-text');

function toggleMobileMenu() {
    cyberNav.classList.toggle('active');
    logoText.style.display = logoText.style.display === 'none' ? 'block' : 'none';
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(0, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            animation: float ${Math.random() * 15 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
    }
}

// CSS para animação das partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Efeito de glitch no logo
function addGlitchEffect() {
    const logo = document.querySelector('.logo-text');
    if (logo) {
        setInterval(() => {
            if (Math.random() < 0.03) { // 3% de chance
                const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
                const originalText = logo.textContent;
                let glitchText = '';
                
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() < 0.1) {
                        glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    } else {
                        glitchText += originalText[i];
                    }
                }
                
                logo.style.textShadow = '2px 0 #ff0040, -2px 0 #00ffff';
                logo.textContent = glitchText;
                
                setTimeout(() => {
                    logo.style.textShadow = 'none';
                    logo.textContent = originalText;
                }, 100);
            }
        }, 100);
    }
}

// Efeito de typewriter para cards
function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Adicionar efeitos aos cards quando aparecem
const cards = document.querySelectorAll('.formation-card, .project-card, .contact-card');
cards.forEach((card, index) => {
    const originalContent = card.innerHTML;
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    });
    
    observer.observe(card);
});

// Loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease-out;
    `;
    
    const loaderContent = document.createElement('div');
    loaderContent.style.cssText = `
        text-align: center;
        color: #00ffff;
        font-family: 'JetBrains Mono', monospace;
    `;
    
    loaderContent.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem;">INICIANDO SISTEMA...</div>
        <div style="width: 300px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
            <div id="progress-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #00ffff, #8b5cf6); border-radius: 2px; transition: width 2s ease-out;"></div>
        </div>
    `;
    
    loader.appendChild(loaderContent);
    document.body.appendChild(loader);
    
    // Animar barra de progresso
    const progressBar = document.getElementById('progress-bar');
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);
    
    // Remover loader
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        }, 500);
    }, 2200);
});

// Adicionar evento de clique para todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Redimensionar canvas quando a janela muda
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Efeito de hover nos botões cyber
const cyberButtons = document.querySelectorAll('.cyber-btn');
cyberButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

// Criar efeito de ripple nos botões
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// CSS para o efeito ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 600ms linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Adicionar efeito ripple aos botões
cyberButtons.forEach(btn => {
    btn.addEventListener('click', createRipple);
});

// Inicializar efeitos especiais
addGlitchEffect();
createFloatingParticles();

// Console.log estilizado
console.log('%c🎯 PORTFÓLIO CARREGADO COM SUCESSO! 🎯', 
    'color: #00ffff; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');

console.log('%cDesenvolvido com', 
    'color: #94a3b8; font-size: 12px;');
console.log('%c♥ e muito código', 
    'color: #10b981; font-size: 14px; font-weight: bold;');
