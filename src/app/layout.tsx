import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Earth Enterprises — Estrategia RSC 2026-2035",
  description: "Plataforma interactiva de Responsabilidad Social Corporativa (RSC/ASG) de Green Earth Enterprises. Explora los pilares de Personas, Empresas y Planeta con visualización 3D.",
  keywords: ["RSC", "ESG", "ASG", "sostenibilidad", "Green Earth", "responsabilidad social", "Net-Zero", "GRI", "ISO 26000"],
  authors: [{ name: "Green Earth Enterprises" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>",
  },
  openGraph: {
    title: "Green Earth Enterprises — Estrategia RSC 2026-2035",
    description: "Plataforma interactiva ASG con globo 3D, hoja de ruta en 9 pasos y simulador de impacto.",
    siteName: "Green Earth RSC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Earth Enterprises — Estrategia RSC 2026-2035",
    description: "Plataforma interactiva ASG con globo 3D, hoja de ruta en 9 pasos y simulador de impacto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
