function addParagrafo(conteudo) {
    const corpo = document.querySelector('body')
    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = conteudo
    corpo.appendChild(paragrafo)
}

let data

// data completa atual
data = new Date()
addParagrafo('1: ' + data)

// data completa definida
data = new Date(2024, 9, 24)  // ano, mes(0 a 11), dia
addParagrafo('2: ' + data)

// data e hora definidas
data = new Date(2024, 9, 24, 10, 30, 25)  // ano, mes(0 a 11), dia, hora, minuto, segundo
addParagrafo('3: ' + data)

// data e hora definidas com string
data = new Date('2024-10-24 10:30:25')
addParagrafo('4: ' + data)

// data completa atual em milissegundos (timestamp)
data = new Date().getTime()
addParagrafo('5: ' + data)

// 1ª data completa em milissegundos
data = new Date(0)
addParagrafo('6: ' + data)

// data completa em no 1000º milissegundo
data = new Date(1000)
addParagrafo('7: ' + data)







// Metodos para data e hora

// dia da semana (de 0 a 6)
data = new Date().getDay()
addParagrafo('8 dia da semana: ' + data)

// dia do mes (de 1 a 31)
data = new Date().getDate()
addParagrafo('9 dia do mes: ' + data)

// mes (de 0 a 11)
data = new Date().getMonth()
addParagrafo('10 mes: ' + data)

// ano
data = new Date().getFullYear()
addParagrafo('11 ano: ' + data)

// hora
data = new Date().getHours()
addParagrafo('12 hora: ' + data)

// minuto
data = new Date().getMinutes()
addParagrafo('13 minuto: ' + data)

// segundo
data = new Date().getSeconds()
addParagrafo('14 segundo: ' + data)

// milissegundo
data = new Date().getMilliseconds()
addParagrafo('15 milissegundo: ' + data)

// timestamp
data = new Date().getTime()
addParagrafo('16 timestamp: ' + data)





// Modificar data e hora

// alterando o ano
data = new Date(2024, 9, 24).setFullYear(2025)
addParagrafo('17 alterando o ano: ' + data)

// alterando o mes
data = new Date(2024, 9, 24).setMonth(10)
addParagrafo('18 alterando o mes: ' + data)

// alterando o dia
data = new Date(2024, 9, 24).setDate(25)
addParagrafo('19 alterando o dia: ' + data)

// alterando a hora
data = new Date(2024, 9, 24, 10).setHours(10)
addParagrafo('20 alterando a hora: ' + data)

// alterando o minuto
data = new Date(2024, 9, 24, 10, 30).setMinutes(30)
addParagrafo('21 alterando o minuto: ' + data)

// alterando o segundo
data = new Date(2024, 9, 24, 10, 30, 25).setSeconds(25)
addParagrafo('22 alterando o segundo: ' + data)

// alterando o milissegundo
data = new Date(2024, 9, 24, 10, 30, 25, 500).setMilliseconds(500)
addParagrafo('23 alterando o milissegundo: ' + data)





// formatando data e hora

// formatando a data
data = new Date()
addParagrafo('24 formato local: ' + data.toLocaleDateString())   // o default é o local do browser (ex: 'pt-BR')

// formatando o dia
data = new Date()
addParagrafo('25 formatando o dia: ' + data.getDate().toString().padStart(2, '0'))

// formatando o mes
data = new Date()
addParagrafo('26 formatando o mes: ' + (data.getMonth()+1).toString().padStart(2, '0'))

// formatando o ano
data = new Date()
addParagrafo('27 formatando o ano: ' + data.getFullYear())

// formatando a string
data = new Date()
let dia = data.getDate().toString().padStart(2, '0')
let mes = (data.getMonth()+1).toString().padStart(2, '0')
let ano = data.getFullYear()
addParagrafo('28 formatando a string: ' + dia+'/'+mes+'/'+ano)






// convertendo para string

// data e hora
data = new Date()
addParagrafo('29 data e hora A: ' + data.toString())
addParagrafo('29 data e hora B: ' + data.toLocaleString())

// somente data
data = new Date()
addParagrafo('30 somente data A: ' + data.toDateString())
addParagrafo('30 somente data B: ' + data.toLocaleDateString())

// somente hora
data = new Date()
addParagrafo('31 somente hora A: ' + data.toTimeString())
addParagrafo('31 somente hora B: ' + data.toLocaleTimeString())





// EXTRA DE toLocaleString

// O método adicional é um obj com as propriedades adicionais da string
data = new Date()
addParagrafo('32 opt params: ' + '\n' + 
    data.toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour12: false,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
))


// retornando parte da data
data = new Date()
addParagrafo('33 retornando parte da data: ' + '\n' + 
    data.toLocaleString('pt-BR', {
        month: 'numeric',
        day: 'numeric',
    }
))

// estilo/tamanho da data
data = new Date()
addParagrafo('34 estilo da data: ' + '\n' + 
    data.toLocaleString('pt-BR', {
        dateStyle: 'short'           // full, long, medium, short
    }
))


// e também funciona com números como float para moeda
let amount = 12.5
addParagrafo('35 float para moeda: ' + '\n' + 
    amount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }
))







// trabalhando com localidades diferentes e Fuso Horário

// obtendo informacoes da localidade do dispositivo
let currentLanguage = navigator.language
let currentOptions = Intl.DateTimeFormat().resolvedOptions()

addParagrafo('36 language: ' + currentLanguage)
addParagrafo('37 JSON opt: ' + JSON.stringify(currentOptions, null, 4))

// exibindo no formato de um local determinado
let dateEUA = Intl.DateTimeFormat('en-US').format(new Date())
addParagrafo('38 dateEUA: ' + dateEUA)

// obtendo a diferença em minutos do timezone 
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
let timeZoneOffset = new Date().getTimezoneOffset()
addParagrafo('39 TimeZone: ' + timeZone)
addParagrafo('40 TimeZoneOffset (mins): ' + timeZoneOffset)
addParagrafo('41 TimeZoneOffset (hours): ' + timeZoneOffset / 60)


