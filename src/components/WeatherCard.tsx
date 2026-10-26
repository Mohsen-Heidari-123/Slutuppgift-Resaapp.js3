import { Button } from "@/components/ui/button"
import { describeWeather } from "@/lib/weatherCodes"
import type { Weather } from "@/schemas/weather"

type Props = {
  weather?: Weather
  isLoading: boolean
  isError: boolean
  onRetry: () => void
  place?: string
}

export default function WeatherCard({ weather, isLoading, isError, onRetry, place }: Props) {
  return (
    <section aria-labelledby="weather-heading" className="rounded-lg border p-4">
      <h2 id="weather-heading" className="mb-2 text-xl font-semibold">
        Väder{place ? ` i ${place}` : ""}
      </h2>

      {isLoading && <p>Laddar väder...</p>}

      {isError && (
        <div>
          <p>Kunde inte hämta vädret.</p>
          <Button type="button" variant="outline" onClick={onRetry} className="mt-2">
            Försök igen
          </Button>
        </div>
      )}

      {weather && (
        <p className="text-lg">
          <span aria-hidden="true">{describeWeather(weather.weather_code).icon} </span>
          {describeWeather(weather.weather_code).text}, {Math.round(weather.temperature_2m)} °C,
          vind {Math.round(weather.wind_speed_10m)} km/h
        </p>
      )}
    </section>
  )
}