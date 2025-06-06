import { defineContentConfig, defineCollection , z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
      articles: defineCollection({
        type: 'page',
        source: 'articles/*.md',
        schema: z.object({
            tags: z.array(z.string()),
            image: z.string(),
            date: z.date()
          })
      })
    }
  })