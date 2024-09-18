document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuDropdown = document.querySelector('.menu-dropdown');

    menuToggle.addEventListener('click', () => {
        menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
    });
});
