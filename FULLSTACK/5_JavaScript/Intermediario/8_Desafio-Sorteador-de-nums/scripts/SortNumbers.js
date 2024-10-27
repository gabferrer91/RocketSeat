import { arrangeNumbersLayout } from "./NumbersArrange.js";
import { updateTrials } from './CountUpdate.js'

/**
 * Fn que sorteia os nums, de acordo com a 
 * qtd de nums a serem sorteados e o intervalo.
 * Leva em consideracao se os nums devem ser unicos
 * ou não (havendo repeticoes).
 * 
 * @param {HTMLButtonElement} btnSorteio - O botao que dispara o sorteio.
 * @param {HTMLInputElement} inputAmount - O input do total de nums a serem sorteados.
 * @param {HTMLInputElement} inputFrom - O input que recebe o valor minimo.
 * @param {HTMLInputElement} inputTo - O input que recebe o valor maximo.
 * @param {HTMLInputElement} inputCheckbox - O checkbox que determina se os
 * numeros sorteados devem ser unicos ou nao.
 * @param {HTMLDivElement} allSortedNumbersBox - Div que receberá os nums gerados para 
 * serem exibidos na pagina.
 */
function sortingNums(btnSorteio, inputAmount, inputFrom, inputTo, inputCheckbox, allSortedNumbersBox) {
    btnSorteio.addEventListener('click', (e) => {

        e.preventDefault()
    
        let amount = Number(inputAmount.value)
        let from = Number(inputFrom.value)
        let to = Number(inputTo.value)
        let checkbox = inputCheckbox.checked
    
    
    
        // <validation>
        if(from == '' && to == '') {
            let randomValue = Math.floor(Math.random() * 100) + 1
            console.log(randomValue)
            return
        }
    
        if((from == '' && to != '') || (from != '' && to == '')) {
            alert('Complete os valores míninmo e máximo.')
            return
        }
        // </validation>
    
    
    
    
        // if checkbox is checked (no repeating numbers, using Set obj)
        if(checkbox) {
            const noRepeatsSet = new Set()
            while(noRepeatsSet.size < amount) {
                noRepeatsSet.add(Math.floor(Math.random() * (to - from + 1)) + from)
            }
            let noRepeatsArray = [...noRepeatsSet]
            console.log(noRepeatsArray)
            arrangeNumbersLayout(noRepeatsArray, allSortedNumbersBox)
            updateTrials()
            return
        }
    
        // if checkbox is not checked (repeating numbers, using List obj)
        if(!checkbox) {
            let repeatsList = []
            while(repeatsList.length < amount) {
                repeatsList.push(Math.floor(Math.random() * (to - from + 1)) + from)
            }
            console.log(repeatsList)
            arrangeNumbersLayout(repeatsList, allSortedNumbersBox)
            updateTrials()
            return
        }
    })
}



export { sortingNums }

