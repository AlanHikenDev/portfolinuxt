<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryContent(route.path).findOne()
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
