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
    <!-- <button @click="themeToggle" class="btn dark:text-white">Change</button> -->
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