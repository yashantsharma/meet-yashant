"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWindow({ open, onClose }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "👋 Hi! I'm Ask Yashant AI. Ask me anything about Yashant's experience, leadership, projects, education, or consulting career.",
    },
  ]);

  if (!open) return null;

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
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
          text: "Sorry, something went wrong.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="fixed bottom-24 right-6 w-[420px] h-[650px] bg-white rounded-3xl shadow-2xl border flex flex-col z-50">

      <div className="flex justify-between items-center p-5 border-b">

        <div>
          <h2 className="font-bold text-xl text-gray-900">
            Ask Yashant
          </h2>

          <p className="text-sm text-gray-500">
            AI Career Assistant
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-xl"
        >
          ✕
        </button>

      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "bg-blue-600 text-white rounded-2xl p-3 ml-10"
                : "bg-gray-100 rounded-2xl p-3 mr-10 text-gray-800"
            }
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-100 rounded-2xl p-3 mr-10">
            Thinking...
          </div>
        )}

      </div>

      <div className="border-t p-4 flex gap-2">

        <input
          className="flex-1 border rounded-xl px-4 py-3 text-black"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(input);
            }
          }}
        />

        <button
          onClick={() => sendMessage(input)}
          className="bg-blue-600 text-white px-5 rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
}