import './toggle-mode.js'
import * as FocusTimer from "./FocusTimer/index.js"
import * as state from './FocusTimer/state.js'

FocusTimer.start(state.default.minutes, state.default.seconds)


/* 
Como as configurações do timer estão na pasta FocusTimer e o arquivo principal é o index,
basta importar o arquivo index.js de lá.
*/