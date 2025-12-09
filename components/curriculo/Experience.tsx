"use client";

import React from "react";
import { Timeline, TimelineItem } from "@/components/ui/modern-timeline";

const experienceData: TimelineItem[] = [
  {
    title: "Grupo Wite - Desenvolvedor Fullstack Sênior",
    description: "Desenvolvi duas plataformas SaaS escaláveis: recuperação de carrinhos com microserviços e integração oficial à API WhatsApp Business, e assistente virtual contextualizado com IA. Arquiteturas modulares e de alta performance com TypeScript, Node.js (Express/Fastify), autenticação JWT distribuída, integração avançada com Meta WhatsApp Business API (múltiplas contas, webhooks em tempo real), modelagem com Supabase, APIs RESTful documentadas com Swagger, WebSockets para atualizações em tempo real e camadas robustas de segurança (Helmet, CORS, rate limiting, HMAC). No frontend, criei widget JavaScript leve e customizável com detecção automática de rotas, animações e markdown.",
    date: "Out 2025 - Dez 2025",
    category: "Fullstack",
    status: "completed",
    image: "/witegroup_logo.jpg"
  },
  {
    title: "Ninja do Excel - Desenvolvedor Fullstack Sênior",
    description: "Desenvolvi plataforma SaaS completa de gestão financeira e imobiliária, desde modelagem de dados até entrega final. Stack: React, TypeScript, Node.js (Express), Prisma ORM e PostgreSQL, totalmente containerizado com Docker. Implementei autenticação JWT, controle de acesso, painel administrativo dinâmico com gráficos e dashboards financeiros, importação em massa via XLSX e gestão de fluxo de caixa automatizado. Orquestrado via Docker Compose com ambiente de banco e administração via pgAdmin.",
    date: "Set 2025 - Out 2025",
    category: "Fullstack",
    status: "completed",
    image: "/ninja_excel_logo.jpg"
  },
  {
    title: "FDTE - Desenvolvedor Sênior Python",
    description: "Lidero a migração do frontend para Next.js com TypeScript, aplicando arquitetura moderna e escalável. Desenvolvi dashboard de analytics com gráficos de correlação e radar, sistema de stakeholders com matriz de Mendelow, assistente de IA integrado e design system completo com temas dark/light. Como referência técnica, elevei o nível do time promovendo revisões de código, padronização de práticas, aumento da cobertura de testes e implementação de IA no fluxo de trabalho e revisão de código. Stack: Next.js, React, TypeScript, Tailwind, shadcn/ui, Jotai, React Query, Jest e CI/CD automatizado.",
    date: "Mar 2025 - Set 2025",
    category: "Frontend & IA",
    status: "completed",
    image: "/fdte_logo.jpg"
  },
  {
    title: "FCVC - Engenheiro de IA",
    description: "Desenvolvi e implementei solução conversacional integrada ao Bitrix24, utilizando modelos OpenAI hospedados em infraestrutura dedicada na AWS (EC2 com escalabilidade automática e CloudWatch). Desenvolvimento em Python com LangChain para orquestração de fluxos e integração com recursos externos. Implementei sistema RAG com vetorização de documentos, permitindo respostas baseadas em informações externas ao modelo. Integração via API REST e webhooks para automação de processos no CRM (criação de leads, qualificação, atualização de status e tarefas).",
    date: "Nov 2024 - Abr 2025",
    category: "IA & Backend",
    status: "completed",
    image: "/fcvc_solues_tecnolgicas_e_desenvolvimento_humano_logo.jpg"
  },
  {
    title: "Techsolutio - Desenvolvedor Sênior Python",
    description: "Desenvolvi soluções de automação de redes utilizando Python, Cisco NSO e modelos YANG. Criei sistemas com RAG integrando LLMs via APIs e vetorização de documentos com Supabase para geração de relatórios inteligentes. Participei de projetos de visão computacional em tempo real com modelos YOLOv5 para identificação automática de uso de EPIs. Desenvolvi automação para CPEs com configuração remota e testes automatizados usando Robot Framework. Idealizei e desenvolvi projetos internos que otimizaram fluxos de contratação e reaproveitamento de conhecimento.",
    date: "Set 2023 - Mar 2025",
    category: "Python & Automação",
    status: "completed",
    image: "/techsolutio_solues_empresariais_logo.jpg"
  },
  {
    title: "Autônomo - Desenvolvedor Fullstack",
    description: "Desenvolvi três plataformas SaaS completas, desde concepção até entrega em produção, com foco em escalabilidade, automação e IA. Utilizei Python para orquestração e integração com LLMs via API, Flutter para interface responsiva em uma das plataformas, e Supabase para gestão de dados em tempo real. Configurei, mantive e otimizei servidores garantindo segurança, alta disponibilidade e desempenho. Realizei projetos sob demanda com React, WordPress (Elementor), Figma, Photoshop, Python e AWS, incluindo bot de automação com web scraping e estruturação automática em Excel, além de automações e integrações de agentes de IA no WhatsApp.",
    date: "Jan 2023 - Jan 2025",
    category: "Fullstack & Freelance",
    status: "completed",
    image: "/autonomo_logo.jpg"
  },
  {
    title: "Bug Hunter - Autônomo",
    description: "Atuei como bug hunter especializado em aplicações web, com vulnerabilidades reportadas e validadas por empresas como Tesla, IBM e Visma. Reconhecido no Hall da Fama Hackers 2023 da Visma. Desenvolvi scripts privados para automação de processos de segurança, monitoramento e detecção de vulnerabilidades em tempo real. Realizei testes manuais com Burp Suite, explorando falhas em APIs, requisições, formulários e fluxos de autenticação, com foco em segurança ofensiva e identificação de falhas críticas.",
    date: "Jan 2022 - Dez 2023",
    category: "Segurança",
    status: "completed",
    image: "/hackerone_logo.jpg"
  },
  {
    title: "AACHI - Desenvolvedor Fullstack",
    description: "Responsável pelo desenvolvimento completo da plataforma utilizando Nuxt.js no frontend, Supabase como backend em tempo real e administração da infraestrutura na AWS. Implementei novas funcionalidades, correções de bugs e melhorias contínuas alinhadas ao feedback dos usuários. Desenvolvi cron jobs de envio automatizado de e-mails utilizando Edge Functions do Supabase, garantindo performance e escalabilidade nas rotinas programadas.",
    date: "Jun 2022 - Jan 2023",
    category: "Fullstack",
    status: "completed",
    image: "/aachi_vagas_logo.jpg"
  },
  {
    title: "Legisweb - Auxiliar de TI",
    description: "Atuação como desenvolvedor fullstack e responsável pela administração de rede, firewall, VoIP e infraestrutura de hardware. Gerenciei Endian Firewall e sistemas de telefonia IP (SIP/VoIP). No desenvolvimento, trabalhei com PHP, jQuery e Bootstrap, focando na correção de bugs e implementação de novos endpoints em APIs existentes, contribuindo para a evolução contínua das aplicações internas.",
    date: "Jun 2021 - Fev 2022",
    category: "Fullstack & Infraestrutura",
    status: "completed",
    image: "/legisweb_logo.jpg"
  },
  {
    title: "E-point - Desenvolvedor Fullstack",
    description: "Responsável pelo desenvolvimento completo de sites e sistemas web, desde concepção até entrega final, utilizando PHP, JavaScript, WordPress e Elementor. Atuei na estruturação e implementação de projetos com foco em performance e usabilidade. Desenvolvi API em PHP e JavaScript que integrava com API governamental para consulta de alíquotas de impostos em tempo real. Participei ativamente em todas as etapas dos projetos, incluindo arquitetura, codificação, testes e implantação.",
    date: "Jan 2020 - Abr 2021",
    category: "Fullstack",
    status: "completed",
    image: "/epoint_logo.webp"
  },
  {
    title: "ETEC Trajano Camargo - Monitor e Tutor",
    description: "Desenvolvi e ministrei curso de segurança da informação com foco em Red Team, incluindo criação de todo conteúdo didático e apostila exclusiva. O curso abordou práticas ofensivas, metodologias de ataque e técnicas utilizadas em simulações de intrusão, com foco em aplicação prática e aprofundamento técnico.",
    date: "Mar 2019 - Nov 2019",
    category: "Educação & Segurança",
    status: "completed",
    image: "/etec_logo.jpg"
  },
];

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-white font-semibold text-center text-6xl mb-4">
        EXPERIÊNCIA
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-10 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORAR AGORA
      </p>
      <Timeline items={experienceData} />
    </section>
  );
};

export default Experience;

