import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'of7z2mtb',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to `false` during local development if you want instant edits without cache
  apiVersion: '2024-03-01', // Updated to a modern API version
});

// Initialize the Sanity image URL builder
const builder = imageUrlBuilder(client);

// Base image URL builder function
export function urlFor(source: any) {
  return builder.image(source);
}

// Optimized image URL helper for fast page loads
export function getOptimizedImageUrl(source: any, width = 1000, quality = 80) {
  if (!source) return '';
  return builder
    .image(source)
    .width(width)
    .format('auto' as any) // Automatically serves WebP/AVIF depending on the user's browser
    .quality(quality) // Compresses file size without visual quality loss
    .url();
}