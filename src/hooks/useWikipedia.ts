import { useQuery } from "@tanstack/react-query"
import { fetchWikipediaSummary } from "@/api/wikipedia"

export function useWikipedia(countryName: string | undefined) {
  return useQuery({
    queryKey: ["wikipedia", countryName],
    queryFn: () => fetchWikipediaSummary(countryName as string),
    enabled: !!countryName,
  })
}