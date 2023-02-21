import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSub,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace
} from "./elements.js"

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    timer.countDown()
  })

  buttonStop.addEventListener('click', function () {
    sound.stopAudios()
    controls.stop()
    timer.reset()
  })

  buttonAdd.addEventListener('click', function () {
    let newMinutes = controls.addMinutes(Number(minutesDisplay.textContent))
    let newSeconds = Number(secondsDisplay.textContent)
    timer.updateDisplay(newMinutes, newSeconds)
  })

  buttonSub.addEventListener('click', function () {
    let newMinutes = controls.subMinutes(Number(minutesDisplay.textContent))
    let newSeconds = Number(secondsDisplay.textContent)
    timer.updateDisplay(newMinutes, newSeconds)
  })


  buttonSoundForest.addEventListener('click', function () {
    let cardSelected = buttonSoundForest.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundForest.pause()
      buttonSoundForest.classList.remove('cardSelected')
      return
    }

    controls.soundForest()
    sound.pressButtonAudioForest()
  })

  buttonSoundRain.addEventListener('click', function () {
    let cardSelected = buttonSoundRain.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundRain.pause()
      buttonSoundRain.classList.remove('cardSelected')
      return
    }

    controls.soundRain()
    sound.pressButtonAudioRain()
  })

  buttonSoundCoffeeShop.addEventListener('click', function () {
    let cardSelected = buttonSoundCoffeeShop.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundCoffeeShop.pause()
      buttonSoundCoffeeShop.classList.remove('cardSelected')
      return
    }

    controls.soundCoffeeShop()
    sound.pressButtonAudioCoffeeShop()
  })

  buttonSoundFirePlace.addEventListener('click', function () {
    let cardSelected = buttonSoundFirePlace.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundFirePlace.pause()
      buttonSoundFirePlace.classList.remove('cardSelected')
      return
    }

    controls.soundFirePlace()
    sound.pressButtonAudioFirePlace()
  })

}