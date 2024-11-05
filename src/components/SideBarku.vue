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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
        >
          <path
            d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
          ></path>
        </svg>
      </div>
      <div class="absolute right-0 h-auto">
        <svg
          class="mt-1 w-4 h-auto"
          onclick="Melebarjuga()"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
        >
          <path
            d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
          ></path>
        </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <div class="ml-1 font-medium text-sm">Jurnal</div>
            </div>
            <span class="garisku"></span>
            <li class="w-max mt-1 space-y-4 hover:w-full">
              <div class="inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown1"
                      >Pemasukan Partai</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown1"
                    name="dropdown1"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
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
              <div class="inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown2"
                      >Pengeluaran Partai</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown2"
                    name="dropdown2"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
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
              <div class="inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown3"
                      >Pemasukan Caleg</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown3"
                    name="dropdown3"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
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
              <div class="inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown4"
                      >Pengeluaran Caleg</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown4"
                    name="dropdown4"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
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
              <div class="inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown5"
                      >Jurnal Barang</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown5"
                    name="dropdown5"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
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

          <ul class="-ml-1px px-1 font-medium tracking-wide group">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path
                  d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"
                ></path>
              </svg>

              <div class="ml-1 font-medium text-sm">Laporan</div>
            </div>
            <span class="garisku"></span>
            <li class="w-max mt-1 space-y-4 hover:w-full">
              <div class="inline-block relative">
                <div class="block p-0 w-[52px] hover:w-full">
                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown6"
                      >Pengurus Pusat</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown6"
                    name="dropdown6"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 1</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 2</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 3</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 4</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 5</a
                        >
                      </li>
                    </ul>
                  </div>


                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown7"
                      >Pengurus Wilayah</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown7"
                    name="dropdown7"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 1</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 2</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 3</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 4</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 5</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 6</a
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown8"
                      >Pengurus Kota/Kab.</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown8"
                    name="dropdown8"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 1</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 2</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 3</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 4</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 5</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >Formulir 6</a
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="w-max px-4 items-center flex gap-4">
                    <div class="w-2 h-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"
                        ></path>
                      </svg>
                    </div>

                    <span
                      class="hover:text-slate-400 hover:cursor-pointer"
                      data-dropdown-toggle="dropdown9"
                      >Laporan Caleg</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    id="dropdown9"
                    name="dropdown9"
                    class="ml-8 p-1 hidden z-30 rounded-md bg-slate-50 w-44"
                  >
                    <ul>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >DPR RI</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
                          >DPRD Propinsi</a
                        >
                      </li>
                      <li class="hover:bg-slate-300 hover:rounded-md ml-3 px-2">
                        <a
                          href=""
                          class="font-semibold text-slate-800 hover:text-slate-800 hover:font-bold cursor-pointer"
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

<style lang="scss" scoped></style>
