/* Reset e Configurações Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-bg: #0a0a0a;
    --secondary-bg: #111111;
    --terminal-bg: #0d1117;
    --accent-cyan: #00ffff;
    --accent-purple: #8b5cf6;
    --accent-green: #10b981;
    --accent-orange: #f59e0b;
    --text-primary: #e2e8f0;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border-color: #1e293b;
    --neon-glow: 0 0 20px currentColor;
}

body {
    background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
    color: var(--text-primary);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    overflow-x: hidden;
    line-height: 1.6;
}

/* Canvas de Fundo */
#backgroundCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
}

/* Terminal Container */
.terminal-container {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 400px;
    background: var(--terminal-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: terminalSlide 1s ease-out;
}

@keyframes terminalSlide {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.terminal-header {
    background: #161b22;
    padding: 8px 12px;
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
}

.terminal-buttons {
    display: flex;
    gap: 6px;
}

.terminal-buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.btn-red { background: #ff5f57; }
.btn-yellow { background: #ffbd2e; }
.btn-green { background: #28ca42; }

.terminal-title {
    margin-left: 12px;
    color: var(--text-secondary);
    font-size: 12px;
}

.terminal-content {
    padding: 12px;
    font-size: 13px;
    max-height: 150px;
    overflow-y: auto;
}

.terminal-line {
    margin-bottom: 4px;
    color: var(--text-secondary);
}

.cursor {
    display: inline-block;
    width: 8px;
    background: var(--accent-cyan);
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Header Cyber */
.cyber-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 100;
    padding: 1rem 0;
}

.header-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-glow {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 50%;
    animation: logoPulse 2s ease-in-out infinite;
}

@keyframes logoPulse {
    0%, 100% {
        box-shadow: 0 0 20px var(--accent-cyan);
        transform: scale(1);
    }
    50% {
        box-shadow: 0 0 40px var(--accent-purple);
        transform: scale(1.05);
    }
}

.logo-text {
    font-family: 'Orbitron', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 2px;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 1rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--accent-green);
    border-radius: 50%;
    animation: statusBlink 2s infinite;
}

@keyframes statusBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
}

.status-text {
    font-size: 0.75rem;
    color: var(--accent-green);
    font-weight: 600;
}

.cyber-nav {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    position: relative;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
}

.nav-link::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--accent-cyan);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.nav-link:hover {
    color: transparent;
}

.nav-link:hover::before {
    opacity: 1;
}

.nav-link:hover {
    text-shadow: 0 0 10px var(--accent-cyan);
}

/* Seções */
section {
    min-height: 100vh;
    padding: 8rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.section-header {
    margin-bottom: 4rem;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-family: 'Orbitron', monospace;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
}

.title-line {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 1px;
}

/* Seção Hero */
.hero {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
}

.hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}

.terminal-grid {
    background: rgba(13, 17, 23, 0.8);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.terminal-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.terminal-prompt {
    color: var(--accent-green);
    font-weight: bold;
    font-size: 1.2rem;
}

.terminal-command {
    color: var(--text-secondary);
    font-family: 'JetBrains Mono', monospace;
}

.terminal-output {
    color: var(--accent-cyan);
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    font-weight: 600;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-cyan);
}

.hero-description {
    text-align: left;
}

.hero-description p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.8;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
}

.cyber-btn {
    position: relative;
    padding: 1rem 2rem;
    border: 2px solid var(--accent-cyan);
    background: transparent;
    color: var(--accent-cyan);
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    border-radius: 4px;
}

.cyber-btn.primary {
    background: var(--accent-cyan);
    color: var(--primary-bg);
}

.cyber-btn.secondary {
    border-color: var(--accent-purple);
    color: var(--accent-purple);
}

.cyber-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
}

.cyber-btn.secondary:hover {
    background: var(--accent-purple);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.btn-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.cyber-btn:hover .btn-glow {
    left: 100%;
}

.hero-social {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-icon {
    width: 50px;
    height: 50px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
}

.social-icon:hover {
    color: var(--accent-cyan);
    border-color: var(--accent-cyan);
    box-shadow: var(--neon-glow);
    transform: translateY(-3px);
}

.social-icon i {
    font-size: 1.5rem;
}

/* Viewer 3D */
.viewer-3d {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.viewer-3d spline-viewer {
    width: 100%;
    height: 500px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: rgba(13, 17, 23, 0.8);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Formação */
.formation {
    background: rgba(255, 255, 255, 0.02);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.formation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
}

.formation-card {
    background: rgba(13, 17, 23, 0.8);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.formation-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
}

.formation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-cyan);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.card-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-bg);
    font-size: 1.5rem;
}

.card-period {
    background: rgba(0, 255, 255, 0.1);
    color: var(--accent-cyan);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid var(--accent-cyan);
}

.formation-card h3 {
    color: var(--text-primary);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.institution {
    color: var(--accent-orange);
    font-weight: 600;
    margin-bottom: 1rem;
}

.card-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
}

.card-status.completed {
    color: var(--accent-green);
}

.card-status.ongoing {
    color: var(--accent-orange);
}

.description {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Projetos */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
}

.project-card {
    background: rgba(13, 17, 23, 0.8);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-purple);
}

