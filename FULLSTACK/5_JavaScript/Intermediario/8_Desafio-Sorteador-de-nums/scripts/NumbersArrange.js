/**
 * Fn que recebe o array dos numeros gerados e os insere em
 * no componente div da classe 'sorted-numbers'
 * dentro do componente 'sorting' para serem exibidos
 * na pagina formatados.
 * @param {Array<number>} numbersArray - array de numeros gerados pela Fn sortingNums
 * @param {HTMLElement} DOMelement - div da classe 'sorted-numbers'
 */
function arrangeNumbersLayout(numbersArray, DOMelement) {
    DOMelement.innerHTML = ''

    for (let i = 0; i < numbersArray.length; i++) {

        const element = numbersArray[i];

        const divElement = document.createElement('div')
        const spanElement = document.createElement('span')

        spanElement.classList.add('resulting-numbers')

        spanElement.textContent = element

        divElement.appendChild(spanElement)
        DOMelement.appendChild(divElement)
    }
}

export { arrangeNumbersLayout }