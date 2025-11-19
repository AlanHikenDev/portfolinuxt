<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" :title="$t('projects.description')" :description="$t('projects.description')" />
    <div class="space-y-4">
      
      <AppProjectCard
        v-if="locale === 'es'"
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
      <AppProjectCard
        v-else
        v-for="(project, id) in projesctsEn"
        :key="'en'+id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
import projects from "~/assets/data/projects.json";
const { t , locale, locales} = useI18n()

useSeoMeta({
  title: "Projects | Alan Vasquez",
  description :t('projects.description'),
});

//const { data: projects } = await useAsyncData("projects-all", () =>
 // queryContent("/projects").find()
//);
const projesctsEn  = [
  {
  "name": "FINANZAS DE OAXACA (SEFIN)",
  "url": "https://www.finanzasoaxaca.gob.mx/",
  "description": "In this project, I collaborated with the SEFIN team to develop a financial management system for the government of the state of Oaxaca.",
  "thumbnail": "/projects/cropped-cropped-log-sefin.png",
  "tecnhologies": "SpringBoot, Java, PostgresQL, Bootstrap",
  "date": "2017 - 2019",
  "status": "WIP",
  "opensource": false
},
{
  "name": "Isbast.cl",
  "url": "https://isbast.com/",
  "description": "Isbast is a company in the real estate sector.",
  "thumbnail": "/projects/isbast.png",
  "tecnhologies": "Laravel, Vuejs, MySQL, Bootstrap",
  "date": "2019 - 2021",
  "status": "Active"
},
{
  "name": "usplat",
  "url": "https://usplat.com/",
  "description": "A simple white-noise app that stays in the menu bar.",
  "thumbnail": "/projects/usplat.png",
  "tecnhologies": "Electron, Vuejs, Nodejs, TailwindCSS, Laravel",
  "status": "Active",
  "date": "2021 - 2021",
  "opensource": true
},
{
  "name": "Dropstudio",
  "url": "https://github.com/fayazara/pocketbase-nuxt",
  "description": "Development and maintenance of web applications using Laravel and related technologies such as Laravel and Vue.js.",
  "thumbnail": "/projects/drop.png",
  "status": "Active",
  "tecnhologies": "Vuejs, TailwindCSS, Laravel, AWS S3",
  "date": "2013 - 2019",
  "opensource": true
},
{
  "name": "CVA",
  "url": "https://www.grupocva.com",
  "description": "Backend web developer creating web applications and RESTful APIs using Laravel and related technologies. Collaborated on agile development projects, participating in daily meetings and code reviews.",
  "thumbnail": "/projects/cva.png",
  "tecnhologies": "Php, Laravel, OracleDb, TailwindCSS",
  "status": "WIP",
  "date": "2017 - 2019",
  "opensource": true
}
]
</script>
