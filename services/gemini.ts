
import { GoogleGenAI } from "@google/genai";

// Función ultra-segura para detectar la API Key sin romper la ejecución del navegador
const getApiKey = () => {
  try {
    // Comprobamos si process y process.env existen de forma segura
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Silencioso
  }
  return "";
};

const apiKey = getApiKey();
// Solo inicializamos si tenemos la clave, si no, la app seguirá funcionando con textos estáticos
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  if (!ai) {
    return "Estrategia ganadora: La automatización permite que su negocio escale sin límites operativos.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un consultor experto en IA. Resume en 2 frases el valor de este apartado para un negocio local: ${slideTitle}. Contenido: ${slideContent}`,
    });
    return response.text;
  } catch (error) {
    console.error("Error en Gemini:", error);
    return "La tecnología es el puente hacia una mayor libertad y rentabilidad en su día a día.";
  }
}
