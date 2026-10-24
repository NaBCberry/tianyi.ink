import { glob, file } from 'astro/loaders'
import { defineCollection } from 'astro:content'

//import { feedLoader } from '@ascorbic/feed-loader'
//import { githubReleasesLoader } from 'astro-loader-github-releases'
//import { githubPrsLoader } from 'astro-loader-github-prs'
//import { blueskyPostsLoader } from 'astro-loader-bluesky-posts'

import {
  pageSchema,
  postSchema,
  projectSchema,
  streamSchema,
  photoSchema,
} from '~/schema'

const pages = defineCollection({
  loader: glob({ base: './src/pages', pattern: '**/*.mdx' }),
  schema: pageSchema,
})

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: 'index.{md,mdx}' }),
})

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: postSchema,
})

const projects = defineCollection({
  loader: file('./src/content/projects/data.json'),
  schema: projectSchema,
})

const releases = defineCollection({
  loader: async () => [],
})

const prs = defineCollection({
  loader: async () => [],
})

const highlights = defineCollection({
  loader: async () => [],
})

const photos = defineCollection({
  loader: file('src/content/photos/data.json'),
  schema: photoSchema,
})

const shorts = defineCollection({
  loader: glob({ base: './src/content/shorts', pattern: '**/[^_]*.{md,mdx}' }),
  schema: postSchema,
})

const changelog = defineCollection({
  loader: glob({
    base: './src/content/changelog',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: postSchema,
})

const streams = defineCollection({
  loader: file('./src/content/streams/data.json'),
  schema: streamSchema,
})

const feeds = defineCollection({
  loader: async () => [],
})

export const collections = {
  pages,
  home,
  blog,
  projects,
  releases,
  prs,
  highlights,
  photos,
  shorts,
  changelog,
  streams,
  feeds,
}
