export default function Controls({
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace
}) {

  function stop() {
    resetCards()
  }

  function addMinutes(minutes) {
    let newMinutes = minutes + 5
    let numberMinutesGreater99 = newMinutes > 99

    if (numberMinutesGreater99) {
      newMinutes = 99
    }

    return newMinutes
  }

  function subMinutes(minutes) {
    let newMinutes = minutes - 5
    let negativeNumberOfMinutes = newMinutes <= 0

    if (negativeNumberOfMinutes) {
      newMinutes = 0
    }

    return newMinutes
  }

  function soundForest() {
    resetCards()
    buttonSoundForest.classList.add('cardSelected')
  }

  function soundRain() {
    resetCards()
    buttonSoundRain.classList.add('cardSelected')
  }

  function soundCoffeeShop() {
    resetCards()
    buttonSoundCoffeeShop.classList.add('cardSelected')
  }

  function soundFirePlace() {
    resetCards()
    buttonSoundFirePlace.classList.add('cardSelected')
  }

  function resetCards() {
    buttonSoundForest.classList.remove('cardSelected')
    buttonSoundRain.classList.remove('cardSelected')
    buttonSoundCoffeeShop.classList.remove('cardSelected')
    buttonSoundFirePlace.classList.remove('cardSelected')
  }

  return {
    stop,
    addMinutes,
    subMinutes,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFirePlace
  }
}