// File: pages/index.jsx
import { useState } from 'react';

const tactics = [
  {
    name: "Gaslighting",
    keywords: ["you're crazy", "you imagined it", "that never happened"],
    description: "Making someone question their reality or memory."
  },
  {
    name: "DARVO",
    keywords: ["how dare you", "you're the one who", "stop attacking me"],
    description: "Deny, Attack, Reverse Victim and Offender."
  },
  {
    name: "Blame-shifting",
    keywords: ["it's your fault", "you made me do it", "if you hadn't"],
    description: "Avoiding responsibility by blaming the other person."
  }
];

export default function Home() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const analyzeText = () => {
    const lowerText = text.toLowerCase();
    const foundTactics = [];

    tactics.forEach(tactic => {
      const hit = tactic.keywords.some(keyword => lowerText.includes(keyword));
      if (hit) foundTactics.push(tactic);
    });

    setResults(foundTactics);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">🧠 Gaslight Detector</h1>
        <p className="mb-4 text-sm text-gray-600">
          Paste any conversation (text, DM, email). We'll scan it for manipulation tactics.
        </p>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={10}
          placeholder="Paste your conversation here..."
          className="w-full p-4 border rounded mb-4 text-sm"
        ></textarea>
        <button
          onClick={analyzeText}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Analyze
        </button>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Results:</h2>
            <ul className="space-y-2">
              {results.map((r, i) => (
                <li key={i} className="bg-gray-50 p-3 rounded border">
                  <strong>{r.name}</strong>: {r.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.length === 0 && text && (
          <p className="text-sm text-gray-500 mt-4">No manipulation tactics detected.</p>
        )}
      </div>
    </div>
  );
}
