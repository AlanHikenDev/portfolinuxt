<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <pre>
      {{ articles }}
    </pre>
  </main>
</template>

<script setup>
const description =
  "All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.";
useSeoMeta({
  title: "Articles | Fayaz Ahmed",
  description,
});

//const articles = await useAsyncData('articles', () => queryCollection('articles').all())

const articles = await queryCollection("articles")
  .all();

//const { data: articles } = await useAsyncData("all-articles", () =>
  // queryContent("/articles").sort({ published: -1 }).find()
// );
</script>
