const hour = document.querySelector('.hour')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const ampmEl = document.querySelector('.ampm')
const btn_text = document.querySelector('.toogle-button p')
const btn = document.querySelector('.toogle-button')

btn_text.textContent = '24h'
btn_text.setAttribute('am-pm-clock','am-pm')

btn.addEventListener('click',changeClockPresentationTemplate)

function getTime(){
  const currTime = new Date()
  const currHour = currTime.getHours()
  const currMinutes = currTime.getMinutes()
  const currSeconds = currTime.getSeconds()
  return [currHour,currMinutes,currSeconds]
}

function changeClockPresentationTemplate(){
  if(btn_text.getAttribute('am-pm-clock') == '24h'){
    btn_text.textContent = '24h'
    btn_text.setAttribute('am-pm-clock','am-pm')
  }
  else{
    btn_text.textContent = 'AM-PM'
    btn_text.setAttribute('am-pm-clock','24h')
  }
}

function clock(){
  setInterval(()=>{
    const [currHour,currMinutes,currSeconds] = getTime()
    const btnAttr = btn_text.getAttribute('am-pm-clock')

    if(btnAttr == "am-pm"){
      ampmEl.style.display = 'inline'
      ampmEl.textContent = currHour>=12 ? 'pm' : 'am'
      const amPmHour = currHour >12 ? currHour - 12 : currHour
      hour.textContent = amPmHour >= 10 ? amPmHour : '0'+amPmHour
    }
    else{
      hour.textContent = currHour >= 10 ? currHour : '0'+currHour
      ampmEl.style.display = 'none'
    }
    minutes.textContent = currMinutes >= 10 ? currMinutes : '0'+currMinutes
    seconds.textContent = currSeconds >= 10 ? currSeconds : '0'+currSeconds
  },1000)
}

clock()