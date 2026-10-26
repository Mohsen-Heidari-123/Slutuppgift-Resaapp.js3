import { geocodingSchema, weatherSchema } from "@/schemas/weather"

type Coordinates = { latitude: number; longitude: number }

export async function fetchCapitalCoordinates(
  capital: string,
  countryCode: string,
): Promise<Coordinates | null> {
  const url =
    `https://geocoding-api.open-meteo.com/v1/search` +
    `?name=${encodeURIComponent(capital)}` +
    `&countryCode=${encodeURIComponent(countryCode)}&count=1&language=sv`

  const response = await fetch(url)
  if (!response.ok) throw new Error("Kunde inte slå upp orten")

  const data = geocodingSchema.parse(await response.json())
  const first = data.results?.[0]
  return first ? { latitude: first.latitude, longitude: first.longitude } : null
}

export async function fetchWeather({ latitude, longitude }: Coordinates) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`

  const response = await fetch(url)
  if (!response.ok) throw new Error("Kunde inte hämta vädret")

  return weatherSchema.parse(await response.json()).current
}