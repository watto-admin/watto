import ScrollImageSequence from "@/components/home/ScrollImageSequence";
import LandingInfoOne from "@/components/home/LandingInfoOne";
import LandingStatsInfo from "@/components/home/LandingStatsInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <ScrollImageSequence />
      <LandingStatsInfo />
      <LandingInfoOne />

      <div className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-normal mb-8">
            Get in Touch
          </h1>
          <p className="text-gray-400 mb-12 text-xl">
            We&apos;re here to help you revolutionize your hydration
            strategy.Whether you want Watto bottles at your location or
            advertise on them. We'd love to hear from you.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <ContactFormSection />
        </div>
      </div>
    </main>
  );
}