.project-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.project-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, var(--accent-purple), var(--accent-cyan));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-bg);
    font-size: 2rem;
}

.project-card h3 {
    color: var(--text-primary);
    font-size: 1.4rem;
    font-weight: 600;
}

.project-card p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.project-tech span {
    background: rgba(139, 92, 246, 0.1);
    color: var(--accent-purple);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid var(--accent-purple);
}

.project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-cyan);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.project-link:hover {
    gap: 1rem;
}

.project-link i {
    transition: transform 0.3s ease;
}

.project-link:hover i {
    transform: translateX(5px);
}

/* Habilidades */
.skills {
    background: rgba(255, 255, 255, 0.02);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.skills-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.skills-category h3 {
    color: var(--text-primary);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
    text-align: center;
}

.skill-bars {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skill-bar {
    display: grid;
    grid-template-columns: 120px 1fr 60px;
    gap: 1rem;
    align-items: center;
}

.skill-name {
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.9rem;
}

.skill-progress {
    background: rgba(255, 255, 255, 0.1);
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.skill-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 4px;
    width: 0;
    transition: width 2s ease-out;
}

.skill-level {
    color: var(--accent-cyan);
    font-weight: 600;
    font-size: 0.9rem;
    text-align: right;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: rgba(13, 17, 23, 0.8);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s ease;
    text-align: center;
}

.tech-item:hover {
    transform: translateY(-3px);
    border-color: var(--accent-cyan);
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);
}

.tech-item i {
    font-size: 2.5rem;
    color: var(--accent-cyan);
    transition: all 0.3s ease;
}

.tech-item:hover i {
    transform: scale(1.2);
    text-shadow: 0 0 20px var(--accent-cyan);
}

.tech-item span {
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.9rem;
}

/* Contato */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
}

.contact-card {
    background: rgba(13, 17, 23, 0.8);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.05), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.contact-card:hover::before {
    transform: translateX(100%);
}

.contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-cyan);
}

.contact-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--primary-bg);
    font-size: 2.5rem;
}

.contact-card h3 {
    color: var(--text-primary);
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.contact-card p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-cyan);
    text-decoration: none;
    font-weight: 600;
    padding: 0.8rem 1.5rem;
    border: 1px solid var(--accent-cyan);
    border-radius: 6px;
    transition: all 0.3s ease;
    background: transparent;
}

.contact-link:hover {
    background: var(--accent-cyan);
    color: var(--primary-bg);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
}

.contact-link i {
    transition: transform 0.3s ease;
}

.contact-link:hover i {
    transform: translateX(3px);
}

/* Footer */
.footer {
    background: rgba(13, 17, 23, 0.95);
    border-top: 1px solid var(--border-color);
    padding: 2rem;
    text-align: center;
}

.footer-content p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.heart {
    color: #ef4444;
    animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

/* Responsive */
@media (max-width: 1200px) {
    .hero {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .viewer-3d spline-viewer {
        height: 400px;
    }
    
    .skills-container {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .terminal-container {
        width: calc(100% - 40px);
        left: 20px;
        right: 20px;
    }
    
    .header-content {
        flex-direction: column;
        gap: 1rem;
        padding: 0 1rem;
    }
    
    .cyber-nav {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .nav-link {
        padding: 0.3rem 0.6rem;
        font-size: 0.8rem;
    }
    
    section {
        padding: 6rem 1rem 3rem;
    }
    
    .section-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 1rem;
    }
    
    .title-line {
        width: 60px;
    }
    
    .action-buttons {
        flex-direction: column;
        gap: 1rem;
    }
    
    .cyber-btn {
        width: 100%;
        text-align: center;
    }
    
    .formation-grid,
    .projects-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .tech-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    
    .skill-bar {
        grid-template-columns: 1fr;
        gap: 0.5rem;
        text-align: center;
    }
    
    .viewer-3d spline-viewer {
        height: 300px;
    }
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--primary-bg);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--accent-purple), var(--accent-cyan));
}

/* Animações de entrada */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.formation-card,
.project-card,
.contact-card,
.tech-item {
    animation: fadeInUp 0.6s ease-out;
}

/* Efeitos de loading */
.loading {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}

.loading:nth-child(1) { animation-delay: 0.1s; }
.loading:nth-child(2) { animation-delay: 0.2s; }
.loading:nth-child(3) { animation-delay: 0.3s; }
.loading:nth-child(4) { animation-delay: 0.4s; }
