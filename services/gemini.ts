
import { GoogleGenAI } from "@google/genai";

// Función para obtener la API Key de forma segura sin causar errores de referencia
const getSafeApiKey = () => {
  try {
    // Intentamos acceder a la variable de entorno solo si existe el objeto global 'process'
    // Esto evita que la aplicación se rompa en navegadores estándar
    if (typeof window !== 'undefined' && (window as any).process?.env?.API_KEY) {
      return (window as any).process.env.API_KEY;
    }
    // Si estamos en un entorno donde process está definido pero no es global
    if (typeof process !== 'undefined' && process.env?.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("API_KEY no detectada, operando en modo estático.");
  }
  return "";
};

const apiKey = getSafeApiKey();
// Solo inicializamos si la clave es válida. 
// Si no hay clave, la web cargará perfectamente pero usará los textos de respaldo (fallback).
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
    return response.text || "La tecnología es el puente hacia una mayor libertad y rentabilidad.";
  } catch (error) {
    return "La tecnología es el puente hacia una mayor libertad y rentabilidad en su día a día.";
  }
}
