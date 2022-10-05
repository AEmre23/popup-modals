let content = {
  size: "medium",
  position: "5",
  color: "bg-[#7D4AEA]",
  text1: "Reach and grow your audience",
  text2: "Build a better popup today.",
  popupImage:'',
  imageURL:"https://thumbsnap.com/i/Z9JiaxgZ.png",
  targetPhone:false,
  targetLaptop:false,  
  afterXSecond:'',
  afterXScroll: '',
  trafficSourceDomain: '',
  browserLanguages:[],
  exitIntentTargeting:false,
  webhookURL: { url:'https://hook.eu1.make.com/87iduve501h7aul8rzna6nupqh2amrzo',formSubmission:false,clickData:false },
}
let popDisplay = 'none'
let popOpacity = '0'
let clickDataArray = []
function Pop() {

let container = document.createElement('div');
let style = document.createElement('style')

document.body.appendChild(style)
document.body.appendChild(container)

style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  .popup-wrapper{
    font-family: 'Inter', sans-serif !important;
    position: fixed;
    background-color:white;
    color:black;
    display: flex;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
    z-index: 99999;
    cursor: default;
    display:${popDisplay};
    opacity:${popOpacity};
    transition: opacity .5s ease-in;
  }
  .popup-altwrapper{
    position:relative;
    display: flex;
    padding-left:25px;
    gap:32px;
    justify-content: flex-start;
    align-items:center;
  }
  .popup-leftside{
    width:90px;
    height:90px;
    border-radius:50%;
   background-repeat: no-repeat;
   background-position: center;
   background-color:${colorCheck(content.color)};
  }
  .popup-text-section{
    display:flex;
    flex-direction:column;
    gap:8px;
  }
  .popup-text-header{
    font-weight:700;
  }
  .popup-text-sub{
    color: #777777;
  }
  #popup-closer{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 9%;
    right: 3%;
    color: black;
    opacity: 0.4;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-weight: 700;
  }
   #popup-closer:hover {
   transform: scale(1.03);
 }

  `
  container.innerHTML = `
    <div style=${positionCheck(content.position)} class="popup-wrapper">
      <div style=${sizeCheck(content.size)} class="popup-altwrapper">
        <div class="popup-leftside" style="background-image:url(${content.imageURL});${content.size == 'large' ? 'width:100px;height:100px' : ''}" >
          <div class='pop-closeBtn' id='popup-closer'>X</div>
        </div>
        <div class="popup-text-section">
          <div class="popup-text-header" style="font-size:24px;${content.size == 'large' ? 'font-size:30px' : ''};${content.size == 'small' ? 'font-size:20px' : ''}">${content.text1}</div>
          <div class="popup-text-sub" style="font-size:20px;${content.size == 'large' ? 'font-size:24px' : ''};${content.size == 'small' ? 'font-size:17px' : ''}">${content.text2}</div>
        </div>
      </div>
    </div>
  `
  let handleClose = document.getElementById('popup-closer')
  handleClose.addEventListener('click', () => {
      var formData = new XMLHttpRequest();
      formData.open("POST", content.webhookURL.url, true);
      formData.setRequestHeader('Content-Type', 'application/json');
      formData.send(JSON.stringify({
        date: Date("25 Mar 2001"),
        browserLanguages: getLanguage(),
        browserName: detectBrowser(),
        deviceType: getDeviceType(),
        selectedValue: '',
        clickData:clickDataArray
      }));
      setTimeout(()=> { popDisplay = 'none', Pop() },300)
    })

}
function clickData(info) {
  if (info) {
    document.onclick= function(event) {
      if (event===undefined) event= window.event;
      var target= 'target' in event? event.target : event.srcElement;
      clickDataArray.push(target.tagName)
    }
  }
}

const getLanguage = () => {
  var language = window.navigator.userLanguage || window.navigator.language;
  return language
}
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
}
function colorCheck(currentColor) {
  switch (currentColor) {
    case 'bg-[#F37C34]':
      return '#F37C34'
    case 'bg-[#7D4AEA]':
      return '#7D4AEA'
    case 'bg-black':
      return 'black'
    case 'bg-blue-400':
      return '#60A5FA'
    case 'bg-[#777777]':
      return '#777777'
    default:
      return '#7D4AEA'
  }
}

function positionCheck(currentPosition) {
  let newPosition = ""
  switch (currentPosition) {
    case '1':
      newPosition= "top:2%;left:1%;"
      break
    case '2':
      newPosition= "top:2%;left:50%;transform:translateX(-50%);"
      break
    case '3':
      newPosition= "top:2%;left:98%;transform:translateX(-98%);"
      break
    case '4':
      newPosition= "top:50%;left:1%;transform:translateY(-50%);"
      break
    case '5':
      newPosition= "top:50%;left:50%;transform:translate(-50%,-50%);"
      break
    case '6':
      newPosition= "top:50%;left:98%; transform:translate(-98%,-50%);"
      break
    case '7':
      newPosition= "top:98%;left:1%;transform:translateY(-98%);"
      break
    case '8':
      newPosition= "top:98%;left:50%;transform:translate(-50%,-98%);"
      break
    case '9':
      newPosition= "top:98%;left:98%;transform:translate(-98%,-98%);"
      break
    default:
      newPosition= "top:50%;left:50%;transform:translate(-50%,-50%);"
      break
  }
  return newPosition
}

function sizeCheck(currentSize) {
  let newSize = ""
  if (currentSize == 'small') newSize= "height:120px;width:520px"
  else if (currentSize == 'large') newSize= "height:150px;width:740px"
  else newSize = "height:130px;width:600px"
  return newSize
}

function getScrollPercent() {
  if (typeof window !== "undefined") {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  }
}

function popUpDisplayer() {
  popDisplay = 'flex'
  popOpacity = '1'
  clickData(content.webhookURL.clickData)
  Pop()
}
function customizePopup(newObj, currentObj) {
  if ("size" in newObj) currentObj.size = newObj.size
  if ("position" in newObj) currentObj.position = newObj.position
  if ("color" in newObj) currentObj.color = newObj.color
  if ("text1" in newObj) currentObj.text1 = newObj.text1
  if ("text2" in newObj) currentObj.text2 = newObj.text2
  if ("popupImage" in newObj) currentObj.popupImage = newObj.popupImage
  if ("imageURL" in newObj) currentObj.imageURL = newObj.imageURL
  if ("targetPhone" in newObj) currentObj.targetPhone = newObj.targetPhone
  if ("targetLaptop" in newObj) currentObj.targetLaptop = newObj.targetLaptop
  if ("afterXSecond" in newObj) { currentObj.afterXSecond = newObj.afterXSecond; var popSecond = parseInt(newObj.afterXSecond) }
  if ("afterXScroll" in newObj) { currentObj.afterXScroll = newObj.afterXScroll; var popScroll = parseInt(newObj.afterXScroll) }
  if ("trafficSourceDomain" in newObj) currentObj.trafficSourceDomain = newObj.trafficSourceDomain
  if ("browserLanguages" in newObj) currentObj.browserLanguages = newObj.browserLanguages
  if ("exitIntentTargeting" in newObj) currentObj.exitIntentTargeting = newObj.exitIntentTargeting
  if ("webhookURL" in newObj) {
    if (newObj.webhookURL.url.length>0) currentObj.webhookURL = newObj.webhookURL
    else {
      currentObj.webhookURL.formSubmission = newObj.webhookURL.formSubmission
      currentObj.webhookURL.clickData = newObj.webhookURL.clickData
    }
  }
  var displayOnce = true

  function PopupDisplayFunction() {
    if (currentObj.afterXSecond > 0 && currentObj.afterXScroll === '') setTimeout(() => { popUpDisplayer() }, popSecond * 1000)
    else if (currentObj.afterXSecond === '' && currentObj.afterXScroll > 0) {
      if (isNaN(getScrollPercent())) setTimeout(() => { popUpDisplayer() }, 300) // This is for only 100 viewheight(vh) websites.
      window.onscroll = function () {
        let value = getScrollPercent()
        if (popScroll < value && displayOnce) {
          setTimeout(() => { popUpDisplayer() }, 300)
          displayOnce = false
        }
      }
    }
    else if (currentObj.afterXSecond > 0 && currentObj.afterXScroll > 0) {
      if (isNaN(getScrollPercent())) setTimeout(() => { popUpDisplayer(); displayOnce = false }, 300) // This is for only 100 viewheight(vh) websites.
      window.onscroll = function () {
        let value = getScrollPercent()
        if (popScroll < value && displayOnce) {
          setTimeout(() => { popUpDisplayer() }, 300)
          displayOnce = false
        }
      }
      setTimeout(() => {
        if (displayOnce) { popUpDisplayer(); displayOnce = false }
      }, popSecond * 1000)
    }
    else setTimeout(() => { popUpDisplayer() }, 300)

  }
  let langArray = getBrowserLanguageAsArray(currentObj.browserLanguages)
  let userLanguage = getLanguage()
    if (currentObj.browserLanguages.length > 0) {
      if (langArray.includes(userLanguage)) {
        if (currentObj.targetPhone) { if (screen.width <= 975) PopupDisplayFunction() }
        else if (currentObj.targetLaptop) { if (screen.width > 975) PopupDisplayFunction() }
        else PopupDisplayFunction()
      }
    }else {
        if (currentObj.targetPhone) { if (screen.width <= 975) PopupDisplayFunction() }
        else if (currentObj.targetLaptop) { if (screen.width > 975) PopupDisplayFunction() }
        else PopupDisplayFunction()
    }
}

function getBrowserLanguageAsArray(languageArray) {
  let lastLanguageArray = []
  if(languageArray.length>0){
    for (selectedlang in languageArray) {
      switch (languageArray[selectedlang]) {
        case 'English':
          lastLanguageArray.push('en-US')
          break
        case 'Turkish':
          lastLanguageArray.push('tr-TR')
          break
        case 'French':
          lastLanguageArray.push('fr-FR')
          break
        case 'German':
          lastLanguageArray.push('de-DE')
          break
        case 'Polish':
          lastLanguageArray.push('pl-PL')
          break
        case 'Dutch':
          lastLanguageArray.push('nl-NL')
          break
        case 'Finnish':
          lastLanguageArray.push('fi-FI')
          break
        case 'Spanish':
          lastLanguageArray.push('es-ES')
          break
        case 'Italian':
          lastLanguageArray.push('it-IT') 
          break     
      }
    }
  }
  return lastLanguageArray
}