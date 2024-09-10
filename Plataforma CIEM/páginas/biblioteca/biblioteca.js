// Seleciona os elementos
const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mainContent = document.querySelector('.main-content');

// Função para abrir a barra lateral
openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    mainContent.classList.add('shift');
});

// Função para fechar a barra lateral
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    mainContent.classList.remove('shift');
});
