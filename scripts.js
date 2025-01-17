// Botón para alternar entre modo oscuro y claro
const toggleButton = document.querySelector('.dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';
});
