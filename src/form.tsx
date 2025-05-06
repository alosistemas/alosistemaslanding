import React from "react";

import { motion } from "framer-motion";

const Form = () => {
  const [result, setResult] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");



 

  async function onSubmit(event) {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("name",name);
    formData.append("email",email);
    formData.append("access_key", "95d90333-27c0-4434-b8c2-85620b54782b");
    console.log(formData.getAll)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }



  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.3,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="bg-[#fdffff] w-full px-[32px] py-[40px] flex flex-col gap-6 shadow-[5px_25px_25px_0px_rgba(0,0,0,0.1)] rounded-[24px] items-center xl:max-w-min z-10"
    >
    
   
    <h1>Escríbenos</h1>
     
        <><form
            onSubmit={onSubmit}
            className="mx-auto w-full flex flex-col gap-[15px] xl:w-[392px]"
          >
            <input
              type="text"
               value={name}
              className="bg-[#ebebeb] text-[#757575] leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]"
               onChange={(e) => setName(e.target.value)}
              required
             placeholder="Nombre y Apellidos" />
            <input
              type="text"
               value={email}
              className="bg-[#ebebeb] text-[#757575] leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]"
              required
                 onChange={(e) => setEmail(e.target.value)}
             placeholder="correo electrónico" />

      < textarea name="message" placeholder="¿Qué pregunta o consulta nos deseas hacer?"  className="bg-[#ebebeb] text-[#757575] leading-[22.4px] text-[16px] block w-full p-[15px] rounded-lg focus:outline-none placeholder:text-[#757575]" required>
      </textarea>
            <button
              type="submit"
              // disabled={isButtonDisabled}
              className="text-base leading-[22.4px] text-center  font-medium text-white bg-[#854dfc] rounded-lg p-[15px] hover:bg-[#9D71FD] w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
            >
              Enviar
            </button>
          </form><div>
              <span>{result}</span>

            </div></>
      

    </motion.div>
  );
};

export default Form;
