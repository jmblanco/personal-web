import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewModeProvider } from "@/components/view-mode-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE_PROFILE } from "@/content/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_PROFILE.personal.name} | ${SITE_PROFILE.personal.role}`,
  description: `${SITE_PROFILE.personal.role} en ${SITE_PROFILE.personal.company} (${SITE_PROFILE.personal.parentCompany}). Especialista en sistemas distribuidos, platform engineering, arquitecturas cloud y liderazgo de equipos de ingeniería.`,
  keywords: [
    SITE_PROFILE.personal.name,
    "Software Architecture",
    "Head of Architecture",
    "Platform Engineering",
    "Kubernetes",
    SITE_PROFILE.personal.company,
    "Cloud Native",
    "Software Engineering",
    "Distributed Systems",
  ],
  authors: [{ name: SITE_PROFILE.personal.name, url: SITE_PROFILE.social.github.url }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: `${SITE_PROFILE.personal.name} | ${SITE_PROFILE.personal.role}`,
    description: `Liderando arquitectura tecnológica, plataformas cloud y equipos de ingeniería de alto impacto en ${SITE_PROFILE.personal.company}.`,
    siteName: SITE_PROFILE.personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_PROFILE.personal.name} | ${SITE_PROFILE.personal.role}`,
    description: `${SITE_PROFILE.personal.role} en ${SITE_PROFILE.personal.company}. Sistemas distribuidos y platform engineering.`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ViewModeProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </ViewModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
