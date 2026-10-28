import { useQuery } from "@tanstack/react-query"
import { fetchCountry, CountryNotFoundError } from "@/api/countries"

export function useCountry(code: string) {
  return useQuery({
    queryKey: ["country", code.toUpperCase()],
    queryFn: () => fetchCountry(code),
    retry: (failureCount, error) =>
      !(error instanceof CountryNotFoundError) && failureCount < 2,
  })
}