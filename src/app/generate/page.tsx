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

    // fake API delay (replace with real API later)
    setTimeout(() => {
      setOutput(`Here is your generated ${type} content:\n\n🔥 "${input}" inspired magic.`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center">AI-Powered Content Generator</h1>
      <p className="text-zinc-400 mb-10 text-center">
        Generate 🔥 tweets, cold emails, and content ideas in one click.
      </p>

      <div className="space-y-4">
        <label className="block text-zinc-300 text-sm font-medium">What do you want to generate?</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-2"
        >
          <option value="tweet">Tweet</option>
          <option value="cold-email">Cold Email</option>
          <option value="idea">Idea</option>
        </select>

        <label className="block text-zinc-300 text-sm font-medium mt-4">Your Prompt</label>
        <textarea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your topic, idea or message here..."
          className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-2"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
          {loading ? "Generating..." : "Generate Content"}
        </button>
      </div>

      {output && (
        <div className="bg-zinc-900 mt-10 p-6 rounded-xl border border-zinc-700">
          <h2 className="text-lg font-semibold mb-2 text-yellow-400">Generated Output</h2>
          <pre className="whitespace-pre-wrap text-zinc-200">{output}</pre>
        </div>
      )}
    </div>
  );
}
