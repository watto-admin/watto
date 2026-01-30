import ScrollImageSequence from '@/components/home/ScrollImageSequence';
import LandingInfoOne from '@/components/home/LandingInfoOne';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <ScrollImageSequence />
      <LandingInfoOne />
    </main>
  );
}
