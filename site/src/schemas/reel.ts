// schemaTypes/reel.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reel',
  title: 'Reels',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Reel Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url',
      description: 'Paste full YouTube link (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ or https://youtu.be/dQw4w9WgXcQ)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on the page.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'youtubeUrl',
    },
  },
})