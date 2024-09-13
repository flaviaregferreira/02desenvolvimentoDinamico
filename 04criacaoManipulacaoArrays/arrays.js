var valores = [8, 1, 7, 2, 9];
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
//var inicializacao                 incremento
for (var pos = 0; pos < valores.length; pos++) {
  console.log('Posição: ' + pos + ' Valor: ' + valores[pos]);
}

var carros = [];
carros[0] = 'Volvo';
carros[1] = 'Jeep';

var motos = new Array('BMW', 'Yamaha', 'Honda');

//Calcular a média de todos os números de um array
var valores = [8, 1, 7, 2, 9];
var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {
  soma += valores[pos];
  // soma = soma + valores[pos]
}
var media = soma / valores.length;

console.log(media);

//Localizar o maior valor dentre um array de numeros
const numeros = [3, 7, 2, 9, 5];
let maiorValor = numeros[0]; // Inicializa uma variável para armazenar o maior valor, começando pelo primeiro elemento do array

for (let i = 1; i < numeros.length; i++) {
  // Itera sobre cada elemento do array a partir do segundo

  if (numeros[i] > maiorValor) {
    // Se o elemento atual for maior, atualiza o maior valor
    maiorValor = numeros[i]; // Compara o elemento atual com o maior valor encontrado até o momento
  }
}
console.log('O maior valor é:', maiorValor);

// retornar conjunto de cidades, como saber qual tem o maior numero de letras
const cidades = [
  'São Paulo',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Salvador',
  'Fortaleza',
];
let cidadeMaiorNome = cidades[0];
let maiorTamanho = cidadeMaiorNome.length;

for (let i = 1; i < cidades.length; i++) {
  const cidadeAtual = cidades[i];
  const tamanhoAtual = cidadeAtual.length;
  if (tamanhoAtual > maiorTamanho) {
    cidadeMaiorNome = cidadeAtual;
    maiorTamanho = tamanhoAtual;
  }
}
console.log('A cidade com o maior número de letras é:', cidadeMaiorNome);

var valores = [8, 1, 7, 2, 9];

console.log(' Array Invertidos: ' + valores.reverse());

var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.join('|'));
console.log(arr1.join(' '));

var retirado = arr1.shift();
console.log(retirado);
console.log(arr1);

console.log('Posição número 3: ' + arr1.indexOf(3));

console.log(arr1.push(7));
console.log(arr1);

arr1.pop();
console.log(arr1);

//criar um novo array que tenha só numero positivo
var ar = [-5, 10, 15, 20, -3, 89];
var numerosPositivos = [];

for (var i = 1; i < ar.length; i++) {
  if (ar[i] > 0) {
    numerosPositivos.push(ar[i]);
  }
}
console.log(numerosPositivos); // Imprime: [10, 15, 20, 89]

var arr2 = [1, 2, 3, 4, 5, 6, 7];

arr2.splice(2, 2);
console.log(arr2);

var nomes = ['maria', 'Joao', 'Lucas', 'Pedro'];

var novos = nomes.splice(1, 1, 'Luiz', 'Ronaldo');
console.log(novos); //quem eu tirei
console.log(nomes);

var pais = ['Brasil', 'Argentina', 'Colombia'];
pais.unshift('Uruguai');
console.log(pais);

//Crie um array com 5 nomes
var nomes = ['Guilherme', 'Manoel', 'Samuel', 'Davi', 'João'];
//acrescentar nome da Monica
nomes.push('Mônica');
console.log(nomes);
// retire o ultimo elemento do array
nomes.pop();
//Encontre a posição do Samuel
var posicaoSamuel = nomes.indexOf('Samuel');
console.log(posicaoSamuel);
// Trocar Manoel por Emanuel
nomes.splice(1, 1, 'Emanuel');
console.log(nomes);

var pessoa = ['Eduardo', 'Joana', 'Wallace', 'Rosana'];
var gerente = ['Davi', 'Manuela'];
var pessoa1 = pessoa.slice(1, 3);

console.log(pessoa);
console.log(pessoa1);

var empresa = pessoa.concat(gerente);
console.log(empresa);

// Exercicio
const mesesDoAno = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

console.log(mesesDoAno);
// Dividindo o array em trimestres
const trimestre1 = mesesDoAno.slice(0, 3);
const trimestre2 = mesesDoAno.slice(3, 6);
const trimestre3 = mesesDoAno.slice(6, 9);
const trimestre4 = mesesDoAno.slice(8, 12);

console.log('Trimestre 1:', trimestre1);
console.log('Trimestre 2:', trimestre2);
console.log('Trimestre 3:', trimestre3);
console.log('Trimestre 4:', trimestre4);
