<template>
    <header class="border-b border-gray-700 text-black mb-5 dark:border-white dark:text-white">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex text-4xl font-black">
                        Welcome
                    </a>
                </div>

                <button data-collapse-toggle="navbar-sticky" @click="openSidebar" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div class="hidden md:relative items-center z-10 sidebar lg:hidden justify-between w-96 md:flex md:w-auto md:order-1 dark:text-white" id="navbar-sticky">
                    <ul v-if="headers" class="flex flex-col md:p-0 font-medium border border-gray-100 dark:border-white-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li v-for="(header, index) in headers" :key="index">
                            <RouterLink :to="header.url" class="block py-2 px-3 text-black-500 rounded md:bg-transparent md:p-0" aria-current="page">
                                {{ header.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <!-- change theme -->
                <div class="ml-3">
                    <div class="flex items-center md:space-x-10 theme-toggle" @click="themeToggle">
                        <span class="flex bg-white w-[40px] hover:text-white h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "><svg
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
                    </div> 
                </div>
            </nav>
        </div>
    </header>
    <div class="w-full absolute top-[5rem] bg-gray-200 dark:bg-[#1d2936] items-center z-10 toggle-sidebar hidden justify-between border-black-2 md:hidden md:order-1 dark:text-white" id="navbar-sticky">
        <ul v-if="headers" class="flex flex-col md:p-0 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li v-for="(header, index) in headers" :key="index" @click="openSidebar">
                <RouterLink :to="header.url" class="block py-2 px-3 text-black-500 rounded md:bg-transparent md:p-0" aria-current="page">
                    {{ header.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(['headers']);
const htmlElement = document.documentElement;
const themeToggle = () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

const openSidebar = () => {
    document.querySelector(".toggle-sidebar").classList.toggle("hidden");
}
</script>
<style scoped>
.router-link-active.router-link-exact-active {
    color: #FA5252;
}

.router-link:hover {
    color: #FA5252;
}
</style>