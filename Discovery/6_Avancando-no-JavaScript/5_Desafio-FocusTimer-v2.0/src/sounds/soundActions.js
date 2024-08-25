import * as sounds from './soundFiles.js'
import * as doms from '../DOMs.js'
import * as configs from '../setups.js'


//     doms.treeBtn -> botao pra dar play em 'sounds.audioTree'
// sounds.audioTree -> pra tocar em doms.treeBtn


/* Fn tree sound: play/pause music*/
export function fnTree () {
    doms.treeBtn.addEventListener('click', (e) => {    
        configs.setups.playingTree = !configs.setups.playingTree
        
        if(configs.setups.playingTree) {
            sounds.audioTree.play()
        } else {
            sounds.audioTree.pause()
            sounds.audioTree.currentTime = 0
        }
    })
}


/* Fn rain sound: play/pause music*/
export function fnRain () {
    doms.rainBtn.addEventListener('click', (e) => {    
        configs.setups.playingRain = !configs.setups.playingRain
        
        if(configs.setups.playingRain) {
            sounds.audioRain.play()
        } else {
            sounds.audioRain.pause()
            sounds.audioRain.currentTime = 0
        }
    })
}


/* Fn cafeteria sound: play/pause music*/
export function fnBook () {
    doms.bookBtn.addEventListener('click', (e) => {    
        configs.setups.playingBook = !configs.setups.playingBook
        
        if(configs.setups.playingBook) {
            sounds.audioBook.play()
        } else {
            sounds.audioBook.pause()
            sounds.audioBook.currentTime = 0
        }
    })
}


/* Fn fire sound: play/pause music*/
export function fnFire () {
    doms.fireBtn.addEventListener('click', (e) => {    
        configs.setups.playingFire = !configs.setups.playingFire
        
        if(configs.setups.playingFire) {
            sounds.audioFire.play()
        } else {
            sounds.audioFire.pause()
            sounds.audioFire.currentTime = 0
        }
    })
}