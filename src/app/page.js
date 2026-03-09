import VideoHero from "@/components/hero/VideoHero";

export default function Home() {
  return (
    <main>
      {/* Hero Section Container */}
      <div className="relative">
        <VideoHero />

        {/* Floating Text Overlay */}
        <div className="absolute top-[350px] inset-x-0 z-50 flex justify-center px-4">
          <div className="bg-white/10 text-red-500 px-5 py-2.5 rounded-full font-bold backdrop-blur-md uppercase text-[14px] border border-white/20 shadow-2xl">
            <p className="w-full max-w-3xl text-center text-sm md:text-lg font-bold tracking-[0.3em] uppercase opacity-90">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. 
            </p>
          </div>
        </div>
      </div>

      {/* Optional content below the hero section */}
    </main>
  );
}
