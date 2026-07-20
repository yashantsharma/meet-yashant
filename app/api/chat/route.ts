import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const knowledgePath = path.join(process.cwd(), "knowledge", "master.md");
    const knowledge = fs.readFileSync(knowledgePath, "utf8");

    const prompt = `
You are Yashant Sharma's AI assistant.

Answer ONLY using the information below.

If the answer is not present, say:
"I don't have enough information to answer that."

====================
${knowledge}
====================

User Question:
${message}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { reply: "Something went wrong." },
      { status: 500 }
    );
  }
}
