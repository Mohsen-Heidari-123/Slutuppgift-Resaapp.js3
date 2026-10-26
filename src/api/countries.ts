import { countryListSchema, countryDetailSchema } from "@/schemas/country"

const LIST_URL =
  "https://countries.dev/countries?fields=name,alpha3Code,region,capital,flags,population,area"

export async function fetchCountries() {
  const response = await fetch(LIST_URL)

  if (!response.ok) {
    throw new Error("Kunde inte hämta länderna")
  }

  const data = await response.json()
  return countryListSchema.parse(data)
}

export class CountryNotFoundError extends Error {
  constructor() {
    super("Landet hittades inte")
    this.name = "CountryNotFoundError"
  }
}

export async function fetchCountry(code: string) {
  const response = await fetch(
    `https://countries.dev/alpha/${encodeURIComponent(code)}`,
  )

  if (response.status === 404 || response.status === 400) {
    throw new CountryNotFoundError()
  }
  if (!response.ok) {
    throw new Error("Kunde inte hämta landet")
  }

  const data = await response.json()
  return countryDetailSchema.parse(data)
}