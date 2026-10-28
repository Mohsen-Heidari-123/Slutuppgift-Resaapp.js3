import { useQuery } from "@tanstack/react-query"
import { fetchCapitalCoordinates, fetchWeather } from "@/api/weather"
import type { CountryDetail } from "@/schemas/country"

export function useWeather(country: CountryDetail | undefined) {
  const capital = country?.capital
  const alpha2 = country?.alpha2Code
  const fallback = country?.latlng

  return useQuery({
    queryKey: ["weather", alpha2, capital],
    enabled: !!country,
    queryFn: async () => {
      let coords = capital && alpha2
        ? await fetchCapitalCoordinates(capital, alpha2)
        : null

      if (!coords && fallback && fallback.length >= 2) {
        coords = { latitude: fallback[0], longitude: fallback[1] }
      }
      if (!coords) throw new Error("Inga koordinater hittades")

      return fetchWeather(coords)
    },
  })
}