let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let div = num1 / num2;
let rest = num1 % num2;

console.log("A soma é:", sum);
console.log("A diferença é:", diff);
console.log("O produto é:", prod);
console.log("O quociente é:", div);
console.log("O resto da divisão é:", rest);

// Função para verificar se um número é par
function isEven(number) {
  return number % 2 === 0;
}

console.log("A soma é par?", isEven(sum));
console.log("Os números são iguais?", num1 === num2);
