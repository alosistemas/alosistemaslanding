import { motion } from "framer-motion";
import erpIcon from "./assets/Odoo_vs_SAP.png";
import devIcon from "./assets/devicon.png";
import hackingIcon from "./assets/network.png";

const ServiceCard = ({ icon, title, description, features }) => (
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
    className="flex flex-col p-10 md:p-16 bg-[#f5f5f5] rounded-[24px] items-center gap-[22px] justify-between h-full w-full xl:w-[588px] md:h-[588px] 2xl:w-1/2"
  >
    <img
      src={icon}
      alt=""
      className="w-[100px] h-[100px]"
    />
    <div className="w-full flex flex-col items-start gap-4">
      <h3 className="font-medium text-[25px] leading-[30px] tracking-[-0.5px] text-[#000]">
        {title}
      </h3>
      <p className="font-normal leading-[21.6px] text-[18px] tracking-[-0.18px] text-black/50">
        {description}
      </p>
      <ul className="list-disc pl-5 text-[16px] text-black/70">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href="#contact" className="mt-4 text-base leading-[21.6px] tracking-[-0.48px] be-vietnam-pro-medium text-[#854dff] border border-[#854dff] bg-transparent rounded-lg px-[18px] py-2.5 md:flex items-center justify-center min-w-max">
        Solicitar información
      </a>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: erpIcon,
      title: "Implementación ERP",
      description: "Optimice sus procesos empresariales con soluciones ERP adaptadas a su negocio.",
      features: [
        "Implementación de Odoo y SAP",
        "Personalización según necesidades específicas",
        "Integración con sistemas existentes",
        "Soporte técnico y capacitación"
      ]
    },
    {
      icon: devIcon,
      title: "Desarrollo de Software a Medida",
      description: "Creamos soluciones tecnológicas personalizadas para impulsar su negocio.",
      features: [
        "Aplicaciones web con Node.js, PHP, React y Java",
        "Desarrollo ágil y metodologías modernas",
        "Integración de APIs y microservicios",
        "Soluciones escalables y mantenibles"
      ]
    },
    {
      icon: hackingIcon,
      title: "Hacking Ético y Ciberseguridad",
      description: "Proteja su infraestructura digital con nuestros servicios de seguridad avanzados.",
      features: [
        "Pruebas de penetración",
        "Análisis de vulnerabilidades",
        "Auditorías de seguridad",
        "Capacitación en ciberseguridad"
      ]
    }
  ];

  return (
    <section id="services" className="flex flex-col items-center w-full pt-[120px] md:pt-[160px] pb-[190px] md:pb-[150px] px-[24px] md:px-[32px] xl:px-[152px] gap-[80px] relative">
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
            Nuestros Servicios
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
          Soluciones tecnológicas para su negocio
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
          Ofrecemos servicios de ERP, desarrollo de software y ciberseguridad para impulsar y proteger su empresa.
        </motion.p>
      </div>

      <div className="flex-col flex w-full pb-2">
        <div className="flex flex-col xl:flex-row gap-[40px] items-center w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
