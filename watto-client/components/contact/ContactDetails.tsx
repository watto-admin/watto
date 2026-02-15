"use client";
import React from "react";
import { Phone, MapPin } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const ContactDetails = () => {
  const details = [
    {
      id: "advertise",
      label: "Call us on",
      value: "+91 99999 99999",
      icon: Phone,
      href: "tel:+919999999999",
    },
    {
      id: "info",
      label: "Meet us at",
      value: "123 Main Street, Anytown, India",
      icon: MapPin,
      href: "https://www.google.com/maps/search/?api=1&query=123+Main+Street,+Anytown,+India",
    },
  ];
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 flex flex-row gap-4 px-2 sm:px-0">
      {details.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.id === "info" ? "_blank" : undefined}
          rel={item.id === "info" ? "noopener noreferrer" : undefined}
          className="flex-1 group"
        >
          <SpotlightCard
            className="px-4 py-6 rounded-xl border-white/10 bg-neutral-900/50 backdrop-blur-sm flex flex-col justify-center items-center text-center transition-all hover:bg-neutral-800/50 h-full w-full"
            spotlightColor="rgba(0, 171, 190, 0.2)"
          >
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="mb-3 p-3 rounded-full bg-blue-500/10 text-blue-400">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1">
                {item.label}
              </span>

              <div className="text-white text-sm sm:text-lg font-semibold break-words w-full px-2">
                {item.value}
              </div>
            </div>
          </SpotlightCard>
        </a>
      ))}
    </div>
  );
};

export default ContactDetails;
