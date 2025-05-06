import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl z-50 overflow-hidden shadow-2xl"
          >
            {/* Cabecera con imagen de fondo */}
            <div className="relative h-64">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  backgroundColor: '#001F3F',
                  backgroundBlendMode: 'overlay'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
              
              {/* Botón de cerrar */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Título sobre la imagen */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Ponencia: "Defendiendo tu Información en la Era Digital"
                </h3>
                <p className="text-white/90 text-lg">
                  ¿Estás realmente preparado para proteger tus datos en un mundo cada vez más digital?
                </p>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-8 bg-white">
              <div className="space-y-6">
                {/* Descripción */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  Únete al Ing. Alonso Arana, profesor en Cibertec y experto en ciberseguridad 
                  con más de 5 años de experiencia, en una ponencia diseñada para ayudarte a 
                  comprender y enfrentar los riesgos de seguridad en línea. En esta sesión, 
                  exploraremos el caso Interbank y aprenderás a defenderte desde tu celular o laptop.
                </p>
                
                {/* Detalles del evento */}
                <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <h4 className="font-semibold">Fecha y Hora</h4>
                      <p>Martes 12 de noviembre 8 PM - Virtual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <h4 className="font-semibold">Objetivo</h4>
                      <p>Protege tus datos y aprende estrategias clave en ciberseguridad</p>
                    </div>
                  </div>
                </div>
                
                {/* Botón de registro */}
                <a 
                  href="https://0dxq4ubsep3.typeform.com/to/QWOjiuz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#bdff1c] text-black font-semibold py-4 px-6 rounded-lg text-center text-lg hover:bg-[#a8e619] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                >
                  Reserva tu lugar ahora
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;