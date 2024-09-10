document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const courseThumbnails = document.querySelectorAll('.thumbnail');

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        courseThumbnails.forEach(thumbnail => {
            const text = thumbnail.querySelector('.thumbnail-info p').textContent.toLowerCase();
            if (text.includes(query)) {
                thumbnail.style.display = '';
            } else {
                thumbnail.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar'); // Altere conforme a classe do seu menu lateral

    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Modo Claro';
        } else {
            darkModeToggle.textContent = 'Modo Escuro';
        }
    });
});
