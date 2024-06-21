<template>
    <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D] w-full" v-if="info">
        <div class="flex py-2.5 border-[#E3E3E3] dark:border-[#3D3A3A] text-xl" v-for="(detail, index) in info"
        :class="{'border-b': (index != info.length-1)}" :key="index">
            <span class="flex socialbtn dark:text-white items-center justify-content-center" :class="'text-['+detail.color+']'" v-html="detail.icon">
            </span>
            <div class="text-left ml-2.5">
                <p class="text-[#44566C] dark:text-[#A6A6A6]">{{ detail.name }}</p>
                <p class="dark:text-white break-all">
                    <a class="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">{{ detail.value }}</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["info"]);
</script>
