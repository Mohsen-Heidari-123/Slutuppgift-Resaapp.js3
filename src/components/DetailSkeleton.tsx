import { Skeleton } from "@/components/ui/skeleton"

export default function DetailSkeleton() {
  return (
    <div aria-busy="true" aria-label="Laddar land" className="grid gap-4">
      <Skeleton className="h-24 w-48" />
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-40 w-full" />
    </div>
  )
}