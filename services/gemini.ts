
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client correctly with named parameters and direct process.env.API_KEY usage.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Actúa como un Consultor Senior de IA experto en PYMES y Comercios Locales. 
      Tu cliente es el dueño de un negocio (comercio, tienda, pequeña empresa). 
      Genera un guion de 2-3 frases breves y directas para convencerle del valor de la IA.
      Enfócate en: Ahorro de tiempo real, aumento de ventas, facilidad de uso y cercanía.

      Diapositiva: ${slideTitle}
      Contenido: ${slideContent}
      
      Tono: Empático, profesional, práctico y motivador. Nada de jerga técnica compleja. Habla de beneficios inmediatos.`,
    });
    // Use .text property instead of .text() method.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Destaque cómo la IA no viene a sustituir el trato humano, sino a liberarle de las tareas pesadas para que pueda centrarse en sus clientes.";
  }
}
