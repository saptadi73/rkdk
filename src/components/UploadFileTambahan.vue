<template>
  <div class="px-5 mt-16 mx-auto">
    <div
      class="mt-3 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
    <h1 class="text-slate-800 font-bold items-center mt-5 mx-5">Upload Dokumen Tambahan</h1>
      <div class="mt-10 grid lg:grid-cols-2 gap-6">
        <div>
          <label
            for="nama_dokumen"
            class="text-gray-800 text-sm font-medium block mb-2"
            >Nama Dokumen</label
          >
          <input
            type="text"
            id="nama_dokumen"
            name="nama_dokumen"
            class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
            >Upload file</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            File tidak boleh lebih dari 2Mb
          </p>
        </div>
      </div>
      <div>
        <button
          class="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 w-44 hover:bg-green-950 text-white p-2 border border-1 rounded-xl mt-10 border-slate-900"
        >
          Kirim Data
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
