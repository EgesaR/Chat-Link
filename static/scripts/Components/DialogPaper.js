export function DialogPaper(children, center = false){
  if(typeof(children) === "undefined"){ 
  center=true;
  children = `
      <div class="flex flex-col gap-5 items-center">
        <div class="h-20 w-20 bg-red-500 text-white text-6xl font-bold flex
        items-center justify-center rounded-full">
          !  
        </div>
        <div class="text-center w-[80%]">
          <h2 class="text-lg font-semibold text-red-600">
            Error:
          </h2>
          <p class="text-red-500">
            Dailog Paper needs something to be passed to the children parament.
          </p>
          <div class="absolute bottom-16 text-[11px] left-1">
            <div class="text-sky-400">
              Hint: Check the instances where you called Dailog Paper and pass
              something to the children parament.
            </div>
            <div class="text-yellow-400">
              Caution: If okay with the results the you can close
            </div>
          </div>
        </div>
      </div>
  `;
}
  const dialog = document.createElement("div")
  
  dialog.classList.add('h-screen')
  dialog.classList.add('w-full')
  dialog.classList.add('fixed')
  dialog.classList.add('top-0')
  dialog.classList.add('left-0')
  dialog.classList.add('bg-black/60')
  
  dialog.innerHTML = `
    <div class="w-full h-full p-3 relative ${
        center 
        ? 'flex justify-center items-center p-0'
        : ''
      }">
      <button class="h-12 w-12 absolute top-3 right-3 rounded-full bg-white
      hover:bg-[#ddd] flex justify-center items-center text-2xl" id="closeDialogBtn">
        <i class="bx bx-x"></i>
      </button>
      ${children}
    </div>
  `
  let closeDialogBtn = dialog.querySelector("#closeDialogBtn")
  
  closeDialogBtn.addEventListener('click', () => {
    dialog.remove()
  })
  
  document.body.appendChild(dialog)
}