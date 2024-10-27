/**
 * Fn que valida os inputs da qtd de nums sorteados, minimo e maximo do sorteador.
 * 
 * @param {HTMLInputElement} inputAmount - O input que recebe o num de sorteados.
 * @param {HTMLInputElement} inputFrom - O input que recebe o valor minimo do sorteio.
 * @param {HTMLInputElement} inputTo - O input que recebe o valor maximo do sorteio.
 */
function validatingInputs(inputAmount, inputFrom, inputTo) {
    
    // validating amount input
    inputAmount.addEventListener('input', (e) => {
        let totalAmount = Number(e.target.value)
        totalAmount < 1 ? totalAmount = 1 : totalAmount
        totalAmount > 99 ? totalAmount = 100 : totalAmount
        let minValue = Number(inputFrom.value)
        let maxValue = Number(inputTo.value)
    
        if(minValue != '' && maxValue != '') {
            let spread = maxValue - minValue + 1
            totalAmount > spread ? totalAmount = spread : totalAmount
            e.target.value = totalAmount
        }
    })
    
    // validating min value
    inputFrom.addEventListener('input', (e) => {
        let minValue = Number(e.target.value)
        let maxValue = Number(inputTo.value)
    
        if(maxValue != '') {
            minValue < 1 ? minValue = 1 : minValue
            minValue > 98 ? minValue = 99 : minValue
            minValue > maxValue ? minValue = maxValue - 1 : minValue
            e.target.value = minValue
        }
    })
    
    // validating max value
    inputTo.addEventListener('input', (e) => {
        let minValue = Number(inputFrom.value)
        let maxValue = Number(e.target.value)
    
        if(minValue != '') {
            maxValue < 2 ? maxValue = 2 : maxValue
            maxValue > 100 ? maxValue = 100 : maxValue
            maxValue < minValue ? maxValue = minValue + 1 : maxValue
            e.target.value = maxValue
        }
    })
    
    return
}


export { validatingInputs }

