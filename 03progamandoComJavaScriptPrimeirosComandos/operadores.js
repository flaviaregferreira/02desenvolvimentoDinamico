var n = 3;
//n = n * 10;
n *= 10;
// vai dar 30 do mesmo jeito
console.log(n);

var x = 10;
x++;
console.log(x);
console.log(n < x);

b = 20;
c = 60;
console.log(n <= x && b != c);
console.log(n <= x || b != c);

//verificar se a é maior que b e b é divisivel por 2
console.log(a > b && b % 2 == 0);
// verificar se b é maior igual a a ou b dividido por 2 o resultado é dois
console.log(b >= a || b / 2 == 2); //eu
console.log(a <= b || b / 2 == 2); //professor
//verificar se a é maior que b e b maior igual a 5
console.log(a > b && b >= 5);
//verificar se b é par ou impar usando ternario
resultado = b % 2 == 0 ? 'Par' : 'Ímpar';
