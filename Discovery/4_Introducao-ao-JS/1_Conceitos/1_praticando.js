//1. Declare um variável de nome weight
let weight;


//2. Que tipo de dado é a variável acima?
console.log(weight);    // undefined


//3. Declare uma variável e atribua valores para cada um dos dados
    // * name: String
    // * age: Number (integer)
    // * stars: Number (Float)
    // * isSubscribed: Boolean
let name = "Joao";
let age = 30;
let stars = 4.5;
let isSubscribed = true;


//4. A variável student abaixo é de que tipo de dados?
let student = {};
console.log(typeof student);     // obj


//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

student = {
    name: "Joao",
    age: 30,
    stars: 4.5,
    isSubscribed: true
};


//4.2 Mostre no console as seguintes mensagens /* <name> de idade <age> é avaliado em <stars>. */
console.log(`${name} de idade ${age} é avaliado em ${stars}.`);


//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
let students = [];


//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students = [student];      // check -> console.log(students);


//7. Coloque no console o valor da posição zero do array acima
console.log(students[0]);


//8. Crie um novo student e coloque ele na posição 1 do Array students
let newStudent = {
    name: "Maria",
    age: 35,
    stars: 4.2,
    isSubscribed: false
};

students.push(newStudent)          // push = append (py).... ou students[1] = newStudent
console.log('\n', students)

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou /* console.log(a) var a = 1 */

console.log(a)
var a = 1;

/*
Resp:
Undefined. Isso ocorre por conta do hoisting de variáveis var. Por "baixo dos panos" o JavaScript faz o seguinte:

var a;
console.log(a);
a = 1;
*/
