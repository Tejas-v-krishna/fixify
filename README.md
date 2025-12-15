# Fixify 🛠️

**Fixify** is a premium, on-demand home repair and maintenance platform designed to simplify household services. Think of it as "Uber for Repairs"—connecting homeowners with trusted experts for electronics, plumbing, cleaning, and more, all with a high-end, seamless user experience.

![Fixify Platform](public/file.svg)

## ✨ Key Features

- **🚀 Modern Booking Flow**: A streamlined, step-by-step wizard for scheduling repairs, selecting devices, and getting instant price estimates.
- **📍 Real-Time Tracking**: Interactive "Track Repair" system to visualize the status of your service (Pickup -> In Repair -> Delivery).
- **🔒 Secure Authentication**: Beautiful, glassmorphism-styled Login and Cleanup pages.
- **💎 Premium UI/UX**:
    - **Glass Aesthetic**: Dark mode with blur overlays, matte glass headers, and radiant gradients.
    - **Smooth Animations**: Powered by `framer-motion` for page transitions and micro-interactions.
    - **Interactive Navbar**: Floating pill design with focus-blur and cursor spotlight effects.
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

Built with the latest modern web technologies:

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + Custom Design System
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel / Docker ready

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Tejas-v-krishna/fixify.git
    cd fixify
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages (routes)
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI elements (buttons, inputs)
│   │   └── ...           # Feature-specific components
│   ├── lib/              # Utilities and helper functions
│   └── styles/           # Global styles (globals.css)
├── public/               # Static assets (images, icons)
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🤝 Contributing

This project is currently in **private development**.

---

*Built with ❤️ by Fixify Team.*
