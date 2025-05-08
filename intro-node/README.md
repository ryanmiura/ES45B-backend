# Atividade introdução ao Node.js

- Implementar um servidor web com Node.js com as seguintes funcionalidades:

 - Disponibilize um código HTML armazenado em uma pasta separada

 - Apresente um código HTML para o usuário dependendo da linguagem de sua preferência (inglês ou português)

 - Permitir que o código HTML seja carregado com um arquivo CSS externo armazenado na mesma pasta

 - Implementar múltiplas páginas HTML contendo links umas para as outras

 - Implementar módulos separados com uma classe (Usuários) que leia nomes de usuários a partir de um arquivo texto e ordene os mesmos.

- Utilizar essa classe para gerar uma página HTML contendo apenas os primeiros 5 usuários.

## Funcionalidades

- Páginas HTML em português e inglês
- Sistema de navegação entre páginas
- Estilização CSS externa
- Gerenciamento de usuários com ordenação
- Exibição dos 5 primeiros usuários

## Pré-requisitos

1. Node.js (v22 ou superior)
2. npm (incluído com Node.js)


## Instalação

1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto:
```powershell
cd intro-node
```

3. Instale as dependências:
```powershell
npm install
```

## Executando o Projeto

1. Inicie o servidor:
```powershell
npm start
```

2. Acesse o site no navegador:
   - http://localhost:3000

O servidor redirecionará automaticamente para a versão em português (/pt).
Você pode alternar entre os idiomas usando os links no topo de cada página.

## Estrutura do Projeto

- `/public`: Arquivos estáticos (HTML, CSS)
  - `/pt`: Páginas em português
  - `/en`: Páginas em inglês
  - `/css`: Estilos compartilhados
- `/src`: Código fonte Node.js
  - `Users.js`: Classe para gerenciamento de usuários
- `server.js`: Servidor principal
- `users.txt`: Lista de usuários
- `package.json`: Configurações e dependências do projeto