import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/schemas'

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',
  projectId: 'of7z2mtb', // <-- HARDCODE HERE
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});