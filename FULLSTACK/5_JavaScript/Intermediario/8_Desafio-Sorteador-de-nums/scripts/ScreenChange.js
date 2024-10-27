import { btnSorteio, btnNewSorteio, sortitionElement, sortedElement } from "./DOMs.js";

function hideElements() {
    btnSorteio.addEventListener('click', (e) => {
        e.preventDefault()
        sortitionElement.classList.toggle('hide-element')
        sortedElement.classList.toggle('hide-element')
    })

    btnNewSorteio.addEventListener('click', (e) => {
        e.preventDefault()
        sortitionElement.classList.toggle('hide-element')
        sortedElement.classList.toggle('hide-element')
    })
}


export { hideElements }

