<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <div class="space-y-24">
      
      <ContentLabCard :title="'text Rotator'" :description="'Rotate text whit talwind css'"  :showUsageTab=false>
        <template v-slot:preview>
          <ContentTextRotator />
        </template>
        <template v-slot:codebase>
          <ContentCodeView
            language="vue"
            title="Usage"
          >
          <pre class="bg-gray-900 text-white rounded overflow-auto text-sm font-mono leading-relaxed">
            <code v-html="highlightedHtml" />
            <code v-html="highlightedCss" />
            <code v-html="closeCss" />
          </pre>
          </ContentCodeView>
        </template>
        </ContentLabCard>
    </div>
  </main>
</template>

<script setup>
//import ContentTextRotator from '@/components/content/ContentTextRotator.vue';
//import ContentLabCard from '@/components/content/ContentLabCard.vue';
//import ContentCodeView from '@/components/content/ContentCodeView.vue';

const description = "Some random experiments with UI I do in my free time.";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});
const htmlCode =   
`<template>
  <div class="px-4 py-8 flex items-center justify-center">
    <div
      class="font-extrabold text-lg [text-wrap:balance] text-gray-700 dark:text-gray-200"
    >
      We design and develop the best
      <span
        class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          class="block text-left leading-tight [&_li]:block animate-text-slide"
        >
          <li class="text-indigo-500">Mobile apps</li>
          <li class="text-rose-500">Websites</li>
          <li class="text-yellow-500">Admin dashboards</li>
          <li class="text-teal-500">Landing pages</li>
          <li class="text-pink-500">Illustrations</li>
          <li class="text-sky-500">Icons</li>
        </ul>
      </span>
    </div>
  </div>
</template>

<style>`

const cssCode = `.animate-text-slide {
      animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
    }

    @keyframes text-slide {
      0%,
      15% {
        transform: translateY(0%);
      }

      17%,
      32% {
        transform: translateY(-16.66%);
      }

      34%,
      49% {
        transform: translateY(-33.33%);
      }

      51%,
      66% {
        transform: translateY(-50%);
      }

      68%,
      83% {
        transform: translateY(-66.66%);
      }

      85%,
      100% {
        transform: translateY(-83.33%);
      }
    }`
            
const higligtHtml = (html) => {
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /(&lt;\/?)([\w-]+)([^&]*?)(&gt;)/g,
      (_, start, tag, attrs, end) => {
        const coloredTag = `<span class="text-gray-400">${start}</span><span class="text-pink-400">${tag}</span>`;
        const coloredAttrs = attrs.replace(
          /([\w-:]+)(=)("(.*?)")/g,
          (_, name, eq, val) =>
            `<span class="text-green-400"> ${name}</span><span class="text-white">${eq}</span><span class="text-yellow-300">${val}</span>`
        )
        return `${coloredTag}${coloredAttrs}<span class="text-gray-400">${end}</span>`;
      }
    )

  };

  function highlightCssWithTailwind(css) {
      return css
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/^([^{\n]+)\s*\{/gm, (_, selector) => {
          return `<span class="text-blue-400">${selector.trim()}</span> <span class="text-gray-400">{</span>`;
        })
        .replace(/([\w-]+)\s*:\s*([^;]+);/g, (_, prop, val) => {
          return `  <span class="text-green-400">${prop}</span><span class="text-white">: </span><span class="text-yellow-300">${val.trim()}</span><span class="text-white">;</span>`;
        })
        .replace(/\}/g, `<span class="text-gray-400">}</span>`);
    }

  
  const highlightedCss = highlightCssWithTailwind(cssCode)
  const highlightedHtml = higligtHtml(htmlCode)
  const closeCss = higligtHtml('</style>')
</script>
