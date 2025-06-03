// File: pages/index.jsx
import { useState } from 'react';

import { tactics } from '../lib/tactics';

function highlightMatches(input, matches) {
  let highlighted = input;
  matches.forEach(phrase => {
    const regex = new RegExp(`(${phrase})`, 'gi');
    highlighted = highlighted.replace(regex, '<mark>$1</mark>');
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">🧠 Gaslight Detector</h1>
        <p className="mb-4 text-sm text-gray-600">
          Paste any conversation (text, DM, email). We'll scan it for manipulation tactics.
        </p>

        {showOutput ? (
          <div>
            <div
              className="prose prose-sm max-w-none bg-white p-4 border rounded mb-4 text-sm"
              dangerouslySetInnerHTML={{ __html: highlightedText.replace(/\n/g, '<br/>') }}
            ></div>
            <button
              onClick={() => setShowOutput(false)}
              className="bg-gray-200 text-sm text-black px-3 py-1 rounded hover:bg-gray-300 mb-4"
            >
              Edit Text
            </button>
          </div>
        ) : (
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            rows={10}
            placeholder="Paste your conversation here..."
            className="w-full p-4 border rounded mb-4 text-sm"
          ></textarea>
        )}

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
                  <br />
                  <span className="text-xs text-gray-600">
                    Matched {r.count} phrase{r.count > 1 ? 's' : ''}: {r.matches.join(', ')}
                  </span>
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
