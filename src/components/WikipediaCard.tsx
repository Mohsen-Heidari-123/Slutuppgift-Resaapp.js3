import { Button } from "@/components/ui/button"
import type { WikipediaSummary } from "@/schemas/wikipedia"

type Props = {
  summary?: WikipediaSummary
  isLoading: boolean
  isError: boolean
  onRetry: () => void
}

export default function WikipediaCard({ summary, isLoading, isError, onRetry }: Props) {
  return (
    <section aria-labelledby="intro-heading" className="rounded-lg border p-4">
      <h2 id="intro-heading" className="mb-2 text-xl font-semibold">
        Om landet
      </h2>

      {isLoading && <p>Laddar text...</p>}

      {isError && (
        <div>
          <p>Kunde inte hämta introtexten.</p>
          <Button type="button" variant="outline" onClick={onRetry} className="mt-2">
            Försök igen
          </Button>
        </div>
      )}

      {summary && (
        <div className="grid gap-4 md:grid-cols-[2fr_3fr]">
          {summary.thumbnail && (
            <img
              src={summary.thumbnail.source}
              alt={`Bild som hör till Wikipedia-artikeln om ${summary.title}`}
              className="w-full rounded object-cover"
            />
          )}
          <div className="grid content-start gap-2">
            <p>{summary.extract}</p>
            <p className="text-sm text-muted-foreground">
              Källa: Wikipedia.{" "}
              <a
                href={summary.content_urls.desktop.page}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Läs hela artikeln
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}