import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import FloatingMenu from "@/components/FloatingMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Leonardo Martins - SWE | IXD | UX - Portfólio de Desenvolvedor",
  description:
    "Portfólio de Desenvolvedor Frontend & Mobile App com mais de 3 anos de experiência. Engenheiro de Software Sênior. Especializado em aplicativos móveis, UX e tecnologias JavaScript.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Leonardo Martins",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Leonardo Martins - SWE | IXD | UX",
    description:
      "Desenvolvedor Frontend & Mobile App com mais de 3 anos de experiência. Engenheiro de Software Sênior. Especializado em aplicativos móveis, UX e tecnologias JavaScript.",
    images: "/OpenGraph.jpg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Leonardo Martins",
              jobTitle: "Engenheiro de Software",
              sameAs: [
                "https://www.linkedin.com/in/leonardo-barreto-martins/",
                "https://github.com/leonardo-martins-dev",
                "https://www.instagram.com/leonardo_martins.dev/",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <FloatingMenu />
        {children}
      </body>
    </html>
  );
}
