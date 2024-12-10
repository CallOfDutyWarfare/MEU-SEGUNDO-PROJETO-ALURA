document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    let passoAtivo = 0;

    // Exibir o primeiro passo
    passos[passoAtivo].classList.add('ativo');

    // Adicionar evento de clique aos botões
    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', () => {
            const proximoPasso = parseInt(button.getAttribute('data-proximo'));

            // Ocultar o passo atual
            passos[passoAtivo].classList.remove('ativo');

            // Atualizar o passo ativo
            passoAtivo = proximoPasso;

            // Exibir o próximo passo
            passos[passoAtivo].classList.add('ativo');
        });
    });
});