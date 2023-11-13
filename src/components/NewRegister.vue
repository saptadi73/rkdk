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
            v-model="state.nama"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="nama"
            type="text"
            name="nama"
          />
          <span
            v-if="this.v$.nama.$error"
            class="text-slate-100 text-sm font-Poppins"
          >
            {{ this.v$.nama.$errors[0].$message }}
          </span>
        </div>

        <div class="mt-4">
          <label class="block font-semibold" for="email">Email</label>
          <input
            v-model="state.email"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="email"
            type="email"
            name="email"
          />
          <span
            v-if="this.v$.email.$error"
            class="text-slate-100 text-sm font-Poppins"
          >
            {{ this.v$.email.$errors[0].$message }}
          </span>
        </div>

        <div class="mt-4">
          <label class="block font-semibold" for="password">Password</label>
          <input
            v-model="state.password.password"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="password"
            type="password"
            name="password"
          />
          <span
            v-if="this.v$.password.password.$error"
            class="text-slate-100 text-sm font-Poppins"
          >
            {{ this.v$.password.password.$errors[0].$message }}
          </span>
        </div>
        <div class="mt-4">
          <label class="block font-semibold" for="confirm_password"
            >Confirm Password</label
          >
          <input
            v-model="state.password.confirm_password"
            class="form-input shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="confirm_password"
            type="password"
            name="confirm_password"
          />
          <span
            v-if="this.v$.password.confirm_password.$error"
            class="text-slate-100 text-sm font-Poppins"
          >
            {{ this.v$.password.confirm_password.$errors[0].$message }}
          </span>
        </div>
        <div class="mt-4">
          <label class="block font-semibold" for="kategori">Kategori</label>
          <select
            v-model="state.kategori"
            class="form-select shadow-inner bg-gray-100 rounded-lg placeholder-black p-4 border-none block mt-1 w-full"
            id="kategori"
            
            name="kategori"
          >
          
          <option value="1">Pengurus Pusat</option>
          <option value="2">Pengurus Wilayah</option>
          <option value="3">Pengurus Kota/Kabupaten</option>
          <option value="4">Caleg DPR RI</option>
          <option value="5">Caleg DPRD Propinsi</option>
          <option value="6">Caleg DPRD Kota/Kabupaten</option>
        </select>
          <span
            v-if="this.v$.kategori.$error"
            class="text-slate-100 text-sm font-Poppins"
          >
            {{ this.v$.kategori.$errors[0].$message }}
          </span>
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
        <div class="bg-gray-100 p-8 rounded h-auto">
          <h2 class="font-bold text-2xl font-Geologica">Petunjuk</h2>
          <ul class="list-disc mt-4 list-inside font-Poppins">
            <li>
              Pastikan mengisikan email dengan benar karena link konfirmasi
              dikirimkan melalui email yang terdaftar
            </li>
            <li>
              Pastikan memilih kategori secara benar karena akan langsung dihubungkan
              dengan Form pengisian sesuai kategori
            </li>
            <li>
              Setelah isian lengkap segera membuka email untuk melakukan
              konfirmasi
            </li>
          </ul>
          <p v-for="error of v$.$errors" :key="error.$uid">
            <strong>{{ error.$validator }}</strong>
            <small> on property</small>
            <strong>{{ error.$property }}</strong>
            <small> says:</small>
            <strong>{{ error.$message }}</strong>
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  numeric,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      email: "",
      nama: "",
      kategori: "",
      password: {
        password: "",
        confirm_password: "",
      },
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        nama: { required },
        kategori: { required },
        password: {
          password: { required, minLength: minLength(6) },
          confirm_password: {
            required,
            sameAs: sameAs(state.password.password),
          },
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      v$,
      state,
    };
  },
  data() {
    return {
      v$: useVuelidate(),
    };
  },

  methods: {
    submitForm(event) {
      this.v$.$validate();
      event.preventDefault();
      console.log(this.state);
      
      if (this.v$.$error) {
        alert("Failed to Submit Form");
      } else {
        if (this.state.kategori=="1"){
          this.$router.push("inputcalegpusat");
        }else{
          this.$router.push("inputcalegpropinsi");
        }
      }
    },
  },
};
</script>
