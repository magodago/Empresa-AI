
import React from 'react';

export const PERSONAL_INFO = {
  name: "DAVID ORTIZ",
  role: "Consultor de Automatización e IA para Negocios",
  whatsapp: "34658237988", 
  whatsappDisplay: "+34 658 23 79 88",
  linkedin: "linkedin.com/in/david-ortiz-serrano-376688ab"
};

export const Icons = {
  Brain: () => (
    <svg className="w-16 h-16 md:w-24 md:h-24 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.23 3 3 0 1 0 5.996.125h.007" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.52 8.23 3 3 0 1 1-5.996.125h-.007" />
      <path d="M9 13a4.5 4.5 0 0 0 3 4" />
      <path d="M15 13a4.5 4.5 0 0 1-3 4" />
      <path d="M12 5v12" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-24 h-24 md:w-32 md:h-32 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2M15 7s-1 1-1 3.5 2 4.5 2 4.5c0 0-1 1-3.5 1S8 15 8 15M9 15c-2.5 0-3.5-1-3.5-1s-1 1-1 3.5c0 2.5 1 3.5 1 3.5s1-1 1-3.5M12 2s-4.5 10-10 10c0 0 4.5 10 10 10s10-4.5 10-10c0-0-10-10-10-10z" />
    </svg>
  )
};

export const Graphics = {
  LossChart: () => (
    <div className="w-full max-w-lg mx-auto h-32 md:h-48 bg-slate-900/20 rounded-3xl border border-slate-800 p-6 flex items-end justify-around gap-2">
      <div className="w-8 md:w-12 bg-red-500/10 h-1/4 rounded-t-lg border-t border-red-500/30"></div>
      <div className="w-8 md:w-12 bg-red-500/30 h-1/2 rounded-t-lg border-t border-red-500/50"></div>
      <div className="w-8 md:w-12 bg-red-500/50 h-3/4 rounded-t-lg border-t border-red-500/80"></div>
      <div className="w-8 md:w-12 bg-red-600 h-full rounded-t-lg shadow-[0_0_30px_rgba(239,68,68,0.3)]"></div>
    </div>
  ),
  CircularProgress: ({ value }: { value: string }) => (
    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - (parseInt(value) || 0) / 100)} className="text-cyan-500" strokeLinecap="round" />
      </svg>
      <span className="absolute text-lg md:text-xl font-black text-white italic">{value}%</span>
    </div>
  )
};

export const SERVICES = [
  {
    id: "whatsapp",
    title: "Ventas por WhatsApp 24/7",
    desc: "Su catálogo cobra vida. La IA responde dudas, recomienda productos y cierra ventas de forma autónoma mientras usted duerme.",
    icon: "💬"
  },
  {
    id: "voice",
    title: "Recepción por Voz Humana",
    desc: "Un asistente que atiende llamadas telefónicas reales. Reserva mesas, da citas y atiende pedidos sin que suene a robot.",
    icon: "🎙️"
  },
  {
    id: "booking",
    title: "Agendamiento Inteligente",
    desc: "Gestión total de citas para peluquerías, clínicas o restaurantes. Sincronizado con su calendario en tiempo real.",
    icon: "📅"
  },
  {
    id: "admin",
    title: "Oficina en Piloto Automático",
    desc: "Procesamiento de facturas, albaranes y pedidos a proveedores. La IA hace el trabajo administrativo por usted.",
    icon: "⚙️"
  }
];

export const TESTIMONIALS = [
  {
    name: "Elena G.",
    business: "Restaurante El Olivo",
    quote: "Antes perdíamos 10 reservas al día por no poder atender el teléfono en hora punta. Ahora la IA gestiona todo y el restaurante está siempre lleno.",
    avatar: "https://i.pravatar.cc/150?u=woman_47" 
  },
  {
    name: "Carlos M.",
    business: "Clínica Dental DentalHealth",
    quote: "La automatización de citas por WhatsApp nos ha ahorrado 20 horas de administración a la semana. Mis recepcionistas ahora se centran en el paciente.",
    avatar: "https://i.pravatar.cc/150?u=man_12"
  },
  {
    name: "Lucía R.",
    business: "Boutique Moda Urbana",
    quote: "Increíble cómo la IA responde a las dudas sobre tallas y stock a las 3 de la mañana y cierra la venta sola.",
    avatar: "https://i.pravatar.cc/150?u=woman_45"
  }
];

export const FAQS = [
  {
    q: "¿Es muy caro implementar esto?",
    a: "Al contrario. El coste es menor que el de un empleado a media jornada y el retorno de inversión es casi inmediato al no perder más ventas."
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Cero. Yo me encargo de toda la configuración. Usted solo recibe los pedidos o las citas directamente en su móvil."
  },
  {
    q: "¿La IA suena como un robot?",
    a: "No. Utilizamos tecnología de última generación con voces y respuestas humanas que empatizan con el cliente."
  },
  {
    q: "¿Sirve para cualquier negocio?",
    a: "Si atiende clientes por teléfono, WhatsApp o necesita gestionar una agenda, la respuesta es sí."
  }
];
