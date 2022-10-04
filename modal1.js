let content = {
  size: "medium",
  position: "5",
  color: "bg-[#7D4AEA]",
  text1: "Sign Up",
  text2: "Join new adventure",
  inputText1: "Enter Full name",
  inputText2: "Enter your email",
  buttonText: "Sign up",
  popupImage:'',
  imageURL:"https://thumbsnap.com/i/BZktJYoK.png",
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
function Pop() {

let container = document.createElement('div');
let style = document.createElement('style')

document.body.appendChild(style)
document.body.appendChild(container)

style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  .wrapper{
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
  .pop-left{
    width: 50%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
  }
  .pop-right{
    width: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }
  .text-header{
    overflow-wrap: break-word;
    font-weight: 700;
  }
  .text-subheader{
    overflow-wrap: break-word;
    font-weight: 500;
  }
  .form{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .name-input-wrapper,.mail-input-wrapper{
    display:flex;
    align-items:center;
    width:100%;
    font-size: 14px;
  }
  #fullname,#email{
    padding: 8px;
    width:100%;
    border: 2px solid darkgray;
    border-radius: 6px ;
    font-family: 'Inter', sans-serif !important;
  }
  #fullname:focus,#email:focus{
    outline-color:${colorCheck(content.color)};
  }
  #fullname::placeholder,#email::placeholder {
    color: darkgray;
  }
  .submitBtn{
    font-size: 14px;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 10px 8px;
    background-color:${colorCheck(content.color)};
    border-radius: 8px;
    cursor: pointer;
    border: none;
    font-family: 'Inter', sans-serif !important;
  }
  .submitBtn:hover{
    filter: brightness(1.25);
  }
  .submitBtn:active {
    transform: scale(0.95);
  }
  .sub-buttons{
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 12px;
  }
  .subBtn{
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .subBtn:hover {
    text-decoration: underline;
  }
  .closeBtn{
    position: absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    top: 5%;
    right: 6%;
    color: black;
    opacity:0.4;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-weight: 700;
  }
  .closeBtn:hover{
    transform:scale(1.03);
  }
  `

  container.innerHTML = `
    <div style="${positionCheck(content.position)};${sizeCheck(content.size)}" class="wrapper" >
      <div class="pop-left">
        <div style="font-size:30px;${content.size=='small' ? "font-size:24px;" : ''};${content.size=='large' ? "font-size:36px;" : ''}" class="text-header">
          ${content.text1}
        </div>
        <div style="font-size:20px;${content.size=='small' ? "font-size:16px;" : ''};${content.size=='large' ? "font-size:24px;" : ''}" class="text-subheader">
          ${content.text2}
        </div>
        <form id="validate" class="form">
          <div class="name-input-wrapper">
            <input id="fullname" type="text" placeholder="${content.inputText1}" />
          </div>
          <div class="mail-input-wrapper">
            <input id="email" type="text" placeholder="${content.inputText2}" />
          </div>
          <button type='submit' id="submitButton" class="submitBtn">
            ${content.buttonText}
          </button>
        </form>
        <div class="sub-buttons">
          <div class="subBtn">Forgot password</div>
          <div class="subBtn">Log In</div> 
        </div>
      </div>
      <div style="background-image:url(${content.imageURL})" class="pop-right">
        <div class='closeBtn' id='closeButton'>X</div>
      </div>
    </div>
  `
  let closeButton = document.getElementById('closeButton')
  closeButton.addEventListener('click', () => { popDisplay = 'none'; Pop() })
  let submitButton = document.getElementById('submitButton')
  let fullName = document.getElementById('fullname')
  let email = document.getElementById('email')
  var currentTime = new Date();
  currentTime.toLocaleString();       // -> "2/1/2013 7:37:08 AM"
  let handleForm = document.getElementById('validate')
  handleForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validateEmail(email.value.trim()) && fullName.value.trim().length < 2) {
      email.style.borderColor = 'red'
      fullName.style.borderColor = 'red'
      fullName.placeholder='Name must be at least 2 characters'
      submitButton.style.backgroundColor = 'red'
      submitButton.innerText = 'Invalid Info'
    } else if (!validateEmail(email.value.trim())) {
      email.style.borderColor = 'red'
      fullName.style.borderColor = 'lightgreen'
      submitButton.style.backgroundColor = 'red'
      submitButton.innerText = 'Invalid Info'
    } else if (fullName.value.trim().length < 2) {
      fullName.style.borderColor = 'red'
      fullName.placeholder='Name must be at least 2 characters'
      email.style.borderColor = 'lightgreen'
      submitButton.style.backgroundColor = 'red'
      submitButton.innerText = 'Invalid Info'
    } else {
      if(content.webhookURL.url.length>0)
      var formData = new XMLHttpRequest();
      formData.open("POST", content.webhookURL.url, true);
      formData.setRequestHeader('Content-Type', 'application/json');
      formData.send(JSON.stringify({
        fullname: fullName.value,
        email: email.value,
        date: Date("25 Mar 2001"),
        browserLanguages: getLanguage(),
        browserName: detectBrowser(),
        deviceType: getDeviceType(),
        selectedValue: '',
        clickData:clickData()
      }));
      fullName.style.borderColor = 'lightgreen'
      email.style.borderColor = 'lightgreen'
      submitButton.style.backgroundColor = '#4ade80'
      submitButton.innerText = 'Done!'
      setTimeout(()=> { popDisplay = 'none', Pop() },2500)
    }
  })
}
function clickData() {
  document.onclick= function(event) {
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

      return target.tagName
  };
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

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

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
  if (currentSize == 'small') newSize= "height:300px;width:500px"
  else if (currentSize == 'large') newSize= "height:450px;width:800px"
  else newSize = "height:350px;width:600px"
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
  Pop()
}
  function customizePopup(newObj, currentObj) {
  if ("size" in newObj) currentObj.size = newObj.size
  if ("position" in newObj) currentObj.position = newObj.position
  if ("color" in newObj) currentObj.color = newObj.color
  if ("text1" in newObj) currentObj.text1 = newObj.text1
  if ("text2" in newObj) currentObj.text2 = newObj.text2
  if ("inputText1" in newObj) currentObj.inputText1 = newObj.inputText1
  if ("inputText2" in newObj) currentObj.inputText2 = newObj.inputText2
  if ("buttonText" in newObj) currentObj.buttonText = newObj.buttonText
  if ("popupImage" in newObj) currentObj.popupImage = newObj.popupImage
  if ("imageURL" in newObj) currentObj.imageURL = newObj.imageURL
  if ("targetPhone" in newObj) currentObj.targetPhone = newObj.targetPhone
  if ("targetLaptop" in newObj) currentObj.targetLaptop = newObj.targetLaptop
  if ("afterXSecond" in newObj) { currentObj.afterXSecond = newObj.afterXSecond; var popSecond = parseInt(newObj.afterXSecond) }
  if ("afterXScroll" in newObj) { currentObj.afterXScroll = newObj.afterXScroll; var popScroll = parseInt(newObj.afterXScroll) }
  if ("trafficSourceDomain" in newObj) currentObj.trafficSourceDomain = newObj.trafficSourceDomain
  if ("browserLanguages" in newObj) currentObj.browserLanguages = newObj.browserLanguages
  if ("exitIntentTargeting" in newObj) currentObj.exitIntentTargeting = newObj.exitIntentTargeting
  if ("webhookURL" in newObj) currentObj.webhookURL = newObj.webhookURL
  
  var displayOnce = true

  function PopupDisplayFunction() {
    if (newObj.afterXSecond > 0 && newObj.afterXScroll === '') setTimeout(() => { popUpDisplayer() }, popSecond * 1000)
    else if (newObj.afterXSecond === '' && newObj.afterXScroll > 0) {
      if (isNaN(getScrollPercent())) setTimeout(() => { popUpDisplayer() }, 300) // This is for only 100 viewheight(vh) websites.
      window.onscroll = function () {
        let value = getScrollPercent()
        if (popScroll < value && displayOnce) {
          setTimeout(() => { popUpDisplayer() }, 300)
          displayOnce = false
        }
      }
    }
    else if (newObj.afterXSecond > 0 && newObj.afterXScroll > 0) {
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
  }
  else PopupDisplayFunction()
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
  

customizePopup({
  // afterXSecond: '4',
  // afterXScroll: '50',
  // targetPhone: false,
  // targetLaptop: false,
  // webhookURL: 'https://hook.eu1.make.com/87iduve501h7aul8rzna6nupqh2amrzo',
  // browserLanguages: [],
}, content)

