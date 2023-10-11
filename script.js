// Seleciona todos os links no menu de navegação
const navLinks = document.querySelectorAll('nav a');

// Seleciona todas as páginas (ou seções) do site
const pages = document.querySelectorAll('.page');

// Itera sobre cada link no menu de navegação
navLinks.forEach((link, index) => {
    // Adiciona um ouvinte de evento de clique a cada link
    link.addEventListener('click', (e) => {
        // Evita o comportamento padrão de navegação do link
        e.preventDefault();

        // Remove a classe 'active' de todas as páginas, ocultando-as
        pages.forEach((page) => {
            page.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas à página correspondente ao link clicado, tornando-a visível
        pages[index].classList.add('active');
    });
});
