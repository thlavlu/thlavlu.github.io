import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
export const collections = { sections: defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/sections'}),schema:z.object({title:z.string(),subtitle:z.string(),order:z.number()})}) };
