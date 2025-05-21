# 🧪 Automação de Testes com Cypress - Sauce Demo

Este projeto tem como objetivo praticar e demonstrar a automação de testes end-to-end utilizando **Cypress**, simulando interações com um e-commerce fictício disponibilizado pela **[Sauce Demo](https://www.saucedemo.com/)**.

---

## 📋 Funcionalidades testadas

✔️ Login com usuário válido  
✔️ Validação de erro com login inválido  
✔️ Adição de produto ao carrinho  
✔️ Processo de checkout com preenchimento de dados  
✔️ Validação de mensagem de sucesso no pedido

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Node.js](https://nodejs.org/) - Ambiente de execução
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/jesifreire/cypress-sauce-demo-tests.git
cd cypress-sauce-demo-tests
2. Instale as dependências
npm install
3. Execute os testes
Interface Gráfica (modo interativo)
npx cypress open
Linha de comando (modo headless)
npx cypress run

📂 Estrutura dos testes
cypress/
├── e2e/
│   ├── login.cy.js       # Testes de login
│   ├── products.cy.js    # Testes de carrinho
│   └── checkout.cy.js    # Testes de finalização de compra
├── support/
│   └── commands.js       # Comandos customizados (ex: login reutilizável)
├── fixtures/
│   └── users.json        # Dados de teste (opcional)
```
## 👤 Autor

Desenvolvido por Jesiane Freire

📫 Como me encontrar:
- [LinkedIn](https://www.linkedin.com/in/jesiane-freire/) - Meu LinkedIn

📌 Observações
Este projeto tem fins educacionais e de portfólio.

O site Sauce Demo é mantido pela Sauce Labs exclusivamente para testes de automação.



