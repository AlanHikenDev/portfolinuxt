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
<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const options = {
  // See https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
}

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>
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