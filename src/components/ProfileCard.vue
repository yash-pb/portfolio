<template>   
    <div class="w-full bg-white border border-gray-200 rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700 col-span-12 lg:col-span-4 lg:sticky top-44">
        <div class="flex flex-col items-center pb-10 mt-5 p-7">
            <img class="w-[13rem] h-[13rem] lg:w-[11rem] lg:h-[11rem] mb-3 rounded-full shadow-lg" src="../assets/images/profile.jpg" alt="Bonnie image"/>
            <h1 class="mt-6 mb-1 text-2xl md:text-4xl lg:text-3xl font-semibold dark:text-white">{{ profile_data.name }}</h1>
            <h3 class="mb-4 text-xl md:text-3xl lg:text-2xl text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] ">{{ profile_data.designation }}</h3>
            <div class="flex">
                <SocialIcon :social="profile_data.social"/>
            </div>
            <InfoSection :info="profile_data.info"/>
        </div>
    </div>
</template>
<script setup>
import SocialIcon from "../components/SocialIcon.vue";
import InfoSection from "../components/InfoSection.vue";

const props = defineProps(['profile_data']);
// console.log('props => ', props.profile_data);
</script>