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
          Com mais de 6 anos de experiência, desenvolvo soluções tecnológicas que geram resultados 
          reais para negócios. Minha especialidade está em criar plataformas escaláveis, sistemas 
          sob demanda e automações inteligentes que aumentam significativamente o faturamento e a 
          produtividade das empresas.
          <br />
          <br />
          Trabalho com integrações avançadas de IA, desenvolvimento de sistemas de alta performance 
          e soluções customizadas que se adaptam às necessidades específicas de cada cliente. Desde 
          plataformas SaaS completas até automações que otimizam processos internos, meu foco está 
          sempre em entregar valor mensurável e resultados que impactam diretamente o crescimento do 
          seu negócio.
        </p>
      </div>
    </section>
  );
};

export default About;
