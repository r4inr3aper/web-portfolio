# 🧑‍💻 Web — Developer Portfolio

This is the source code of my personal developer portfolio website, built using **Next.js (App Router)** and **Tailwind CSS** and deployed on **Vercel**. It showcases my work, skills, and online presence with clean design and smooth animations.

🌐 **Live Site:** [xbedanta.vercel.app](https://xbedanta.vercel.app)

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Fonts:** GeneralSans
- **Deployment:** Vercel / Netlify

---

## 📁 Project Structure

```text
portfoliox/
├── app/                # App router structure (pages, layout, etc.)
├── components/         # Reusable UI components
├── public/             # Static assets (images, favicon, etc.)
├── src/                # Source code (app, components, lib, etc.)
│   ├── app/
│   ├── components/
│   └── lib/
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
└── ...                 # Other config files
```

---

## 🛠 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/r4inr3aper/web-portfolio.git

# Navigate to the project directory
cd web-portfolio

# Install dependencies (using bun, npm, or yarn)
bun install
# or
npm install

# Start the development server
bun run dev
# or
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

---

## 📦 Available Scripts

- `dev` — Start the development server
- `build` — Build for production
- `start` — Start the production server
- `lint` — Lint and type-check the codebase
- `format` — Format the codebase

---

## ✨ Features

- Responsive, minimal UI
- Animated page transitions ([`PageTransition`](src/components/animation/page-transition.tsx))
- Dynamic navigation with active indicator ([`Header`](src/components/layout/header.tsx))
- Project showcase with tech stack and links ([`Projects`](src/app/projects/page.tsx))
- Contact form (Formspree integration, update with your Formspree ID)
- Social links and resume download
- Custom font ([`GeneralSans`](src/app/globals.css))
- Dark mode ready

---

## 📄 Customization

- **Projects:** Edit [`src/app/projects/page.tsx`](src/app/projects/page.tsx) to add or update your projects.
- **Social Links:** Update links in [`src/app/page.tsx`](src/app/page.tsx) and [`src/app/contact/page.tsx`](src/app/contact/page.tsx).
- **Contact Form:** Replace the Formspree action URL in [`src/app/contact/page.tsx`](src/app/contact/page.tsx) with your own Formspree endpoint.
- **Profile Info:** Update your name, avatar, and bio in [`src/components/layout/header.tsx`](src/components/layout/header.tsx).

---

## 🖼️ Assets

- Place your images in the [`public/`](public/) directory.
- Update image paths in your project and profile sections.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [GeneralSans Font](https://github.com/zcreativelabs/GeneralSans)

---

> Made with ❤️ by [bedanta](https://github.com/r4inr3aper)
