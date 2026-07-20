"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ChatWindow({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-6 w-[380px] h-[620px] bg-white rounded-3xl shadow-2xl z-50 border overflow-hidden">

      <div className="flex items-center justify-between p-5 border-b">

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
          className="text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

      </div>

      <div className="p-5">

        <h3 className="font-semibold text-gray-800 mb-3">
          Welcome 👋
        </h3>

        <p className="text-gray-600 mb-6">
         Ask me anything about Yashant&apos;s consulting experience,
leadership, entrepreneurship, education, or projects. 
        </p>

        <div className="space-y-3">

          <button className="w-full rounded-xl border p-3 text-left hover:bg-gray-50">
            💼 Tell me about PwC
          </button>

          <button className="w-full rounded-xl border p-3 text-left hover:bg-gray-50">
            🚀 Farm to Folks
          </button>

          <button className="w-full rounded-xl border p-3 text-left hover:bg-gray-50">
            📄 Summarize Resume
          </button>

          <button className="w-full rounded-xl border p-3 text-left hover:bg-gray-50">
            🎯 Why should I hire Yashant?
          </button>

        </div>

      </div>

    </div>
  );
}
