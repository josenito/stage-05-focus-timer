import Controls from "./controls.js"
import Events from "./events.js"
import Sound from "./sounds.js"
import Timer from "./timer.js"

import {
  minutesDisplay,
  secondsDisplay,
  //buttonPlay,
  //buttonStop,
  // buttonAdd,
  // buttonSub,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace
} from "./elements.js"

const controls = Controls({
  //buttonPlay,
  //buttonStop,
  // buttonAdd,
  // buttonSub,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace
})

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.stop,
  stopAudios: sound.stopAudios
})


Events({ controls, timer, sound })