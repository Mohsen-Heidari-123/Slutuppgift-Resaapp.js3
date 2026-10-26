import { Button } from "@/components/ui/button"
import { REGIONS } from "@/hooks/useCountryFilters"

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function RegionFilter({ value, onChange }: Props) {
  return (
    <div role="group" aria-label="Filtrera på region" className="flex flex-wrap gap-2">
      <Button
        type="button"
        variant={value === "" ? "default" : "outline"}
        aria-pressed={value === ""}
        onClick={() => onChange("")}
      >
        All
      </Button>
      {REGIONS.map((region) => (
        <Button
          key={region}
          type="button"
          variant={value === region ? "default" : "outline"}
          aria-pressed={value === region}
          onClick={() => onChange(region)}
        >
          {region}
        </Button>
      ))}
    </div>
  )
}