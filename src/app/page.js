import VideoHero from "@/components/hero/VideoHero";

export default function Home() {
  return (
    <main >
      {/* Hero Section Container */}
      <div className="relative">
        <VideoHero />
        
        
      </div>
     
      {/* Optional content below the hero section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-white/10 text-center uppercase tracking-[0.5em] text-sm font-bold">
        Discover the World with Wakia Travels
      </div>
    </main>
  );
}
