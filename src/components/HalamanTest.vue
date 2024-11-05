<template>
    <div>
        <h1>Cek id cookies: {{ cookiesidku }}</h1>
        <h2>Cek email cookies: {{ cookiesemailku }}</h2>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";


export default{
     

    data(){
        return {
            cookiesemailku:'',
            cookiesidku:'',
        }
    },
    
    setup(){
        const { cookies } = useCookies(); 

        return{
            cookies,
        }
    },
    methods:{
        dapatCookies(){
            
            this.cookiesemailku = this.cookies.get('email');
            this.cookiesidku = this.cookies.get('id');
            console.log(this.cookies.keys());
        }
    },
    created(){
        this.dapatCookies();
    }

}

</script>

<style lang="scss" scoped>

</style>