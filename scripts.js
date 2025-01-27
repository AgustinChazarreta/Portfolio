// Menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cierra el menú si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

// Botón para alternar entre modo oscuro y claro
const toggleButton = document.querySelector('.toggle-switch');

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');

    // Verificar el estado del modo oscuro en el almacenamiento local
    if (localStorage.getItem('light-mode') === 'enabled') {
        document.body.classList.add('light-mode');
        toggle.checked = true;
        console.log('light mode toggle');
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('light-mode', 'enabled');
            console.log('light mode toggle');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('light-mode', 'disabled');
            console.log('dark mode toggle');
        }
    });
});

// Scroll suave para enlaces del navbar
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de las tarjetas al aparecer en el viewport
const seccionesAnimadas = document.querySelectorAll('.proyectos, .contact');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

seccionesAnimadas.forEach(section => observer.observe(section));