# 🚀 Automação de Testes de Integração (API) – Cypress | ServeRest

Projeto de automação de **testes de integração de API** utilizando **Cypress**, **JavaScript** e o padrão **Page Object Model (adaptado para Service Objects)**, validando o **login positivo** da API pública **ServeRest**.

---

## 📌 Sobre o Projeto

Este projeto tem como objetivo demonstrar boas práticas em testes de API, incluindo:

- Testes automatizados de integração
- Uso do Cypress para requisições HTTP
- Organização do código com Service Objects
- Separação de responsabilidades
- Estrutura escalável e preparada para CI/CD

🔗 **API utilizada:**  
https://serverest.dev/

---

## 🧪 Cenário Automatizado

✔ Login com sucesso na API  
✔ Validação de status HTTP  
✔ Validação da mensagem de retorno  
✔ Validação do token de autorização  

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **JavaScript (ES6+)**
- **Cypress**
- **API REST (ServeRest)**
- **Git / GitHub**

---

## 📁 Estrutura do Projeto

```bash
cypress-api-serverest/
│
├── cypress/
│   ├── e2e/
│   │   └── login.spec.js          # Teste de login
│   │
│   ├── services/
│   │   └── auth.service.js        # Service Object (API)
│   │
│   ├── fixtures/
│   │   └── user.json              # Massa de dados
│   │
│   └── support/
│       └── e2e.js                 # Configurações globais
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── requirements.txt
