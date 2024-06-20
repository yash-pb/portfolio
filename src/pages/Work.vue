<template>
    <PageHeader title="Work Experience" />
    <div class="mt-5 wrapper">
        <ol class="group/list" v-if="data.work">
            <li class="mb-6" v-for="(work, index) in data.work" :key="index">
                <!-- <div class="grid grid-cols-11 grid-rows-1 gap-5">
                    <div class="col-span-3 text-gray-800">
                        {{ work.startAt }} &nbsp;-&nbsp; {{ work.endAt }}
                    </div>
                    <div class="col-span-8 col-start-4">
                        <div class="flex title text-2xl mb-4">
                            <span>{{ work.company }}</span> <span class="align-middle">&nbsp;&nbsp;.&nbsp;&nbsp;</span> <span>{{ work.role }}</span>
                        </div>
                        <div class="description mb-4">
                            {{ work.description }}
                        </div>
                        <div class="tags flex flex-wrap leading-8" v-if="work.tags">
                            <span v-for="(tag, tIndex) in work.tags" :key="tIndex"
                                class="bg-blue-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                                :class="'text-[' + tag.color + ']' ">
                                {{ tag.name }}
                            </span>
                        </div>
                    </div>
                </div> -->
                <div class="details flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:gap-5">
                    <div class="dates text-gray-500 text-sm lg:col-span-3 xl:text-lg lg:mt-[5px]">
                        {{ work.startAt }} &nbsp;-&nbsp; {{ work.endAt }}
                    </div>
                    <div class="lg:col-span-8 lg:col-start-4">
                        <div class="company-details text-2xl xl:text-3xl">
                            <span>{{ work.company }}</span> . <span>{{ work.role }}</span>
                        </div>
                        <div class="description text-base text-gray-800 xl:text-lg mb-3" v-html="work.description">
                        </div>
                        <div class="tags flex flex-wrap leading-8" v-if="work.tags">
                            <span v-for="(tag, tIndex) in work.tags" :key="tIndex"
                                class="bg-blue-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                                :class="'text-[' + tag.color + ']' ">
                                {{ tag.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </li>
        </ol>
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