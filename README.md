# Krishnaprasad S — Creative Designer Portfolio

A minimalist, editorial portfolio built to showcase visual design, branding, campaign photography, and 3D renders. Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, adapted from the Himal Journeys template.

---

## ✨ Features

- **Editorial Case Study Grid:** Clean, responsive layout tailored for high-impact visual storytelling and campaign artwork.
- **Type-Safe Architecture:** Built with strict TypeScript configurations for maintainable component structure.
- **Asset-Driven Showcase:** Easy swapping of project visuals, hero graphics, and metadata from a centralized component structure.
- **Responsive & Fast:** Optimized asset loading powered by Vite and utility-first styling via Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Local Development

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Nvii07/KP-Portfolio.git](https://github.com/Nvii07/KP-Portfolio.git)
   cd KP-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

### Build & Typecheck

Run type verification and create a production build:
```bash
npm run typecheck
npm run build
```

---

## 🎨 Customizing Assets & Projects

- **Artwork & Visuals:** Place your project images, renders, or `.svg` assets inside `public/assets/`.
- **Project Entries:** Update the `PROJECTS` array inside `src/components/ui/himal-journeys-template.tsx` to configure titles, descriptions, categories, and asset paths.

---

## 📂 Project Structure

```text
KP-Portfolio/
├── public/
│   └── assets/                              # Hero visuals, campaign photography, & renders
├── src/
│   └── components/
│       └── ui/
│           └── himal-journeys-template.tsx  # Main portfolio layout & PROJECTS data
├── index.html
├── package.json
└── tsconfig.json
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

Built by **Nevin** using **Gemini** ✨
