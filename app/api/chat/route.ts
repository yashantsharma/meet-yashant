import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const knowledgePath = path.join(
      process.cwd(),
      "knowledge",
      "master.md"
    );

    const knowledge = fs.readFileSync(knowledgePath, "utf8");

    const conversation = messages
      .map(
        (m: { role: string; text: string }) =>
          `${m.role.toUpperCase()}: ${m.text}`
      )
      .join("\n\n");

    const systemPrompt = `
You are Ask Yashant AI.

You are the official AI assistant for Yashant Sharma.

Your purpose is to answer questions naturally about Yashant's career, consulting experience, entrepreneurship, leadership, education, projects and achievements.

Rules:
- Speak naturally and confidently.
- Never say "Based on the information provided."
- Never mention a knowledge base.
- Write as if you already know Yashant.
- Use markdown formatting where useful.
- Use bullet points when appropriate.
- Keep answers concise unless asked for detail.
- If the answer is not available, say:
"I don't have enough information about that yet."

Here is Yashant's complete profile:

${knowledge}
`;

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      input: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: conversation,
        },
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
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