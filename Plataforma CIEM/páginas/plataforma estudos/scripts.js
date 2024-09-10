document.addEventListener('DOMContentLoaded', function() {
    // Seletores dos elementos
    const menuToggle = document.querySelector('.menu-toggle'); 
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const darkModeToggle = document.querySelector('#toggle-dark-mode');
    const searchInput = document.getElementById('search-bar');
    const autocompleteList = document.querySelector('.autocomplete-list');
    const courseThumbnails = document.querySelector('.course-thumbnails');

    // Sugestões de cursos para autocomplete
    const suggestions = [
        "Curso de Biologia",
        "Curso de Física",
        "Curso de Química",
        "Curso de Matemática",
        "Curso de Português",
        "Curso de Literatura",
        "Curso de História",
        "Curso de Filosofia",
        "Curso de Sociologia"
    ];

    // Função para filtrar os cursos
    const filterCourses = () => {
        const query = searchInput.value.toLowerCase();
        const items = courseThumbnails.querySelectorAll('li');

        items.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = title.includes(query) ? '' : 'none';
        });
    };

    // Função para mostrar as sugestões de autocomplete
    const showAutocomplete = () => {
        const searchTerm = searchInput.value.toLowerCase();
        autocompleteList.innerHTML = ''; // Limpa a lista

        if (searchTerm) {
            // Filtra as sugestões com base no termo digitado
            const filteredSuggestions = suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(searchTerm)
            );

            // Adiciona as sugestões à lista de autocomplete
            filteredSuggestions.forEach(suggestion => {
                const listItem = document.createElement('li');
                listItem.textContent = suggestion;
                listItem.addEventListener('click', () => {
                    searchInput.value = suggestion; // Preenche o campo com o valor clicado
                    autocompleteList.innerHTML = ''; // Limpa a lista
                    filterCourses(); // Aplica o filtro de cursos
                });
                autocompleteList.appendChild(listItem);
            });

            // Mostra a lista de autocomplete
            autocompleteList.style.display = 'block';
        } else {
            // Esconde a lista se a query estiver vazia
            autocompleteList.style.display = 'none';
        }
    };

    // Evento de busca
    searchInput.addEventListener('input', () => {
        showAutocomplete();
        filterCourses();
    });

    // Fecha o autocomplete se o usuário clicar fora da lista
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar-container')) {
            autocompleteList.innerHTML = ''; // Limpa a lista se o usuário clicar fora
            autocompleteList.style.display = 'none'; // Esconde a lista
        }
    });

    // Toggle da barra lateral
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Função para mostrar/ocultar submenu
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenuContainer = document.querySelector('.submenu-container');
    
    if (submenuToggle && submenuContainer) {
        submenuToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            submenuContainer.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o submenu
        });
    }

    // Lógica para alternar o modo escuro
    darkModeToggle.addEventListener('click', function() {
        sidebar.classList.toggle('dark-mode'); // Alterna o modo escuro
    });

    // Inicialização
    filterCourses(); // Aplica o filtro inicial, se necessário
});






document.addEventListener('DOMContentLoaded', () => {
    // Lista de categorias para adicionar miniaturas dinamicamente
    const categories = ['example']; // Adicione outras categorias conforme necessário

    categories.forEach(category => {
        const container = document.getElementById(`category-${category}`);
        const leftButton = container.parentNode.querySelector('.nav-button.left');
        const rightButton = container.parentNode.querySelector('.nav-button.right');

        if (container) {
            // Adiciona miniaturas de exemplo
            for (let i = 0; i < 2; i++) {
                const thumbnail = document.createElement('a');
                thumbnail.href = 'catalogo.html';
                thumbnail.className = 'thumbnail';
                
                const img = document.createElement('img');
                img.src = `https://i.ytimg.com/vi/3VLPyOLC1nc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAcQaAry5O6hJJvUBas8ReVe_xLAw`; `https://i.ytimg.com/vi/h8zz4cRb9Ys/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBGtfXbF-XkvlWuHCu9MafUob3lvg` // Substitua pelos URLs reais das capas
                img.alt = `Curso ${i + 1}`;
                
                
                thumbnail.appendChild(img);
                container.appendChild(thumbnail);
            }
         
            // Função para rolar o contêiner de miniaturas
            const scroll = (direction) => {
                const scrollAmount = container.clientWidth / 2; // Quantidade de rolagem
                container.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            };

            // Eventos de clique para botões de navegação
            leftButton.addEventListener('click', () => {
                scroll('left');
            });

            rightButton.addEventListener('click', () => {
                scroll('right');
            });
        }
    });
});
