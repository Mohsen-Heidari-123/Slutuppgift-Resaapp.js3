import { Skeleton } from "@/components/ui/skeleton"

export default function CountryListSkeleton() {
  return (
    <ul
      aria-busy="true"
      aria-label="Laddar länder"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-56 w-full" />
        </li>
      ))}
    </ul>
  )
}