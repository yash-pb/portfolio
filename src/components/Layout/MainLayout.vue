<template>
    <section class="p-5 bg-[#F0F8FF] dark:bg-[#3b3b3b]">
        <!-- Header -->
        <MainHeader :headers="data.navbar"/>
        <!-- content -->
        <div class="grid grid-cols-1 md:grid-cols-12 lg:gap-10 justify-between flex-col md:flex-col">
            <ProfileCard :profile_data="data" />
            <div class="col-span-12 lg:col-span-8 mt-8 order-1 md:order-2 mb-5 lg:mb-0">
                <div class="shadow lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-5 rounded-[16px] bg-white dark:bg-gray-400 ">
                    <nav class="hidden lg:block">
                        <ul class="flex" v-if="data.navbar">
                            <RouterLink v-for="(navbar, index) in data.navbar" :key="index" :to="navbar.url" class="router-link w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425]">
                                <span class="text-xl mb-1" v-html="navbar.icon">
                                </span>{{ navbar.title }}
                            </RouterLink>
                        </ul>
                    </nav>
                </div>
                <div class="shadow rounded-2xl bg-white dark:bg-[#1d2936] dark:text-white dark:border">
                    <div data-aos="fade" class="aos-init aos-animate">
                        <div class="p-5 md:p-8 lg:p-12">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
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
</script>
<style scoped>
.router-link-active.router-link-exact-active {
    background-image: linear-gradient(to right, #FA5252, #DD2476);
    color: white;
}

.router-link:hover {
    background-image: linear-gradient(to right, #FA5252, #DD2476);
    color: white;
}
</style>