<template>
    <div>
        <div class="flex flex-col gap-6">
            <div class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg">
                <div class="p-4 md:p-5">
                    <h3 class="text-lg font-bold text-black dark:text-white">
                        Grafik Pemilu Partai Buruh (Visualisasi)
                    </h3>
                    <div class="mt-10 grid lg:grid-cols-2 gap-6">
                        <div>
                            <ChartTest></ChartTest>
                        </div>
                        <div>
                            <ChartTest2></ChartTest2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChartTest from './ChartTest.vue';
import ChartTest2 from './ChartTest2.vue';

</script>

<style lang="scss" scoped></style>