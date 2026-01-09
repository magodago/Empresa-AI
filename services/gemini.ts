
import { GoogleGenAI } from "@google/genai";

// Always initialize the GoogleGenAI instance with the API key from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates an expert guion for presentation slides using the Gemini API.
 */
export async function getSlideInsight(slideTitle: string, slideContent: string) {
  try {
    // Using gemini-3-flash-preview for basic text generation tasks as per guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Actúa como un Consultor Senior de IA experto en PYMES y Comercios Locales. 
      Tu cliente es el dueño de un negocio local. Genera un guion de 2 frases breves.
      Diapositiva: ${slideTitle}
      Contenido: ${slideContent}`,
    });

    // Directly access the .text property from the response as per guidelines.
    return response.text || "Enfoque en beneficios inmediatos y ahorro de tiempo.";
  } catch (error) {
    console.error("Gemini Error:", error);
    // Graceful fallback content if the API request fails.
    return "Destaque cómo la IA no viene a sustituir el trato humano, sino a liberarle de las tareas pesadas para que pueda centrarse en sus clientes.";
  }
}
