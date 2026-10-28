import { wikipediaSummarySchema } from "@/schemas/wikipedia"

export async function fetchWikipediaSummary(title: string) {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
  )

  if (!response.ok) {
    throw new Error("Kunde inte hämta Wikipedia-texten")
  }

  return wikipediaSummarySchema.parse(await response.json())
}