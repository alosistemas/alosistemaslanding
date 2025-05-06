import { Link } from "react-router-dom";
import logo from "./assets/alosistemaslogo.png";

const Footer = () => {
  return (
    <footer className="px-[24px] lg:px-[80px] z-40 py-[32px] flex flex-col lg:flex-row gap-[42px] items-center justify-between w-full bg-white">
      <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
        <img src={logo} alt="Propellent Logo" className="w-1[50px] h-[50px]" />

       
      </Link>

      <div className="w-full text-center sm:flex items-center justify-center gap-[5px] be-vietnam-pro-regular md:text-[14px] md:leading-[18.9px] md:tracking-[-0.28px] text-[16px] leading-[23.2px] tracking-[-0.32px]">
      
        <p>
           Desarrollado por ALO SISTEMAS
          
         
          - Copyright 2025
        </p>
      </div>

   
    </footer>
  );
};

export default Footer;
