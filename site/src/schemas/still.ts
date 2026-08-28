import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'still',
  title: 'Production Stills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isHero',
      title: 'Include in Homepage Hero Slideshow',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      isHero: 'isHero',
    },
    prepare({ title, media, isHero }) {
      return {
        title: title || 'Untitled Still',
        subtitle: isHero ? '★ Hero Slideshow Photo' : '',
        media,
      }
    },
  },
})