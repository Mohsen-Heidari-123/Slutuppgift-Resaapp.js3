import CountryListSkeleton from "@/components/CountryListSkeleton"
import ErrorMessage from "@/components/ErrorMessage"
import CountryCard from "@/components/CountryCard"
import Pagination from "@/components/Pagination"
import RegionFilter from "@/components/RegionFilter"
import SearchBar from "@/components/SearchBar"
import { useFilteredCountries } from "@/hooks/useFilteredCountries"

export default function HomePage() {
  const { countriesQuery, filters, pageItems, totalCount, totalPages, currentPage } =
    useFilteredCountries()

  if (countriesQuery.isLoading) return <CountryListSkeleton />
  if (countriesQuery.isError)
    return (
      <ErrorMessage
        message="Kunde inte hämta länderna."
        onRetry={() => countriesQuery.refetch()}
      />
    )

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold"> 🗺️ Länder</h1>

      <SearchBar value={filters.query} onChange={filters.setQuery} />
      <RegionFilter value={filters.region} onChange={filters.setRegion} />

      {totalCount === 0 ? (
        <p>Inga länder matchar dina kriterier</p>
      ) : (
        <>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((country) => (
              <li key={country.alpha3Code}>
                <CountryCard country={country} />
              </li>
            ))}
          </ul>
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={filters.setPage}
          />
        </>
      )}
    </div>
  )
}