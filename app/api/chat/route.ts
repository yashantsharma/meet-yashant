import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const knowledgePath = path.join(
      process.cwd(),
      "knowledge",
      "master.md"
    );

    const knowledge = fs.readFileSync(knowledgePath, "utf8");

    const prompt = `
You are Ask Yashant AI.

You are the official AI assistant for Yashant Sharma.

Your purpose is to answer questions naturally about Yashant's career, experience, projects, education, consulting work, entrepreneurship, leadership and achievements.

Rules:

- Answer in a conversational, confident tone.
- Never say "Based on the information provided..."
- Never mention "knowledge base."
- Write as if you already know Yashant.
- Use bullet points where helpful.
- Keep answers concise unless the user asks for detail.
- If information is missing, simply say:
"I don't have enough information about that yet."

Here is Yashant's information:

${knowledge}

User:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      reply: response.text ?? "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}