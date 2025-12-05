"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <section id="home" className="flex flex-row items-center justify-center px-20 z-[20] min-h-screen pb-20 mt-10">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="Leonardo Martins"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Leonardo Martins!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            Desenvolvedor Fullstack Sênior &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Especialista em IA
            </span>
          </p>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Engenheiro de Software com mais de 6 anos de experiência desenvolvendo plataformas escaláveis, sistemas sob demanda, 
          integrações com IA, soluções de alta performance e automações. Especializado em aumentar o faturamento e produtividade do seu negócio.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:contact@example.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
