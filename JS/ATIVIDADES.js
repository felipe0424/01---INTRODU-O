/* 1. Declare uma variável chamada `age` e atribua a ela o valor da sua idade. */
var age = 18;
console.log(age);

/* 2. Declare duas variáveis, `a` e `b`, e atribua a elas os valores 5 e 10. Use um operador de comparação para verificar se `a` é menor que `b`. */
var a = 20;
var b = 10;

function comparar() {
    if (a > b) {
        console.log(`${a} é maior que ${b}`);
    } else {
        console.log(`${b} é maior que ${a}`);
    }
}

console.log(comparar(a, b));

/* 3. Escreva uma função chamada `greet` que recebe um parâmetro `name` e imprime "Hello, [name]!". */
function greet(name) {
    console.log(`Hello, ${name}!`);
}

let nome = 'Felipe';
console.log(greet(nome));

/* 4. Declare uma variável chamada `x` e atribua a ela o valor 10. Em seguida, use um operador de incremento para aumentar o valor de `x` em 1. */
let x = 10;
    x++

console.log(x);

/* 5. Crie uma estrutura `if...else` que verifica se uma variável `temperature` é maior que 30. Se for, imprime "Está quente!". Caso contrário, imprime "Está frio!". */
let temperature = 20;
    if (temperature >= 30) {
        console.log(`A temperatura de ${temperature}Cº está quente`);
    } else {
        console.log(`A temperatura de ${temperature}Cº está frio`);
    }

/* 6. Escreva uma função chamada `isEven` que recebe um número como argumento e retorna `true` se o número for par e `false` se for ímpar. */
function isEven(num) {
    if (num % 2 === 0) {
        return `${num} é par`;
    } else {
        return `${num} é Ímpar`;
    }
}

let numero = 5;
let verificar = isEven(numero);

console.log(verificar);

/* 7. Declare uma variável chamada `number` e atribua a ela um valor entre 1 e 10. Use uma estrutura `switch` para imprimir o número por extenso (ex: 1 -> "um", 2 -> "dois", etc.). */
let number = 5;
switch (number) {
    case 1:
        console.log('Um');
        break
    case 2:
        console.log('Dois');
        break
    case 3:
        console.log('Três');
        break
    case 4:
        console.log('Quatro');
        break
    case 5:
        console.log('Cinco');
        break
    default:
        console.log("Indefinido")
}

/* 8. Use um loop `for` para imprimir os números de 1 a 10 no console. */
let numero = 5;
for (let seq = numero ; seq <= 10 ; seq++) {
    console.log(seq);
}

/* 9. Use um loop `while` para imprimir os números de 10 a 1 no console. */
let num = 10;
while (num >= 1) {
    console.log(num);
    num--
}

/* 10. Escreva uma função chamada `factorial` que recebe um número `n` e retorna o fatorial de `n` (ex: 5! = 5 * 4 * 3 * 2 * 1 = 120). */
function factorial(n) {
    if (n < 0) {
        return "Número inválido"; // Fatorial não é definido para números negativos
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Testando a função
let number = 5;
console.log(`O fatorial de ${number} é ${factorial(number)}`); // Output: "O fatorial de 5 é 120"

/* 11. Declare um array com os números de 1 a 5. Use um loop `for...of` para imprimir cada número no console. */
let a = {
    num1: 1, 
    num2: 2, 
    num3: 3, 
    num4: 4, 
    num5: 5,
};

for (let b in a) {
    console.log(`${b}: ${a[b]}`);
}

/* 12. Declare um objeto chamado `person` com as propriedades `name`, `age` e `city`. Use um loop `for...in` para imprimir cada propriedade e seu valor no console. */
var person = {
    name: 'Felipe',
    age: '27',
    a: 'Petrolina',
}

for (let b in person)
console.log(person[b]);

/* 13. Escreva uma função chamada `sumArray` que recebe um array de números e retorna a soma de todos os números no array. */
function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

let array = [1, 2, 3, 4, 5];
console.log(sumArray(array));

/* 14. Crie uma estrutura `if...else if...else` que verifica a idade de uma pessoa e imprime "Criança" se a idade for menor que 12, "Adolescente" se a idade for entre 12 e 18, e "Adulto" se a idade for maior que 18. */
let idade = 13;
if (idade <= 12) {
    console.log('Criança');
} else if (idade > 12 && idade <= 18 ) {
    console.log('Adolecente');
} else {
    console.log(Adulto);
}

/* 15. Declare uma variável chamada `counter` e atribua a ela o valor 0. Use um loop `do...while` para incrementar o valor de `counter` até que ele seja igual a 5, imprimindo o valor de `counter` a cada iteração. */
var counter = 0;
while (counter < 5) {
    counter++
    console.log(counter);
}

/* 16. Escreva uma função chamada `reverseString` que recebe uma string e retorna a string invertida (ex: "hello" -> "olleh"). */

/* 17. Declare um array com os números de 1 a 10. Use o método `map` para criar um novo array onde cada número é multiplicado por 2. */

/* 18. Declare um array com alguns números e use o método `filter` para criar um novo array contendo apenas os números pares. */

/* 19. Declare um array com alguns números e use o método `reduce` para calcular a soma de todos os números no array. */

/* 20. Escreva uma função chamada `findMax` que recebe um array de números e retorna o maior número do array. */
