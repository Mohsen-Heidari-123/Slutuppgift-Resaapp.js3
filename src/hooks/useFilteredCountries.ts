import { useMemo } from "react"
import { useCountries } from "@/hooks/useCountries"
import { useCountryFilters } from "@/hooks/useCountryFilters"

export const PAGE_SIZE = 12

export function useFilteredCountries() {
  const countriesQuery = useCountries()
  const filters = useCountryFilters()
  const { query, region, page } = filters

  const filtered = useMemo(() => {
    const all = countriesQuery.data ?? []
    const search = query.trim().toLowerCase()

    return all.filter((country) => {
      const matchesName = country.name.toLowerCase().includes(search)
      const matchesRegion = region === "" || country.region === region
      return matchesName && matchesRegion
    })
  }, [countriesQuery.data, query, region])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageItems = filtered.slice(start, start + PAGE_SIZE)

  return {
    countriesQuery,
    filters,
    pageItems,
    totalCount: filtered.length,
    totalPages,
    currentPage,
  }
}