export const ScreenRegistry = (btnIndex, screenArray,
mainParent,choiceRenderScreen) => {
  
  let screenLimit = 1;
  let numScreenOpen = mainParent.children.length;
  
  mainParent.innerHTML=`${screenArray[btnIndex]}`
}