# Watto - Your Brand, Hydrated 💧

**Watto** is a modern web application showcasing a revolutionary advertising platform that transforms water bottle packaging into active, digital engagement channels. This project serves as the landing page and digital presence for the Watto brand.

The application is built with **Next.js 16** (App Router) and features high-end visual interactions, including scroll-sequenced animations, 3D-style video integration, and smooth locomotive scrolling.

## 🚀 Quick Start

The main application source code resides in the `watto-client` directory.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation & Running

1.  Navigate to the client directory:

    ```bash
    cd watto-client
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:**
  - [Framer Motion](https://www.framer.com/motion/) (Declarative animations)
  - [Motion](https://motion.dev/) (Animation primitives)
- **Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis) (Smooth scroll)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Titan One, Noto Serif, Fredoka)

## ✨ Key Features

- **Scroll-Driven Animations:** A complex image sequence animation that reacts to user scroll (`ScrollImageSequence`), utilizing frame-by-frame rendering.
- **Smooth Scrolling:** Integrated `Lenis` for a premium, buttery-smooth scroll experience.
- **Interactive UI Components:**
  - `LandingInfoOne`: Feature showcase with hover effects and video integration.
  - `LandingStatsInfo`: Animated counters and statistics.
  - `CircularText`: SVG-based rotating text components.
- **Responsive Design:** Fully responsive layout optimized for desktop and mobile viewports.

## 📂 Project Structure

```
watto/
├── watto-client/          # Main Next.js application
│   ├── app/               # App Router pages and layout
│   ├── components/        # React components (home, layout, shared)
│   ├── public/            # Static assets (images, videos, animations)
│   └── ...config files    # Next.js, Tailwind, TypeScript configs
└── ...                    # Project root assets
```

## 🎨 Design Assets

The `public` folder contains key assets including:

- `Animation Frames/`: Image sequences used for the scroll animation.
- `watto-bottle-spin.mp4`: Featured product video.
- SVGs: Branding elements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
