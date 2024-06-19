<template>
    <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D] w-full" v-if="info">
        <div class="flex py-2.5 border-[#E3E3E3] dark:border-[#3D3A3A] text-xl" v-for="(detail, index) in info"
        :class="{'border-b': (index != info.length-1)}" :key="index">
            <span class="flex socialbtn dark:bg-black items-center justify-content-center" :class="'text-['+detail.color+']'"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z">
                    </path>
                </svg></span>
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
