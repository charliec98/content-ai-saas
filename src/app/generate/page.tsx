"use client";
import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

export default function GeneratePage() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("tweet");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput("");

    // Simulate API delay (replace with real API call later)
    setTimeout(() => {
      setOutput(
        `Here is your generated ${type} content:\n\n🔥 "${input}" inspired magic.`
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">
        AI-Powered Content Generator
      </h1>
      <p className="text-center text-zinc-400 mb-10">
        Generate engaging tweets, compelling emails, and fresh content ideas instantly.
      </p>

      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
        <label className="block text-sm font-medium text-zinc-300 mb-2">
          What do you want to generate?
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-zinc-700 border border-zinc-600 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="tweet">Tweet</option>
          <option value="cold-email">Cold Email</option>
          <option value="idea">Idea</option>
        </select>

        <label className="block text-sm font-medium text-zinc-300 mb-2">
          Your Prompt
        </label>
        <textarea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your topic, idea or message here..."
          className="w-full bg-zinc-700 border border-zinc-600 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold py-3 rounded-lg transition duration-200 hover:bg-yellow-500 ${
            loading && "opacity-75 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5" />
          ) : (
            <Sparkles className="h-5 w-5" />
          )}
          {loading ? "Generating..." : "Generate Content"}
        </button>
      </div>

      {output && (
        <div className="bg-zinc-900 mt-10 p-6 rounded-xl border border-zinc-700 shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-yellow-400">
            Generated Output
          </h2>
          <pre className="whitespace-pre-wrap text-zinc-200">{output}</pre>
        </div>
      )}
    </div>
  );
}
