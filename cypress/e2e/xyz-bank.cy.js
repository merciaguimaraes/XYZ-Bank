describe('XYZ Bank - Página Inicial', () => {
    beforeEach(() => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'); // Substitua pela URL correta
    }); 
  
    it('Deve acessar a tela de login do cliente, abrir a seleção de usuários, selecionar "Harry Potter", clicar no botão de login, clicar em um botão adicional e permanecer na página de transações', () => {
      // Aguarda a página carregar completamente antes de interagir
      cy.wait(2000);
    
      // Aguarda e clica no botão "Customer Login"
      cy.get('button')
        .contains('Customer Login')
        .should('be.visible')
        .click({ force: true }); // Usa "force: true" para garantir o clique, caso o botão esteja sobreposto
    
      // Verifica que a URL permanece em /customer (ou na página de login)
      cy.url().should('include', '/customer'); // Garante que estamos na página de login
    
      // Aguarda o campo de seleção de usuário ficar visível
      cy.get('#userSelect', { timeout: 10000 }).should('be.visible'); // Seleciona o elemento com id "userSelect"
    
      // Interage com o select e escolhe "Harry Potter"
      cy.get('#userSelect').select('Harry Potter'); // Seleciona "Harry Potter" dentro do select
    
      // Aguarda o botão de login estar visível e clica nele
      cy.get('form.ng-valid > .btn') // Seletor do botão de login
        .should('be.visible')  // Verifica se o botão está visível
        .click({ force: true }); // Clica no botão de login
    
      // Clica no botão que tem o ng-class "btnClass1" após o login
      cy.get('[ng-class="btnClass1"]')
        .should('be.visible') // Garante que o botão está visível
        .click(); // Clica no botão
    
      // Verifica que a URL mudou para a página de conta e permanece nela
      cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account'); // Garante que a URL permaneceu igual à da conta
      
      // Após estar na página de conta, você quer navegar para a página de transações
      // Clica no botão ou link que leva à página de transações, se necessário
      // Exemplo de clique para navegar à página de transações (ajuste conforme a necessidade)
      cy.get('button').contains('Transactions')  // Ajuste o seletor conforme necessário
        .should('be.visible') 
        .click(); // Clica no botão de transações
    
      // Verifica que a URL foi alterada para a página de transações
      cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/listTx'); // Garante que a URL é a da página de transações
      
      // Verifica um elemento específico na página de transações para garantir que a navegação foi bem-sucedida
      //cy.get('h2').should('contain', 'Transaction List');  // Ajuste o seletor conforme o conteúdo da página de transações
    });
    
    
   
    
    
    

    
    
    it('Deve acessar a tela de login do gerente', () => {
      // Clica no botão "Bank Manager Login"
      cy.get(':nth-child(3) > .btn').click();
    
      // Verifica se a URL mudou para a tela de login do gerente
      cy.url().should('include', '/manager'); // Usa 'include' para garantir que estamos na página do gerente
    });
    
    it('O botão Home deve redirecionar para a tela inicial e adicionar um novo cliente', () => {
      // Clica no botão "Customer Login"
      //cy.contains('Customer Login').click();
    
      // Clica no botão "Home"
      //cy.contains('Home').click();
    
      // Verifica se a URL foi redirecionada corretamente para a tela inicial
      //cy.url().should('eq', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager'); // Substitua pela URL correta da aplicação
    
      // Clica no botão com o seletor :nth-child(3) > .btn
      cy.get(':nth-child(3) > .btn').should('be.visible') // Garante que o botão está visível
        .click(); // Clica no botão
    
      // Agora, clicando em "Add Customer" usando o seletor
      cy.get('[ng-class="btnClass1"]').should('be.visible') // Garante que o botão "Add Customer" está visível
        .click(); // Clica no botão "Add Customer"
    
      // Preenche os campos do formulário para adicionar um novo cliente
      cy.get(':nth-child(1) > .form-control') // Seleciona o primeiro campo do formulário
        //.should('be.visible') // Verifica se o campo está visível
        .type('John Doe'); // Preenche o campo com o nome "John Doe" (substitua conforme necessário)
    
      cy.get(':nth-child(2) > .form-control') // Seleciona o segundo campo do formulário (geralmente email)
        .should('be.visible')
        .type('john.doe@example.com'); // Preenche com o email (substitua conforme necessário)
    
      cy.get(':nth-child(3) > .form-control') // Seleciona o terceiro campo do formulário (geralmente telefone ou outro campo)
        .should('be.visible')
        .type('123456789'); // Preenche com o telefone (substitua conforme necessário)
    
      // Após preencher os campos, clica no botão de "Add Customer"
      cy.get('form.ng-dirty > .btn').should('be.visible') // Garante que o botão está visível
     .click(); // Clica no botão de "Add Customer" para submeter o formulário

     // Verifica que um novo cliente foi adicionado com sucesso (você pode verificar algo como uma mensagem de confirmação ou alteração na lista de clientes)
     //cy.contains('Customer added successfully').should('be.visible'); // Exemplo de verificação (ajuste conforme necessário)
     
     // Clica no botão "Open Account" usando o seletor '[ng-class="btnClass2"]'
  cy.get('[ng-class="btnClass2"]').should('be.visible') // Verifica se o botão está visível
  .click(); // Clica no botão "Open Account"

// Você pode adicionar verificações após clicar em "Open Account", como por exemplo, verificar se a página mudou ou se um formulário foi exibido.
cy.url().should('include', '/openAccount'); // Exemplo de verificação de URL após o clique no botão "Open Account"

// Agora, interage com o campo de seleção de usuário '#userSelect'
cy.get('#userSelect').should('be.visible') // Garante que o campo de seleção de usuário está visível
.select('Harry Potter'); // Seleciona o usuário "Harry Potter" no dropdown (substitua conforme necessário)

// Interage com o campo de seleção de moeda '#currency'
cy.get('#currency').should('be.visible') // Garante que o campo de seleção de moeda está visível
.select('Dollar'); // Seleciona a opção 'Dollar' no dropdown de moeda

// Clica no botão do formulário usando o seletor 'form.ng-dirty > button'
cy.get('form.ng-dirty > button').should('be.visible') // Garante que o botão dentro do formulário está visível
.click(); // Clica no botão

// Clica no botão  customers usando o seletor '[ng-class="btnClass3"]'
cy.get('[ng-class="btnClass3"]').should('be.visible') // Garante que o botão com a classe 'btnClass3' está visível
.click(); // Clica no botão com a classe 'btnClass3'

// Adicione outras interações ou verificações conforme necessário, por exemplo, verificar se a página foi atualizada corretamente
cy.url().should('include', '/openAccount'); // Verifica se a URL foi alterada para incluir '/openAccount' após o clique

// Agora, clicando no botão 'Home' usando o seletor '.home'
cy.get('.home').should('be.visible') // Garante que o botão 'Home' está visível
.click(); // Clica no botão 'Home'

// Verifica se a URL mudou para a página inicial
//cy.url().should('eq', 'URL_DA_HOME'); // Substitua pela URL da página inicial da sua aplicação    

});
});

    
  