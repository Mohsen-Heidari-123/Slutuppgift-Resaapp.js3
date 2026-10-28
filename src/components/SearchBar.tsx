import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="country-search">Sök land</Label>
      <Input
        id="country-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Till exempel Finland"
        maxLength={50}
      />
    </div>
  )
}