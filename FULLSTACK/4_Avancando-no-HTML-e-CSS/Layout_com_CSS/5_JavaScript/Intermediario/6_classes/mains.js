// Classes são usadas para criar objetos.



// criando classe

class NomeClasse {
    // constructor é executado logo no início sempre que a classe é instanciada
    constructor(parameters) {
        console.log('oi')
    }
}

const minhaClasse = new NomeClasse()      // só de instanciar, 'oi' é impresso no console.




// args podem ser passados para o construtor
class OutraClasse {
    constructor(...args) {
        console.log(args)
    }
}

const minhaClasse2 = new OutraClasse(1, 2, 3, 4, 5)        // retorna [ 1, 2, 3, 4, 5 ] (operador de despejo ...)





// Propriedades da classe

class Products {
    constructor(produto) {
        this.propriedade = produto
    }
}

const produtoUm = new Products('mouse')
console.log(produtoUm.propriedade)

const produtoDois = new Products('teclado')
console.log(produtoDois.propriedade)





// Métodos da classe

class User {
    constructor(name, surname, email, age) {
        this.name = name
        this.surname = surname
        this.email = email
        this.age = age
    }

    // metodo 'UserObj' é acessável no obj instanciado
    UserObj() {
        const userData = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            age: this.age
        }
        console.log(userData)
    }
}

const user = new User('John', 'Doe', 'johndoe@me.com', 30)   // instanciando obj
user.UserObj()    // chamando metodo






// métodos estáticos -> são chamados sem precisar instanciar a classe
class User2 {
    static staticMethod() {
        console.log('hello')
    }

    static anotherMethod(msg) {
        console.log(msg)
    }
}

User2.staticMethod()                      // imprime 'hello'
User2.anotherMethod('My name is John')    // imprime o conteudo de 'msg'






// heranças de classes

class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log('Some random animal sound')
    }
}

// classe Cat herda da classe Animal
class Cat extends Animal {
// nada aqui
}

const umGato = new Cat('Garfield')
console.log(umGato.name)                   // acessando propriedade herdada
umGato.makeNoise()                         // acessando metodo herdado










// sobrescrevendo métodos

// basta reescrever o método da classe pai na filha

class Animal2 {
    constructor(name) {
        this.name = name
    }
    makeNoise() { console.log('Some random animal sound') }
}

class Cat2 extends Animal2 {
    makeNoise() { console.log('Meow') }
}

const umGato2 = new Cat2('Garfield')
console.log(umGato2.name)
umGato2.makeNoise()            // makeNoise foi sobrescrito










// utilizando classes para tratar excecoes

let obj = {value:4}

const erroGenerico = () => {
    try {
        console.log(obj.push('8'))
    } catch (error) {
        console.log(error)                      // indica TypeError (push é metodo de array, nao de objeto)
    }
}

const erroEspecifico_TypeError = () => {
    try {
        console.log(obj.push('8'))
    } catch (error) {
        if(error instanceof TypeError) {       // tratando especificamente se for TypeError
            console.log(error)
        }
    }
}

const erroEspecifico_RangeError = () => {
    try {
        let num = 100
        if(num >= 100) {
            throw new RangeError('"Num" deve ser menor que 100')
        }
    } catch (error) {
        if(error instanceof TypeError) {        // tratando especificamente se for TypeError
            console.log(error)
        }
        if(error instanceof RangeError) {       // tratando especificamente se for RangeError
            console.log(error)
        }
    }
}
// erroEspecifico_RangeError()


const erroCriado = () => {
    let nome = 'Isabel Cristina Leopoldina Augusta Micaela Gabriela Rafaela Gonzaga de Bragança e Bourbon'
    
    try {
        if(nome.length > 50) {
            throw new Error('Nome muito grande')
        }
    } catch (error) {
            console.log(error)
    }
}
erroCriado()







// classe de erro personalizada
class MyCustomError {
    constructor(message) {
        this.message = message;
    }
}

try {
    throw new MyCustomError("Meu erro personalizado");
} catch (error) {
    if(error instanceof MyCustomError) {
        console.log(error)
    } else {
        console.log(error)
    }
}