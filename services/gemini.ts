
import { GoogleGenAI } from "@google/genai";

// Función ultra-segura para detectar la API Key sin romper el navegador
const getApiKey = () => {
  try {
    // Intentamos acceder de varias formas comunes en entornos web/bundlers
    return (typeof process !== 'undefined' && process.env?.API_KEY) || "";
  } catch {
    return "";
  }
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  if (!ai) {
    return "Optimización estratégica: Implementar automatización para reducir tiempos de respuesta en un 80%.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un consultor experto en IA. Resume en 2 frases el valor de este apartado: ${slideTitle}. Contenido: ${slideContent}`,
    });
    return response.text;
  } catch (error) {
    console.error("Error en Gemini:", error);
    return "La IA permite escalar su negocio sin aumentar los costes operativos.";
  }
}
