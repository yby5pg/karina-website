import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'of7z2mtb', // Replace with your Sanity Project ID
    dataset: 'production',               // Replace with your dataset name if different
  }
});