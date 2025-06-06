let http = require('http'),
    express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    app = express();

// Configuração do Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Configuração do Express
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

// Classe de usuários
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

const usuarios = [
    new Usuario('João', 'joao@email.com'),
    new Usuario('Maria', 'maria@email.com'),
    new Usuario('Pedro', 'pedro@email.com')
];

// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Página Inicial',
        usuarios: usuarios
    });
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro', {
        title: 'Cadastro de Usuário'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

app.get('/usuarios', (req, res) => {
    res.render('usuarios', {
        title: 'Lista de Usuários',
        usuarios: usuarios
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});