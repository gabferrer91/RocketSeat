export class fnAsync {
    static fnAsyncPegaDados() {
        const url = "https://api.github.com/users/vihmalmsteen"
        const requisicao = fetch(url)
        .then(pegarDados => pegarDados.json())
        .then(dados => {
            console.log(dados)
            return dados
        })
    }
}

