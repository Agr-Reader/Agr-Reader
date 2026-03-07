# Supercharge Your RSS Reading: Agr Reader AI Prompt Pack

Hey Agr Reader folks 👋

Ever finished an article and thought: “Cool… but what should I *do* with this?”
Or wished your RSS reader could summarize, translate, and even help you learn English—without jumping between a bunch of apps?

That’s exactly what Agr Reader is built for: full‑text parsing, offline reading, immersive bilingual translation, and an AI assistant that supports **custom prompts**.

Below is a small “prompt pack” you can save and reuse. Pick one, run it on any article, and turn reading into something clearer, faster, and way more actionable.

> **Tip:** These work best with **full‑text parsing** turned on, so the AI sees the whole article instead of a snippet.



## 1) Article Summary

Use this when you want a clean, trustworthy summary you can actually act on.

```text
**Persona:**
You are an expert editor and content analyst. Your task is to distill any text into a  highly concise summary, ensuring high accuracy and fidelity to the source.

**Instructions:**
1.  **Analyze:** Deeply understand the text's core ideas, arguments, and conclusions.
2.  **Fidelity:** Strictly adhere to the source material. Do not add external information, inferences, or opinions. Ensure all critical information is retained.
3.  **Conciseness & Distillation:** The summary must be exceptionally refined and succinct. Your goal is to capture the absolute essence of the text in a single, dense paragraph. Prioritize information density over descriptive language.
4.  **Language:** Automatically detect the input language. Your entire output must be in high-quality, fluent {{language}}.
5.  **Directness:** Output the result directly. Do not include any introductory phrases, greetings, or explanations.
```



## 2) 3‑Layer Summary (fast scan)

Perfect when you want quick scanning *and* the stuff people usually miss.

```text
Summarize the article in {{language}} with three layers.

Rules:
- Only use the article content.
- No repetition across layers.
- If you’re unsure, say “Not mentioned in the article.”

Output:
- TL;DR (1–2 sentences)
- Key points (5 bullets)
- Easy-to-miss details (3 bullets: caveats, assumptions, constraints, edge cases, numbers)
```



## 3) Keyword + Topic Extractor (for tagging and follow-up reading)

Great for organizing, searching later, and building a reading list.

```text
Extract the most important keywords/topics from the article.

Rules:
- Output in {{language}}.
- Prefer concepts, entities, and recurring themes (not generic words).
- Keep proper nouns (people/org/product names) in their original form when appropriate.
- No duplicates.

Output (Markdown):
- Keywords (10 items)
- Core topics (3 items, broader than keywords)
```



## 4) Social Media Repost Generator (share without sounding generic)

This is for when you want to post quickly—but still sound like you.

```text
Write social posts based on the article.

Rules:
- Output in {{language}}.
- Must reflect the article faithfully (no invented claims).
- Keep it punchy and natural, not overly “marketing.”
- Include 2–3 relevant hashtags.
- If the article contains a key number or takeaway, include it.
```



## 5) Hashtag + Topic Angle Generator (more discoverable posts)

Use this alone, or pair it with the social post prompt above.

```text
Generate hashtags and posting angles based on the article.

Rules:
- Output in {{language}}.
- Hashtags should be concise, commonly used, and relevant.
- Avoid overly long hashtags; avoid duplicates.

Output (Markdown):
- Hashtags (5–8, include the # prefix)
- Topic angles (3 bullets: different ways to frame the same article for different audiences)
```



## Bonus: A Simple “Prompt Chain” Workflow

If you want a smooth **read → process → share** flow, try:

- Keyword + Topic Extractor → Hashtag + Topic Angle Generator → Social Media Repost Generator



## Final Thoughts

Good prompts make Agr Reader feel less like “just a reader” and more like a thinking partner:
you read, the AI helps you extract the signal, and you walk away with clear takeaways—plus something you can save, learn from, or share.

Try these prompts as-is, then tweak them to match your reading habits. And if you’re using Agr Reader’s full‑text parsing + immersive translation, the results get even better.



## Get Agr Reader

Want a calmer, more intentional reading flow?

- Official site: https://agrreader.com/
- Highlights: Material You design + themes, full‑text parsing, offline reading, immersive bilingual translation, custom AI assistant prompts, and broad sync support.