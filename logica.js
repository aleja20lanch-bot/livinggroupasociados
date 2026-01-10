:root {
    --deep-blue: #041219;
    --teal-dark: #0a2d37;
    --teal-accent: #15a1b3;
    --white: #ffffff;
    --gray-light: #d1d5db;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--deep-blue);
    color: var(--white);
    line-height: 1.6;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    letter-spacing: 1px;
}

/* --- NAVBAR --- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 8%;
    background: rgba(4, 18, 25, 0.95);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(21, 161, 179, 0.2);
    transition: 0.3s;
}

.logo-text {
    text-decoration: none;
    display: flex;
    flex-direction: column;
}

.living-sea {
    font-family: 'Michroma', sans-serif;
    color: var(--white);
    font-size: clamp(1rem, 4vw, 1.5rem); /* Ajuste responsivo de logo */
    letter-spacing: 3px;
    font-weight: bold;
    line-height: 1;
}

.group-asociados {
    font-family: 'PT Sans', sans-serif;
    color: var(--teal-accent);
    font-size: clamp(0.6rem, 2vw, 0.8rem);
    text-transform: lowercase;
    letter-spacing: 2px;
    margin-top: 4px;
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
}

.nav-links li a {
    color: var(--white);
    text-decoration: none;
    margin-left: 2rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    transition: 0.3s;
}

.nav-links li a:hover { color: var(--teal-accent); }

/* --- HERO --- */
.hero {
    min-height: 80vh;
    background: linear-gradient(rgba(4, 18, 25, 0.7), rgba(4, 18, 25, 0.8)), 
                url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1350&q=80') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 20px 60px;
}

.hero h1 { 
    font-size: clamp(1.8rem, 6vw, 3rem); /* Título responsivo */
    margin-bottom: 1.5rem; 
}

.hero-text-wrapper p { 
    max-width: 700px; 
    margin: 0 auto 2rem; 
    color: var(--gray-light);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
}

.btn-secondary {
    padding: 12px 30px;
    border: 2px solid var(--teal-accent);
    color: var(--white);
    text-decoration: none;
    transition: 0.3s;
    display: inline-block;
}

/* --- SERVICIOS --- */
.practice-areas { padding: 80px 5%; background: var(--teal-dark); text-align: center; }
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Grid que se ajusta solo */
    gap: 30px;
    margin-top: 50px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.service-card {
    background: var(--deep-blue);
    padding: 30px;
    border-radius: 4px;
    border-bottom: 3px solid transparent;
    transition: 0.3s;
}

/* --- RESPONSIVE MENU --- */
#check { display: none; }
.checkbtn {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
}

.checkbtn span {
    display: block;
    width: 30px;
    height: 3px;
    background: var(--white);
    transition: 0.3s;
}

@media (max-width: 850px) {
    .checkbtn { display: flex; }
    
    .nav-links {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: var(--deep-blue);
        top: 0;
        left: -100%;
        flex-direction: column;
        justify-content: center;
        transition: 0.5s;
        z-index: 999;
    }

    .nav-links li { margin: 20px 0; }
    .nav-links li a { font-size: 1.3rem; margin-left: 0; }

    #check:checked ~ .nav-links { left: 0; }
    
    /* Efecto hamburguesa */
    #check:checked ~ .checkbtn span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
    #check:checked ~ .checkbtn span:nth-child(2) { opacity: 0; }
    #check:checked ~ .checkbtn span:nth-child(3) { transform: rotate(-45deg) translate(5px, -7px); }
}
