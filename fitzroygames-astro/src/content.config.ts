import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Actualité'),
    // Nom de fichier image optionnel, placé dans src/assets/blog/
    image: z.string().optional(),
    // Passe à true pour écrire un article sans le publier tout de suite
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
