import React from "react";
import { MapPin, FileUp, Truck, Users, Rocket } from "lucide-react";

const stepsData = [
  {
    title: "Choose target zones & audience",
    description: "",
    icon: MapPin,
    bg: "bg-sky-100",
  },
  {
    title: "Provide your brand assets",
    description: "i.e ad creative, message or QR code",
    icon: FileUp,
    bg: "bg-violet-100",
  },
  {
    title: "WATTO prints & delivers",
    description: "co-branded water bottles",
    icon: Truck,
    bg: "bg-emerald-100",
  },
  {
    title: "Real-world brand engagement begins",
    description: "",
    icon: Users,
    bg: "bg-amber-100",
  },
  {
    title: "Launch your first hyper-local campaign",
    description: "in as little as 2–3 weeks",
    icon: Rocket,
    bg: "bg-rose-100",
  },
];

export default function ProcessSteps() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-neutral-50 text-neutral-900 rounded-2xl md:rounded-3xl my-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-normal text-center mb-16 text-neutral-900">
          How It Works
        </h2>
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0" />

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 ${step.bg}`}
                >
                  <step.icon
                    className="w-10 h-10 text-gray-700"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text Content */}
                <div className="px-2">
                  <h3 className="text-lg font-bold leading-tight mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}