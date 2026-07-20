"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWindow({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "Hi! I'm Ask Yashant AI.\n\nI can answer questions about Yashant's consulting experience, leadership, entrepreneurship, projects, education and resume.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (!open) return null;

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong while generating the response.",
        },
      ]);
    }

    setLoading(false);
  }

  const quickQuestions = [
    "Tell me about PwC",
    "Summarize Yashant's resume",
    "Why should I hire Yashant?",
    "Tell me about Farm to Folks",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 h-[700px] w-[430px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl flex flex-col">

      {/* Header */}

      <div className="border-b bg-white px-6 py-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold">
              Ask Yashant
            </h2>

            <p className="text-sm text-gray-500">
              AI Career Assistant
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            ✕
          </button>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-gray-50 p-5 space-y-5">

        {messages.length === 1 && (

          <div className="space-y-3">

            {quickQuestions.map((q) => (

              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="block w-full rounded-xl border bg-white p-3 text-left transition hover:border-blue-500 hover:bg-blue-50"
              >
                {q}
              </button>

            ))}

            <a
              href="/Yashant_Sharma_Resume.pdf"
              download
              className="block w-full rounded-xl bg-blue-600 p-3 text-center font-medium text-white hover:bg-blue-700"
            >
              Download Resume
            </a>

          </div>

        )}

        {messages.map((message, index) => (

          <div
            key={index}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-7 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-800"
              }`}
            >
              {message.text}
            </div>

          </div>

        ))}

        {loading && (

          <div className="flex justify-start">

            <div className="rounded-2xl border bg-white px-4 py-3 text-gray-500">
              Thinking...
            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      {/* Input */}

      <div className="border-t bg-white p-4">

        <div className="flex gap-2">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input);
              }
            }}
            placeholder="Ask anything..."
            className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            onClick={() => sendMessage(input)}
            className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}