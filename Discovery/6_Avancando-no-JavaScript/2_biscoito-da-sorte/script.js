const biscuit = document.querySelector('.biscuit')
const part1 = document.querySelector('#closed')
const part2 = document.querySelector('#open')
const btnDiv = document.querySelector('#btnDiv')

console.log(biscuit)

biscuit.addEventListener('click', (event)=>{
    part1.classList.toggle('hide')
    part2.classList.toggle('hide')
})

btnDiv.addEventListener('click', (event) => {
    part1.classList.toggle('hide')
    part2.classList.toggle('hide')
})