/* PARTE 1: Obtendo os dados necessários do documento */
// forms
const amount = document.querySelector('#amount')
const form = document.querySelector('form')
const expense = document.querySelector('#expense')
const category = document.querySelector('#category')

// lista
const expenseList = document.querySelector('ul')
const expensesTotal = document.querySelector('aside header h2')
const totalListItems = document.querySelector('aside header p span')




/* PARTE 2: tratando o valor currency do input */
amount.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '')
    value = value / 100
    
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    amount.value = value
})




/* PARTE 3: execucoes ao enviar o form */
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        amount: amount.value,
        expense: expense.value,
        category: category.value,
        category_name: category.options[category.selectedIndex].text,
        created_at: new Date()
    }
    console.log(newExpense)
    expenseAdd(newExpense)

    updateTotals()
    formClear()
})



/* PARTE 4: funcoes */
function expenseAdd(newExpense) {
    try {
        // criando a li e adicionando sua classe
        const expenseItem = document.createElement('li')
        expenseItem.classList.add('expense')

        // criando o elemento do icone da categoria
        const expenseIcon = document.createElement('img')
        expenseIcon.setAttribute('src', `./img/${newExpense.category}.svg`)
        expenseIcon.setAttribute('alt', newExpense.category_name)

        // inserindo a img na li, e depois li na ul
        expenseItem.append(expenseIcon)
        expenseList.append(expenseItem)


        // criando o elemento do nome da despesa
        const expenseInfo = document.createElement('div')
        expenseInfo.classList.add('expense-info')

        const expenseName = document.createElement('strong')
        expenseName.innerHTML = newExpense.expense

        const expenseCategory = document.createElement('span')
        expenseCategory.innerHTML = newExpense.category_name

        expenseInfo.append(expenseName, expenseCategory)
        expenseItem.append(expenseInfo)


        // criando o elemento do valor da despesa
        const expenseAmount = document.createElement('span')
        expenseAmount.classList.add('expense-amount')
        expenseAmount.innerHTML = `<small>R$</small> ${String(newExpense.amount).toUpperCase().replace('R$', '')}`
        expenseItem.append(expenseAmount)


        // criando o botão de remover
        const expenseRemove = document.createElement('img')
        expenseRemove.setAttribute('src', './img/remove.svg')
        expenseRemove.setAttribute('alt', 'remover')
        expenseRemove.setAttribute('class', 'remove-icon')
        expenseItem.append(expenseRemove)
    } catch (error) {
        alert('Erro ao adicionar despesa');
        console.log(error);
    }
}


function updateTotals() {
    // quantidade de itens
    let listItems = expenseList.children
    totalListItems.innerHTML = listItems.length == 1 ? `${listItems.length} despesa` : `${listItems.length} despesas`

    // valor total
    let total = 0

    for (let i = 0; i < listItems.length; i++) {
        let itemAmount = listItems[i].querySelector('.expense-amount').innerHTML

        // removendo caracteres nao numericos e substituindo virgula por ponto
        let value = parseFloat(itemAmount.replace(/[^\d,]/g, '').replace(',','.'))

        total += value
    }
    total = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace('R$', '')
    expensesTotal.innerHTML = `<small>R$</small> ${total}`
}



/* PARTE 5: removendo despesas */
expenseList.addEventListener('click', (e) => {
    // checando se o elemento clicado possui a class .remove-icon (do icone de remover)
    if (e.target.classList.contains('remove-icon')) {
        
        // jeito 1
        // e.target.parentElement.remove()
        
        // jeito 2
        const item = e.target.closest('.expense')
        item.remove()
        
        updateTotals()
    }
})


function formClear() {
    amount.value = ''
    expense.value = ''
    category.value = ''
}