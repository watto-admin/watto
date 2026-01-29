"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const frameCount = 80;
const frames = Array.from(
  { length: frameCount },
  (_, i) => `/Animation Frames/frame_${i.toString().padStart(3, "0")}.jpg`,
);

export default function ScrollImageSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Text Opacity based on scroll
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.25, 0.35], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.45, 0.6, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  const y1 = useTransform(scrollYProgress, [0.1, 0.35], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.7], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.75, 1], [50, 0]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    frames.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        // Maintain order
        loadedImages[i] = img;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      // Handle error gracefully just in case
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const render = (index: number) => {
      // Ensure index is within bounds
      const safeIndex = Math.max(
        0,
        Math.min(Math.round(index), frameCount - 1),
      );
      const img = images[safeIndex];

      if (img) {
        // Resize canvas to match window aspect ratio
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate scale based on device width
        let scale = Math.max(canvas.width / img.width, canvas.height / img.height);

        // Mobile adjustment: 'cover' logic (matching height) can zoom in too much on portrait screens.
        // We relax the height constraint on mobile to allow the image to shrink/respond to width,
        // while still ensuring it covers the width.
        if (canvas.width < 768) {
          scale = Math.max(canvas.width / img.width, (canvas.height / img.height) * 0.6);
        }

        const w = img.width * scale;
        const h = img.height * scale;
        const x = canvas.width / 2 - w / 2;
        const y = canvas.height / 2 - h / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, w, h);
      }
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    // Initial draw
    render(0);

    // Handle resize
    const handleResize = () => render(frameIndex.get());
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, frameIndex, images]);

  return (
    <div ref={ref} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Loading State */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50">
            Loading Experience...
          </div>
        )}

        {/* Overlay Text */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-start z-10 px-4 md:px-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Left Side <br />
            <span className="text-blue-500">Placeholder Text</span>
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-end z-10 px-4 md:px-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-right text-white drop-shadow-2xl">
            Right Side <br />
            Placeholder Text
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-start z-10 px-4 md:px-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Final Left <br />
            Placeholder
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
