import { Button } from "@/components/ui/button"

type Props = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  return (
    <nav aria-label="Sidnavigering" className="flex items-center justify-center gap-4">
      <Button
        type="button"
        variant="outline"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Föregående
      </Button>
      <span aria-live="polite">
        Sida {page} av {totalPages}
      </span>
      <Button
        type="button"
        variant="outline"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Nästa
      </Button>
    </nav>
  )
}