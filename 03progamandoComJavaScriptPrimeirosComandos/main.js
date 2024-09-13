var n = 20;
// para identificar o tipo
console.log(typeof n);
var n = '';
// para identificar o tipo
console.log(typeof n);
var n = null;
// para identificar o tipo
console.log(typeof n);
//var nome = 'Flávia';
var nome = 'Flávia';
// para identificar o tipo
console.log(typeof nome);
//console.log(nome.toLocaleUpperCase());

if (typeof nome == 'string') {
  console.log(nome.toLocaleUpperCase());
} else {
  console.log('Você precisa usar uma string');
}
