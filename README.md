# Derkyu - Portfolio V2

Modern portfolio website showcasing projects, skills, and experience built with Next.js 15 and advanced 3D animations.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **React**: 19.1.0
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **Animations**: Framer Motion 12.23 + GSAP 3.13
- **3D Graphics**: Three.js 0.180 + React Three Fiber + Drei
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, responsive design with smooth animations
- 🎭 **3D Interactive Models**: Three.js integration with interactive 3D elements
- ⚡ **Performance Optimized**: SSR/SSG with Next.js 15, optimized assets
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎬 **Advanced Animations**: Framer Motion + GSAP for smooth transitions
- 🌙 **Dark Theme**: Optimized color palette with OKLCH color space
- ♿ **Accessible**: ARIA labels and semantic HTML

## 📁 Project Structure

```
my-app/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── works/             # Portfolio/Works page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections (Header, Hero, Footer, etc.)
│   ├── animations/        # Animation utilities
│   ├── providers/         # React Context providers
│   ├── layout/           # Layout components
│   └── ui/               # UI components (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helpers
└── public/              # Static assets
    ├── models/          # 3D models (GLB/GLTF)
    └── logos/           # Project images and logos
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) / npm / yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎯 Pages

- **Home** (`/`): Hero section with 3D model, about preview, and contact info
- **About** (`/about`): Detailed bio, GitHub contributions, work experience timeline
- **Works** (`/works`): Featured projects showcase with live demos and source code links

## 🎨 Key Components

### 3D Model Viewer
Interactive 3D model viewer with support for GLB/GLTF/FBX formats:
- Auto-centering and scaling
- Orbit controls with zoom limits
- Auto-rotation
- Lazy loading with progress indicator

### Animation System
Global animation provider for synchronized page transitions and element animations:
- Fade-in animations with configurable delays
- Rotating text with stagger effects
- Typewriter text effects
- Custom animation hooks

### Responsive Layout
Mobile-first responsive design with adaptive SVG shapes and fluid typography using CSS clamp.

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework with SSR/SSG |
| `three` + `@react-three/fiber` | 3D rendering |
| `framer-motion` | Declarative animations |
| `gsap` | Timeline-based animations |
| `tailwindcss` | Utility-first CSS |
| `lucide-react` | Icon library |
| `react-activity-calendar` | GitHub contributions |

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
# Deploy to Vercel
vercel
```

## 📝 License

This project is personal portfolio property of Derkyu.

## 👤 Author

**Derkyu**
- Full-stack Developer
- Barcelona, Spain
- [Derkyu Hosting](https://hosting.derkyu.lol)

---

Built with ❤️ using Next.js 15
