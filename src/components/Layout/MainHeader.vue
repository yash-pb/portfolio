<template>
    <header class="border-b border-gray-700 text-black mb-5">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <!-- lg+ -->
            <nav class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex text-4xl font-black">
                        <!-- <img class="w-auto h-8 lg:h-10"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" alt="Intro" /> -->
                        Welcome
                    </a>
                </div>

                <!-- <button type="button"
                    class="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button> -->

                <!-- <div class="md:flex md:items-center md:space-x-10 theme-toggle" @click="themeToggle">
                    <span
                        class="bg-white w-[40px] hover:text-white h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "><svg
                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" class="text-3xl dark-mode-light dark:hidden"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg></span>
                </div> -->
            </nav>
        </div>
    </header>
</template>
<script setup>
import { ref } from "vue";

const theme = ref(false);
const themeToggle = () => {
    console.log('called => ', theme.value);
    // if (!theme) {
    //     document.documentElement.classList.add('dark');
    // } else {
    //     document.documentElement.classList.remove('dark')
    // }
    // theme.value = !theme.value;
    // console.log('end => ', theme.value);
}
</script>