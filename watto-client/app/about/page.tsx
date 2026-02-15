import CircularText from "@/components/CircularText";
import LightRays from "@/components/LightRays";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 bg-black text-white">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={2}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="opacity-90"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative flex items-center justify-center mb-12">
          <CircularText
            text="WATTO*WATTO*WATTO*"
            spinDuration={20}
            onHover="speedUp"
            className="absolute w-[300px] h-[300px] justify-center items-center md:w-[400px] md:h-[400px]"
          />
          <h1 className="text-4xl md:text-6xl font-normal absolute z-10">
            About Us
          </h1>
        </div>
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-normal mb-8">
            We transform everyday hydration into a powerful storytelling medium.
            By placing your brand on premium water bottles, we deliver
            impressions that are held, carried, and experienced—not just seen.
          </p>
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 my-12">
            <p className="text-2xl md:text-3xl italic text-white">
              &quot;Traditional ads are scrolled past. Watto is held in
              hand.&quot;
            </p>
          </div>
          <p className="text-lg text-gray-500">
            Founded with the mission to reduce plastic waste while providing
            brands with a tangible connection to their audience. Our aluminum
            bottles are 100% recyclable and reused by consumers, extending your
            brand&apos;s reach far beyond a single impression.
          </p>
        </div>
      </div>
    </main>
  );
}
