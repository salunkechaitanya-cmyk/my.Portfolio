# Chaitanya Salunke - Student Developer Portfolio 🚀

A modern, interactive, and playful student developer portfolio website for **Chaitanya Salunke**, a student at **Newton School of Technology**.

Inspired by Google's playful visual language, colorful doodles, floating cartoon characters, and smooth micro-animations. Designed to showcase learning progress, projects, skills, and academic focus while remaining clean, polished, and ready for internships, hackathons, and networking.

---

## 🎨 Features & Highlights

- **Hero Section**: Large friendly greeting (*"Hey, I'm Chaitanya! 👋"*), animated status indicator (*"Currently learning, building & experimenting."*), and a custom vector illustration of a student coder surrounded by floating stars, coffee cup, and code doodles.
- **Google-Inspired Visual Language**: Signature accent colors (Blue `#4285F4`, Red `#EA4335`, Yellow `#FBBC04`, Green `#34A853`), soft shadows, rounded cards, and subtle doodle background grid.
- **Interactive Companion Mascot ("Pixel")**: Reactive cartoon bot that blinks, displays playful motivational phrases, and responds to clicks and hovers with confetti effects.
- **Cursor Sparkle Trail**: Playful floating sparkle trail on desktop that respects touch screens and `prefers-reduced-motion`.
- **About Me**: Student-focused narrative on curiosity, problem-solving, and practical development with 4 animated mini-cards:
  - *Curious Learner* (Blue)
  - *Problem Solver* (Red)
  - *Creative Builder* (Yellow)
  - *Team Player* (Green)
- **Skills & Learning Stack**: Transparent showcase of skills in progress without false claims:
  - Python
  - Problem Solving
  - HTML & CSS
  - JavaScript
  - Git & GitHub
  - Artificial Intelligence
- **Featured Projects**: Beautiful responsive grid of 3 editable project cards with tags, descriptions, GitHub, and Live Demo buttons.
- **Academic Focus (Education)**: Highlight card for **Newton School of Technology** (Student | Technology and Computer Science).
- **Contact & Connect**: Direct links for GitHub, LinkedIn, email with 1-click clipboard copy, and an interactive message form with celebratory confetti.
- **Dark & Light Mode**: Seamless theme toggle with local storage persistence and system preference detection.
- **Accessibility & SEO**: Built with semantic HTML, high contrast, and full support for `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Outfit, Fredoka, JetBrains Mono

---

## 🚀 Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the local development server**:
   ```bash
   npm run dev
   ```

3. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

---

## ✏️ Customizing Your Content

All personal content, project titles, social links, and skills are centralized in a single clean file:

👉 `src/data/portfolioData.ts`

- **Update Projects**: Replace the placeholder project titles, descriptions, and repository URLs in `portfolioData.projects.items`.
- **Update Social Links**: Add your real GitHub, LinkedIn, and email address in `portfolioData.contact`.
- **Update Skills or Bio**: Modify descriptions or add additional technologies to `portfolioData.skills.items`.

---

## ☁️ Deploying to Vercel

This portfolio is ready for zero-config deployment on [Vercel](https://vercel.com/):

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Chaitanya Salunke Portfolio"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **Add New > Project**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically build and deploy the Next.js site!

