export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 bg-black text-white border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-tight">watto</h3>
          <p className="text-gray-500 mt-2">Hydration meets Innovation.</p>
        </div>
        <div className="flex gap-8">
            <a href="mailto:hello@watto.com" className="text-gray-400 hover:text-white transition-colors">hello@watto.com</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
      <div className="mt-12 text-center text-zinc-700 text-sm">
        © {new Date().getFullYear()} Watto Inc. All rights reserved.
      </div>
    </footer>
  );
}
