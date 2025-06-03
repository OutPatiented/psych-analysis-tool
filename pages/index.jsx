// File: pages/index.jsx
import { useState } from 'react';

const tactics = [
  {
    name: "Gaslighting",
    keywords: [
      "you’re remembering it wrong",
      "that never happened",
      "you always twist things",
      "you sound paranoid",
      "you’re being dramatic",
      "you misinterpreted everything",
      "you imagined that",
      "I never said that",
      "you're just emotional",
      "are you sure that happened"
    ],
    description: "Making someone question their reality or memory."
  },
  {
    name: "DARVO",
    keywords: [
      "how dare you",
      "you’re the one who",
      "stop attacking me",
      "you’re making me the villain",
      "I’m the one being hurt here"
    ],
    description: "Deny, Attack, and Reverse Victim and Offender — flipping the blame."
  },
  {
    name: "Blame-shifting",
    keywords: [
      "it’s your fault",
      "you made me do it",
      "if you hadn’t",
      "you pushed me to this",
      "look what you made me do"
    ],
    description: "Avoiding responsibility by putting the blame on the other person."
  },
  {
    name: "Guilt-tripping",
    keywords: [
      "if you really loved me",
      "after everything I've done",
      "I guess I’m just a burden",
      "you don’t care about me",
      "I always put you first"
    ],
    description: "Using guilt to manipulate someone’s behavior."
  },
  {
    name: "Emotional Invalidation",
    keywords: [
      "you’re overreacting",
      "you’re too sensitive",
      "stop being so emotional",
      "you always get like this",
      "it’s not a big deal"
    ],
    description: "Dismissing or minimizing someone’s emotional experience."
  },
  {
    name: "Threats",
    keywords: [
      "you’ll regret this",
      "don’t make me do something I’ll regret",
      "you’ll be sorry",
      "I’ll ruin your life",
      "you won’t have anyone"
    ],
    description: "Using fear or intimidation to control behavior."
  },
  {
    name: "Conditional Approval",
    keywords: [
      "if you do this, I’ll love you",
      "why can’t you just be what I need",
      "you’re only good when you listen",
      "prove you care",
      "earn my trust"
    ],
    description: "Withholding love or acceptance until demands are met."
  },
  {
    name: "Minimization",
    keywords: [
      "you’re making a big deal out of nothing",
      "it was just a joke",
      "I didn’t mean it like that",
      "you’re so dramatic",
      "you’re blowing it out of proportion"
    ],
    description: "Downplaying harm done to avoid accountability."
  },
  {
    name: "Deflection",
    keywords: [
      "let’s not talk about this",
      "why are you bringing this up now",
      "this isn’t about me",
      "you’re just trying to start a fight",
      "don’t change the subject"
    ],
    description: "Avoiding the topic or turning attention away from the issue."
  },
  {
    name: "Projection",
    keywords: [
      "you’re the liar",
      "you cheat all the time",
      "you don’t even care",
      "you’re always angry",
      "you’re manipulative"
    ],
    description: "Accusing someone else of traits or behaviors the manipulator is exhibiting."
  }
];

export default function Home() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const analyzeText = () => {
    const lowerText = text.toLowerCase();
    const foundTactics = [];

    tactics.forEach(tactic => {
      const hit = tactic.keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
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
