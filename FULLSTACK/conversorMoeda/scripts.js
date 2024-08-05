// cotacao das moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {    
    const searchNonNumbers = /\D+/g                                      // sequencia regexp que busca letras
    amount.value = amount.value.replace(searchNonNumbers, '')            // substituindo o que for letra por vazio
    console.log(amount.value)
})

// Capturando o evento de submit (enviar) do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(currency.value)                                        // ex de value: <option value="USD">Dólar Americano</option>
    
    // identificando a moeda para converter
    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
            case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
        default:
            break
    }
})


// funcao para converter a moeda
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
    // const total = `${symbol} ${(amount * price)}`
    const total = amount * price
    let formated_total = formatToBR(total).replace('R$','')

    try {
        // Aplica a classe, definida no CSS, que exibe o footer para mostrar o resultado.
        description.textContent = `${symbol} 1 = ${formatToBR(price)}`
        result.textContent = `${formated_total} Reais`
        footer.classList.add('show-result')
    } catch (error) {
        // Removendo o footer se houver erro.
        console.log(error)
        footer.classList.remove('show-result')
        alert('Não foi possível converter.')
    }

    return total
}

// Formata a moeda para real brasileiro.
function formatToBR (value) {
    return Number(value).toLocaleString('pt-BR', {           // Definir como Number abre o linting de métodos de número
        style:'currency',
        currency:'BRL'
    })
}


console.log(description.textContent)
console.log(result.textContent)

console.log(
    formatToBR(total)
)
