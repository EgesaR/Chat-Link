export function logoutDialog() {
  return (`
    <div class="absolute bottom-0 left-0 w-full h-[60%] bg-white rounded-t-3xl
    flex justify-center items-center flex-col gap-6 px-8 pb-24">
      <i class="bx bx-sad text-7xl text-yellow-300"></i>
      <h2 class="text-2xl font-bold whitespace-nowrap">
        You're logging out already?
      </h2>
      <p class="text-normal">
        Well then, press "Continue" to log out from your account.
      </p>
      <button class="bg-sky-600 w-[80%] sm:w-[50%] rounded-xl py-2 focus:ring-2
      focus:ring-sky-800 font-semibold text-white">
        Continue
      </button>
    </div>
  `)
}