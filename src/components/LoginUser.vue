<template>
    <section class="bg-gradient-to-b from-orange-500 to-orange-300 dark:bg-gray-900">
        <div class="flex flex-col shadow-lg items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-36 h-auto mr-2" src="../img/logo_buruh.png" alt="logo">

            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login dengan Akun yang Terdaftar
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="namamu@domain.com" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div class="flex items-center justify-between">
                            
                            <a href="#"
                                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Lupa
                                password?</a>
                        </div>
                        <button v-on:click="loginUser"
                            class="w-full text-orange-600 bg-yellow-200 hover:bg-yellow-700 hover:text-yellow-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                            in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Belum punya akun terdaftar? <a href="/registrasi"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrasi di
                                Sini</a>
                        </p>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import { useCookies } from "vue3-cookies";
import { globalCookiesConfig } from "vue3-cookies";
globalCookiesConfig({
    expireTimes: "7d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});





export default {

    data() {
        return {
            hasil: '',
            formValues: '',
            cekId:'',
        }
    },
    setup() {
        const { cookies } = useCookies();

        return {
            cookies,
        }
    },

    methods:
    {
        async loginUser() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            this.formValues = {
                'email': email,
                'password': password,
            }
            
            await axios.post(`http://localhost:8080/login`, this.formValues, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",

                },
            }).then((response)=>{
                this.hasil=response.data;
                console.log(this.hasil.data);

                if(this.hasil.status=="Berhasil"){
                    this.cookies.set('email',this.hasil.data.email);
                    this.cookies.set('id',this.hasil.data.id_registrasi);                    
                    this.$router.push('/home');
                }
            })
        }
    },
    created() {

    }
}
</script>



