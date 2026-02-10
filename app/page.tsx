import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import TrendingCollectionsSection from "@/components/TrendingCollectionsSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import SocialMediaSection from "@/components/SocialMediaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CollectionsSection />
      <TrendingCollectionsSection />
      <NewArrivalsSection />
      <SocialMediaSection />
    </main>
  );
}
