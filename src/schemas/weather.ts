import { z } from "zod"

export const geocodingSchema = z.object({
  results: z
    .array(
      z.object({
        latitude: z.number(),
        longitude: z.number(),
      }),
    )
    .optional(),
})

export const weatherSchema = z.object({
  current: z.object({
    temperature_2m: z.number(),
    wind_speed_10m: z.number(),
    weather_code: z.number(),
  }),
})

export type Weather = z.infer<typeof weatherSchema>["current"]