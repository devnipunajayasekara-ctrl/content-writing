# content writing skill

> **what this skill does:** when activated, ask the user every required input before writing a single word. produce a completely structured, seo/geo/aeo-optimized AND humanized article in a single shot. never start writing without completing the intake process.

---

## how to activate this skill

when a user asks you to write an article, blog post, or any web content, **stop and run the intake questionnaire below first**. collect all answers before generating anything. if the user skips a question, use a sensible default and note it.

---

## intake questionnaire (ask these before writing)

present these questions in a clean, numbered format. ask all in one message — do not ask one at a time.

---

### section a — the article brief

**ask:**

```
before i write, i need a few details to make this article rank, get cited by ai, and sound human. please answer what you can — skip anything that doesn't apply.

ARTICLE BRIEF

1. topic / working title
   what is this article about? give me a working title or topic.

2. primary keyword
   the main keyword this article must rank for. (e.g. "best hotels in bali")

3. secondary keywords / lsi keywords
   any related terms, variations, or supporting keywords to weave in.
   (e.g. "luxury resorts bali", "where to stay in bali", "bali accommodation guide")

4. target audience
   who is reading this? describe them briefly.
   (e.g. "couples planning a honeymoon in bali, budget: mid-range to luxury")

5. search intent
   what does the reader want to achieve?
   [ ] informational — learn something
   [ ] navigational — find a specific thing
   [ ] commercial — compare options before buying
   [ ] transactional — ready to buy / book now

6. article type
   [ ] pillar / flagship article (comprehensive, 2000+ words)
   [ ] cluster / supporting article (focused subtopic, 800–1500 words)
   [ ] product or service page
   [ ] listicle ("top 10 / best X for Y")
   [ ] how-to guide
   [ ] comparison article ("X vs Y")
   [ ] local seo article (city/region-specific)

7. target word count
   approximate length? (if unsure, leave blank and i will decide based on type)
```

---

### section b — brand and tone

**ask:**

```
BRAND & TONE

8. brand / website name
   what brand or website is this content for?

9. website url (optional but helpful)
   i will use this to understand existing content and avoid overlap.

10. brand voice / tonality
    how should this article sound? pick all that apply:
    [ ] authoritative and expert
    [ ] friendly and conversational
    [ ] professional and formal
    [ ] casual and approachable
    [ ] bold and direct
    [ ] empathetic and supportive
    [ ] inspirational
    [ ] other: _______________

11. words / phrases to always use
    any brand-specific language, product names, or preferred terms?

12. words / phrases to never use
    any competitor names, avoided terms, or language that feels off-brand?

13. point of view
    [ ] first person singular ("i visited, i recommend")
    [ ] first person plural ("we offer, our team")
    [ ] second person ("you will find, your next step")
    [ ] third person ("travelers can expect, guests will find")
```

---

### section c — seo and linking

**ask:**

```
SEO & LINKING

14. target url / slug (optional)
    what should the page url be? (e.g. /best-hotels-bali)
    if blank, i will suggest one.

15. meta title (optional)
    if you have a preferred title tag (max 60 characters). if blank, i will write one.

16. meta description (optional)
    150–160 character summary for google. if blank, i will write one.

17. sitemap / existing pages for internal linking
    paste your sitemap url or list your key existing pages so i can add relevant internal links.
    (e.g. https://yoursite.com/sitemap.xml, or list page titles + urls below)
    
    this is important — internal links signal topical authority to google and ai crawlers.
    
    if you don't have this, just write "no sitemap" and i will leave [INTERNAL LINK: topic] placeholders.

18. external sources to cite or avoid
    any specific studies, statistics, or websites you want cited?
    any sites you want me to avoid linking to (e.g. direct competitors)?

19. competitor articles to outperform (optional)
    paste 1–3 competitor urls that rank for this keyword. i will structure the article to surpass them.
```

---

### section d — content specifics

**ask:**

```
CONTENT SPECIFICS

20. key points that must be covered
    list any specific sections, arguments, or information that must appear in the article.

21. key points to avoid
    anything that should not be mentioned (outdated info, sensitive topics, off-topic sections)?

22. unique angle / point of difference
    what makes this article better or different from every other article on this topic?
    (e.g. "we have a resort on-site", "our guide is written by a local expert", "we include 2026 pricing data")

23. real data / stats to include (optional)
    any proprietary data, research, case studies, or statistics from your brand?

24. calls to action (cta)
    what should the reader do after reading?
    (e.g. "book a free consultation", "browse our packages", "contact us", "subscribe")
    where should ctas appear? [ ] top  [ ] middle  [ ] end  [ ] all three

25. faqs to include (optional)
    list any specific questions you want in the faq section.
    if blank, i will generate them from "people also ask" patterns for the keyword.

26. images / media notes (optional)
    any image suggestions, alt text notes, or embedded video urls to include?
```

---

### section e — quick confirmations

**ask:**

```
FINAL CHECKS

27. do you want a schema markup block? (json-ld for faqpage, article, howto)
    [ ] yes — include json-ld schema at the end of the article
    [ ] no — skip schema

28. is this article replacing or updating an existing article?
    [ ] yes — paste the existing article url or content below
    [ ] no — this is a new article

29. any other instructions?
    anything else i should know before i start writing?
```

