import DetailSkeleton from "@/components/DetailSkeleton"
import ErrorMessage from "@/components/ErrorMessage"

import { Link, useParams, useLocation } from "react-router-dom"
import { CountryNotFoundError } from "@/api/countries"
import CountryFacts from "@/components/CountryFacts"
import WeatherCard from "@/components/WeatherCard"
import WikipediaCard from "@/components/WikipediaCard"
import { useCountry } from "@/hooks/useCountry"
import { useWeather } from "@/hooks/useWeather"
import { useWikipedia } from "@/hooks/useWikipedia"

export default function CountryPage() {
  const { code = "" } = useParams()
  const location = useLocation()
  const backTo = `/${(location.state as { from?: string } | null)?.from ?? ""}`
  const { data, isLoading, error, refetch } = useCountry(code)
  const weatherQuery = useWeather(data)
  const wikiQuery = useWikipedia(data?.name)

  return (
    <div className="grid gap-6">
      <Link to={backTo} className="underline">
        ← Tillbaka
      </Link>

     {isLoading && <DetailSkeleton />}

      {error instanceof CountryNotFoundError && (
        <div>
          <p>Landet hittades inte</p>
          <Link to="/" className="underline">
            Till startsidan
          </Link>
        </div>
      )}

    {error && !(error instanceof CountryNotFoundError) && (
  <ErrorMessage
    message="Kunde inte hämta landet."
    onRetry={() => refetch()}
  />
)}

      {data && <CountryFacts country={data} />}

      {data && (
        <WeatherCard
          weather={weatherQuery.data}
          isLoading={weatherQuery.isLoading}
          isError={weatherQuery.isError}
          onRetry={() => weatherQuery.refetch()}
          place={data.capital}
        />
      )}

      {data && (
        <WikipediaCard
          summary={wikiQuery.data}
          isLoading={wikiQuery.isLoading}
          isError={wikiQuery.isError}
          onRetry={() => wikiQuery.refetch()}
        />
      )}
    </div>
  )
}