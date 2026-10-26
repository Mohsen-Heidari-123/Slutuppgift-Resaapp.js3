import { z } from "zod"

export const countryListItemSchema = z.object({
  name: z.string(),
  alpha3Code: z.string(),
  region: z.string(),
  capital: z.string().optional(),
  population: z.number(),
  flags: z.object({
    svg: z.string(),
    png: z.string(),
  }),
})

export const countryListSchema = z.array(countryListItemSchema)

export type CountryListItem = z.infer<typeof countryListItemSchema>

export const countryDetailSchema = z.object({
  name: z.string(),
  nativeName: z.string().optional(),
  alpha2Code: z.string(),
  alpha3Code: z.string(),
  capital: z.string().optional(),
  region: z.string(),
  subregion: z.string().optional(),
  population: z.number(),
  latlng: z.array(z.number()).optional(),
  flags: z.object({
    svg: z.string(),
    png: z.string(),
  }),
  languages: z.array(z.object({ name: z.string() })).optional(),
  currencies: z
    .array(
      z.object({
        code: z.string().optional(),
        name: z.string(),
        symbol: z.string().optional(),
      }),
    )
    .optional(),
})

export type CountryDetail = z.infer<typeof countryDetailSchema>