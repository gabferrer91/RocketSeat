const btnControls = document.querySelector('#controls')
import * as actions from './actions.js'

export function registerControls() {
    btnControls.addEventListener('click', (e) => {
        
        const action = e.target.dataset.action
        
        console.log(action)                                   /* label setada no data-action dos botoes no html */

        if(typeof actions[action] != 'function') {
            return
        } else {
            actions[action]()
        }
        
    })
}