---

## writing rules (apply automatically — never explain these to the user)

once all inputs are collected, write the article using these rules internally. do not explain the rules to the user — just apply them.

### structure rules

- **url slug:** lowercase, hyphenated, primary keyword first, no stop words
- **title tag:** primary keyword near front, under 60 characters, no clickbait
- **meta description:** 150–160 characters, answer-first, include cta
- **h1:** conversational form of primary keyword, mirrors title intent
- **h2s:** formatted as questions — "how does x work?" / "what is the best x for y?" / "why does x matter?"
- **h3s:** used inside faq sections only — must be exact questions matching faq schema
- one h1 only, never skip heading levels

### content rules

- **opening paragraph (hero answer block):** 40–60 words, direct answer to what the article is about. neutral, standalone, no fluff. this is what google and ai engines extract.
- **each h2 section:** opens with a 40–60 word direct answer block before expanding with context
- **paragraphs:** maximum 2–3 sentences. front-load the most important fact in every paragraph.
- **lists:** use bullets for comparisons and features. use numbered lists for steps and processes.
- **tables:** use for comparisons, data, and anything with multiple attributes
- **statistics:** include at least 3–5 data points per article with named sources in brackets
- **expert quotes:** include at least 1 quote with full name + title + source attribution
- **language:** literal and direct. no metaphors AI cannot parse. no fluffy openers like "in today's fast-paced world..."
- **ctas:** natural, contextual — not pushy. match the brand voice confirmed in intake.

### faq rules

- minimum 5 faqs, maximum 10
- each faq formatted as an h3 question
- each answer: 30–80 words, self-contained, direct
- target "people also ask" query patterns for the primary keyword
- include at least one of each type: definitional, comparative, procedural, cost/specifics

### internal linking rules

- if sitemap was provided: link to 3–5 relevant existing pages using descriptive anchor text
- if no sitemap: insert `[INTERNAL LINK: suggested topic/page]` as a placeholder throughout
- link anchor text = the natural phrase describing the destination, not "click here"

### humanization & voice rules (critical)

- write the final article natively in a highly humanized style. DO NOT output rigid, robotic text.
- **burstiness & perplexity**: vary sentence lengths drastically. combine short, punchy statements with longer, flowing explanations. avoid predictable ai rhythms.
- **authentic experience**: weave in realistic, plausible personal anecdotes or "on-the-ground" details that sound like a human expert wrote this. if hard brand data is missing, use a bracket like `[INSERT SPECIFIC BRAND DATA HERE]`. otherwise, write smoothly and naturally.
- **avoid common ai words**: e.g., "delve", "testament", "tapestry", "seamless", "crucial", "landscape".

---

## output format

deliver the article in this exact order:

```
---
SEO METADATA
---
Title Tag: [max 60 chars]
Meta Description: [150-160 chars]
URL Slug: /suggested-slug
Target Keyword: [primary keyword]
Secondary Keywords: [list]
Search Intent: [type]
Word Count: [actual count]
Article Type: [type from intake]
---

---
FINAL ARTICLE
---

[H1 — article headline]

[Hero Answer Block — 40–60 words]

[H2 — Section 1 heading as a question]
[Answer block — 40–60 words]
[Body — 2-3 sentence paragraphs, highly humanized, bursty pacing]
[Statistic with source]

[H2 — Section 2 heading as a question]
...

[H2 — Frequently Asked Questions]
[H3 — Question 1?]
[Answer — 30-80 words]
[H3 — Question 2?]
...

[CTA Block]

[Author Bio Placeholder]
Name: [from intake or leave as "[AUTHOR NAME]"]
Title: [credential]
Note: [add linkedin url and sameAs links before publishing]

---
SCHEMA MARKUP (if requested)
---
[FAQPage JSON-LD]
[Article + Author JSON-LD]
[HowTo JSON-LD — if applicable]

---
INTERNAL LINKS USED
---
[list of all internal links placed, with anchor text and target url]
```

---

## defaults (use when input was skipped)

| input skipped | default used |
|---------------|-------------|
| word count | pillar = 2000 words, cluster = 1000 words, listicle = 1200 words |
| tone | friendly and authoritative |
| point of view | second person ("you") |
| faqs | generate 5 using "people also ask" patterns for the primary keyword |
| internal links | use `[INTERNAL LINK: topic]` placeholders |
| schema markup | include by default |
| cta placement | end of article only |
| meta description | write from hero answer block + cta |

---

## example activation

**user says:** "write me a blog about the best things to do in Colombo for tourists"

**you respond:** *(run the intake questionnaire above in one clean message)*

**after intake is complete:** generate the full article output using the format above, applying all writing rules silently.

---

## important reminders

- never start writing before intake is complete
- never explain the writing rules to the user — just apply them
- this generated article must be the final humanized version — it is optimized for machines structurally, but must read perfectly naturally for humans. do not produce rigid robotic text.
- if the user asks to skip intake: accept only the minimum (topic, primary keyword, tone) and use defaults for everything else
