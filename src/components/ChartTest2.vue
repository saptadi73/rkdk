<template>
    <Doughnut :data="data" :options="options" />
</template>
  
<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Doughnut
    },
    data() {
        return {
            data: {
                labels: ['Banten', 'DKI', 'Jabar', 'Jateng'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ],
                
            },
            options : {
                responsive: false,
                maintainAspectRatio: false
            } 
        }
    }
}
</script>