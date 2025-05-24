<script setup lang="ts">

</script>

<template>
   <div>
    <UApp>
      <NuxtLoadingIndicator color="#14b8a6" />
      <AppNavbar />
      <div class="h-32"></div>
      <UContainer>
          <main class="min-h-screen">
            <div class="space-y-24">
              <slot />
            </div>
          </main>
      </UContainer>
    </UApp>
  </div>
</template>