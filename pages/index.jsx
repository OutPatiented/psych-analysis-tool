// File: pages/index.jsx
import { useState } from 'react';

const tactics = [
  // === Tactics 1–10 above ===
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
  },
  {
    name: "Love-bombing",
    keywords: ["you’re the best thing that’s ever happened to me", "I’ve never felt this way before", "I can’t live without you", "you complete me", "no one will ever love you like I do"],
    description: "Overwhelming someone with attention, affection, or praise to manipulate or control them."
  },
  {
    name: "Stonewalling",
    keywords: ["I’m done talking about this", "whatever", "do what you want", "I don’t care", "silence"],
    description: "Refusing to communicate or engage as a way to control or punish."
  },
  {
    name: "Triangulation",
    keywords: ["even they agree with me", "I talked to someone else about this", "you’re the only one who thinks that", "other people said so too"],
    description: "Bringing a third party into conflict to validate one side and isolate the target."
  },
  {
    name: "Smear Campaign",
    keywords: ["they know how crazy you are", "everyone knows what you're like", "I told them the truth about you"],
    description: "Telling others lies or twisted truths to damage someone's reputation."
  },
  {
    name: "Isolation",
    keywords: ["they’re bad for you", "you don’t need them", "I’m all you need", "you spend too much time with them"],
    description: "Cutting someone off from friends, family, or other support systems."
  },
  {
    name: "Withholding",
    keywords: ["you don’t deserve affection", "I’m not in the mood", "maybe later", "you don’t need to know that"],
    description: "Denying emotional, physical, or informational support as a form of punishment or control."
  },
  {
    name: "Rewriting History",
    keywords: ["that’s not what happened", "you’re remembering it wrong again", "I never said that", "you said it first"],
    description: "Denying previous actions or conversations to confuse and control."
  },
  {
    name: "Conditional Love",
    keywords: ["I love you when you do this", "I can’t love someone like that", "you’re only lovable when..."],
    description: "Making love or acceptance dependent on behavior."
  },
  {
    name: "Public Shaming",
    keywords: ["you always embarrass me", "stop making a scene", "everyone’s watching", "they think you’re crazy"],
    description: "Humiliating someone in front of others to assert dominance."
  },
  {
    name: "Microaggressions",
    keywords: ["that’s just how you people are", "you’re surprisingly smart", "I didn’t expect that from you"],
    description: "Subtle insults or slights that demean or devalue someone."
  },
  {
    name: "Gaslight by Proxy",
    keywords: ["even your friends think you’re wrong", "they said you’re crazy too"],
    description: "Using others to reinforce gaslighting or manipulation."
  },
  {
    name: "False Promises",
    keywords: ["I’ll change", "things will be different", "I promise it won’t happen again"],
    description: "Making commitments to placate someone with no intent to follow through."
  },
  {
    name: "Discrediting",
    keywords: ["you’re too emotional to think clearly", "you’re unstable", "no one takes you seriously"],
    description: "Undermining someone’s credibility so they’re not believed."
  },
  {
    name: "Jealousy Induction",
    keywords: ["they’re really into me", "I could have anyone", "you’re lucky to have me"],
    description: "Using jealousy to gain control or validate worth."
  },
  {
    name: "Coercion",
    keywords: ["if you don’t, I will", "do this or else", "you have no choice"],
    description: "Forcing someone to act through threats or pressure."
  },
  {
    name: "Redirection",
    keywords: ["let’s talk about your behavior instead", "you’re the one being defensive", "focus on your flaws first"],
    description: "Redirecting blame or attention to avoid accountability."
  },
  {
    name: "Future Faking",
    keywords: ["one day we’ll", "we’re going to be amazing", "trust me, it’s coming soon"],
    description: "Lying about future plans to control or stall a partner."
  },
  {
    name: "Invalid Comparison",
    keywords: ["at least I’m not like them", "you should be grateful", "others have it worse"],
    description: "Using comparisons to silence or invalidate someone’s experience."
  },
  {
    name: "Overgeneralization",
    keywords: ["you always do this", "you never listen", "you’re constantly wrong"],
    description: "Making exaggerated claims to shame or pressure someone."
  },
  {
    name: "Displacement",
    keywords: ["I had a bad day", "it’s not you, it’s my stress", "don’t take it personally"],
    description: "Taking out unrelated frustration on someone in your proximity."
  }
];

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

  const analyzeText = () => {
    const lowerText = text.toLowerCase();
    const foundTactics = [];
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
      }
    });

    const sortedResults = Object.values(tacticScores).sort((a, b) => b.count - a.count);
    setResults(sortedResults);
    const allMatches = sortedResults.flatMap(t => t.matches);
    setHighlightedText(highlightMatches(text, allMatches));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">🧠 Gaslight Detector</h1>
        <p className="mb-4 text-sm text-gray-600">
          Paste any conversation (text, DM, email). We'll scan it for manipulation tactics.
        </p>
        <div className="prose prose-sm max-w-none bg-white p-4 border rounded mb-4 text-sm" dangerouslySetInnerHTML={{ __html: highlightedText || text.replace(/
/g, '<br/>') }}></div>
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
                  <strong>{r.name}</strong>: {r.description} <br /><span className='text-xs text-gray-600'>Matched {r.count} phrase{r.count > 1 ? 's' : ''}: {r.matches.join(', ')}</span>
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
