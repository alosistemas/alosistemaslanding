import { motion } from "framer-motion";
import gps from "./assets/GPS1.webp";
import moto from "./assets/motoscramber.jpg";
import dev from "./assets/devicon.png";
import consulting from "./assets/presenting.png";
import recupero from "./assets/recuperocarro.webp";

import fingerprintTwo from "./assets/fingerprint-two.svg";

const Product = () => {
  return (
    <section
      id="product"
      className="flex flex-col items-center w-full pt-[120px] md:pt-[160px] pb-[190px] md:pb-[150px] px-[24px] md:px-[32px] xl:px-[152px] gap-[80px] relative"
    >
      <div className="w-full flex flex-col items-center gap-[15px] md:w-[850px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex items-center py-2 px-3 bg-[#bdff1c] rounded-[11px]"
        >
          <h4 className="ibm-plex-mono-semibold uppercase text-black text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
            Destacado
          </h4>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="w-full sm:w-[669px] poppins-medium text-[40px] leading-[44px] tracking-[-2px] md:text-[56px] md:leading-[61.6px] md:tracking-[-2.4px] text-center text-[#0f1728] md:w-full"
        >
         Servicio de monitoreo vehicular SMART
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="font-normal mt-[9px] text-[18px] leading-[24.3px] text-center tracking-[-0.54px] md:text-[20px] md:leadng-[27px] md:tracking-[-0.6px] text-[#475466] md:w-[765px]"
        >
       Controla tú vehículo desde el Smartphone o localización Web.
        </motion.p>
      </div>

      <div className="flex-col flex w-full pb-2">
        <div className="flex flex-col xl:flex-row gap-[40px] items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0,
              },
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            className="flex flex-col p-10 md:p -16  bg-[#f5f5f5] rounded-[24px] items-center gap-[40px] justify-between h-full w-full xl:w-[588px] xl:h-[588px] 2xl:w-1/2"
          >
            <a href="https://mpago.la/1WWBeWg"><img src={gps} alt="" className="sm:min-w-[543px] ml-[9px] mt-[18px]" />
            </a>
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000]">
                Invierte desde S/250 por 3 meses
              </h3>
              <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
              Equipo GPS de última generación.
              Cobertura a nivel nacional.
              Historial de rutas y visualización en Google Maps.
        
        
              </p>
     <a href="https://mpago.la/1WWBeWg" className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-2.5 md:flex items-center justify-center min-w-max">Adquiéralo aquí</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0.1,
              },
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            className="flex flex-col p-10 md:px -16 bg-[#f5f5f5] rounded-[24px] items-center gap-[22px] justify-between h-full w-full xl:w-[588px] md:h-[588px] 2xl:w-1/2"
          >
            <img
              src={moto}
              alt=""
              className="sm:min-w-[100px] ml-[29px] mt-[10px]"
            />
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000]">
               Maneja seguro por S/350 por 6 meses
              </h3>
              <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
              Controla tú vehículo desde el Smartphone, localización Web y servicio de recuperación en caso de robo.
             Homologado con MTC, SUTRAN y OSINERGMIN.
             Compatible con compañias de seguro.
              </p>
              <a href="https://mpago.la/1Z5jsBa" className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-2.5 md:flex items-center justify-center min-w-max">Adquiéralo aquí</a>
            </div>
          </motion.div>
      
      
        </div>

        <div className="mt-10 md:mt-[60px] flex flex-col xl:flex-row gap-10 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex flex-col p-[32px]  bg-[#bdff1c] rounded-[24px] items-start gap-[40px] justify-end overflow-hidden relative w-full h-[450px] md:min-w-[421px]"
          >

<a href="https://mpago.la/1Jmenr3" className="text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-2.5 md:flex items-center justify-center min-w-max">Adquiéralo aquí</a>
            <img
              src={recupero}
              alt=""
              className="w-[347px] sm:w-[473px] absolute top-[40px] sm:top-[21px] left-8 sm:left-0 right-0 mx-auto md:w-[347px] md:top-[60px]"
            />
            <div className="w-full flex flex-col items-start gap-3">
              <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000] poppins-medium">
            Un año protegido por S/490
              </h3>
              <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50 xl:w-[315px]">
             Adicionalmente servicio de apagado remoto para tu vehículo y gestión para recuperación.
              </p>
            
            </div>
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 1,
                delay: 0.3,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex w-full flex-col sm:flex-row gap-10"
          >
          

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                  mass: 1,
                  delay: 0.4,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col md:gap-0 rounded-l-[24px] items-start gap-[40px] justify-between w-full h-[450px] md:w-1/2 xl:w-[357px]"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pt-[60px] gap-10 md:px-[4px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
        >
         Otros servicios
        </motion.h2>

        <div className="w-full flex flex-col md:flex-col gap-5 items-center">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 xl:max-w-min">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={dev} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                Desarollo de Software
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center md:text-left">
                Diseño y desarrollo de soluciones a medida para optimizar tus procesos empresariales.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.3,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={consulting} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                Consultaria de proyectos TI
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center md:text-left">
                Asesoría experta para planificar, gestionar y ejecutar proyectos tecnológicos de manera eficiente.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 140,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src={fingerprintTwo} alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                 Ciberseguridad
                </h3>
                <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center md:text-left">
                Protección avanzada para mantener seguros tus datos y sistemas contra ciberamenazas.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:flex flex-col md:flex-row gap-6 md:gap-10 hidden xl:max-w-min">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
            
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.3,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
            
            </motion.div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Product;
