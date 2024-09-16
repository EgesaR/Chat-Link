export const Home = () => {
  
  return (`
    <div class="w-full min-h-[76vh] h-[70%] pt-[3%] oveflow-hidden relative">
      <div class="text-3xl font-bold text-black/60 pl-2">
        Chats
      </div>
     ${tabs()}
      <button class="w-14 h-14 text-white absolute -bottom-10 -right-1
      bg-sky-300 rounded-xl flex justify-center items-center font-bold text-xl
      hover:bg-sky-400 sm:right-10 sm:-bottom-20" id="openAddChat">
        <i class="bx bx-message-add"></i>
      </button>
      ${AddChat()}
    </div>
  `)
}

const AddChat = () => {
  return(`
    <div class="w-full h-full bg-white fixed z-20 top-0" id="AddChat">
      <div class="w-full h-full relative">
        <button class="bg-transparent h-10 w-10 font-bold text-xl flex
        justify-center items-center mt-2 ml-2 rounded-full hover:bg-black/40
        hover:text-white dark:hover:bg-white/40 dark:hover:text-black"
        id="closeAddChatBtn">
          <i class="bx bx-arrow-back"></i>
        </button>
        ${screen1()}
        ${screen2()}
      </div>
    </div>
  `)
}

const screen1 = () => {
  return(`
  <div class="w-full flex flex-col items-center justify-center mt-3 px-8
          sm:flex-row sm:h-full" id="screen1">
    <div class="h-60 w-60 bg-red-200 sm:h-[400px] sm:w-[400px]">
            
    </div>
    <div class="w-full text-center sm:flex-1 sm:px-5">
      <h2 class="text-[22px] font-semibold text-left text-slate-800 mt-8 px-5
      sm:text-center sm:text-[30px]">
        New optimistic ways of connecting with others...
      </h2>
      <p class="text-sm text-center text-slate-600 mt-4 sm:mt-2 sm:text-lg">
        Connect with others with a search of a phone number, email and QRcode.
      </p>
      <button class="w-[80%] py-2 rounded-xl bg-sky-400 absolute bottom-[9%]
                hover:bg-sky-300 sm:relative translate-x-[-50%]
                sm:translate-x-[0%] sm:w-[30%] sm:py-2.5 sm:mt-40"
                id="goToScreen2Btn">
                  Let's get started
              </button>
            </div>
  </div>
  `)
}

const screen2 = () => {
  return(`
  <div class="w-full flex flex-col items-center justify-center mt-3 px-8
          sm:flex-row sm:h-full hidden" id="screen2">
    <div class="h-60 w-[300px] sm:h-[400px] border-2 border-black" id="reader">
            
    </div>
    <div class="w-full text-center sm:flex-1 sm:px-5">
      <p class="text-center text-sm" id="result">
        
      </p>
    </div>
    <div id="QR-output"></div>
  </div>
  `)
}

const tabs = () => {
  return(`
    <div class="max-w-3xl mx-auto px-0 sm:px-0">
      <div class="sm:w-7/12 sm:mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          class="relative w-max mx-auto h-12 grid grid-cols-3 items-center
          text-sm whitespace-nowrap
          px-[6px] rounded-full overflow-y-hidden overflow-x-scroll w-[98%] shadow-2xl shadow-900/20
          px-[6px] rounded-full overflow-y-hidden overflow-x-scroll w-[98%] shadow-2xl shadow-900/20
          bg-gray-900/20
          transition sm:overflow-hidden">
          
          <div class="absolute top-0 bottom-0 h-11 my-auto left-0 rounded-full bg-white shadow-md
          tabIndicator"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            class="relative block h-10 px-3 tab rounded-full">
            <span class="text-gray-800">
              First Tab
            </span>
          </button>
          
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            class="relative block h-10 px-3 tab rounded-full">
            <span class="text-gray-800">
              Second Tab
            </span>
          </button>
          
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1"
            class="relative block h-10 px-3 tab rounded-full">
            <span class="text-gray-800">
              Third Tab
            </span>
          </button>
        </div>
        
        <div class="mt-6 relative rounded-3xl bg-purple-50">
          
          <div 
            role="tabpanel"
            id="panel-1"
            class="tab-panel p-6 transition duration-300">
            <h2 class="text-xl font-semibold text-gray-800">
              First tab panel
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          
          <div 
            role="tabpanel"
            id="panel-2"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300">
            <h2 class="text-xl font-semibold text-gray-800">
              Second tab panel
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          
          <div 
            role="tabpanel"
            id="panel-3"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300">
            <h2 class="text-xl font-semibold text-gray-800">
              Third tab panel
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>          
        </div>
      </div>
     </div>
  `)
}

//github personal token: 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