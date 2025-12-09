import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">SOBRE MIM</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORAR AGORA
        </p>
        <p className="text-gray-300 text-center ">
          Engenheiro de Software com mais de 6 anos de experiência em desenvolvimento fullstack, atuando em 
          projetos de grande escala e alta complexidade. Especializado em arquiteturas escaláveis, 
          microserviços, integrações com IA e sistemas de alta performance.
          <br />
          <br />
          Ao longo da carreira, desenvolvi múltiplas plataformas SaaS escaláveis desde a concepção até a produção, 
          incluindo sistemas de recuperação de carrinhos com microserviços, integrações oficiais com WhatsApp Business API, 
          e assistentes virtuais com IA contextualizada. Implementei soluções RAG com vetorização de documentos, 
          sistemas de visão computacional em tempo real com YOLOv5, e automações de redes utilizando Python e Cisco NSO. 
          Como referência técnica, lidero migrações de sistemas, promovo revisões de código e implemento práticas de 
          qualidade. Também atuei como bug hunter com reconhecimento em programas de empresas como Tesla, IBM e Visma. 
          Busco oportunidades para aplicar essa experiência diversificada em projetos inovadores.
        </p>
      </div>
    </section>
  );
};

export default About;

