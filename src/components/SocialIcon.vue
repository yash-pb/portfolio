<template>
    <div class="flex justify-center space-x-3" v-if="socials">
        <div class="flex justify-center space-x-3" v-for="(social, index) in socials" :key="index">
            <a :href="social.url" target="_blank" rel="noopener noreferrer">
                <span class="socialbtn" :class="'text-['+social.color+']'" v-html="social.icon">
                </span>
            </a>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['socials']);
</script>