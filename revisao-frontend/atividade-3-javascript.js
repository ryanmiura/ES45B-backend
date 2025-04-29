// 1. Declare uma variável usando "let" com o nome "nome" e atribua a ela seu nome.
let nome = "Peter Parker";

// 2. Declare uma variável "idade" com valor 25 usando "var".
var idade = 25;

// 3. Tente redeclarar a variável "idade" usando "var" com outro valor.
var idade = 30; // permitido com "var" no mesmo escopo

// 4. Tente redeclarar uma variável "nome" com "let" no mesmo escopo. O que acontece?
// let nome = "Outro Nome"; // ERRO! Não pode redeclarar "let" no mesmo escopo.

// 5. Exiba "Olá, mundo!" usando alert().
alert("Olá, mundo!");

// 6. Exiba seu nome no console usando console.log().
console.log(nome);

// 7. Estrutura condicional que verifica se uma variável "nota" é maior ou igual a 7.
let nota = 8;
if (nota >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

// 8. Estrutura if/else que exibe "Par" se o número for par e "Ímpar" caso contrário.
let numero = 7;
if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

// 9. Declare duas variáveis e some seus valores, exibindo o resultado com console.log().
let a = 5;
let b = 10;
console.log(a + b);

// 10. Crie uma função que receba dois números e retorne a multiplicação deles.
function multiplicar(x, y) {
  return x * y;
}
console.log(multiplicar(3, 4));

// 11. Função async/await que aguarda 1 segundo antes de mostrar "Pronto".
async function esperarUmSegundo() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Pronto");
}
esperarUmSegundo();

// 12. Declare uma variável "x" com valor 10 e incremente seu valor em 5.
let x = 10;
x += 5;
console.log(x);

// 13. Código que exibe "Acesso permitido" se a idade for maior ou igual a 18.
let idade2 = 20;
if (idade2 >= 18) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}

// 14. Utilize operador ternário para verificar se número é positivo ou negativo.
let numero2 = -3;
console.log(numero2 >= 0 ? "Positivo" : "Negativo");

// 15. Crie um array com 3 nomes e exiba o segundo nome.
let nomes = ["Tony", "Steve", "Natasha"];
console.log(nomes[1]);

// 16. Adicione um nome ao final de um array usando push().
nomes.push("Bruce");
console.log(nomes);

// 17. Remova o primeiro elemento de um array usando shift().
nomes.shift();
console.log(nomes);

// 18. Declare um objeto com as propriedades nome e idade.
let pessoa = {
  nome: "Clark Kent",
  idade: 35
};

// 19. Acesse a propriedade "idade" de um objeto e exiba no console.
console.log(pessoa.idade);

// 20. Crie um loop for que conte de 1 a 5 e exiba os números.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 21. Crie uma função que exiba "Olá, [nome]" no console.
function saudacao(nome) {
  console.log(`Olá, ${nome}`);
}
saudacao("Diana");

// 22. Implemente uma Promise que resolve com "Sucesso" após 2 segundos.
function promessaSucesso() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Sucesso");
    }, 2000);
  });
}
promessaSucesso().then(mensagem => console.log(mensagem));

// 23. Utilize setTimeout para exibir "Tempo esgotado" após 3 segundos.
setTimeout(() => {
  console.log("Tempo esgotado");
}, 3000);

// 24. Script que exiba "Bem-vindo!" somente se uma variável "logado" for true.
let logado = true;
if (logado) {
  console.log("Bem-vindo!");
}

// 25. Use typeof para verificar o tipo de uma variável "nome".
console.log(typeof nome);

// 26. Pergunte ao usuário o nome com prompt() e exiba com alert().
let nomeUsuario = prompt("Qual seu nome?");
alert(`Olá, ${nomeUsuario}`);

// 27. Use template string para exibir "Meu nome é [nome] e tenho [idade] anos".
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// 28. Declare uma constante com valor 100 e tente alterá-la.
const valor = 100;
// valor = 200; // ERRO! Não pode alterar uma constante.

// 29. Simule login: se usuário for "admin" e senha "123", exiba "Acesso liberado".
let usuario = "admin";
let senha = "123";
if (usuario === "admin" && senha === "123") {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado");
}

// 30. Crie uma função que receba idade e retorne "maior de idade" ou "menor de idade".
function verificarIdade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
console.log(verificarIdade(17));
