<template>
    <section class="m-5">
        <!-- Header -->
        <MainHeader />
        <!-- content -->
        <div class="grid grid-cols-1 md:grid-cols-12 lg:gap-10 justify-between">
            <!-- container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px] -->
            <!-- <div> -->
            <ProfileCard :profile_data="data" />
            <!-- </div> -->
            <div class="col-span-12 lg:col-span-8">
                <div class="shadow lg:w-[526px] h-[144px] lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111] ">
                    <nav class="lg:block">
                        <ul class="flex">
                            <RouterLink to="/"
                                class="router-link w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425]">
                                <span class="text-xl mb-1">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 1024 1024" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">
                                        </path>
                                    </svg>
                                </span>Home
                            </RouterLink>
                            <RouterLink to="/work"
                                class="router-link w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425]">
                                <span class="text-xl mb-1">
                                    <span class="text-xl mb-1"><svg stroke="currentColor" fill="none" stroke-width="2"
                                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                            </path>
                                            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                                            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                                            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                        </svg></span>
                                </span>Work
                            </RouterLink>
                        </ul>
                    </nav>
                </div>
                <div class="shadow lg:rounded-2xl bg-white dark:bg-[#111111]">
                    <div data-aos="fade" class="aos-init aos-animate">
                        <div class="p-5 md:p-8 lg:p-12">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- <router-view /> -->
</template>
<script setup>
import { computed } from "vue";
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
import ProfileCard from "../../components/ProfileCard.vue";


import profileJson from '../../profile_data/profile.json'
const data = computed(() => {
    return profileJson;
});
console.log('layout', data);
</script>
<style>
body {
    background-color: aliceblue;
}

.router-link-active.router-link-exact-active {
    background-image: linear-gradient(to right, #FA5252, #DD2476);
    color: white;
}

.router-link:hover {
    background-image: linear-gradient(to right, #FA5252, #DD2476);
    color: white;
}
</style>