import {dark, light, pageBody} from './DOMs.js'

export function toggleMode() {
    dark.addEventListener('click', (e) => {
        pageBody.classList.toggle('dark')
        dark.classList.add('toggleHidden')
        light.classList.remove('toggleHidden')
    });
    
    light.addEventListener('click', (e) => {
        pageBody.classList.remove('dark')
        dark.classList.remove('toggleHidden')
        light.classList.add('toggleHidden')
    })
}


