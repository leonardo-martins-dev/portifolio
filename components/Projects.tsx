"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Bot, Sparkles, Wand2, MessageSquare } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image?: string;
  url: string;
  alt: string;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Bright Data SDK Python",
    description: "Refatorei completamente o SDK Python da Bright Data, a maior empresa de dados para web do mundo, arquitetura 100% moderna.",
    image: "/bright_data_logo.jpg",
    url: "https://github.com/brightdata/sdk-python",
    alt: "Leonardo Martins - Bright Data SDK Python Refactoring"
  },
  {
    title: "No Ponto",
    description: "Sistema de gestão 360 para restaurantes, plataforma SaaS completa com módulos de financeiro, RH, Freelancers, Ficha técnica, Estoque e Checklists.",
    image: "/noponto_logo.jpg",
    url: "https://www.instagram.com/noponto.food",
    alt: "Leonardo Martins - No Ponto Food Service Management System"
  },
  {
    title: "Campo Alegre",
    description: "Plataforma para automação e gestão de promotores, com controles e dados administrativos, integrações a sistemas para automação de 100% da operação.",
    image: "/logo-campo-alegre.png",
    url: "https://www.instagram.com/agrocampoalegre/",
    alt: "Leonardo Martins - Campo Alegre Promoter Management Platform"
  },
  {
    title: "Percebon & Bosco",
    description: "Desenvolvimento de plataforma completa para acompanhar processos, atualizar processos e clientes terem visão de quaisquer movimentações em suas ações.",
    image: "/percebon_bosco_logo.png",
    url: "https://www.instagram.com/percebonebosco.adv/",
    alt: "Leonardo Martins - Percebon & Bosco Legal Platform"
  },
  {
    title: "Requinte Imobiliária",
    description: "Sistema completo de gestão financeira, controle de gastos, gestão de imóveis, inquilinos, trazendo dados e insights e também com envio automático de IPTU.",
    image: "/requinte_logo.webp",
    url: "https://requinteimobiliaria.com.br/",
    alt: "Leonardo Martins - Requinte Imobiliária Management System"
  },
  {
    title: "MedJus",
    description: "Um aplicativo e plataforma desenvolvida para médicos, com ferramentas que oferecem o suporte jurídico necessário para sua prática.",
    image: "/medjus_logo.jpg",
    url: "https://medjusbrasil.com.br/",
    alt: "Leonardo Martins - MedJus Medical Legal Support Platform"
  },
  {
    title: "Alphaville Campinas Clube",
    description: "Desenvolvimento completo de Website para o Alphaville Campinas Clube, com foco em SEO, responsividade e blog.\n\n\n",
    image: "/alphaville_logo.png",
    url: "https://www.alphavillecampinasclube.com.br/",
    alt: "Leonardo Martins - Alphaville Campinas Clube Website"
  },
  {
    title: "SC Engenharia",
    description: "Desenvolvimento completo de Website, Landing Pages e Blog para SC Engenharia com foco também em SEO e responsividade.\n\n",
    image: "/sc_engenharia_logo.png",
    url: "https://engenhariasc.com.br/",
    alt: "Leonardo Martins - SC Engenharia Website"
  },
  {
    title: "IA - Automação de Atendimento",
    description: "Automação do processo de atendimento, suporte e vendas, onde uma IA faz todo o acompanhamento e gerenciamento dos clientes e leads de forma automatizada.",
    url: "https://www.instagram.com/leonardo_martins.dev/",
    alt: "Leonardo Martins - IA Automação de Atendimento",
    icon: <Bot className="w-16 h-16 text-white" />
  },
  {
    title: "IA - Automação Clínicas",
    description: "IA para automação de clínicas onde ela faz atendimento, tira dúvidas, envia resultados, faz agendamentos, confirma agendamento e é diretamente integrado na agenda do médico.",
    url: "https://www.instagram.com/leonardo_martins.dev/",
    alt: "Leonardo Martins - IA Automação Clínica Estética",
    icon: <Sparkles className="w-16 h-16 text-white" />
  },
  {
    title: "IA - Edição de Imagens",
    description: "Instalação e fine tuning de modelo de IA com foco em edição de imagens com resultado perfeito similar a fotografias e edições profissionais, com fluxo integrado ao WhatsApp.",
    url: "https://www.instagram.com/leonardo_martins.dev/",
    alt: "Leonardo Martins - IA Edição de Imagens",
    icon: <Wand2 className="w-16 h-16 text-white" />
  },
  {
    title: "IA - Automação WhatsApp Suporte",
    description: "Automação no WhatsApp em setor de suporte com IA totalmente humanizada e com treinamento com base nos sistemas e procedimentos na empresa.\n\n",
    url: "https://www.instagram.com/leonardo_martins.dev/",
    alt: "Leonardo Martins - IA Automação WhatsApp Suporte",
    icon: <MessageSquare className="w-16 h-16 text-white" />
  }
];

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="pt-0 pb-16">
      <h2 className="text-white font-semibold text-center text-6xl mb-4">
        PROJETOS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-10 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORAR AGORA
      </p>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
              className="group relative z-[1]"
            >
              <Card
                className={cn(
                  "h-full border border-gray-700 bg-card/80 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-purple-500/50",
                  "hover:shadow-lg hover:shadow-purple-500/10",
                  "overflow-hidden relative"
                )}
              >
                {/* Gradient overlay on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 pointer-events-none z-0" />
                
                <CardContent className="p-0 relative z-10">
                  <div className="relative w-full h-32 sm:h-40 overflow-hidden bg-gray-800">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          className={cn(
                            "transition-transform duration-500",
                              project.title === "Campo Alegre"
                                ? "object-contain p-4 group-hover:scale-105"
                                : project.title === "Alphaville Campinas Clube" || project.title === "SC Engenharia" || project.title === "Percebon & Bosco" || project.title === "Requinte Imobiliária"
                                ? "object-contain p-4 group-hover:scale-105 brightness-0 invert"
                                : "object-cover group-hover:scale-110"
                          )}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Overlay gradient on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-orange-500/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-orange-500/30 transition-all duration-300">
                        {project.icon && (
                          <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {project.icon}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* External link icon */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5 border border-white/20">
                        <ExternalLink className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-purple-500 to-orange-400" />
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed line-clamp-4 whitespace-pre-line">
                      {project.description}
                    </p>
                    
                    {/* Progress bar effect */}
                    <div className="mt-3 h-0.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
