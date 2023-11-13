<template>
  <div class="p-10">
    <img src="../img/logo_buruh.png" class="w-52 h-auto" />
    <h2 class="text-slate-300 font-bold text-xl">
      Aplikasi Pelaporan Dana Kampanye Partai Buruh
    </h2>
    <h1 class="mb-8 font-extrabold text-4xl">Pendaftaran</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form>
        <div>
          <label class="block font-semibold" for="nama">Name</label>
          <input
            v-model="nama"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="nama"
            type="text"
            name="nama"
          />
        </div>
        <div class="mt-4">
          <label class="block font-semibold" for="nik">NIK</label>
          <input
            v-model="nik"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="nik"
            type="text"
            name="nik"
          />
        </div>
        <div class="mt-4">
          <label class="block font-semibold" for="email">Email</label>
          <input
            v-model="email"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div class="mt-4">
          <label class="block font-semibold" for="password">Password</label>
          <input
            v-model="password.password"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="mt-4">
          <label class="block font-semibold" for="confirm_password"
            >Confirm Password</label
          >
          <input
            v-model="password.confirm"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="confirm_password"
            type="password"
            name="confirm_password"
          />
        </div>

        <div class="flex items-center justify-between mt-8">
          <button
            type="submit"
            @click="submitForm"
            class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Register
          </button>
          <a class="font-semibold"> Already registered? </a>
        </div>
      </form>

      <aside class="">
        <div class="bg-gray-100 p-8 rounded">
          <h2 class="font-bold text-2xl font-Geologica">Petunjuk</h2>
          <ul class="list-disc mt-4 list-inside font-Poppins">
            <li>
              Pastikan mengisikan email dengan benar karena link konfirmasi
              dikirimkan melalui email yang terdaftar
            </li>
            <li>
              Pastikan mengisi NIK secara benar karena akan langsung dihubungkan
              dengan Data Caleg yang telah ada
            </li>
            <li>
              Setelah isian lengkap segera membuka email untuk melakukan
              konfirmasi
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  numeric,
  minLength,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),
      nama: "",
      nik: "",
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    };
  },
  methods: {
    validations() {
      return {
        nama: { required },
        nik: { required, numeric },
        email: { required, email },
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(this.password.password) },
        },
      };
    },
    submitForm() {
      this.v$.$validate();
      console.log(this.v$);

      if (this.v$.$error) {
        alert("Failed to Submit");
      } else {
        alert("Form Success Submitted!");
      }
    },
  },
};
</script>
