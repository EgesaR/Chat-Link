//Screens
import {Home} from "./screens/Home.js"
import {Notifications} from "./screens/Notifications.js"
import {ArchiveMessages} from "./screens/ArchiveMessages.js"
import {Calls} from "./screens/Calls.js"
import {Teams} from "./screens/Teams.js"
import {Settings} from "./screens/Settings.js"

//Componets
import {DialogPaper} from "./Components/DialogPaper.js"
import {logoutDialog} from "./Components/logoutDialog.js"

//Tools
import {ScreenRegistry} from "./screens/ScreenRegistry.js"

let splashScreen = document.querySelector(".splashScreen");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo")
let loader = document.querySelector(".loader")
let footerText = document.querySelector(".footerText")

window.addEventListener("DOMContentLoaded", 
() => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active')
        loader.classList.add('active')
        footerText.classList.add('active')
      }, (idx+1)*600)
    });
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade')
          loader.classList.remove('active')
          loader.classList.add('fade')
          footerText.classList.remove('active')
          footerText.classList.add('fade')
        }, (idx+1)*400);
      });
      console.log('ended another')
    },9600)
    setTimeout(() => {splashScreen.style.top="-100vh"},13200)
  })
})

let mainView = document.getElementById("mainView");

let screenArray = [Home(), Notifications(), ArchiveMessages(), Calls(),
Teams()];
let openLogoutDailogBtn = document.getElementById("openLogoutDailogBtn")

/** It adds a screen function to the main view. /n Format
addScreenToMainView(screenFunctionName: function ())*/
const addScreenToMainView = (screenFunctionName) => {
  mainView.innerHTML=screenFunctionName()
}

addScreenToMainView(Home)


const list = document.querySelectorAll('body .list');
    
function activeLink () {
  list.forEach((item,idx) =>{
  item.classList.remove("active");
  });
  this.classList.add("active");
  for(var i = 0; i < this.parentElement.children.length; i++){
    if(this.parentElement.children[i].classList.contains("active")){
      ScreenRegistry(i, screenArray, mainView)
    }
  }
}
    
list.forEach(
  (item, idx) => {
    item.addEventListener('click', activeLink)})

openLogoutDailogBtn.addEventListener('click', () => DialogPaper(logoutDialog()))

let tabs = document.querySelectorAll(".tab")
let tabIndicator = document.querySelector(".tabIndicator") 
let panels = document.querySelectorAll(".tab-panel")

tabIndicator.style.width = tabs[0].getBoundingClientRect().width + "px"
tabIndicator.style.left = tabs[0].getBoundingClientRect().left -
tabs[0].parentElement.getBoundingClientRect().left + "px"

tabs.forEach(tab => {
  let tabTarget = tab.getAttribute("aria-controls")
  
  tab.addEventListener("click", () => {
    tabIndicator.style.width = tab.getBoundingClientRect().width + "px"
  tabIndicator.style.left = tab.getBoundingClientRect().left -
tab.parentElement.getBoundingClientRect().left + "px"

    panels.forEach(panel => {
      let panelId = panel.getAttribute("id")
      if(tabTarget === panelId){
        panel.classList.remove("invisible", "opacity-0")
        panel.classList.add("visible", "opacity-100")
      } else {
        panel.classList.add("invisible", "opacity-0")
      }
    });
  })
})

let AddChat = document.getElementById("AddChat")
let openAddChat = document.getElementById("openAddChat")
let closeAddChatBtn = document.getElementById("closeAddChatBtn")

openAddChat.addEventListener('click', () =>
AddChat.classList.add("active"))
closeAddChatBtn.addEventListener('click', () => AddChat.classList.remove("active"))

//Home Screen Add Chat
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2")
let goToScreen2Btn = document.getElementById("goToScreen2Btn")

goToScreen2Btn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden")
})

let settingsBtn = document.getElementById("settingsBtn")

let settingsTemp = "<div>Settings</div>"
settingsBtn.addEventListener("click", () => removeActiveLink())
function removeActiveLink () {
  list.forEach((item) =>{
    item.classList.remove("active");
  });
  mainView.innerHTML=`${settingsTemp}`
}
