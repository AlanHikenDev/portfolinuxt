<template>
  <div class="space-y-6 text-center">
    
    <p class="text-gray-900 dark:text-gray-400">
      {{ $t('home.description') }}
    </p>
    <div class="h-6 pb-8"></div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Alan Vasquez - Software Engineer ",
  description:
    "I'm Alan vasquez, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});
</script>
