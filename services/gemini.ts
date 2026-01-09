
import { GoogleGenAI } from "@google/genai";

// Inicialización segura: si process no existe (navegador puro), usamos un string vacío para evitar errores de referencia
const getSafeApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch {
    return "";
  }
};

const ai = new GoogleGenAI({ apiKey: getSafeApiKey() });

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  const key = getSafeApiKey();
  if (!key) {
    return "Nota: Configura la API Key para obtener consejos estratégicos en tiempo real para esta diapositiva.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un consultor de estrategia IA. Resume en una frase el valor clave de esta diapositiva para un cliente: ${slideTitle}. Contenido: ${slideContent}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Optimiza tu negocio hoy mismo con soluciones de automatización a medida.";
  }
}
