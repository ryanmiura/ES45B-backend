const express = require('express');
const path = require('path');
const fs = require('fs');
const Users = require('./src/Users');

const app = express();
const port = 3000;

// Configurar servidor de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Instanciar e carregar usuários
const usersManager = new Users();
usersManager.loadUsers();

// Função para ler e processar arquivo HTML
function readHtmlFile(filePath, userList = '') {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        return content.replace('{{userList}}', userList);
    } catch (error) {
        console.error('Erro ao ler arquivo HTML:', error);
        return 'Erro ao carregar a página';
    }
}

// Função para gerar lista de usuários em HTML
function generateUserList(users, lang) {
    return users
        .map(user => `<li>${user}</li>`)
        .join('\n');
}

// Middleware para detectar idioma
app.use((req, res, next) => {
    // Define português como padrão se não houver preferência explícita na URL
    if (!req.path.startsWith('/en') && !req.path.startsWith('/pt')) {
        return res.redirect('/pt');
    }
    next();
});

// Rotas para português
app.get('/pt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pt', 'index.html'));
});

app.get('/pt/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pt', 'about.html'));
});

app.get('/pt/users', (req, res) => {
    const users = usersManager.getTopFiveUsers();
    const userList = generateUserList(users, 'pt');
    const htmlContent = readHtmlFile(
        path.join(__dirname, 'public', 'pt', 'users.html'),
        userList
    );
    res.send(htmlContent);
});

// Rotas para inglês
app.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'en', 'index.html'));
});

app.get('/en/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'en', 'about.html'));
});

app.get('/en/users', (req, res) => {
    const users = usersManager.getTopFiveUsers();
    const userList = generateUserList(users, 'en');
    const htmlContent = readHtmlFile(
        path.join(__dirname, 'public', 'en', 'users.html'),
        userList
    );
    res.send(htmlContent);
});

// Rota padrão redireciona para português
app.get('/', (req, res) => {
    res.redirect('/pt');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});