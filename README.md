# 💰 Cypress - Dev Finance Tests

Projeto de automação de testes E2E utilizando Cypress no site:
🔗 https://dev-finance.netlify.app/

---
## 📌 Objetivo
Este projeto foi desenvolvido com o objetivo de praticar testes automatizados em aplicações web, simulando cenários reais de uso de um sistema financeiro simples.
---

## 🧪 O que foi testado nesse projeto de estudos: 

* ✅ Cadastro de entradas e saídas
* ✅ Remoção de transações
* ✅ Validação de campos obrigatórios
* ✅ Cálculo de saldo
* ✅ Testes em múltiplos cenários
* ✅ Execução em viewport mobile

---

## 📁 Estrutura dos testes

```bash
cypress/e2e/
 ├── transactions/
 │     ├── create.cy.js
 │     ├── delete.cy.js
 │     ├── validation.cy.js
 │     └── balance.cy.js
 └── mobile/
       └── mobile.cy.js
```
---

## ⚙️ Tecnologias utilizadas
* Cypress
* JavaScript
* Node.js

---

## ▶️ Como executar o projeto na sua máquina

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/cypress-finance-tests.git
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Abrir o Cypress

```bash
npx cypress open
```

### 4. Rodar em modo headless

```bash
npx cypress run
```

---
