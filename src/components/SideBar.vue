<template>
  
  <aside
    id="samping"
    name="samping"
    class="fixed w-4 z-20 overflow-auto left-0 top-12 h-full border-r border-gray-300/40 dark:border-gray-500 bg-gradient-to-r from-[#f6e09c] to-slate-50 dark:bg-slate-700"
  >
    <div class="relative w-full h-5 bg-yellow-600">
      <div class="absolute right-3 h-auto">
        
        <svg
        class="mt-1 w-4 h-auto"
        onclick="Melebarjuga()"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path></svg>
      </div>
      <div class="absolute right-0 h-auto">
        
        <svg class="mt-1 w-4 h-auto" 
        onclick="Melebarjuga()"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <div class="mt-1 mx-5">
        <div class="mt-1 h-16">
          <div class="flex">
            <div class="ml-1 font-medium text-sm">
              <a href="#"
                ><svg
                  onclick="Melebarjuga()"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"
                  ></path></svg
              ></a>
            </div>
            <div class="ml-1 font-medium text-sm">
        
              <a href="#">Dashboard</a>
            </div>
          </div>
          <span class="garisku"></span>
          <ul class="-ml-1px px-1 font-medium tracking-wide group">
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              
              <div class="ml-1 font-medium text-sm">Jurnal</div>
            </div>
            <span class="garisku"></span>
            <li class="w-max mt-1 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(1)"
                      >Pemasukan Partai</span
                    >
                    <svg
                      onclick="Dropdown(1)"
                      id="panahku1"
                      name="panahku1"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu1"
                    name="dropdownmenu1"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Isi Jurnal</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Daftar Jurnal</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(2)"
                      >Pengeluaran Partai</span
                    >
                    <svg
                      onclick="Dropdown(2)"
                      id="panahku2"
                      name="panahku2"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu2"
                    name="dropdownmenu2"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Isi Jurnal</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Daftar Jurnal</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(3)"
                      >Pemasukan Caleg</span
                    >
                    <svg
                      onclick="Dropdown(3)"
                      id="panahku3"
                      name="panahku3"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu3"
                    name="dropdownmenu3"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Isi Jurnal</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Daftar Jurnal</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(4)"
                      >Pengeluaran Caleg</span
                    >
                    <svg
                      onclick="Dropdown(4)"
                      id="panahku4"
                      name="panahku4"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu4"
                    name="dropdownmenu4"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Isi Jurnal</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Daftar Jurnal</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(5)"
                      >Jurnal Barang</span
                    >
                    <svg
                      onclick="Dropdown(5)"
                      id="panahku5"
                      name="panahku5"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu5"
                    name="dropdownmenu5"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Isi Jurnal</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Daftar Jurnal</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul class="-ml-1px px-1 mt-1 font-medium tracking-wide group">
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path></svg>
              <div class="ml-0 font-medium text-sm">Laporan</div>
            </div>
            <span class="garisku"></span>
            <li class="w-max mt-1 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>
                    
                    <span class="hover:text-slate-400" onclick="Dropdown(7)"
                      >Pengurus Pusat</span
                    >
                    <svg
                      onclick="Dropdown(7)"
                      id="panahku7"
                      name="panahku7"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu7"
                    name="dropdownmenu7"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 1</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 2</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 3</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 4</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 5</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(8)"
                      >Wilayah/Propinsi</span
                    >
                    <svg
                      onclick="Dropdown(8)"
                      id="panahku8"
                      name="panahku8"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu8"
                    name="dropdownmenu8"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 1</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 2</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 3</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 4</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 5</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 6</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(9)"
                      >Kota/Kabupaten</span
                    >
                    <svg
                      onclick="Dropdown(9)"
                      id="panahku9"
                      name="panahku9"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu9"
                    name="dropdownmenu9"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 1</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 2</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 3</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 4</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 5</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >Formulir 6</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li class="w-max mt-0 space-y-4 hover:w-full">
              <div class="dropdown inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path></svg>
                    </div>

                    <span class="hover:text-slate-400" onclick="Dropdown(10)"
                      >Laporan Caleg
                    </span>
                    <svg
                      onclick="Dropdown(10)"
                      id="panahku10"
                      name="panahku10"
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <title>Dropdown</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <path
                          class="cls-1"
                          d="M96.05,49.22Q72.17,25,48.34.61c-.56-.56-.82-.55-1.36,0-3.87,3.92-7.78,7.78-11.65,11.7-.59.6-.88.56-1.44,0-3.78-3.9-7.6-7.77-11.4-11.64C22.27.43,22,.23,21.8,0l-.71.68Q12.56,9.22,4,17.73c-.66.64-.65.94,0,1.58Q19.33,34.22,34.58,49.17c.61.59.67.88,0,1.51Q19.27,65.71,4,80.78c-.57.55-.63.85,0,1.44q8.55,8.59,17,17.26c.57.59.87.73,1.52,0,3.73-3.9,7.54-7.73,11.28-11.61.62-.65,1-.79,1.66,0,3.8,3.93,7.67,7.79,11.48,11.71.56.57.83.55,1.38,0q23.88-24.5,47.81-48.95C96.66,50,96.57,49.75,96.05,49.22ZM22.33,88.45c-.18.19-.39.36-.61.57-.18-.15-.31-.26-.43-.38C19.12,86.43,17,84.21,14.76,82c-.63-.63,0-.83.28-1.11q9.88-9.76,19.79-19.51c3.62-3.56,7.22-7.15,10.88-10.67.74-.71.59-1.06-.05-1.68Q30.44,34.23,15.24,19.36c-.77-.75-.73-1.1,0-1.8,2-1.89,3.94-3.85,5.84-5.84.56-.58.82-.52,1.36,0Q40.83,30.52,59.24,49.24c.53.54.59.83,0,1.4Q40.78,69.52,22.33,88.45ZM85.08,50.67Q66.63,69.51,48.23,88.42c-.57.59-.84.52-1.36,0-2-2.09-4-4.16-6.09-6.17-.64-.63-.54-1,0-1.54q14.67-15,29.3-29.94c.65-.65.63-1,0-1.61Q55.49,34.3,40.89,19.41c-.61-.62-.73-1,0-1.62,2.08-2,4.06-4,6.08-6,.2-.19.41-.37.59-.53.39.06.56.36.77.57l24.52,25c4.07,4.15,8.13,8.31,12.23,12.44C85.6,49.76,85.68,50.06,85.08,50.67Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div
                    id="dropdownmenu10"
                    name="dropdownmenu10"
                    class="ml-8 p-1 hidden rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >DPR RI</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >DPRD Propinsi</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold"
                          >DPRD Kota/Kab.</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup></script>
