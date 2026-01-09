
import { GoogleGenAI } from "@google/genai";

// Inicialización segura: si process.env.API_KEY falla, usamos un string vacío y manejamos el error luego
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  // Si no hay API KEY, devolvemos un mensaje predefinido para no romper la UI
  if (!process.env.API_KEY) {
    return "Optimización Estratégica: La IA permite automatizar el 80% de las consultas repetitivas de sus clientes.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un consultor experto en IA. Resume en 1 frase potente el valor de este apartado: ${slideTitle}. Contenido: ${slideContent}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Escale su negocio hoy mismo con soluciones de automatización inteligente.";
  }
}
