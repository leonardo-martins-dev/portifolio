"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TitleBlinker: React.FC<{}> = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    const originalTitle = pathname === "/curriculo" 
      ? "Leonardo Martins - Currículo | Desenvolvedor Fullstack Sênior"
      : "Leonardo Martins - Desenvolvedor Fullstack Sênior | Soluções em IA e Plataformas SaaS";
    const notificationTitle = "1 notificação recebida";
    
    let isOriginal = true;
    
    const interval = setInterval(() => {
      document.title = isOriginal ? notificationTitle : originalTitle;
      isOriginal = !isOriginal;
    }, 4000); // Alterna a cada 4 segundos
    
    // Limpar o intervalo quando o componente for desmontado
    return () => {
      clearInterval(interval);
      document.title = originalTitle; // Restaurar o título original
    };
  }, [pathname]);

  return null; // Este componente não renderiza nada
};

export default TitleBlinker;

