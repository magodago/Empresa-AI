
import { GoogleGenAI } from "@google/genai";

// Función para obtener la clave de forma segura sin romper el hilo principal del navegador
const getSafeKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env?.API_KEY) ? process.env.API_KEY : "";
  } catch {
    return "";
  }
};

const apiKey = getSafeKey();
// Inicializamos la IA. Si no hay clave, las funciones devolverán un texto por defecto en lugar de fallar.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  if (!ai) {
    return "Optimización estratégica: La IA permite automatizar procesos críticos y mejorar la rentabilidad inmediata.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un consultor experto en IA. Resume en 2 frases el valor de este apartado para un negocio local: ${slideTitle}. Contenido: ${slideContent}`,
    });
    return response.text;
  } catch (error) {
    console.error("Error en Gemini:", error);
    return "La tecnología de automatización es la clave para escalar su negocio en el mercado actual.";
  }
}
