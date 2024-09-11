export const Home = () => {
  
  return (`
    <div class="w-full min-h-[100%] pt-[1%]">
      <section class="w-full h-[50%] mb-5 bg-gradient-to-tr
      from-indigo-200 via-sky-200 to-blue-200 px-5 rounded-md py-4 flex">
        <div>
          <h4 class="text-[16px] mb-4">Hello, Lisa!</h4>
          <h1 class="text-[2.8rem] whitespace-nowrap font-semibold mb-7">12.19 Tue</h1>
          <button class="text-[15px] text-white bg-black rounded-md w-[85%] py-2
          px-2 flex justify-center items-center gap-2">
            <i class="bx bx-plus"></i>
            <label class="whitespace-nowrap">
              Plan new call
            </label>
          </button>
        </div>
        <div class="ml-auto">
          <button class="h-8 w-8 border-[1.5px] border-slate-400 flex items-center justify-center
          rounded-full">
            <i class="bx bx-dots-vertical-rounded"></i>
          </button>
        </div>
      </section>
      <section class="w-full h-[50%] mb-5 bg-gradient-to-tr
      from-indigo-200 via-sky-200 to-blue-200 px-5 rounded-md py-4">
        <label class="text-[18px] text-slate-500">2 calls for today:</label>
        <div class="flex w-full gap-3 overflow-x-auto mt-2 pl-2">
          ${HomeScheduleCard("Marketing weekly", "bg-orange-400", 1)}
          ${HomeScheduleCard("Monthly group", "bg-red-400",2)}
          ${HomeScheduleCard("School Upcome","bg-yellow-400",3)}
          ${HomeScheduleCard("School Upcome","bg-emerald-400",4)}
          ${HomeScheduleCard("Math Lecture","bg-indigo-400",5)}
          ${HomeScheduleCard("School Upcome","bg-purple-400",500)}
        </div>
      </section>
      
    </div>
  `)
}

const HomeScheduleCard = (taskName = "Task", bgColor="bg-teal-300", numberOfAvatar=1) => {
  for(var i =0; i < taskName.length; i++){
    
  }
  return(`
    <div class="w-60 h-[100px] ${bgColor} rounded-md flex items-center px-4
    gap-5">
      <div class="flex flex-col">
       <p class="text-[15px] font-semibold whitespace-nowrap mb-3">${taskName}</p>
       <p class="text-[13px]">2:00 - 2:30 PM</p>
      </div>
      <div class="ml-auto flex flex-col items-center">
        <div class="flex">
          ${
            HomeScheduleCardAvatarList(bgColor,numberOfAvatar)
          }
        </div>
      </div>
    </div>
  `)
}

const HomeScheduleCardAvatarList = (bgColor = "bg-emerald-500", num = 2) => {
    let arr = Array.from({length: num >= 2 ? num : 2})
    let div = document.createElement("div")
    for(var i = 0; i < arr.length; i++){
      if(i < 2){
        div.innerHTML += `
          <div class="bg-emerald-500 h-7 w-7 p-2 flex items-center justify-center rounded-full -ml-2">
            ${i}
          </div>
          
        `
      }
    }
    if( arr.length > 2){
      div.innerHTML+= `
        <div class="bg-black/50 text-white h-7 w-7 p-2 flex items-center
        justify-center rounded-full -ml-2 ${arr.length < 100 ? "text-sm" :
        "text-[9px]"}">
          +${arr.length-1}
        </div>
      `
    }
    
    return div.innerHTML
}