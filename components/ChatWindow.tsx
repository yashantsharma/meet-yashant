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
      "# 👋 Meet Yashant through AI\n\nI'm Yashant's AI career assistant.\n\nAsk me anything about his consulting experience, entrepreneurship, leadership, education, projects, achievements or career journey.\n\nOr start with one of the recruiter questions below.",
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

    const updatedMessages: Message[] = [
      ...messages,
      {
        role: "user",
        text: message,
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
    <div className="fixed bottom-6 right-6 z-50 flex h-[720px] w-[430px] flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">

      {/* Header */}

      <div className="border-b border-gray-200 bg-white px-6 py-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white">
              Y
            </div>

            <div>

              <h2 className="font-semibold text-gray-900">
                Ask Yashant
              </h2>

              <p className="text-xs text-green-600">
                ● Online
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            ✕
          </button>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 space-y-4 overflow-y-auto bg-[#F5F5F7] px-5 py-6">

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
                     className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left text-[15px] font-medium text-gray-800 transition hover:bg-gray-50 hover:border-[#0A84FF]"
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
              className="block rounded-2xl bg-[#F2F2F7] py-3 text-center font-medium text-white transition hover:bg-[#0077ED]"
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
              className={`max-w-[78%] rounded-[24px] px-5 py-3.5 text-[15px] leading-7 shadow-sm ${
                message.role === "user"
                  ? "bg-[#0A84FF] text-white"
                  : "border border-gray-200 bg-white text-gray-900"
              }`}
            >

              <div
                className={`prose prose-sm max-w-none ${
                  message.role === "user"
                    ? "prose-invert text-white"
                    : "prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700"
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

            <div className="rounded-[24px] border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <span className="animate-pulse text-gray-500">
                Thinking...
              </span>

            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>
            {/* Input */}

      <div className="border-t border-gray-200 bg-white p-4">

        <div className="flex items-center gap-3">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input);
              }
            }}
            placeholder="Message Ask Yashant..."
            className="flex-1 rounded-full border border-gray-300 bg-gray-50 px-5 py-3 text-[15px] outline-none transition focus:border-[#0A84FF] focus:bg-white"
          />

          <button
            onClick={() => sendMessage(input)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A84FF] text-lg font-semibold text-white transition hover:bg-[#0077ED]"
          >
            ↑
          </button>

        </div>

        <p className="mt-3 text-center text-[11px] text-gray-400">
          AI can make mistakes. Verify important information.
        </p>

      </div>

    </div>
  );
}