import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'headshotResume',
  title: 'Headshot + Resume Page',
  type: 'document',
  fields: [
    defineField({
      name: 'downloadableHeadshot',
      title: 'Downloadable High-Res Headshot',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resumePdf',
      title: 'Downloadable Resume (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
      validation: (Rule) => Rule.required(),
    }),
  ],
})