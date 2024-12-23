import { defineCollection } from 'astro:content'
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema'
import { topicSchema } from 'starlight-sidebar-topics/schema'

export const collections = {
  docs: defineCollection({
    schema: docsSchema({ extend: topicSchema })
  }),
  i18n: defineCollection({
    type: 'data',
    schema: i18nSchema()
  })
}