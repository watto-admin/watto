export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white relative z-10 overflow-hidden"
    >
      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-transparent py-6 border border-black">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-9xl font-black font-[family-name:var(--font-fredoka)] text-white/30 mx-4">
            watto ✧ watto ✧ watto ✧ watto ✧ watto ✧ watto ✧ watto ✧ watto ✧
            watto ✧ watto ✧ watto ✧ watto ✧ watto ✧ watto ✧ watto ✧ watto ✧
          </span>
          {/* <span className="text-9xl font-black font-[family-name:var(--font-fredoka)] text-white/20 mx-4">
            watto watto watto watto watto watto watto watto watto watto watto watto
          </span> */}
        </div>
      </div>

      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a className="text-3xl font-black tracking-tight text-white font-[family-name:var(--font-fredoka)]">
              watto
            </a>
            <p className="text-gray-500 mt-2">Hydration meets Innovation.</p>
          </div>
          <div className="flex gap-8">
            <a
              href="mailto:hello@watto.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              hello@watto.com
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-zinc-700 text-sm">
          © {new Date().getFullYear()} Watto Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
