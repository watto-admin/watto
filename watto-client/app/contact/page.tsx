import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactDetails from "@/components/contact/ContactDetails";
import LightRays from "@/components/LightRays";

export default function ContactPage() {
  return (
    <main className="min-h-screen md:pt-32 pb-16 px-6 bg-black text-white flex flex-col items-center relative overflow-hidden">
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
      <div className="max-w-3xl w-full relative z-10">
        <h1 className="text-4xl md:text-6xl font-normal mb-8 pt-24 text-center">
          Get in Touch
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Ready to hydrate your brand? Reach out to us for rates and partnership
          opportunities.
        </p>

        <ContactFormSection />
        <ContactDetails />

        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="text-gray-500">Or email us directly at</p>
          <a
            href="mailto:hello@watto.com"
            className="text-2xl font-medium hover:text-blue-500 transition-colors"
          >
            hello@watto.com
          </a>
        </div>
      </div>
    </main>
  );
}
