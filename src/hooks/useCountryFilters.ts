import { useSearchParams } from "react-router-dom"

export const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"] as const

export function useCountryFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get("query") ?? ""
  const region = searchParams.get("region") ?? ""
  const page = Math.max(1, Number(searchParams.get("page")) || 1)

  function setQuery(value: string) {
    const next = new URLSearchParams(searchParams)
    if (value) next.set("query", value)
    else next.delete("query")
    next.set("page", "1")
    setSearchParams(next)
  }

  function setRegion(value: string) {
    const next = new URLSearchParams(searchParams)
    if (value) next.set("region", value)
    else next.delete("region")
    next.set("page", "1")
    setSearchParams(next)
  }

  function setPage(value: number) {
    const next = new URLSearchParams(searchParams)
    next.set("page", String(value))
    setSearchParams(next)
  }

  return { query, region, page, setQuery, setRegion, setPage }
}