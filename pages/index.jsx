// File: pages/index.jsx
import { useState } from 'react';

const tactics = [
  {
    name: "Gaslighting",
    keywords: [
      "remembering it wrong",
      "that never happened",
      "you always twist",
      "sound paranoid",
      "being dramatic",
      "misinterpreted everything",
      "imagined that",
      "I never said",
      "just emotional",
      "are you sure",
      "not how it happened",
      "making things up",
      "your memory is off",
      "you're confused",
      "that's not what I meant",
      "you’re delusional"
    ],
    description: "Making someone question their reality or memory."
  },
  {
    name: "DARVO",
    keywords: [
      "how dare you",
      "you’re the one",
      "stop attacking me",
      "making me the villain",
      "I’m the one hurt",
      "blaming me again",
      "twist it around",
      "you’re the abuser",
      "you started it"
    ],
    description: "Deny, Attack, and Reverse Victim and Offender — flipping the blame."
  },
  {
    name: "Blame-shifting",
    keywords: [
      "it’s your fault",
      "you made me",
      "if you hadn’t",
      "pushed me to this",
      "look what you made",
      "you caused this",
      "this is on you",
      "none of this would happen if"
    ],
    description: "Avoiding responsibility by putting the blame on the other person."
  },
  {
    name: "Guilt-tripping",
    keywords: [
      "if you really loved",
      "everything I've done",
      "just a burden",
      "don’t care about me",
      "always put you first",
      "do everything for you",
      "nobody appreciates",
      "I sacrificed for you",
      "after all I've done"
    ],
    description: "Using guilt to manipulate someone’s behavior."
  },
  {
    name: "Emotional Invalidation",
    keywords: [
      "you’re overreacting",
      "too sensitive",
      "so emotional",
      "always get like this",
      "not a big deal",
      "being irrational",
      "take everything personally",
      "stop being dramatic",
      "you're imagining things"
    ],
    description: "Dismissing or minimizing someone’s emotional experience."
  },
  {
    name: "Threats",
    keywords: [
      "you’ll regret",
      "don’t make me",
      "you’ll be sorry",
      "ruin your life",
      "won’t have anyone",
      "lose everything",
      "make you pay",
      "you’ll see what happens",
      "you’re dead to me"
    ],
    description: "Using fear or intimidation to control behavior."
  },
  {
    name: "Conditional Approval",
    keywords: [
      "if you do this",
      "why can’t you",
      "only good when",
      "prove you care",
      "earn my trust",
      "lovable when you obey",
      "I’ll be nice if",
      "if you loved me you would",
      "you have to deserve my respect"
    ],
    description: "Withholding love or acceptance until demands are met."
  },
  {
    name: "Minimization",
    keywords: [
      "big deal out of nothing",
      "just a joke",
      "didn’t mean it",
      "so dramatic",
      "blowing it out",
      "take a joke",
      "too emotional",
      "you’re exaggerating",
      "wasn’t that serious"
    ],
    description: "Downplaying harm done to avoid accountability."
  },
  {
    name: "Deflection",
    keywords: [
      "not talk about this",
      "bringing this up",
      "isn’t about me",
      "trying to start a fight",
      "don’t change the subject",
      "bring up old stuff",
      "ruin the mood",
      "you always do this",
      "why now"
    ],
    description: "Avoiding the topic or turning attention away from the issue."
  },
  {
    name: "Projection",
    keywords: [
      "you’re the liar",
      "you cheat",
      "don’t even care",
      "always angry",
      "you’re manipulative",
      "you’re abusive",
      "you gaslight",
      "you’re controlling",
      "you’re the narcissist"
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
      for (const keyword of tactic.keywords) {
        if (lowerText.includes(keyword)) {
          foundTactics.push(tactic);
          break;
        }
      }
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
