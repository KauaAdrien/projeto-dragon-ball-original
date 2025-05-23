/* 
  OBJETIVO 1 - quando clicar no botão do personagem, marcar o botão como selecionado
    passo 1 - pegar os botoes no JS para poder verificar quando o usuário clicar em cima de um deles
    passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
    passo 3 - verificar se já existe um botão selecionado, se sim, devemoos remover a seleção dele

  OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
    passo 1 - pegar os personagens no JS para poder mostrar ou esconder ele 
    passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
*/

const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.botao.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        botao.classList.add('selecionado');

        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagens[indice].classList.add('selecionado');
    });
});

