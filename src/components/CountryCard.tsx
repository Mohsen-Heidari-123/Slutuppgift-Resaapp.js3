import { Link, useLocation } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import type { CountryListItem } from "@/schemas/country"

type Props = {
  country: CountryListItem
}

export default function CountryCard({ country }: Props) {
  const location = useLocation()

  return (
    <Card className="overflow-hidden">
      <Link
        to={`/country/${country.alpha3Code}`}
        state={{ from: location.search }}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <img
          src={country.flags.svg}
          alt={`Flagga för ${country.name}`}
          className="h-32 w-full object-cover"
        />
        <CardContent className="pt-4">
          <h2 className="text-lg font-semibold">{country.name}</h2>
          <p className="text-sm text-muted-foreground">{country.region}</p>
          <p className="text-sm text-muted-foreground">
            Huvudstad: {country.capital ?? "Saknas"}
          </p>
        </CardContent>
      </Link>
    </Card>
  )
}