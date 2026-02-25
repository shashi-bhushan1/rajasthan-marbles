import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAdhesiveBySlug,
  getSimilarAdhesives,
} from "@/data/adhesives";
import ImageWithModal from "@/components/ImageWithModal";
import ExploreSimilarAdhesives from "@/components/ExploreSimilarAdhesives";
import ShareButton from "@/components/ShareButton";

interface AdhesiveDetailPageProps {
  params: Promise<{ adhesiveSlug: string }>;
}

export default async function AdhesiveDetailPage({
  params,
}: AdhesiveDetailPageProps) {
  const { adhesiveSlug } = await params;
  const adhesive = getAdhesiveBySlug(adhesiveSlug);

  if (!adhesive) {
    notFound();
  }

  const similarAdhesives = getSimilarAdhesives(adhesive);

  const specs = [
    { label: "Type", value: adhesive.type },
    { label: "Coverage", value: adhesive.coverage },
    { label: "Drying time", value: adhesive.dryingTime },
    { label: "Application", value: adhesive.application },
    { label: "Pack size", value: adhesive.packSize },
  ].filter((s) => s.value);

  return (
    <main className="min-h-screen bg-white pt-24 pb-12 px-6 md:px-8 lg:px-10">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 md:mb-10">
        <div className="md:pl-4 lg:pl-6 pr-4 md:pr-0 flex flex-col">
          <div className="relative w-full max-md:aspect-square md:h-[55vh] md:max-h-[520px]">
            <ImageWithModal
              images={[adhesive.image]}
              itemName={adhesive.name}
              className="max-md:!block md:!aspect-auto md:!h-full md:!w-full md:!rounded-none"
            />
          </div>
        </div>
        <div className="px-4 md:pl-10 md:pr-8 lg:pr-12 lg:pl-12 flex flex-col justify-center pt-2 md:pt-4 pb-8 md:pb-10">
          <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
            <nav className="text-sm text-gray-500 min-w-0">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/adhesives" className="hover:text-gray-700">Adhesives</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{adhesive.name}</span>
            </nav>
            <ShareButton title={adhesive.name} className="shrink-0" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            {adhesive.name}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#17458A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Adhesive
            </span>
            <span className="text-gray-300" aria-hidden>|</span>
            <span>{adhesive.type}</span>
          </div>

          <hr className="border-gray-200 my-4" />

          {specs.length > 0 && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
                {specs.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">
                      {label}
                    </dt>
                    <dd className="text-base text-gray-900 font-medium">{value}</dd>
                  </div>
                ))}
              </div>
              <hr className="border-gray-200 my-4" />
            </>
          )}

          {adhesive.description && (
            <p className="text-gray-600 mb-4">{adhesive.description}</p>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-base font-semibold bg-[#17458A] text-white rounded-none hover:bg-[#133d75] transition-colors"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Where to Buy
          </Link>
        </div>
      </section>

      <ExploreSimilarAdhesives adhesives={similarAdhesives} />
    </main>
  );
}
