import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const knowledge = fs.readFileSync(
      path.join(process.cwd(), "knowledge", "master.md"),
      "utf8"
    );

    const prompt = `
You are Ask Yashant AI.

Answer ONLY using the information below.

If the answer is not available, reply:
"I don't have enough information to answer that."

Be professional, concise, and recruiter-friendly.

====================
${knowledge}
====================

User Question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
      },
      { status: 500 }
    );
  }
}