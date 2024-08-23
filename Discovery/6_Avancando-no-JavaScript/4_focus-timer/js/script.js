import "./modes.js";
import { timer } from './focusTimer/timer.js';
import { registerControls } from "./focusTimer/events.js";
import './focusTimer/actions.js'

registerControls()

// const modebtn = document.querySelector('.mode img')
// const docBody = document.querySelector('body')

// modebtn.addEventListener('click', (e) => {
//     docBody.classList.toggle('darkMode')
//     modebtn.scr = '../assets/ph_play-circle.svg'
// })


