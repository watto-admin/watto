import React from "react";
import { Tag, TrendingUp, Calendar, Hand, QrCode, Users } from "lucide-react";

const LandingInfoOne = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 bg-black text-white rounded-lg">
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
            <div className="bg-sky-500 text-black rounded-full px-6 py-2 text-md font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Brand Blind Spot
            </div>
            <p className="text-gray-100 leading-relaxed">
              Once sold, the connection with your customer usually ends. Turn
              that passive product into an active channel.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group flex flex-col items-center md:items-end gap-4 max-w-xs">
            <TrendingUp className="w-8 h-8 text-black" />
            <div className="bg-sky-500 text-black rounded-full px-6 py-2 text-md font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Chance to Upsell or Inform
            </div>
            <p className="text-gray-100 leading-relaxed">
              Deliver targeted campaigns, sustainability stories, or promotions
              directly to the consumer&apos;s hand.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group flex flex-col items-center md:items-end gap-4 max-w-xs">
            <Calendar className="w-8 h-8 text-black" />
            <div className="bg-sky-500 text-black rounded-full px-6 py-2 text-md font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Extended Shelf Life
            </div>
            <p className="text-gray-100 leading-relaxed">
              Keep your brand relevant long after the initial purchase with
              dynamic, updatable digital content.
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
            <div className="bg-sky-500 text-black rounded-full px-6 py-2 text-md font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              Tangible Interaction
            </div>
            <p className="text-gray-100 leading-relaxed">
              Physical products create a unique touchpoint. Bridge the gap
              between the physical and digital worlds.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group flex flex-col items-center md:items-start gap-4 max-w-xs">
            <QrCode className="w-8 h-8 text-black" />
            <div className="bg-sky-500 text-black rounded-full px-6 py-2 text-md font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              No Data or Insights
            </div>
            <p className="text-gray-100 leading-relaxed">
              Traditional packaging is silent. Gain valuable analytics on how,
              where, and when customers engage.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group flex flex-col items-center md:items-start gap-4 max-w-xs">
            <Users className="w-8 h-8 text-black" />
            <div className="bg-sky-500 text-black rounded-full px-6 py-2 text-md font-bold uppercase transition-transform duration-300 group-hover:scale-105 cursor-default">
              No Competitive Advantage
            </div>
            <p className="text-gray-100 leading-relaxed">
              Stand out on the shelf. Offer an experience that competitors with
              standard packaging can&apos;t match.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingInfoOne;
