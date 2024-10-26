# TodoApp - Lista de Tarefas com LocalStorage

Este é um projeto de lista de tarefas simples, desenvolvido com **HTML**, **CSS** (usando **Bootstrap**) e **JavaScript**. O objetivo é oferecer uma aplicação CRUD (Criar, Ler, Atualizar e Excluir) de tarefas com armazenamento no **localStorage**, para que os dados não sejam perdidos ao recarregar a página. 

## Funcionalidades

- **Adicionar Tarefa**: Insira uma nova tarefa através de um campo de texto e um botão de "Add Task".
- **Listar Tarefas**: As tarefas são exibidas automaticamente na lista e carregadas do `localStorage` ao abrir a aplicação.
- **Editar Tarefa**: Permite editar o texto de uma tarefa já existente.
- **Excluir Tarefa**: Permite remover uma tarefa da lista e do `localStorage`.
- **Marcar como Concluída**: Use um checkbox ao lado de cada tarefa para marcá-la como concluída. Tarefas concluídas aparecem com um texto riscado.

## Tecnologias Utilizadas

- **HTML**: Estrutura do aplicativo.
- **CSS** com **Bootstrap**: Estilização responsiva e componentes visuais.
- **JavaScript**: Lógica para operações de CRUD e armazenamento no `localStorage`.

## Como Usar

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/todoApp.git
    ```

2. **Abra o arquivo HTML**:
    - Navegue até o diretório onde o projeto foi clonado e abra o arquivo `index.html` em seu navegador.

3. **Adicionar, Editar e Excluir Tarefas**:
    - Adicione uma nova tarefa digitando no campo de texto e clicando em "Add Task".
    - As tarefas serão listadas logo abaixo, com um checkbox para marcar como concluída e botões para **editar** e **excluir** cada tarefa.

## Estrutura do Código

- `index.html`: Estrutura da página com o campo de entrada e a lista de tarefas.
- `styles.css`: Contém o estilo para as tarefas concluídas.
- `script.js`: Lógica do aplicativo, incluindo as funções de adicionar, listar, editar, excluir e concluir tarefas, além de manipular o `localStorage` para salvar as informações.

