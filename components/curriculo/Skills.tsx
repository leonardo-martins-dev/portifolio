"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Cloud,
  Box,
  Layers,
  Brain,
  Cpu,
  Server,
} from "lucide-react";

const Skills: React.FC<{}> = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: ["Python", "Golang", "PHP", "Typescript", "Javascript (JS)", "Bash"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Dados e Big Data",
      skills: ["Pyspark", "Spark", "Data Lake", "ETL", "Kafka"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "CMS & Builders",
      skills: ["Wordpress", "Elementor", "N8N", "Flutterflow", "Langflow"],
      icon: <Box className="w-6 h-6" />
    },
    {
      title: "Cloud e DevOps",
      skills: ["AWS", "EKS", "EC2", "Lambda", "Terraform", "Kubernetes", "Docker", "CI/CD", "GCP", "Amazon Bedrock"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Frameworks",
      skills: ["Django", "Flask", "FastAPI", "React JS", "Vue JS", "Next JS", "Nuxt JS", "Node JS", "Express JS", "Robot Framework", "Prisma ORM"],
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Inteligência Artificial e Machine Learning",
      skills: ["LLM", "IA", "Visão Computacional", "NLP", "RAG", "Prompt engineering", "IA / ML"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "IA / ML Frameworks & Ferramentas",
      skills: ["Hugging Face", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "YOLO", "MLflow", "SageMaker", "Transformers", "Langchain", "CrewAI"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Banco de Dados",
      skills: ["Supabase", "MySQL", "PostgreSQL", "Firebase", "Redis", "MariaDB", "SQLite", "SQL Server", "MongoDB", "Pinecone", "pgVector", "Chroma"],
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-white font-semibold text-center text-6xl mb-4">
        HABILIDADES
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-10 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORAR AGORA
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} {...category} index={index} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({
  title,
  skills,
  icon,
  index,
}: {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-700",
        (index === 0 || index === 4) && "lg:border-l border-gray-700",
        index < 4 && "lg:border-b border-gray-700"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-gray-300 group-hover/feature:text-purple-400 transition-colors duration-200">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-gradient-to-b group-hover/feature:from-purple-500 group-hover/feature:to-orange-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10 px-10">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="text-xs text-gray-400 group-hover/feature:text-gray-300 transition-colors duration-200 bg-transparent rounded-full py-1 px-3 border border-gray-700 group-hover/feature:border-purple-500/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
