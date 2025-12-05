import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl">
        PROJETOS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORAR AGORA
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="Leonardo Martins - UX Design Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WebHR</p>
                <p className="text-gray-500 text-[10px]">
                  Projetei um site com UI moderna compreendendo mais de 50 telas,
                  junto com a integração de um blog usando Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://hireside.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="Leonardo Martins - UX Design Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">HireSide</p>
                <p className="text-gray-500 text-[10px]">
                  Desenvolvi uma aplicação web em Next.js que permite aos usuários
                  se candidatar a vagas, criar postagens de emprego e gerenciar perfis
                  de suas empresas.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="Leonardo Martins - UX Design Project"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Verge Systems
                </p>
                <p className="text-gray-500 text-[10px]">
                  Desenvolvi o site da Verge Systems usando React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Leonardo Martins - UX Design Project"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Payoasis</p>
                <p className="text-gray-500 text-[10px]">
                  Projetei a UI moderna para um site bancário utilizando Gatsby.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
