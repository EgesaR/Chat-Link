let mainView = document.getElementById("mainView");
let screenLimit = 1;
let numScreenOpen = mainView.children.length;

/** It adds a screen function to the main view. /n Format
addScreenToMainView(screenFunctionName: function ())*/
const addScreenToMainView = (screenFunctionName) => {
  mainView.innerHTML=screenFunctionName()
}

const HomeScreen = () => {
  return`
    <div>
      Hello People
    </div>
    `
}

addScreenToMainView(HomeScreen)
console.log("It is working")
console.log(mainView)
console.log(`Number of screens available: ${numScreenOpen}`)