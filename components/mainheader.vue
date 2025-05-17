<script setup>
    const { locale, locales, setLocale } = useI18n()

</script>
<template>
    <nav class="fixed inset-0 flex pt-10 justify-center bg-white shadow-md z-50">
        <ul class="flex flex-col md:flex-row gap-6 text-lg font-semibold">
            <li><a href="#" class="hover:text-blue-600 transition">{{ locale === 'es' ? 'Inicio' : 'Home' }}</a></li>
            <li><a href="#" class="hover:text-blue-600 transition">{{ locale === 'es' ? 'Servicios' : 'Services' }}</a></li>
            <li><a href="#" class="hover:text-blue-600 transition">{{ locale === 'es' ? 'Acerca' : 'About' }}</a></li>
            <li><a href="#" class="hover:text-blue-600 transition">{{ locale === 'es' ? 'Contacto' : 'Contact' }}</a></li>
        </ul>
        <div class="absolute top-4 right-8">
            x-{{ locale }}x
            <button
                class="px-3 py-1 border rounded mr-2"
                :class="{'bg-blue-600 text-white': locale.value === 'es'}"
                v-for="locale in locales" @click="setLocale(locale.code)"
                > {{ locale.name }}
            </button>
        </div>
    </nav>
</template>