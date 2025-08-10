# ✝️ Eclesia Gestão Ministerial

Eclesia Gestão Ministerial é uma aplicação web desenvolvida em Angular para facilitar a administração de ministérios, igrejas e organizações religiosas. O sistema oferece funcionalidades para cadastro e gerenciamento de membros, finanças, eventos, mensagens e muito mais, proporcionando uma gestão moderna, centralizada e eficiente.

## ✨ Funcionalidades

- 👥 **Gestão de Membros:** Cadastro, edição e visualização de membros da organização.
- 💰 **Financeiro:** Controle de entradas, saídas, doações e relatórios financeiros.
- 📅 **Eventos:** Criação, edição e acompanhamento de eventos e reuniões.
- 💬 **Mensagens:** Mensagem do dia e comunicados internos.
- 🔔 **Notificações:** Sistema de alertas para eventos, aniversários e avisos importantes.
- 📱 **Menu Responsivo:** Interface moderna com menu suspenso e navegação intuitiva.
- 📊 **Painel de Controle:** Dashboard com visão geral das principais informações.

  ---

  ![teela principal](dashboard.pngg)

## 🛠️ Tecnologias Utilizadas

- [Angular CLI](https://angular.dev/tools/cli) (v20.1.3)
- Angular Material (componentes visuais)
- TypeScript
- SCSS
- HTML5

## 🚀 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/eclesia-gestao-ministerial.git
   cd eclesia-gestao-ministerial
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```
   Acesse [http://localhost:4200/](http://localhost:4200/) no navegador.

## 📁 Estrutura do Projeto

```
src/
 ├── app/
 │    ├── home/         # Página inicial e toolbar
 │    ├── dashboard/    # Painel principal
 │    ├── membros/      # Gestão de membros
 │    ├── financeiro/   # Módulo financeiro
 │    ├── eventos/      # Gestão de eventos
 │    └── ...           # Outros módulos
 ├── assets/            # Imagens e arquivos estáticos
 └── index.html         # Arquivo principal HTML
```

## 💡 Comandos Úteis

- 🧩 **Gerar novo componente:**
  ```bash
  ng generate component nome-do-componente
  ```
- 🏗️ **Build para produção:**
  ```bash
  ng build --configuration production
  ```
- 🧪 **Rodar testes unitários:**
  ```bash
  ng test
  ```
- 🕹️ **Rodar testes end-to-end:**
  ```bash
  ng e2e
  ```

## ℹ️ Observações

- O Angular CLI não inclui um framework de testes e2e por padrão. Você pode escolher e configurar o que preferir (ex: Cypress, Protractor).
- Para personalizar o visual, edite os arquivos SCSS em cada módulo.
- Imagens devem ser adicionadas na pasta `src/assets`.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📝 Licença

Este projeto está sob a licença MIT.

## 📚 Recursos Adicionais

- [Documentação Angular CLI](https://angular.dev/tools/cli)
- [Angular Material](https://material.angular.io/)
