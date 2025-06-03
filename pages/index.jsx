// File: pages/index.jsx

import { useState } from 'react';
import { tactics } from '../lib/tactics.js';

function highlightMatches(input, matches) {
  let highlighted = input;
  matches.forEach(phrase => {
    const regex = new RegExp(`(${phrase})`, 'gi');
    highlighted = highlighted.replace(regex, '<mark class="bg-yellow-300 text-black px-1 rounded shadow">$1</mark>');
  });
  return highlighted;
}

export default function Home() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [highlightedText, setHighlightedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const analyzeText = () => {
    const lowerText = text.toLowerCase();
    const tacticScores = {};

    tactics.forEach(tactic => {
      for (const keyword of tactic.keywords) {
        if (lowerText.includes(keyword)) {
          if (!tacticScores[tactic.name]) {
            tacticScores[tactic.name] = {
              ...tactic,
              matches: [],
              count: 0
            };
          }
          tacticScores[tactic.name].matches.push(keyword);
          tacticScores[tactic.name].count++;
        }
      }
    });

    const sortedResults = Object.values(tacticScores).sort((a, b) => b.count - a.count);
    setResults(sortedResults);
    const allMatches = sortedResults.flatMap(t => t.matches);
    setHighlightedText(highlightMatches(text, allMatches));
    setShowOutput(true);
  };

  const copyResults = () => {
    const resultText = results.map(r => `${r.name}\n${r.description}\nCategory: ${r.category} | Type: ${r.type}\nMatches: ${r.matches.join(', ')}`).join('\n\n');
    navigator.clipboard.writeText(resultText);
  };

  const categoryColor = (category) => {
    switch (category) {
      case 'Psychological': return 'bg-gray-600';
      case 'Emotional': return 'bg-pink-600';
      case 'Defensive': return 'bg-red-600';
      case 'Avoidance': return 'bg-yellow-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 font-sans">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-1 text-pink-400">🧠 Gaslight Detector</h1>
        {showOutput && (
          <div className="mb-3 text-xs text-center text-gray-400">
            Created by <span className="text-white font-semibold">OutPatiented</span>, built on <span className="text-white font-semibold">TruthEngine</span> — support us at <a href="https://coff.ee/truthengine" target="_blank" className="text-pink-400 underline">coff.ee/truthengine</a>
          </div>
        )}

        <p className="text-sm text-gray-400 mb-2">This tool scans written communication for common psychological manipulation tactics.</p>
        <p className="text-sm text-gray-400 mb-2">Paste a back-and-forth conversation (DMs, texts, emails) OR only the manipulator's responses. You can include context if needed to help clarify the dynamic.</p>
        <p className="text-xs italic text-gray-500 mb-4">Context matters. The more you provide, the more accurate the result.</p>

        {!showOutput && (
          <div className="mb-4 text-sm text-gray-300">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>What to Paste:</strong> Copy either full conversations or just the replies from the suspected manipulator.</li>
              <li><strong>Best Format:</strong> Use line breaks (press 'Enter' after each message) between each message for clarity.</li>
              <li><strong>Optional:</strong> Add extra background context below to improve interpretation.</li>
            </ul>
          </div>
        )}

        {showOutput ? (
          <div>
            <div
              className="prose prose-sm max-w-none bg-gray-700 p-4 border border-gray-600 rounded mb-4 text-sm transition-opacity animate-fade-in"
              dangerouslySetInnerHTML={{ __html: highlightedText.replace(/\n/g, '<br/>') }}
            ></div>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setShowOutput(false)}
                className="bg-gray-600 text-sm text-white px-3 py-1 rounded hover:bg-gray-500"
              >
                📝 Edit Text
              </button>
              <button
                onClick={copyResults}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400"
              >
                📋 Copy Results
              </button>
            </div>
          </div>
        ) : (
          <>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              rows={12}
              placeholder="Paste a conversation or series of replies here — separate messages with line breaks."
              className="w-full p-4 border border-gray-600 bg-gray-700 rounded mb-4 text-sm text-white placeholder-gray-400 resize-y"
            ></textarea>

            <div className="mb-4">
              <label htmlFor="context" className="block text-sm text-gray-400 mb-1">Optional: Context (background info)</label>
              <textarea
                id="context"
                rows={3}
                placeholder="e.g. We've been arguing a lot lately, and I feel like I'm going crazy..."
                className="w-full p-3 border border-gray-600 bg-gray-700 rounded text-sm text-white placeholder-gray-400 resize-y mb-4"
              ></textarea>
            </div>
          </>
        )}

        <button
          onClick={analyzeText}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 transition-transform duration-200 hover:scale-105"
        >
          Analyze
        </button>

        <div className="mt-8 text-center text-xs text-gray-500">
          Created by <span className="text-white font-semibold">OutPatiented</span> • Powered by <span className="text-white font-semibold">TruthEngine</span><br />
          If this helped you, consider donating: <a href="https://coff.ee/truthengine" target="_blank" className="text-pink-400 hover:underline">coff.ee/truthengine</a>
        </div>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Results:</h2>
            <ul className="space-y-4">
              {results.map((r, i) => (
                <li
                  key={i}
                  className="bg-gray-700 p-4 rounded-lg border border-gray-600 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="text-lg font-bold text-pink-300">{r.name}</div>
                  <div className="text-sm mb-1">{r.description}</div>
                  <div className="text-xs text-gray-400 flex flex-wrap gap-2 items-center">
                    <span className={`px-2 py-0.5 rounded text-xs text-white ${categoryColor(r.category)}`}>{r.category}</span>
                    <span className="px-2 py-0.5 rounded bg-gray-600 text-xs text-white">{r.type}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Matched {r.count} phrase{r.count > 1 ? 's' : ''}: {r.matches.join(', ')}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.length === 0 && showOutput && (
          <p className="text-sm text-gray-400 mt-4">✅ No manipulation tactics detected. You’re clear.</p>
        )}
      </div>
    </div>
  );
}
