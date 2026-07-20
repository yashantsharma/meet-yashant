"use client";

type Props = {
  onClick: () => void;
};

export default function AskYashantButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-4 shadow-xl transition-all"
    >
      💬 Ask Yashant
    </button>
  );
}
