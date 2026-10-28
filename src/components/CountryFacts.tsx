import type { CountryDetail } from "@/schemas/country"

type Props = {
  country: CountryDetail
}

export default function CountryFacts({ country }: Props) {
  const population = new Intl.NumberFormat("sv-SE").format(country.population)
  const languages = country.languages?.map((l) => l.name).join(", ")
  const currencies = country.currencies
    ?.map((c) => (c.symbol ? `${c.name} (${c.symbol})` : c.name))
    .join(", ")

  const facts = [
    ["Huvudstad", country.capital],
    ["Region", country.region],
    ["Subregion", country.subregion],
    ["Befolkning", population],
    ["Språk", languages],
    ["Valuta", currencies],
  ] as const

  return (
    <section aria-labelledby="facts-heading" className="grid gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <img
          src={country.flags.svg}
          alt={`Flagga för ${country.name}`}
          className="h-24 w-auto rounded border"
        />
        <div>
          <h1 id="facts-heading" className="text-3xl font-bold">
            {country.name}
          </h1>
          {country.nativeName && (
            <p className="text-muted-foreground">{country.nativeName}</p>
          )}
        </div>
      </div>

      <dl className="grid gap-2 sm:grid-cols-[max-content_1fr] sm:gap-x-6">
        {facts.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="font-semibold">{label}</dt>
            <dd>{value ?? "Uppgift saknas"}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}