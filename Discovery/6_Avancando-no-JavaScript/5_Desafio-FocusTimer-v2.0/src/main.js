import { toggleMode } from './themes.js'
import * as fnSounds from './sounds/soundActions.js'
import * as fnsTimer from './timer/index.js'

/* change light to dark mode and vice-versa */
toggleMode()


/* play/pause musics */
fnSounds.fnTree()
fnSounds.fnRain()
fnSounds.fnBook()
fnSounds.fnFire()


/* timer controls */
fnsTimer.beginning()                 /* sets timer to default from setups */
fnsTimer.fnTimerPlay()
fnsTimer.fnTimerIncr()
fnsTimer.fnTimerDecr()
fnsTimer.fnStop()
fnsTimer.fnSwitch()


