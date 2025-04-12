"use client";
import { useState } from "react";

export default function GeneratePage() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("Twitter");
  const [tone, setTone] = useState("Casual");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ topic, platform, tone }),
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <main className="p-8 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">AI Content Generator</h1>

      <input
        className="w-full p-3 mb-4 bg-zinc-800 rounded"
        placeholder="Enter your topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <select
        className="w-full p-3 mb-4 bg-zinc-800 rounded"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option>Twitter</option>
        <option>Email</option>
        <option>LinkedIn</option>
      </select>

      <select
        className="w-full p-3 mb-4 bg-zinc-800 rounded"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option>Casual</option>
        <option>Bold</option>
        <option>Professional</option>
      </select>

      <button
        onClick={handleGenerate}
        className="w-full bg-yellow-400 text-black font-semibold p-3 rounded hover:bg-yellow-500 transition"
      >
        Generate Content
      </button>

      {result && (
        <div className="mt-6 bg-zinc-900 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Generated Output:</h2>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </main>
  );
}

