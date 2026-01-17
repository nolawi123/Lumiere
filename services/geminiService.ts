import { GoogleGenAI } from "@google/genai";
import { ROOMS } from "./mockData";

// Initialize Gemini
// Note: In a real production app, this call would likely happen via a proxy backend 
// to keep the key secure, but for this demo, we assume the environment variable is present.
const apiKey = process.env.API_KEY || 'mock_key_for_demo'; 
const ai = new GoogleGenAI({ apiKey });

export const generateConciergeResponse = async (userMessage: string): Promise<string> => {
  try {
    const roomContext = ROOMS.map(r => `${r.name} ($${r.pricePerNight}/night): ${r.description}`).join('\n');
    
    const systemPrompt = `
      You are Lumière, the AI Concierge for Lumière Sanctuary, a hyper-luxury hotel. 
      Your tone is elegant, polite, sophisticated, and helpful. You are brief but warm.
      
      Here is our current room inventory:
      ${roomContext}
      
      Answer the guest's question based on this data. If they ask to book, guide them to the booking page.
      Do not invent rooms not on the list.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: systemPrompt + "\n\nGuest: " + userMessage }] }
      ]
    });

    return response.text || "I apologize, I am momentarily distracted. How may I assist you otherwise?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback if API fails or key is missing
    return "I am currently experiencing a high volume of requests. Please visit our Rooms page to view our exquisite offerings.";
  }
};