export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">About Watto</h1>
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-8">
            We transform everyday hydration into a powerful storytelling medium. 
            By placing your brand on premium water bottles, we deliver impressions 
            that are held, carried, and experienced—not just seen.
          </p>
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 my-12">
            <p className="text-2xl md:text-3xl italic font-serif text-white">
              "Traditional ads are scrolled past. Watto is held in hand."
            </p>
          </div>
          <p className="text-lg text-gray-500">
            Founded with the mission to reduce plastic waste while providing brands with a tangible connection to their audience. 
            Our aluminum bottles are 100% recyclable and reused by consumers, extending your brand's reach far beyond a single impression.
          </p>
        </div>
      </div>
    </main>
  );
}
