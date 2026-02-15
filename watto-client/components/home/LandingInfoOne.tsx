import React from "react";
import { Tag, TrendingUp, Calendar, Hand, QrCode, Users } from "lucide-react";

const LandingInfoOne = () => {
  return (
    <section className="w-[95%] md:w-[80%] mx-auto mt-14 mb-14 px-4 py-24 bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_50px_10px_rgba(100,150,255,0.2)] text-white">
      {/* Header */}
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-4xl md:text-5xl font-normal text-gray-400">
          That BOTTLE OF WATER?
        </h2>
        <h2 className="text-4xl md:text-5xl font-normal uppercase">
          It&apos;s a MISSED OPPORTUNITY
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-8">
        {/* Left Column */}
        <div className="space-y-12 text-center md:text-right flex flex-col items-center md:items-end">
          {/* Feature 1 */}
          <div className="group flex flex-col items-center md:items-end gap-4 max-w-xs">
            <Tag className="w-8 h-8 text-black" />
            <h3 className="bg-sky-500 text-black rounded-full px-4 py-2 text-lg font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Clutter-Free Space
            </h3>
            <p className="text-gray-100 leading-relaxed text-xl">
              Unlike crowded ad spaces, co-branding ensures exclusive presence &
              no competing brand.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group flex flex-col items-center md:items-end gap-4 max-w-xs">
            <TrendingUp className="w-8 h-8 text-black" />
            <h3 className="bg-sky-500 text-black rounded-full px-4 py-2 text-lg font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Cost-Effective
            </h3>
            <p className="text-gray-100 leading-relaxed text-xl">
              The cost of each bottle is shared between partner and the
              advertiser.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group flex flex-col items-center md:items-end gap-4 max-w-xs">
            <Calendar className="w-8 h-8 text-black" />
            <h3 className="bg-sky-500 text-black rounded-full px-4 py-2 text-lg font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Positive Association
            </h3>
            <p className="text-gray-100 leading-relaxed text-xl">
              Your brand is associated with hydration and a positive experience.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative flex justify-center py-8 md:py-0 md:order-none">
          {/* Video Placeholder */}
          <div className="relative w-full max-w-[300px] md:max-w-full aspect-[2/3] md:aspect-auto">
            <video
              src="/watto-bottle-spin.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Feature 4 */}
          <div className="group flex flex-col items-center md:items-start gap-4 max-w-xs">
            <Hand className="w-8 h-8 text-black" />
            <h3 className="bg-sky-500 text-black rounded-full px-4 py-2 text-lg font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Captive Attention
            </h3>
            <p className="text-gray-100 leading-relaxed text-xl">
              Bottles stay 15&ndash;30 mins in hand. Unmatched brand dwell time,
              there&apos;s no skipping or scrolling past.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group flex flex-col items-center md:items-start gap-4 max-w-xs">
            <QrCode className="w-8 h-8 text-black" />
            <h3 className="bg-sky-500 text-black rounded-full px-4 py-2 text-lg font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Extended Shelf Life
            </h3>
            <p className="text-gray-100 leading-relaxed text-xl">
              Consumers share, carry bottles or take home extending and creating
              secondary impressions.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group flex flex-col items-center md:items-start gap-4 max-w-xs">
            <Users className="w-8 h-8 text-black" />
            <h3 className="bg-sky-500 text-black rounded-full px-4 py-2 text-lg font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Data Driven Insights
            </h3>
            <p className="text-gray-100 leading-relaxed text-xl">
              QR codes and CTAs bridge the real world to digital journeys,
              driving measurable engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingInfoOne;
