<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      :title="$t('mybag.title')"
      :description="$t('mybag.description')"
    />
    <AppUsesHeader title="Frameworks" />
    <AppParrfo class="mb-12">
      {{ $t('mybag.intro') }}
    </AppParrfo>
    <AppFrameWorks class="mb-12" />
    <AppUsesHeader title="language" />
    <AppParrfo class="mb-12">
      {{ $t('mybag.langstext') }}
    </AppParrfo>
    <AppLangs class="mb-12" />
  </main>
</template>

<script setup>
import items from "~/assets/data/bag.json";

import { useI18n } from 'vue-i18n'

const { t } = useI18n()


useSeoMeta({
  title: "Things I use | Alan vasquez - Software Engineer",
});
//const { data: items } = await useAsyncData("uses", () =>
  //queryContent("/uses").find()
//);
/*
    [
  {
    "name": "Cleanshot",
    "description": "You might be wondering why would I pay for a screenshot taking tool. Well, it's is not just a screenshot taking tool. It is a complete package of tools that you can use to take screenshots, record your screen, annotate your screenshots, and much more. It's worth it.",
    "url": "https://cleanshot.com/",
    "category": "software"
  }
]
*/
/* 
const hardware = items.filter((item) => item.category === "hardware");
const software = items.filter((item) => item.category === "software");
const desk = items.filter((item) => item.category === "desk");
const other = items.filter((item) => item.category === "others");
*/
</script>
