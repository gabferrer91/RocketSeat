const content = document.querySelector('.conteudo')

// exemplo 1 -- default
// import qualquerOutroNomeQueNaoAmigo from './export.js'
// content.textContent = qualquerOutroNomeQueNaoAmigo()

// exemplo 2 -- nomeado
// import { pessoa } from './export.js'
// content.textContent = `${pessoa.nome} tem ${pessoa.idade} e seus filhos se chamam ${pessoa.filhos[0]} e ${pessoa.filhos[1]}.`

// exemplo 3 -- multiplas importacoes
// import {num1, num2} from './export.js'
// let soma = num1 + num2
// content.textContent = soma

// exemplo 4 -- renomeando export
// import {calculoIMC as indice} from './export.js'
// let conta = indice(78,1.65)
// content.textContent = conta

//exemplo 5 -- multiplos imports
// import segundoNome, { primeiroNome } from './export.js' 
// let concat = primeiroNome + ' ' + segundoNome
// content.textContent = concat

// exemplo 6 -- import de tudo
// import * as fns from './export.js' 
// fns.divi(6,2) // 3

// exemplo 7 -- import file

import './export.js'
