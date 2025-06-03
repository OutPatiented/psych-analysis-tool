// File: lib/tactics.js

export const tactics = [
  {
    name: "Gaslighting",
    keywords: ["you’re too sensitive", "that never happened", "you’re imagining things", "you’re overreacting"],
    description: "Manipulating someone into questioning their own reality or sanity.",
    category: "Psychological",
    type: "Cognitive Distortion"
  },
  {
    name: "DARVO",
    keywords: ["you’re attacking me", "you’re the real abuser", "I’m the victim here"],
    description: "Deny, Attack, and Reverse Victim and Offender roles.",
    category: "Defensive",
    type: "Blame Shift"
  },
  {
    name: "Emotional Invalidation",
    keywords: ["you’re being dramatic", "that’s not a big deal", "stop crying"],
    description: "Dismissing or undermining another person’s feelings.",
    category: "Emotional",
    type: "Minimization"
  },
  {
    name: "Guilt-tripping",
    keywords: ["after everything I’ve done for you", "you’re so ungrateful", "I guess I just don’t matter"],
    description: "Making someone feel guilty to manipulate their behavior.",
    category: "Emotional",
    type: "Guilt"
  },
  {
    name: "Blame-shifting",
    keywords: ["this is your fault", "you made me do this", "if you hadn’t..."],
    description: "Shifting responsibility onto someone else to avoid accountability.",
    category: "Defensive",
    type: "Projection"
  },
  {
    name: "Projection",
    keywords: ["you’re cheating on me", "you lie all the time", "you don’t care about anyone but yourself"],
    description: "Attributing one’s own negative traits to someone else.",
    category: "Defensive",
    type: "Projection"
  },
  {
    name: "Deflection",
    keywords: ["why are you bringing this up now?", "you’re just trying to start a fight", "what about when you...?"],
    description: "Avoiding a topic by redirecting to another.",
    category: "Avoidance",
    type: "Redirection"
  },
  {
    name: "Stonewalling",
    keywords: ["I’m done talking about this", "whatever", "do what you want", "I don’t care"],
    description: "Refusing to communicate as a form of punishment or control.",
    category: "Avoidance",
    type: "Silence"
  },
  {
    name: "Silent Treatment",
    keywords: ["...", "not responding", "cold shoulder"],
    description: "Ignoring someone deliberately to exert control or punishment.",
    category: "Avoidance",
    type: "Silence"
  },
  {
    name: "Love-bombing",
    keywords: ["you’re the best thing that’s ever happened to me", "I’ve never felt this way before", "I can’t live without you"],
    description: "Overwhelming someone with affection and praise to influence them.",
    category: "Emotional",
    type: "Idealization"
  },
  {
    name: "Invalid Comparisons",
    keywords: ["at least I’m not like", "others have it worse", "you should be grateful"],
    description: "Dismissing someone’s experience by comparing it to worse cases.",
    category: "Minimization",
    type: "Comparison"
  },
  {
    name: "Overgeneralizing",
    keywords: ["you always", "you never", "you constantly"],
    description: "Using broad, exaggerated language to assign blame.",
    category: "Distortion",
    type: "Absolutism"
  },
  {
    name: "Displacement",
    keywords: ["I had a bad day", "don’t take it personally", "I’m just stressed"],
    description: "Taking out frustration on others unrelated to the source.",
    category: "Avoidance",
    type: "Redirection"
  },
  {
    name: "Intermittent Reinforcement",
    keywords: ["sometimes you make me happy", "you’re amazing when you behave", "just be good"],
    description: "Switching between rewards and punishment to confuse/control.",
    category: "Behavioral",
    type: "Manipulative Conditioning"
  },
  {
    name: "Appeal to Pity",
    keywords: ["you know what I’ve been through", "my childhood was worse", "don’t you feel bad for me"],
    description: "Manipulating by overemphasizing hardship.",
    category: "Emotional",
    type: "Pity Tactic"
  },
  {
    name: "Playing the Victim",
    keywords: ["everyone is against me", "no one understands me", "I’m always the bad guy"],
    description: "Avoiding accountability by assuming a victim role.",
    category: "Defensive",
    type: "Victimization"
  },
  {
    name: "Labeling",
    keywords: ["you’re crazy", "you’re toxic", "you’re selfish"],
    description: "Assigning negative identities instead of addressing behavior.",
    category: "Psychological",
    type: "Dehumanization"
  },
  {
    name: "Selective Memory",
    keywords: ["you didn’t say that", "I never said that", "you never told me"],
    description: "Only remembering parts that support their argument.",
    category: "Distortion",
    type: "Revisionism"
  },
  {
    name: "Weaponized Insecurity",
    keywords: ["you’ve always struggled with this", "no wonder people leave you", "you’re not stable"],
    description: "Exploiting known vulnerabilities to weaken the target.",
    category: "Emotional",
    type: "Shame"
  },
  {
    name: "Future Baiting",
    keywords: ["it’ll get better soon", "just hang on", "big changes are coming"],
    description: "Promising future rewards to excuse present mistreatment.",
    category: "Manipulation",
    type: "Delay Tactic"
  },
  {
    name: "Threats",
    keywords: ["you'll regret this", "I’ll ruin you", "don’t make me do something"],
    description: "Using intimidation to control behavior or decisions.",
    category: "Coercion",
    type: "Threat"
  },
  {
    name: "Intimidation",
    keywords: ["I know where you live", "you wouldn’t want to make me mad", "I have dirt on you"],
    description: "Creating fear to gain compliance.",
    category: "Coercion",
    type: "Fear"
  },
  {
    name: "Conditional Love",
    keywords: ["I’ll love you if", "you’re only worth it when", "prove you love me by"],
    description: "Using affection as a tool for manipulation.",
    category: "Emotional",
    type: "Conditional Approval"
  },
  {
    name: "Triangulation",
    keywords: ["even X thinks you’re wrong", "Y agrees with me", "everyone knows"],
    description: "Pulling third parties into conflict to isolate or pressure.",
    category: "Social",
    type: "Isolation"
  },
  {
    name: "Smear Campaign",
    keywords: ["they think you’re crazy", "everyone knows what you did", "I told people about you"],
    description: "Discrediting someone behind their back to control perception.",
    category: "Social",
    type: "Reputation Attack"
  },
  {
    name: "Dehumanization",
    keywords: ["you’re a monster", "you’re less than nothing", "you’re disgusting"],
    description: "Removing empathy by denying humanity.",
    category: "Psychological",
    type: "Abuse"
  },
  {
    name: "Gaslight Reversal",
    keywords: ["you’re gaslighting me", "stop twisting things", "I’m the one being manipulated"],
    description: "Accusing the victim of gaslighting to confuse and control.",
    category: "Defensive",
    type: "Counter-Manipulation"
  },
  {
    name: "Shaming",
    keywords: ["you should be ashamed", "how could you", "disgusting"],
    description: "Using shame to force compliance or silence.",
    category: "Emotional",
    type: "Shame"
  },
  {
    name: "Withholding",
    keywords: ["I don’t owe you anything", "figure it out yourself", "I’m not going to help you"],
    description: "Refusing affection, support, or information as punishment.",
    category: "Control",
    type: "Resource Denial"
  },
  {
    name: "Hoovering",
    keywords: ["I miss you", "let’s talk", "I’ve changed"],
    description: "Attempts to re-engage after abuse when victim begins to leave.",
    category: "Manipulation",
    type: "Re-engagement"
  },
  {
    name: "False Equivalence",
    keywords: ["it’s the same thing", "you do it too", "we’re both guilty"],
    description: "Minimizing abuse by claiming both sides are equally wrong.",
    category: "Distortion",
    type: "Minimization"
  },
  {
    name: "Name-calling",
    keywords: ["idiot", "bitch", "loser", "worthless"],
    description: "Attacking identity instead of behavior.",
    category: "Abuse",
    type: "Verbal Attack"
  },
  {
    name: "Catastrophizing",
    keywords: ["this is the worst thing ever", "it’s over", "nothing can fix this"],
    description: "Blowing issues out of proportion to control with fear.",
    category: "Emotional",
    type: "Fear Amplification"
  },
  {
    name: "Minimization",
    keywords: ["it wasn’t that bad", "you’re overreacting", "stop being so sensitive"],
    description: "Downplaying abusive behavior to escape responsibility.",
    category: "Distortion",
    type: "Minimization"
  },
  {
    name: "Rewriting History",
    keywords: ["that never happened", "you’re remembering it wrong", "you always twist things"],
    description: "Changing past events to support the manipulator’s narrative.",
    category: "Psychological",
    type: "Gaslighting"
  },
  {
    name: "False Promises",
    keywords: ["I’ll stop", "I’ll change", "I’ll get help"],
    description: "Saying what the victim wants to hear with no intention of following through.",
    category: "Manipulation",
    type: "False Reassurance"
  },
  {
    name: "Red Herring",
    keywords: ["what about your problems?", "let’s talk about you", "you’re no saint either"],
    description: "Distracting from the real issue with unrelated topics.",
    category: "Avoidance",
    type: "Distraction"
  },
  {
    name: "Appeal to Authority",
    keywords: ["my therapist said", "everyone agrees with me", "experts say"],
    description: "Using alleged authority to justify manipulation.",
    category: "Social",
    type: "Justification"
  },
  {
    name: "Mocking",
    keywords: ["oh boo hoo", "wahhh", "look who’s crying again"],
    description: "Making fun of emotional expression to silence or control.",
    category: "Emotional",
    type: "Shame"
  },
  {
    name: "Coercive Ultimatums",
    keywords: ["if you loved me, you would", "do it or we’re done", "this is your last chance"],
    description: "Presenting manipulative either/or scenarios.",
    category: "Coercion",
    type: "Ultimatum"
  }
];
