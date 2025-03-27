const convertTime = inp_seconds => {

  let days = Math.floor (inp_seconds / (60 * 60 * 24))
  let hours = Math.floor ((inp_seconds - (days * 60 * 60 * 24)) / (60 * 60))
  let minutes = Math.floor ((inp_seconds - (hours * 60 * 60) - (days * 60 * 60 * 24)) / 60)
  let seconds = inp_seconds - (days * 60 * 60 * 24) - (hours * 60 * 60) - (minutes * 60)

  days = days == 0 ? '' : `${days} дн. `
  hours = days == 0 && hours == 0 ? '' : `${hours} ч. `
  minutes = days == 0 && hours == 0 && minutes == 0 ? '' : `${minutes} мин. `
  seconds = hours != 0 || days != 0 ? '' : `${seconds} сек.`

  return days + hours + minutes + seconds

}

console.info (convertTime (
  
  255 * 60*60*24 +   // дни
  0 * 60*60*1 +   // часы
  // 37 * 60*1*1 +   // минуты
  5 * 1*1*1  // секунды

))