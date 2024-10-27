// Objetos literais
const person = {
    name: 'John',
    age: 30
};



// Objetos aninhados
const employee = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    }
}


// Criando um objeto
const user = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    isMarried: false,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    getFullName: function() {
        return "My name is " + user.name + " and I'm " + user.age + ' years old.';
    }
};



// Acessando um objeto
console.log(user);
console.log(user.address);
console.log(user.address.street);
console.log(user.address.country);
console.log(user.getFullName());



// Atualizando um objeto
user.address.street = '456 Main St';
console.log(user.address.street);



// Operador de coalescencia
console.log(user.address.country ?? 'No country'); // operador de coalescencia nula funciona com NULL e UNDEFINED



// Removendo dados de um objeto
delete user.age;
console.log(user);



// Verificando se um objeto existe
console.log('name' in user);
console.log('age' in user);



// Iterando um objeto
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}



// funcao construtora (1)
function createProduct(name, price, stock) {
    const product = {}

    product.name = name
    product.price = price
    product.inStock = stock
    product.getFullInfo = function() {
        return "Name: " + product.name + ", Price: " + product.price + ", In Stock: " + product.inStock;
    }
    return product
}

const produco_1 = new createProduct('Product 1', 10, 100)
const produco_2 = new createProduct('Product 2', 15, 80)

console.log(produco_1)
console.log(produco_2)
console.log(produco_2.getFullInfo())

// funcao construtora (2)
function Person(name) {
    this.name = name
    this.greeting = function() {
        return `Hello ${this.name}!`;
    }
}

const Person1 = new Person('Joao')
const Person2 = new Person('Maria')

console.log(Person1)
console.log(Person2)
console.log(Person2.greeting())

// Melhor usar classes que o 2º método.

