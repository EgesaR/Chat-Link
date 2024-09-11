import {Home} from "./screens/Home.js"

let mainView = document.getElementById("mainView");
let screenLimit = 1;
let numScreenOpen = mainView.children.length;


/** It adds a screen function to the main view. /n Format
addScreenToMainView(screenFunctionName: function ())*/
const addScreenToMainView = (screenFunctionName) => {
  mainView.innerHTML=screenFunctionName()
}

addScreenToMainView(Home)

const list = document.querySelectorAll('body .list');
    
function activeLink () {
  list.forEach((item) =>
  item.classList.remove("active"));
  this.classList.add("active")
}
    
    list.forEach(
      (item) => 
        item.addEventListener('click', activeLink)
      )
console.log(`Number of screens available: ${numScreenOpen}`)