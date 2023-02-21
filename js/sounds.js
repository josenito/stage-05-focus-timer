export default function () {

  const soundForest = new Audio("./assets/forest.wav")
  const soundRain = new Audio("./assets/rain.wav")
  const soundCoffeeShop = new Audio("./assets/coffeeShop.wav")
  const soundFirePlace = new Audio("./assets/firePlace.wav")

  soundForest.loop = true
  soundRain.loop = true
  soundCoffeeShop.loop = true
  soundFirePlace.loop = true

  function pressButtonAudioForest() {
    stopAudios()
    soundForest.play()
  }

  function pressButtonAudioRain() {
    stopAudios()
    soundRain.play()
  }

  function pressButtonAudioCoffeeShop() {
    stopAudios()
    soundCoffeeShop.play()
  }

  function pressButtonAudioFirePlace() {
    stopAudios()
    soundFirePlace.play()
  }

  function stopAudios() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeShop.pause()
    soundFirePlace.pause()
  }

  return {
    pressButtonAudioForest,
    pressButtonAudioRain,
    pressButtonAudioCoffeeShop,
    pressButtonAudioFirePlace,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFirePlace,
    stopAudios
  }

}