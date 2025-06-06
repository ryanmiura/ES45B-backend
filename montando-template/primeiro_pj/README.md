# Primeiro Projeto com Express e Handlebars

Este projeto foi desenvolvido como parte da atividade "Gerando o Primeiro Projeto" da disciplina de backend.

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
node app.js
```

3. Acesse no navegador:
```
http://localhost:3000
```

## Atendimento aos Requisitos da Atividade

### 1. Estrutura Inicial
- ✓ Pasta primeiro_pj criada
- ✓ npm init -y executado
- ✓ Dependências instaladas:
  - express
  - hbs
  - handlebars

### 2. Implementação do Servidor
- ✓ Arquivo app.js criado com:
  - Configuração do Express
  - Configuração do Handlebars
  - Definição de rotas
  - Uso de middleware express.urlencoded
  - Configuração de arquivos estáticos

### 3. Componentes Reutilizáveis
Criados 5 componentes conforme solicitado:
1. **Navbar** (`views/partials/navbar.hbs`)
   - Menu de navegação reutilizável
   - Links para todas as páginas

2. **Formulários** (`views/partials/form-*.hbs`)
   - Formulário de cadastro
   - Formulário de login

3. **Tabelas** (`views/partials/tabela-usuarios.hbs`)
   - Tabela para listagem de usuários
   - Formatação consistente

4. **Parágrafos** (`views/partials/paragrafo.hbs`)
   - Componente para textos
   - Suporte a texto principal e subtexto

5. **Rodapé** (`views/partials/footer.hbs`)
   - Footer reutilizável
   - Links e informações de copyright

### 4. Páginas Implementadas
Criadas três páginas conforme solicitado:
1. **Página Index** (`views/index.hbs`)
   - Página inicial
   - Usa componentes navbar e footer
   - Lista usuários cadastrados

2. **Página de Cadastro** (`views/cadastro.hbs`)
   - Formulário de cadastro
   - Validação de campos
   - Mensagens informativas

3. **Página de Login** (`views/login.hbs`)
   - Formulário de login
   - Campos para email e senha
   - Links para cadastro

### 5. Classe de Usuários
- ✓ Implementada classe Usuario com:
  - Propriedades nome e email
  - Lista de usuários de exemplo
  - Integração com as views

## Estrutura de Arquivos
```
primeiro_pj/
├── app.js
├── package.json
├── public/
│   └── css/
│       └── style.css
└── views/
    ├── layouts/
    │   └── main.hbs
    ├── partials/
    │   ├── navbar.hbs
    │   ├── footer.hbs
    │   ├── form-cadastro.hbs
    │   ├── form-login.hbs
    │   ├── paragrafo.hbs
    │   └── tabela-usuarios.hbs
    ├── index.hbs
    ├── cadastro.hbs
    ├── login.hbs
    └── usuarios.hbs
```

## Tecnologias Utilizadas
- Node.js
- Express
- Handlebars (hbs)
- HTML/CSS

## Funcionalidades
- Cadastro de usuários
- Login de usuários
- Listagem de usuários
- Navegação entre páginas
- Templates reutilizáveis
- Estilização consistente