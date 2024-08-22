const biscuit = document.querySelector('.biscuit')
const part1 = document.querySelector('#closed')
const part2 = document.querySelector('#open')
const btnDiv = document.querySelector('#btnDiv')
const message = document.querySelector('.messContent')


let motivacionalPhrases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito."
]

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


biscuit.addEventListener('click', (event)=>{
    let totalPhrases = motivacionalPhrases.length
    let numberBetween = randomBetween(1, totalPhrases)
    message.textContent = motivacionalPhrases[numberBetween]
    part1.classList.toggle('hide')
    part2.classList.toggle('hide')
})

btnDiv.addEventListener('click', (event) => {
    part1.classList.toggle('hide')
    part2.classList.toggle('hide')
})

