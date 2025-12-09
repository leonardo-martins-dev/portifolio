"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC<{}> = () => {
  const pathname = usePathname();
  
  const getWhatsAppMessage = () => {
    return pathname === "/curriculo" 
      ? "Olá%20Leonardo,%20gostei%20do%20seu%20perfil,%20está%20livre%20para%20uma%20conversa?"
      : "Olá%20Leonardo,%20tenho%20intesse%20em%20um%20projeto!";
  };

  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-end m-auto px-2 sm:px-[10px]">
        <div className="flex flex-row gap-3 sm:gap-5">
          <div
            onClick={() => window.open(`https://wa.me/5519982893861?text=${getWhatsAppMessage()}`)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-3 sm:px-5 text-sm sm:text-base transition-colors duration-200"
          >
            Contato
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
