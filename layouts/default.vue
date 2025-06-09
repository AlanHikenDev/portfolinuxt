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
      <div class="h-32"></div>
      <AppFooter />
    </UApp>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>