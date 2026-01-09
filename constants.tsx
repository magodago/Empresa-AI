
import React from 'react';

export const PERSONAL_INFO = {
  name: "DAVID ORTIZ",
  role: "Consultor de Automatización e IA para Negocios",
  whatsapp: "34658237988", 
  whatsappDisplay: "+34 658 23 79 88",
  linkedin: "linkedin.com/in/david-ortiz-serrano-376688ab"
};

// Icons components exported for use in Slide.tsx
export const Icons = {
  Brain: () => (
    <svg className="w-24 h-24 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.23 3 3 0 1 0 5.996.125h.007" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.52 8.23 3 3 0 1 1-5.996.125h-.007" />
      <path d="M9 13a4.5 4.5 0 0 0 3 4" />
      <path d="M15 13a4.5 4.5 0 0 1-3 4" />
      <path d="M12 5v12" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-24 h-24 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2" />
      <path d="M15 7s-1 1-1 3.5 2 4.5 2 4.5c0 0-1 1-3.5 1S8 15 8 15" />
      <path d="M9 15c-2.5 0-3.5-1-3.5-1s-1 1-1 3.5c0 2.5 1 3.5 1 3.5s1-1 1-3.5" />
      <path d="M12 2s-4.5 10-10 10c0 0 4.5 10 10 10s10-4.5 10-10c0-0-10-10-10-10z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
};

// Graphics components exported for use in Slide.tsx
export const Graphics = {
  LossChart: () => (
    <div className="w-full h-32 bg-slate-900/50 rounded-xl border border-slate-800 flex items-end p-4 gap-2">
      <div className="flex-1 bg-red-500/20 h-[80%] rounded-t-lg"></div>
      <div className="flex-1 bg-red-500/40 h-[60%] rounded-t-lg"></div>
      <div className="flex-1 bg-red-500/60 h-[40%] rounded-t-lg"></div>
      <div className="flex-1 bg-red-500/80 h-[20%] rounded-t-lg"></div>
    </div>
  ),
  CircularProgress: ({ value }: { value: string }) => (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle className="text-slate-800 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
        <circle 
          className="text-cyan-500 stroke-current" 
          strokeWidth="8" 
          strokeLinecap="round" 
          fill="transparent" 
          r="40" 
          cx="50" 
          cy="50" 
          style={{ 
            strokeDasharray: '251.2', 
            strokeDashoffset: 251.2 - (251.2 * (parseInt(value) || 0)) / 100 
          }} 
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl italic">{value}%</div>
    </div>
  )
};

export const SERVICES = [
  {
    id: "whatsapp",
    title: "Vendedor por WhatsApp 24/7",
    desc: "Su catálogo cobra vida. La IA responde dudas, recomienda productos y cierra ventas de forma autónoma.",
    icon: "💬"
  },
  {
    id: "voice",
    title: "IA de Voz: Recepción Humana",
    desc: "Un asistente que atiende llamadas telefónicas reales. Reserva mesas, da citas y atiende pedidos por teléfono sin esperas.",
    icon: "🎙️"
  },
  {
    id: "booking",
    title: "Agendamiento Inteligente",
    desc: "Gestión total de citas para peluquerías, clínicas o restaurantes. Sincronizado con su Google Calendar en tiempo real.",
    icon: "📅"
  },
  {
    id: "admin",
    title: "Oficina en Piloto Automático",
    desc: "Procesamiento de facturas, albaranes y pedidos a proveedores. La IA hace el trabajo administrativo por usted.",
    icon: "⚙️"
  }
];

export const VALUE_PROPS = [
  {
    title: "Mucho menos de lo que imagina",
    desc: "Por una fracción del coste de un empleado a media jornada, usted tiene un sistema que trabaja las 24 horas, los 365 días del año.",
    highlight: "Inversión mínima, impacto máximo"
  },
  {
    title: "Se paga solo desde el día 1",
    desc: "No es un gasto, es una inversión que libera su tiempo para que usted se centre en lo que de verdad da dinero: atender a sus clientes.",
    highlight: "Rentabilidad inmediata"
  }
];

export const USE_CASES = [
  {
    category: "Restaurantes y Bares",
    items: ["Reserva de mesas por voz (IA telefónica)", "Toma de pedidos para llevar por WhatsApp", "Gestión de reseñas y carta digital"]
  },
  {
    category: "Estética, Salud y Servicios",
    items: ["Agendamiento de citas 24/7 sin errores", "Recordatorios de cita automáticos (evita bajas)", "Resolución de dudas sobre servicios"]
  },
  {
    category: "Tiendas y Comercios",
    items: ["Consulta de stock inmediata", "Venta guiada por chat", "Gestión de facturación y proveedores"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Elena G.",
    business: "Restaurante El Olivo",
    quote: "Antes perdíamos 10 reservas al día por no poder atender el teléfono en hora punta. Ahora la IA gestiona todo y el restaurante está siempre lleno.",
    avatar: "https://i.pravatar.cc/150?u=woman_9" 
  },
  {
    name: "Carlos M.",
    business: "Clínica Dental DentalHealth",
    quote: "La automatización de citas por WhatsApp nos ha ahorrado 20 horas de administración a la semana. Mis recepcionistas ahora se centran en el paciente.",
    avatar: "https://i.pravatar.cc/150?u=man_2"
  },
  {
    name: "Lucía R.",
    business: "Boutique Moda Urbana",
    quote: "Increíble cómo la IA responde a las dudas sobre tallas y stock a las 3 de la mañana y cierra la venta sola.",
    avatar: "https://i.pravatar.cc/150?u=woman_3"
  }
];

export const FAQS = [
  {
    q: "¿Es muy caro implementar esto?",
    a: "Al contrario. Mis sistemas están diseñados para negocios locales. El coste es menor que el de una campaña de publicidad básica y el retorno es mucho más rápido."
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Cero. Yo me encargo de toda la configuración. Usted solo recibe las citas o los pedidos directamente en su móvil o sistema actual."
  },
  {
    q: "¿La IA suena como un robot?",
    a: "No. Utilizamos tecnología de última generación con voces y respuestas humanas que empatizan con el cliente y entienden el contexto perfectamente."
  },
  {
    q: "¿Voy a tener que despedir a alguien?",
    a: "Para nada. La IA está para ayudar a su equipo, quitándoles el trabajo repetitivo y estresante para que ellos puedan dar un mejor servicio al cliente real."
  }
];
