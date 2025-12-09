import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leonardo Martins - Curriculo | Desenvolvedor Fullstack Sênior",
  description:
    "Currículo profissional de Leonardo Martins - Engenheiro de Software com mais de 6 anos de experiência em desenvolvimento fullstack, IA, e soluções escaláveis. Disponível para oportunidades de trabalho.",
  keywords: [
    "Currículo",
    "CV",
    "Desenvolvedor Fullstack",
    "Engenheiro de Software",
    "Leonardo Martins",
    "Desenvolvedor Sênior",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "IA",
    "Inteligência Artificial",
  ],
  openGraph: {
    title: "Leonardo Martins - Currículo | Desenvolvedor Fullstack Sênior",
    description:
      "Currículo profissional de Leonardo Martins - Engenheiro de Software Sênior especializado em desenvolvimento fullstack e IA.",
    images: "/OpenGraph.jpg?v=2",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CurriculoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

