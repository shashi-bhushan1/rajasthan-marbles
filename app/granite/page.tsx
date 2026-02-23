import Image from "next/image";
import Link from "next/link";
import { getAllGranites } from "@/data/granite";
import GraniteCard from "@/components/GraniteCard";

export default async function GranitePage() {
  const granites = getAllGranites();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - same style as products page */}
      <section className="relative h-[320px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-bathroom.webp"
            alt="Granite"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-8 md:pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Granite
          </h1>
          <nav className="text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Granite</span>
          </nav>
        </div>
      </section>

      {/* Main Content: card grid only, no filters */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-900">{granites.length} granite</span> available
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {granites.map((granite) => (
            <GraniteCard key={granite.id} granite={granite} />
          ))}
        </div>
        {granites.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No granite available.
          </p>
        )}
      </section>
    </main>
  );
}
