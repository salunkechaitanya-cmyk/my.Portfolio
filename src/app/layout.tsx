import type { Metadata, Viewport } from "next";
import "./globals.css";
import SparkleCursor from "@/components/SparkleCursor";
import MascotCompanion from "@/components/MascotCompanion";

export const metadata: Metadata = {
  title: "Chaitanya Salunke | Student Developer Portfolio",
  description:
    "Student at Newton School of Technology | Aspiring Developer | Curious Mind exploring technology, building cool things, and turning ideas into reality.",
  keywords: [
    "Chaitanya Salunke",
    "Newton School of Technology",
    "Student Developer",
    "Frontend Developer",
    "Python",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Chaitanya Salunke" }],
  openGraph: {
    title: "Chaitanya Salunke | Student Developer Portfolio",
    description:
      "Student at Newton School of Technology | Aspiring Developer | Curious Mind",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans bg-white dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 antialiased min-h-screen relative selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-900/40 dark:selection:text-blue-300">
        <SparkleCursor />
        {children}
        <MascotCompanion />
      </body>
    </html>
  );
}
