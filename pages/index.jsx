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
  const [context, setContext] = useState("");
  const [results, setResults] = useState([]);
  const [highlightedText, setHighlightedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'} min-h-screen p-6 font-sans`}>
      <header className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
        <nav className="space-x-4 text-sm">
          <a href="https://www.outpatiented.com" target="_blank" className="underline hover:text-pink-400">OutPatiented</a>
          <a href="https://www.outpatiented.com/blog" target="_blank" className="underline hover:text-pink-400">Blog</a>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xs border px-2 py-1 rounded bg-gray-700 text-white hover:bg-gray-600"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} max-w-2xl mx-auto p-8 rounded-xl shadow-lg`}>
        <div className="text-3xl font-bold text-pink-400 text-center mb-3">🧠 Gaslight Detector</div>

        {showOutput && (
          <div className="mb-3 text-xs text-center text-gray-400">
            Created by <span className="font-semibold">OutPatiented</span>, built on <span className="font-semibold">TruthEngine</span> — <a href="https://coff.ee/truthengine" target="_blank" className="text-pink-400 underline font-bold">☕ Buy me a coffee if this helped you</a>
          </div>
        )}

        {!showOutput && (
          <>
            <label className="block mb-2 text-sm font-medium">Paste the full conversation or just the other person's replies (DMs, texts, emails, etc.). Use line breaks (hit 'Enter') between responses.</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              rows={8}
              placeholder="Paste your conversation here..."
              className="w-full p-4 border rounded mb-4 text-sm bg-white text-black"
            ></textarea>

            <label className="block mb-2 text-sm font-medium">Optional Context (e.g. situation, relationship, previous incidents):</label>
            <textarea
              value={context}
              onChange={e => setContext(e.target.value)}
              rows={3}
              placeholder="Add any relevant context here..."
              className="w-full p-4 border rounded mb-4 text-sm bg-white text-black"
            ></textarea>
          </>
        )}

        {showOutput ? (
          <div>
            <div className="prose prose-sm max-w-none bg-white p-4 border rounded mb-4 text-sm text-black" dangerouslySetInnerHTML={{ __html: highlightedText.replace(/\n/g, '<br/>') }} />
            <button
              onClick={() => setShowOutput(false)}
              className="bg-gray-200 text-sm text-black px-3 py-1 rounded hover:bg-gray-300 mb-4"
            >
              Analyze Another
            </button>
            <button
              onClick={copyResults}
              className="bg-blue-600 text-white text-sm px-3 py-1 ml-2 rounded hover:bg-blue-500"
            >
              Copy Results
            </button>
          </div>
        ) : (
          <button
            onClick={analyzeText}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Analyze
          </button>
        )}

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Detected Tactics:</h2>
            <ul className="space-y-2">
              {results.map((r, i) => (
                <li key={i} className="bg-gray-50 p-3 rounded border text-black">
                  <strong>{r.name}</strong>: {r.description}
                  <div className="text-xs mt-1">
                    <span className={`px-2 py-1 rounded text-white ${categoryColor(r.category)}`}>{r.category}</span>
                    <span className="ml-2 italic text-gray-700">{r.type}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Matched {r.count} phrase{r.count > 1 ? 's' : ''}: {r.matches.join(', ')}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.length === 0 && showOutput && (
          <p className="text-sm text-gray-500 mt-4">No manipulation tactics detected.</p>
        )}
      </div>
    </div>
  );
}
