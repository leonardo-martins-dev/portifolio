"use client";

import React, { useState, useEffect } from "react";

const FloatingMenu: React.FC<{}> = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Entrar em Contato" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      lastScrollY = currentScrollY;
      
      const viewportCenter = window.innerHeight / 2;
      const viewportTop = 0;
      
      // Quando rolando para cima, verificar se está saindo de uma seção
      if (isScrollingUp) {
        // Verificar se saiu de projetos
        const projectsElement = document.getElementById("projects");
        if (projectsElement) {
          const rect = projectsElement.getBoundingClientRect();
          if (rect.top > viewportTop + 100) {
            // Sair de projetos, ativar experiência
            const experienceElement = document.getElementById("experience");
            if (experienceElement) {
              const expRect = experienceElement.getBoundingClientRect();
              if (expRect.top < window.innerHeight) {
                setActiveSection("experience");
                return;
              }
            }
          }
        }
        
        // Verificar se saiu de experiência
        const experienceElement = document.getElementById("experience");
        if (experienceElement) {
          const rect = experienceElement.getBoundingClientRect();
          if (rect.top > viewportTop + 100) {
            // Sair de experiência, ativar sobre
            const aboutElement = document.getElementById("about");
            if (aboutElement) {
              const aboutRect = aboutElement.getBoundingClientRect();
              if (aboutRect.top < window.innerHeight) {
                setActiveSection("about");
                return;
              }
            }
          }
        }
        
        // Verificar se saiu de sobre
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          const rect = aboutElement.getBoundingClientRect();
          if (rect.top > viewportTop + 100) {
            // Sair de sobre, ativar início
            setActiveSection("home");
            return;
          }
        }
      }
      
      // Lógica para scroll normal (descendo ou quando não está saindo de seção)
      // Primeiro, verificar se o título de experiência está passando pelo centro
      const experienceElement = document.getElementById("experience");
      if (experienceElement) {
        const titleElement = experienceElement.querySelector("h2");
        if (titleElement) {
          const titleRect = titleElement.getBoundingClientRect();
          const titleCenter = titleRect.top + titleRect.height / 2;
          const titleDistance = Math.abs(titleCenter - viewportCenter);
          
          // Se o título estiver próximo do centro (dentro de 300px), marcar como ativo
          if (titleDistance < 300 && titleRect.top < window.innerHeight && titleRect.bottom > 0) {
            setActiveSection("experience");
            return;
          }
        }
      }
      
      // Para outras seções, usar a lógica padrão
      const sectionElements = sections
        .filter(section => section.id !== "experience")
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;
          
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromViewportCenter = Math.abs(elementCenter - viewportCenter);
          
          return {
            id: section.id,
            element,
            distance: distanceFromViewportCenter,
            top: rect.top,
            bottom: rect.bottom,
          };
        }).filter(Boolean) as Array<{ id: string; element: HTMLElement; distance: number; top: number; bottom: number }>;

      // Encontrar a seção mais próxima do centro da viewport
      if (sectionElements.length > 0) {
        const closestSection = sectionElements.reduce((prev, curr) => 
          curr.distance < prev.distance ? curr : prev
        );
        
        // Atualizar se a seção estiver visível na viewport
        const isVisible = closestSection.top < window.innerHeight + 200 && closestSection.bottom > -200;
        if (isVisible) {
          setActiveSection(closestSection.id);
        }
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Chamar uma vez para definir o estado inicial

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(scrollTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Atualizar estado imediatamente ao clicar
    setActiveSection(sectionId);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        let targetElement: HTMLElement = element;
        
        // Para a seção de experiência, centralizar o título
        if (sectionId === "experience") {
          const titleElement = element.querySelector("h2");
          if (titleElement) {
            targetElement = titleElement as HTMLElement;
          }
        }
        
        const elementRect = targetElement.getBoundingClientRect();
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        const elementHeight = elementRect.height;
        
        // Calcular a posição absoluta do elemento
        const absoluteElementTop = currentScrollY + elementRect.top;
        
        // Calcular posição para centralizar o elemento no meio da viewport
        const scrollPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);

        window.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: "smooth",
        });
        
        // Garantir que o estado seja atualizado após o scroll
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 500);
      }
    }, 10);
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-white/20 text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FloatingMenu;

