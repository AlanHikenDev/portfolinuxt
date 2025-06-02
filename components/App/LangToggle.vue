<script setup>
const colorMode = useColorMode();
const { locale, locales, setLocale } = useI18n()

const isDark = computed({
  get() {
    return locale.value === "es";
  },
  set() {
    setLocale( locale.value === "es" ? "en" : "es");
  },
});
</script>

<template>
  <UTooltip text="Toggle lang" :ui="{ popper: { strategy: 'absolute' } }">
    <button
      class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
      @click="isDark = !isDark"
    >
      <Icon
        aria-hidden="true"
        :name="isDark ? 'twemoji:flag-for-flag-mexico' : 'openmoji:flag-united-states'"
        class="w-5 h-5"
      />
      <span class="sr-only">Toggle Lang</span>
    </button>
  </UTooltip>
</template>
