import { z } from "zod"

export const wikipediaSummarySchema = z.object({
  title: z.string(),
  extract: z.string(),
  thumbnail: z
    .object({
      source: z.string(),
    })
    .optional(),
  content_urls: z.object({
    desktop: z.object({
      page: z.string(),
    }),
  }),
})

export type WikipediaSummary = z.infer<typeof wikipediaSummarySchema>