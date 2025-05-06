import React, { useState } from "react";
import plus from "./assets/plus.png";

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const faqItems = [
    {
      question: "¿Qué ventajas ofrece la implementación de un sistema ERP?",
      answer: "La implementación de un sistema ERP optimiza los procesos empresariales, mejora la eficiencia operativa, proporciona una visión integral de la empresa, facilita la toma de decisiones y aumenta la productividad. Nuestras soluciones ERP, como Odoo y SAP, se adaptan a las necesidades específicas de su negocio."
    },
    {
      question: "¿Cómo se desarrolla un proyecto de software a medida?",
      answer: "Nuestro proceso de desarrollo de software a medida incluye las siguientes fases: análisis de requisitos, diseño, desarrollo, pruebas y despliegue. Utilizamos metodologías ágiles para garantizar la flexibilidad y la entrega continua de valor. Trabajamos con tecnologías como Node.js, PHP, React y Vue para crear soluciones robustas y escalables."
    },
    {
      question: "¿Qué incluye un servicio de hacking ético?",
      answer: "Nuestro servicio de hacking ético comprende pruebas de penetración, análisis de vulnerabilidades, auditorías de seguridad y evaluación de riesgos. Simulamos ataques reales para identificar debilidades en su infraestructura digital y proporcionamos recomendaciones detalladas para mejorar la seguridad de su empresa."
    },
    {
      question: "¿Ofrecen soporte técnico después de la implementación de sus servicios?",
      answer: "Sí, ofrecemos soporte técnico continuo después de la implementación de nuestros servicios. Esto incluye mantenimiento, actualizaciones, resolución de problemas y capacitación adicional según sea necesario. Nuestro objetivo es asegurar el éxito a largo plazo de nuestros clientes con nuestras soluciones tecnológicas."
    }
  ];

  return (
    <div
      id="accordion-flush"
      className="w-full sm:w-[658px] md:w-[756px] !transition-all flex flex-col"
    >
      {faqItems.map((item, index) => (
        <React.Fragment key={index}>
          <button
            type="button"
            className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] gap-3 z-40 ${
              index !== 0 ? "border-t-2 border-gray-200" : ""
            }`}
            onClick={() => toggleAccordion(`accordion-flush-body-${index + 1}`)}
          >
            <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
              {item.question}
            </span>
            <img
              src={plus}
              className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
                isOpen[`accordion-flush-body-${index + 1}`] ? "rotate-[45deg]" : "rotate-0"
              } shrink-0`}
              alt=""
            />
          </button>
          <div
            id={`accordion-flush-body-${index + 1}`}
            className={`transition-all duration-500 ${
              isOpen[`accordion-flush-body-${index + 1}`]
                ? "h-auto"
                : "h-0"
            }`}
          >
            <div className="pb-5">
              <p
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
                  isOpen[`accordion-flush-body-${index + 1}`] ? "opacity-100 delay-150" : ""
                } transition-all duration-300 opacity-0`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;