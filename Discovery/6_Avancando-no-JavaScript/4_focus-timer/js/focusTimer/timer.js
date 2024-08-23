import state from "./state.js";

export function timer (min=25,sec=0) {
    state.minutes = min
    state.seconds = sec
    console.log(state)
}