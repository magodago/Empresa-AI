
import React from 'react';

// Icons used in the Slide component
export const Icons = {
  Brain: () => (
    <svg className="w-16 h-16 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44V7.5a2.5 2.5 0 0 1 4.5-1.5z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44V7.5a2.5 2.5 0 0 0-4.5-1.5z" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-20 h-20 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L12 9" />
      <path d="M12 15v5s1 .5 4 1c0-1.5-.5-3-.5-3L15 12" />
    </svg>
  )
};

// Graphics used for data visualization in the Slide component
export const Graphics = {
  LossChart: () => (
    <div className="w-full h-24 flex items-end justify-center gap-1">
      {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
        <div 
          key={i} 
          className="flex-1 bg-cyan-500/20 border-t border-cyan-500/40" 
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  ),
  CircularProgress: ({ value }: { value: string }) => (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-800" />
        <circle 
          cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" 
          strokeDasharray="251.2" 
          strokeDashoffset={251.2 - (251.2 * (parseInt(value) || 0)) / 100} 
          strokeLinecap="round"
          className="text-cyan-500" 
        />
      </svg>
      <span className="absolute text-xl font-black text-white italic">{value}%</span>
    </div>
  )
};

export const PERSONAL_INFO = {
  name: "DAVID ORTIZ",
  role: "Consultor de Automatización e IA para Negocios",
  whatsapp: "34658237988", 
  whatsappDisplay: "+34 658 23 79 88",
  linkedin: "linkedin.com/in/david-ortiz-serrano-376688ab"
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
    avatar: "https://i.pravatar.cc/150?u=women_1"
  },
  {
    name: "Carlos M.",
    business: "Clínica Dental DentalHealth",
    quote: "La automatización de citas por WhatsApp nos ha ahorrado 20 horas de administración a la semana. Mis recepcionistas ahora se centran en el paciente.",
    avatar: "https://i.pravatar.cc/150?u=men_1"
  },
  {
    name: "Lucía R.",
    business: "Boutique Moda Urbana",
    quote: "Increíble cómo la IA responde a las dudas sobre tallas y stock a las 3 de la mañana y cierra la venta sola.",
    avatar: "https://i.pravatar.cc/150?u=women_2"
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
