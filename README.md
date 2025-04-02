# XYZ-Bank
Utilizando a ferramenta cypress para automatizar

Levantamento de Requisitos
Objetivo: Levantar todos os requisitos necessários para garantir que o sistema funcione corretamente, com base nos resultados dos testes realizados no código fornecido.

a. Elaborar a construção de atividades listando todos os requisitos necessários, considerando o resultado obtido dos testes.
Com base no seu código, vemos que a aplicação precisa realizar algumas interações com a interface do usuário, como clicar em botões, preencher campos de formulário, selecionar opções de listas suspensas, entre outras atividades. Com isso, identificamos requisitos funcionais e não funcionais que devem ser atendidos.

Requisitos Funcionais Identificados:

Login do Cliente: O sistema deve permitir que um cliente faça login utilizando um botão de "Customer Login" e, após isso, seja possível selecionar um usuário e efetuar o login na aplicação.

Cadastro de Clientes: O sistema deve permitir que um gerente adicione um novo cliente, preenchendo dados como nome, e-mail e telefone.

Abrir Conta: O sistema deve permitir que um gerente abra uma nova conta para um cliente, selecionando a moeda desejada (por exemplo, "Dollar").

Verificação de Página: O sistema deve garantir que o usuário permaneça na mesma página após realizar a ação de login, de modo a garantir que não haja redirecionamento inesperado.

Requisitos Não Funcionais Identificados:

Usabilidade: O sistema deve ser fácil de usar, com elementos de UI claramente visíveis e interativos, como botões e campos de formulário. Todos os botões e campos de entrada devem ser acessíveis e funcionais.

Desempenho: O sistema deve ser responsivo, realizando as ações (como login, cadastro e abertura de contas) rapidamente sem travamentos ou lentidão.

Segurança: O sistema deve validar corretamente os campos antes de permitir o envio de dados para o servidor, evitando falhas no envio de informações.

Atividades Levantadas:

Login de Cliente:

Atividade 1: Implementar a verificação de que o botão "Customer Login" está visível e funcional.

Atividade 2: Implementar o preenchimento da seleção de usuário e a validação do login com sucesso.

Atividade 3: Implementar verificação para garantir que, após o login, o usuário permanece na página atual.

Cadastro de Cliente:

Atividade 1: Garantir que todos os campos de formulário para o cadastro do cliente estejam funcionando corretamente (nome, e-mail, telefone).

Atividade 2: Validar a entrada de dados para garantir que não existam campos vazios ou com dados inválidos.

Abrir Conta:

Atividade 1: Implementar a funcionalidade de abertura de conta, onde o gerente seleciona a moeda desejada.

Atividade 2: Verificar se a opção de moeda "Dollar" está visível e selecionável.

Verificação de Redirecionamento:

Atividade 1: Garantir que, após o login ou a execução de ações como "Home" e "Add Customer", o redirecionamento para as URLs corretas ocorra de forma adequada.

Atividade 2: Implementar um comportamento que garante que o usuário não saia da página atual sem realizar a ação de navegação desejada.

b. Escrever uma história de usuário para uma funcionalidade de melhoria nas rotinas do sistema.
História de Usuário 1: Melhorias no Login de Cliente:

Como cliente do sistema bancário,

Quero poder fazer login rapidamente, utilizando a seleção de usuário e a autenticação por meio de um campo de senha ou biometria,

Para que eu possa acessar minha conta de forma rápida e segura, sem precisar lembrar de uma senha toda vez.

Critérios de Aceitação:

O sistema deve permitir que o cliente escolha um usuário da lista suspensa (usando #userSelect).

O sistema deve permitir o login ao clicar no botão "Login", que deve ser visível (cy.get('form.ng-valid > .btn')).

O cliente deve permanecer na página desejada após o login (como /account ou /listTx).

O sistema deve realizar o login de forma eficiente e com validação de dados correta.

História de Usuário 2: Melhorias no Cadastro de Cliente:

Como gerente do sistema bancário,

Quero adicionar um novo cliente utilizando um formulário simples e rápido, onde poderei preencher o nome, e-mail e telefone,

Para que eu possa cadastrar novos clientes de forma eficiente e sem erros.

Critérios de Aceitação:

O formulário de "Add Customer" deve permitir preencher campos como nome, e-mail e telefone (cy.get(':nth-child(1) > .form-control')).

O gerente deve ser capaz de clicar no botão "Add Customer" e o cliente deve ser adicionado corretamente (cy.get('.ng-submitted > .btn')).

O sistema deve validar corretamente os campos antes de permitir o envio do formulário.

Após o cadastro, o sistema deve exibir uma mensagem de sucesso (como "Customer added successfully").

História de Usuário 3: Melhorias na Abertura de Conta:

Como gerente do sistema bancário,

Quero abrir uma conta para um cliente selecionado e definir a moeda como "Dollar",

Para que eu possa criar contas de forma rápida e com as configurações corretas de moeda.

Critérios de Aceitação:

O gerente deve ser capaz de selecionar o cliente usando o campo #userSelect e definir a moeda utilizando o campo #currency (onde deve selecionar "Dollar").

O gerente deve ser capaz de clicar no botão "Open Account" para abrir a conta (cy.get('[ng-class="btnClass2"]')).

Após abrir a conta, a conta deve ser registrada corretamente para o cliente escolhido.

O sistema deve garantir que a operação de abertura de conta seja realizada sem falhas e que o cliente permaneça na página após a operação.

Conclusão:
Levantamento de Requisitos: Com base no seu código, foram identificados os requisitos funcionais e não funcionais necessários para a correta operação do sistema. O levantamento inclui atividades como validar botões e campos de formulário, garantir que os redirecionamentos ocorram corretamente e realizar o cadastro e login de forma eficiente.

Histórias de Usuário: Cada melhoria ou funcionalidade foi transformada em histórias de usuário, com critérios de aceitação claros para garantir que o sistema atenda às necessidades dos stakeholders.
