import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import FloatingMenu from "@/components/FloatingMenu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Leonardo Martins - Desenvolvedor Fullstack Sênior | Soluções em IA e Plataformas SaaS",
  description:
    "Contrate um desenvolvedor fullstack sênior especializado em IA, plataformas SaaS escaláveis e automações inteligentes. Mais de 6 anos de experiência entregando soluções que aumentam faturamento e produtividade. Desenvolvimento sob demanda, integrações com IA e sistemas de alta performance.",
  keywords: [
    "Desenvolvedor Fullstack",
    "Desenvolvimento de Software",
    "Plataformas SaaS",
    "Integração IA",
    "Automação",
    "Soluções Tecnológicas",
    "Desenvolvimento Sob Demanda",
    "Leonardo Martins",
    "TypeScript",
    "Node.js",
    "React",
    "Python",
    "Inteligência Artificial",
    "Consultoria em Desenvolvimento",
  ],
  openGraph: {
    title: "Leonardo Martins - Desenvolvedor Fullstack Sênior | Soluções em IA",
    description:
      "Desenvolvedor fullstack sênior especializado em plataformas SaaS, integrações com IA e soluções que aumentam faturamento e produtividade. Mais de 6 anos de experiência.",
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
        <Navbar />
        <StarsCanvas />
        <FloatingMenu />
        {children}
      </body>
    </html>
  );
}
