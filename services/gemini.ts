
import { GoogleGenAI } from "@google/genai";

// Always use the specified initialization format with process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSlideInsight(slideTitle: string, slideContent: string) {
  try {
    // Using gemini-3-flash-preview as the default model for text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un consultor experto en IA. Resume en 2 frases el valor de este apartado: ${slideTitle}. Contenido: ${slideContent}`,
    });
    // Access the .text property directly instead of calling a method
    return response.text;
  } catch (error) {
    console.error("Error en Gemini:", error);
    return "La IA permite escalar su negocio sin aumentar los costes operativos.";
  }
}
