const aula = 9

switch (aula) {


    case 1:    // aula 1 - perguntando e retornando nome
        let pergunta = prompt("Qual seu nome?")
        alert(`Olá, ${pergunta}!!`)        
        break;


    case 2:    // aula 2 - somando dois valores
        alert('Vamos somar 2 números.')
        let number1 = Number(prompt("Digite um nº"))           // prompt devolve String, tem q converter em Number
        let number2 = Number(prompt("Digite outro nº"))
        alert(`Soma = ${number1+number2}`)
        break;


    case 3:    // aula 3 - pegar 2 nºs, fazer operações matemáticas, e alertar cada resultado
        let num1 = Number(prompt('Digite um nº'))
        let num2 = Number(prompt('Digite outro nº'))
        alert(`Soma = ${number1 + number2}`)
        alert(`Subtração = ${number1 - number2}`)
        alert(`divisão = ${number1 / number2}`)
        alert(`Multiplicação = ${number1 * number2}`)
        alert(`resto = ${number1 % number2}`)
        break;
    

    case 4:   // aula 4 - somar 3 notas e se media de 6 ou mais aprovado se nao reprovado
        let nota1 = Number(prompt('Nota da 1ª prova:'))
        let nota2 = Number(prompt('Nota da 2ª prova:'))
        let nota3 = Number(prompt('Nota da 3ª prova:'))

        let media = ((nota1+nota2+nota3) / 3).toFixed(2)
        media >= 6? alert(`Aprovado!\nMedia ${media}`) : alert(`Reprovado=/\nMedia ${media}`)
        break;


                // meu modelo
                // let notas = Number(prompt('Quantas notas você recebeu?'))
                // let total = 0
        
                // for (let i = 1; i <= notas; i++) {
                //     let nota = Number(prompt(`Diga a sua ${i}ª nota:`))
                //     total += nota
                // }
        
                // let mediaNotas = (total / notas).toFixed(2)
        
                // if (mediaNotas >= 6) {
                //     alert(`Parabéns!! Você passou!\nSua média é ${mediaNotas.replace(".",",")}.`)
                // } else {
                //     alert(`Reprovado.\nMédia: ${mediaNotas.replace(".",",")}.`)
                // }
                // break;

    
    case 5:   // aula 5 - pegar 10 itens de compras e imprimi-los separando por virgula
        let qtdeItens = Number(prompt('Qual o total de itens que compoe sua lista?'))
        let mercado = []
        for (let i = 0; i < qtdeItens; i++) {
            mercado.push(prompt(`Diga o ${i+1}º item.`))
        }
        mercado = mercado.join(", ")
        alert(`Sua lista de compras:\n${mercado}`)
        break;
    

    case 6:  // aula 6
        /*
        **Jogo da adivinhação:**
        Apresente a mensagem ao usuário: 
        "Adivinhe o nº que estou pensando. Está entre 0 e 10."

        Crie uma lógica para gerar um número aleatório e verificar se o nº digitado é o mesmo
        que o gerado pelo sistema.

        Enquanto o usuário não adivinhar o número, mostrar a mensagem:
        "Errou! Tente novamente."

        Caso o usuário acerte o número, apresentar a mensagem:
        "Parabéns! Você adivinhou o número em X tentativas."

        Substituir o X pela qtde de tentativas.
        */

        let aleatorio = Math.floor((Math.random()*10))+1
        Math.round
        let guess = Number(prompt('Adivinhe o nº que estou pensando. Está entre 0 e 10.'))
        let trials = 1;

        while (aleatorio !== guess) {
            guess = Number(prompt("Errou! Tente novamente."))
            trials++
        }

        alert(`Parabéns! Você adivinhou o número em ${trials} tentativas.`)
      break;


      case 7:   // aula 7
      /**
       Faça um programa que tenha um menu e apresente a seguinte mensagem:
       
       "Olá usuário! Digite o número da opção desejada."
       
       1. Cadastrar um item na lista;
       2. Mostrar itens cadastrados;
       3. Sair do programa.
       
       O programa deve capturar o nº digitado e mostrar os seguintes cenários:
       Caso 1, ele poderá cadastrar um item na lista
       Caso 2, ele poderá ver os itens cadastrados
       Se não houver itens cadastrados, mostrar a msg:
          "Não existem itens cadastrados."
       Caso 3, a aplicação se encerra.
       */

       let opcao = 1;
       let lista = [];
        
       while (opcao !== 3) {
        opcao = Number(prompt(`Olá usuário! Digite o número da opção desejada.\n\n1. Cadastrar um item na lista\n2. Mostrar itens cadastrados\n3. Sair do programa`))
           switch (opcao) {
               case 1:
                   lista.push(prompt('Nome do item a cadastrar:'))
                   break;
               case 2:
                   if (lista.length == 0) {
                       alert('Não existem itens cadastrados.')
                   } else {
                       alert(`Sua lista contém: ${lista.join(", ")}`)
                   }
                   break;
               case 3:
                   alert('Até mais!')
                   break;
               default:
                   alert('Erro. Tente novamente.')
                   break;
           }
       }
       break;
       
    //    let option
    //    let items = []
       
    //    while(option != 3) {
    //      option =  Number(prompt(`
    //        Olá usuário! Digite o número da opção desejada
           
    //        1. Cadastrar um item na lista
    //        2. Mostrar itens cadastrados
    //        3. Sair do programa
    //      `))
    //      if(option == 1) {
    //        let item = prompt("Digite o nome do item")
    //        items.push(item) 
    //      }
    //      else if (option == 2) {
    //        if(items.length == 0) {
    //          alert("Não existem itens cadastrados")
    //        } else {
    //          alert(items)
    //        }
    //      } else {
    //        alert("Tchau")
    //      }
    //    }
    //    break;


        case 8:  // aula 8
            /*
             Crie uma lista de pacientes, que cada paciente deverá ter:
             nome, idade, peso, altura
             Escreva uma lista com os nomes dos pacientes
             */
            let listaPacientes = 
            [
             {nome:"Ana"    , idade:20 ,peso:50 ,altura:1.66},
             {nome:"Beto"   , idade:30 ,peso:70 ,altura:1.75},
             {nome:"Claudio", idade:55 ,peso:90 ,altura:1.80}
            ]

            let nomes = []

            for (const obj of listaPacientes) {
                nomes.push(obj['nome'])
            }
            alert(nomes.join(', '))
            
            // desafio -> filtrar o array pegando um determinado paciente e alertando seus dados
            let pacienteDesejado = prompt('Nome do paciente buscado')
            let arrayDoPacienteDesejado = listaPacientes.filter(obj => obj.nome === pacienteDesejado)
            alert(`
                Nome é ${arrayDoPacienteDesejado[0].nome}
                de idade ${arrayDoPacienteDesejado[0].idade}
                peso de ${arrayDoPacienteDesejado[0].peso}
                e altura ${arrayDoPacienteDesejado[0].altura}
                `)
            break;
            
        case 9:  // aula 9
            /*
            Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima:
                "Paciente X possui IMC de: Y"
            Crie uma funcao para o calculo do IMC.       imc = massa / (altura^2)
            */
            // minha resolucao
            // let listaDePacientes = 
            //     [
            //     {nome:"Ana"    , idade:20 ,peso:50 ,altura:1.66},
            //     {nome:"Beto"   , idade:30 ,peso:70 ,altura:1.75},
            //     {nome:"Claudio", idade:55 ,peso:90 ,altura:1.80}
            //     ]
            
            // function imc (m,h) {
            //     return m / (h^2)
            // }

            // let arrayIMC = listaDePacientes.map(
            //     obj => imc(obj.peso, obj.altura).toFixed(2)
            // )

            // for (let i = 0; i < listaDePacientes.length; i++) {
            //     console.log(`Paciente ${listaDePacientes[i].nome} possui IMC de: ${arrayIMC[i]}`)
            // }
            
            let listaDePacientes = 
                [
                {nome:"Ana"    , idade:20 ,peso:50 ,altura:1.66},
                {nome:"Beto"   , idade:30 ,peso:70 ,altura:1.75},
                {nome:"Claudio", idade:55 ,peso:90 ,altura:1.80}
                ]
            
            function imc (m,h) {
                return m / (h^2)
            }

            function printIMCs(pacienteObj) {
                return `Paciente ${pacienteObj.nome} tem IMC de: ${imc(pacienteObj.peso, pacienteObj.altura).toFixed(2)}`
            }
              
              for (const paciente of listaDePacientes) {
                let IMCmessage = printIMCs(paciente)
                alert(IMCmessage)
                console.log(paciente)
              }
              
            
            default:
            break;
}














