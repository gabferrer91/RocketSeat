import { inputPhone } from './DOMs.js'

inputPhone.addEventListener('input', (e) => {
    
    // Remove todos os caracteres não numéricos
    const unmaskedValue = e.target.value.replace(/\D/g, '');

        // Aplica a máscara
        let maskedValue = '';
    
        if (unmaskedValue.length > 0) {
            maskedValue += '(' + unmaskedValue.substring(0, 2);         // Adiciona o código de área
        }
        if (unmaskedValue.length > 2) {
            maskedValue += ') ' + unmaskedValue.substring(2, 3) + ' ';  // Adiciona o primeiro dígito do número
        }
        if (unmaskedValue.length >= 3) {
            maskedValue += unmaskedValue.substring(3, 7);               // Adiciona os próximos 4 dígitos
        }
        if (unmaskedValue.length >= 7) {
            maskedValue += '-' + unmaskedValue.substring(7, 11);        // Adiciona o traço e os últimos 4 dígitos
        }
        
        // Atualiza o valor do input
        e.target.value = maskedValue; 
})

