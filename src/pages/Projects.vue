<template>
    <PageHeader title="Projects" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center" v-if="data.projects">
        <div v-for="(project, index) in data.projects" :key="index" class="project-card w-full max-w-sm bg-[#f3f6f6] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-5 rounded-t-lg" src="../assets/images/profile.jpg" alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ project.title }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from "vue";
import PageHeader from "../components/PageHeader.vue";
import profileJson from '../profile_data/profile.json'

const data = computed(() => {
    return profileJson;
});
</script>
<style scoped>
</style>