/**
 * Imagine um obj. Ele pode receber de tudo, inclusive FNs.
 * Fazer referências de propriedades do obj dentro dele próprio se usa "this."
 * Dentro do obj criado, cada chave será uma propriedade do obj criado, 
 * podendo ser chamado com:
 * obj.propriedade ou obj['propriedade'].
 */

const produtoUm = {
    nome:"t-shirt masculina Apollo",
    tipo:"vestiário",
    genero:"M",
    preco:120.30,
    desconto: function (i) {
        return this.preco * (1 - i)         // pra fazer ref de "preco" do próprio "cadastro" -> "this.preco"
    }
}

console.log(produtoUm.nome)                 // "t-shirt masculina Apollo"
console.log(produtoUm['tipo'])              // "vestuário"
console.log(produtoUm.desconto(0.1))        // 108.27
produtoUm.preco = produtoUm.desconto(0.1)   // atualizando preco para 108.27
console.log(produtoUm.preco)


/**
 * Caso quisessemos cadastrar vários produtos, poderiamos 
 * usar uma FN construtora. Abaixo, cada param será uma propriedade do obj.
 */

function cadastrar (nome, tipo, preco) {
    this.nome = nome
    this.tipo = tipo
    this.preco = preco
    this.desconto = function (taxa=0) {
        return this.preco * (1 - taxa)
    }
}

const produtoDois = new cadastrar("Tênis Mizuno 39 preto", "calçados", 199)

console.log(produtoDois)
console.log(produtoDois.desconto(0.1))


/**
 * Mas, podemos estabelecer uma classe, que é a estrutura comum dos objs.
 * O 'constructor', caso definido, são params que devem ser informados para instanciar a classe.
 * Ainda, tratam-se de propriedades do obj de classe quando instanciado.
 * Funções no escopo de classes são métodos do obj criado por classe. Ex abaixo: FN desconto.
 */

class cadastro {
    constructor(nome, tipo, preco) {
        this.nome = nome
        this.tipo = tipo
        this.preco = preco
    }

    desconto(desconto) {
        return this.preco * (1 - desconto)
    }
}

const produtoTres = new cadastro("Raquete de tênis", "esporte", 90);

console.log(produtoTres.nome)               // "Raquete de tênis"
console.log(produtoTres['tipo'])            // "esporte"
console.log(produtoTres.desconto(0.1))      // 81





