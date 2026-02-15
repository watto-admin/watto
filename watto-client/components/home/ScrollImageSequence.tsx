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
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // --- DESKTOP ANIMATIONS ---
  // Text 1 (Left, Top)
  const desktopOpacity1 = useTransform(scrollYProgress, [0.08, 0.2], [0, 1]);
  const desktopY1 = useTransform(scrollYProgress, [0.08, 0.2], [50, 0]);

  // Text 2 (Right, Center)
  const desktopOpacity2 = useTransform(scrollYProgress, [0.09, 0.21], [0, 1]);
  const desktopY2 = useTransform(scrollYProgress, [0.09, 0.21], [50, 0]);

  // Text 3 (Left, Bottom)
  const desktopOpacity3 = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const desktopY3 = useTransform(scrollYProgress, [0.1, 0.22], [50, 0]);
  // --- MOBILE ANIMATIONS ---
  // Text 1 (Top)
  const mobileOpacity1 = useTransform(scrollYProgress, [0.08, 0.2], [0, 1]);
  const mobileY1 = useTransform(scrollYProgress, [0.08, 0.2], [50, 0]);

  // Text 2 (Center)
  const mobileOpacity2 = useTransform(scrollYProgress, [0.09, 0.21], [0, 1]);
  const mobileY2 = useTransform(scrollYProgress, [0.09, 0.21], [50, 0]);

  // Text 3 (Bottom)
  const mobileOpacity3 = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const mobileY3 = useTransform(scrollYProgress, [0.1, 0.22], [5, 0]);

  const textStyle3D = {
    textShadow:
      "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
  };

  useEffect(() => {
    // Initialize images array
    imagesRef.current = new Array(frameCount).fill(null);
    let loadedCount = 0;

    frames.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / frameCount) * 100));

        if (loadedCount === frameCount) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      const safeIndex = Math.max(
        0,
        Math.min(Math.round(index), frameCount - 1),
      );

      // Try to find the nearest loaded image if current one isn't loaded yet
      let img = imagesRef.current[safeIndex];

      // Fallback: look backwards for a loaded frame
      if (!img) {
        for (let i = safeIndex - 1; i >= 0; i--) {
          if (imagesRef.current[i]) {
            img = imagesRef.current[i];
            break;
          }
        }
      }

      // If still no image (and we have future images?), look forward?
      // Usually backward is safer for continuity, but let's just stick to what we have.
      // If absolutely nothing is loaded (img is null), we can't draw.

      if (img) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate scale based on device width
        let scale =
          Math.max(canvas.width / img.width, canvas.height / img.height) * 0.85;
        let yOffset = 0;

        if (canvas.width < 1168) {
          scale = Math.max(
            canvas.width / img.width,
            (canvas.height / img.height) * 0.65,
          );
          yOffset = canvas.height * 0.08;
        }
        if (canvas.width < 768) {
          scale = Math.max(
            canvas.width / img.width,
            (canvas.height / img.height) * 0.55,
          );
          yOffset = canvas.height * 0.08;
        }

        const w = img.width * scale;
        const h = img.height * scale;
        const x = canvas.width / 2 - w / 2;
        const y = canvas.height / 2 - h / 2 - yOffset;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, w, h);
      }
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    // Initial draw loop to catch frames as they load if user hasn't scrolled
    // or just trigger once.
    // Since images load asynchronously, we might want to attempt a re-render when they load.
    // But adding 'loadProgress' to dependency array might be too heavy?
    // Let's just rely on the fact that if the user scrolls, it will update.
    // But for the initial frame (0), we want it to appear ASAP.

    const initialRenderInterval = setInterval(() => {
      if (imagesRef.current[0]) {
        render(frameIndex.get());
        clearInterval(initialRenderInterval);
      }
    }, 100);

    // Handle resize
    const handleResize = () => render(frameIndex.get());
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
      clearInterval(initialRenderInterval);
    };
  }, [frameIndex]); // Removed images/loaded dependencies to avoid re-binding loop

  return (
    <div ref={ref} className="relative h-[225vh] md:h-[180vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Loading State */}
        {isLoading && loadProgress < 100 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 bg-black z-20">
            <div className="mb-2">Loading Experience... {loadProgress}%</div>
            <div className="w-48 h-1 bg-gray-800 rounded overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Overlay Text - Desktop */}
        <motion.div
          style={{ opacity: desktopOpacity1, y: desktopY1 }}
          className="pointer-events-none absolute inset-0 hidden md:flex items-start pt-52 justify-start z-10 px-40 md:px-40"
        >
          <h1
            className="text-4xl md:text-6xl font-normal text-white"
            style={textStyle3D}
          >
            The Un-Skippable
            <br />
            <span className="text-sky-500">Ad</span>
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: desktopOpacity2, y: desktopY2 }}
          className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-end z-10 px-40 md:px-40"
        >
          <h2
            className="text-4xl md:text-6xl font-normal text-right text-white"
            style={textStyle3D}
          >
            Prime <br />
            <span className="text-sky-500">Real Estate</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: desktopOpacity3, y: desktopY3 }}
          className="pointer-events-none absolute inset-0 hidden md:flex items-end pb-32 justify-start z-10 px-40 md:px-40"
        >
          <h2
            className="text-4xl md:text-6xl font-normal text-white"
            style={textStyle3D}
          >
            Data in every <br />
            <span className="text-sky-500">Drop</span>
          </h2>
        </motion.div>

        {/* Overlay Text - Mobile (Fade in from bottom, fade out below) */}
        <motion.div
          style={{ opacity: mobileOpacity1, y: mobileY1 }}
          className="pointer-events-none absolute inset-0 flex md:hidden items-start justify-center z-10 pt-30 text-center"
        >
          <h1 className="text-4xl font-normal text-white" style={textStyle3D}>
            The Un-Skippable
            <br />
            <span className="text-sky-500">Ad</span>
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: mobileOpacity2, y: mobileY2 }}
          className="pointer-events-none absolute inset-0 flex md:hidden items-end justify-center z-10 pb-70 text-center"
        >
          <h2 className="text-4xl font-normal text-white" style={textStyle3D}>
            Prime <br />
            <span className="text-sky-500">Real Estate</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: mobileOpacity3, y: mobileY3 }}
          className="pointer-events-none absolute inset-0 flex md:hidden items-end justify-center z-10 pb-24 text-center"
        >
          <h2 className="text-4xl font-normal text-white" style={textStyle3D}>
            Data in every <br />
            <span className="text-sky-500">Drop</span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
