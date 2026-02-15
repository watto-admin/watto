import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactDetails from "@/components/contact/ContactDetails";
import LightRays from "@/components/LightRays";

export default function ContactPage() {
  return (
    <main className="min-h-screen md:pt-24 pb-16 px-6 bg-black text-white flex flex-col items-center relative overflow-hidden">
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
        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10 my-12">
          <p className="text-2xl md:text-2xl italic text-white text-center">
            &quot;Let&apos;s Talk — We&apos;re Just a Sip Away.&quot;
          </p>
        </div>
        <p className="text-center text-gray-400 mb-12 text-lg">
          We&apos;re here to help you revolutionize your hydration
          strategy.Whether you want Watto bottles at your location or advertise
          on them. We&apos;d love to hear from you.
        </p>

        <ContactFormSection />
        <ContactDetails />

        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="text-gray-500">Or email us directly at</p>
          <a
            href="mailto:info@watto.in"
            className="text-2xl font-medium hover:text-blue-500 transition-colors"
          >
            info@watto.in
          </a>
        </div>
      </div>
    </main>
  );
}
