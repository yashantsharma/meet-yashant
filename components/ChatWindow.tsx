"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  "# 👋 Meet Yashant through AI\n\nI'm Yashant's AI career assistant.\n\nAsk me anything about his consulting experience, entrepreneurship, leadership, education, projects, achievements, or career journey.\n\nOr start with one of the recruiter questions below.",
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

  const updatedMessages: Message[] = [
    ...messages,
    {
      role: "user",
      text: userMessage,
    },
  ];

  setMessages(updatedMessages);
  setInput("");
  setLoading(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: updatedMessages,
      }),
    });

    const data = await res.json();

    setMessages([
      ...updatedMessages,
      {
        role: "assistant",
        text: data.reply,
      },
    ]);
  } catch {
    setMessages([
      ...updatedMessages,
      {
        role: "assistant",
        text: "Something went wrong while generating the response.",
      },
    ]);
  }

  setLoading(false);

  }

 const quickQuestions = [
  {
    category: "💼 Hiring",
    items: [
      "Why should I hire Yashant?",
      "Summarize Yashant's profile",
      "What makes Yashant different?",
      "What industries has he worked in?",
    ],
  },
  {
    category: "📈 Experience",
    items: [
      "Tell me about PwC",
      "Tell me about Farm To Folks",
      "Tell me about Wisdom Tree",
      "Tell me about Jamboree",
    ],
  },
  {
    category: "🚀 Leadership",
    items: [
      "What is Yashant's leadership style?",
      "Tell me about his biggest achievement",
      "Tell me about a difficult challenge",
      "Why did he move from entrepreneurship to consulting?",
    ],
  },
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

          <div className="space-y-6">

  {quickQuestions.map((section) => (

    <div key={section.category}>

      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {section.category}
      </h3>

      <div className="grid gap-2">

        {section.items.map((question) => (

          <button
            key={question}
            onClick={() => sendMessage(question)}
            className="rounded-xl border bg-white px-4 py-3 text-left text-sm transition hover:border-blue-500 hover:bg-blue-50"
          >
            {question}
          </button>

        ))}

      </div>

    </div>

  ))}

  <a
    href="/Yashant_Sharma_Resume.pdf"
    download
    className="block rounded-xl bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700"
  >
    📄 Download Resume
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
              className={`max-w-[85%] rounded-2xl px-5 py-4 text-[15px] leading-7 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-800"
              }`}
            >
              <div
  className={`prose prose-sm max-w-none ${
    message.role === "user"
      ? "prose-invert text-white"
      : "text-gray-800 prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700"
  }`}
>
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {message.text}
  </ReactMarkdown>
</div>
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