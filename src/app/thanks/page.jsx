"use client";

import { useRouter } from "next/navigation";

export default function ThanksPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-[#22C55E]">
          Thank You for Your Message!
        </h1>
        <p className="text-lg text-[#22C55E]/70">
          Your message has been sent successfully.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-[#22C55E] text-white py-2 px-4 rounded hover:bg-[#1ea34b] transition-colors text-sm"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
}
