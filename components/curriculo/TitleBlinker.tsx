"use client";

import { useEffect } from "react";

const TitleBlinker: React.FC<{}> = () => {
  useEffect(() => {
    const originalTitle = "Leonardo Martins - Currículo | Desenvolvedor Fullstack Sênior";
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
  }, []);

  return null; // Este componente não renderiza nada
};

export default TitleBlinker;

