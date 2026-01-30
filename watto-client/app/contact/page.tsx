export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 bg-black text-white flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-6xl font-normal mb-8 text-center">Get in Touch</h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Ready to hydrate your brand? Reach out to us for rates and partnership opportunities.
        </p>
        
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input type="text" id="name" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input type="email" id="email" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="jane@company.com" />
                </div>
            </div>
            
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" rows={6} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your campaign needs..."></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg">
                Send Message
            </button>
        </form>

        <div className="mt-16 text-center border-t border-white/10 pt-12">
            <p className="text-gray-500">Or email us directly at</p>
            <a href="mailto:hello@watto.com" className="text-2xl font-medium hover:text-blue-500 transition-colors">hello@watto.com</a>
        </div>
      </div>
    </main>
  );
}
