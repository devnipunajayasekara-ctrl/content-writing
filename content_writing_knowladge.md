# content writing skill: seo + geo + aeo article optimization (2026)

> **purpose:** dominate rankings across traditional search engines (seo), ai answer engines (aeo), and generative ai platforms (geo). this skill is your complete operating system for writing articles that get cited, ranked, and synthesized by every search layer. source: 21 curated research documents from the notebooklm "content writing" knowledge base.

---

## the 2026 search reality (why this skill exists)

the search landscape has fundamentally shifted. here is what the data says:

- **60–69% of searches now end in zero clicks** — users get answers directly from ai overviews, chatgpt, perplexity, and voice assistants without ever visiting a website
- **ai overviews surged 102%** from 6.49% to 13.14% in early 2025 and are still growing
- **position #1 ctr dropped 34.5%** as ai overviews push traditional links further down
- **chatgpt processes 10 million+ daily queries** and is now a primary discovery channel
- **ai-referred visitors convert at 5.53% vs 3.7% from traditional search** — higher quality traffic even in smaller volumes
- **businesses implementing combined seo + aeo see 54% improved ctr and 300% more ai citations within 6 months**

the old model: rank → get clicked → get traffic.
the new model: get cited → shape the conversation → get trusted.

you are no longer just writing for google. you are writing for a **cognitive ecosystem** made up of three distinct but interconnected layers:

| layer | platform | goal | success metric |
|-------|----------|------|----------------|
| **seo** (foundation) | google, bing | rank in serps | keyword rankings, organic traffic |
| **aeo** (extraction) | featured snippets, voice assistants, people also ask | be the direct answer | snippet ownership rate, ai overview inclusion |
| **geo** (synthesis) | chatgpt, gemini, perplexity, claude, copilot | be cited in ai-generated responses | share of model (som), citation frequency |

> **the architecture principle:** seo is the floor. aeo is the walls. geo is the ceiling. you cannot build the ceiling without the floor.

---

## phase 1 — pre-writing: keyword and entity research

### step 1.1 — start with entity mapping, not keywords

traditional keyword research is obsolete as a starting point. in 2026, you start with **entities** — real-world things with defined attributes that ai systems recognize.

**define your core entities first:**
- your brand / organization
- your key personnel (names, credentials, roles)
- your core products or services
- your industry category and topic pillars

then verify these entities are correctly mapped in:
- **google knowledge graph** (claim your knowledge panel)
- **wikipedia or wikidata** (create or verify your entry — ai systems lean heavily on wikipedia as a ground-truth source)
- **linkedin profiles** for key personnel
- **google business profile** if local

**why this matters:** if an ai system sees your founder's name consistently associated with your brand and expertise across dozens of independent sources, that is entity recognition in action. entity clarity increases ai citation likelihood by 35%+.

### step 1.2 — identify query fan-out (the ai keyword strategy)

when a user submits a complex prompt to chatgpt or perplexity, the ai **does not search the full prompt**. it breaks it into 1–3 smaller sub-queries called **"query fan-out."** your content must rank for these sub-queries.

**how to see exactly what an ai searches (grounding technique):**
1. go to chatgpt and type your target prompt
2. right-click → inspect → go to the "network" tab
3. copy the string after `/c/` in the url and paste it into the filter
4. refresh the page, click the orange bracket entry
5. go to "response" and search for the word **"queries"**
6. you will see the 1–3 exact searches chatgpt used to generate the answer

**target these sub-queries** in your page title, h1, url slug, and the opening paragraph. this is the single most powerful geo tactic for getting directly retrieved by ai systems.

### step 1.3 — long-tail conversational intent mapping

ai-assisted searches average **23 words** vs 4 words on traditional google. your keyword strategy must reflect this shift.

**how to find ai-assisted queries in google search console:**
1. go to google search console → performance → add filter → query
2. choose "custom (regex)"
3. paste: `(\b\w+\b\s){7,}`
4. hit apply → toggle on average position → scroll to queries

this filter isolates queries with 7+ words — a reliable proxy for ai-assisted or voice search behavior.

**intent mapping framework:**
- **informational intent** → "what is / how does / why does" → targets ai overviews + featured snippets
- **procedural intent** → "how to / step by step / guide to" → targets howto schema + voice assistants
- **commercial intent** → "best / top / vs / review" → targets ai shopping summaries + product schema
- **navigational intent** → branded queries → targets knowledge panels + entity recognition

**rule:** a query with 200 monthly searches and clear commercial intent is worth more than a query with 20,000 searches and zero purchase signal.

### step 1.4 — topic cluster and semantic footprint mapping

do not write isolated articles. build **knowledge hubs** — interconnected topic clusters that signal comprehensive topical authority to both google and ai systems.

**n-gram / bigram gap analysis workflow:**
1. use screaming frog's semantic analysis tool to extract 3-grams and 4-grams from your site
2. run the same analysis on a top competitor with more traffic
3. identify n-grams your competitor covers that you do not — these are your content gaps
4. cluster the gaps into topic demand groups using chatgpt
5. assign each gap to either: (a) optimize an existing page, or (b) create a new page

---

## phase 2 — article architecture

### step 2.1 — the master article structure template

every optimized article in 2026 follows this structure. do not deviate from it.

```
[url slug] — target the primary fan-out sub-query here
[title tag] — primary keyword + intent signal (max 60 characters)
[meta description] — 150-160 chars, answer-first, includes cta
[h1] — mirrors title, conversational form of primary query

[hero answer block] — 40-60 word direct answer to the article's core question
                      neutral, standalone, citation-friendly

[h2: question-based subheading #1]
  [answer block] — 40-60 words, direct answer to this h2's question
  [body] — 2-3 sentence paragraphs, facts front-loaded
  [data point / statistic with attribution]
  [expert quote with name + title + company]

[h2: question-based subheading #2]
  [answer block]
  [body]
  [bulleted list or numbered steps or comparison table]

[h2: how to / procedural section]
  [numbered step-by-step with clear action per step]

[h2: faq section]
  [h3: question 1?] → [direct answer, 30-80 words]
  [h3: question 2?] → [direct answer, 30-80 words]
  [h3: question 3?] → [direct answer, 30-80 words]
  [minimum 5 faqs, targeting "people also ask" queries]

[author bio block]
  name, credentials, professional links, sameAs properties

[schema markup] — json-ld in <head> or body
```

### step 2.2 — heading strategy

**the non-negotiable rules:**
- one h1 per page only — mirrors the primary search query
- use h2s as question-based section headers: "how does x work?", "what is the difference between x and y?", "why does x matter?"
- use h3s inside faqs — these must **exactly match** the "name" property in your faqpage schema
- each heading covers exactly one topic or question — ai systems use headings to understand section scope

**heading hierarchy:** h1 → h2 → h3 (logical only, never skip levels)

### step 2.3 — url and meta optimization

- **url slug:** use the primary fan-out sub-query, lowercase, hyphenated, no stop words
- **title tag:** primary keyword near the front, under 60 characters, avoid clickbait
- **meta description:** write the answer to the question in the first sentence (150-160 chars). this often becomes the ai overview snippet text.

---

## phase 3 — content writing rules

### step 3.1 — the answer-first framework (the single most important rule)

**every section that targets a question must open with a direct answer of 40–60 words.**

this answer block must be:
- **self-contained** — it should make complete sense without reading surrounding context
- **neutral** — avoid promotional language or jargon
- **literal** — state facts explicitly; ai systems struggle with metaphor and implication
- **citation-friendly** — structured as a clean, extractable unit

**why this works:** this structure serves featured snippet extraction (google grabs that opening paragraph), voice search (assistants read the first clean answer they find), and ai overview generation (llms pull verbatim text from well-structured answer blocks).

> **content audit test:** read your page and ask — "if someone asked the question this page targets, where exactly would the ai extract an answer from?" if you cannot point to a clean 40–60 word passage in the first two paragraphs of each section, you have an aeo gap to fix.

### step 3.2 — paragraph and sentence rules

| attribute | requirement |
|-----------|------------|
| paragraph length | 2–3 sentences maximum |
| sentence complexity | simple, active voice preferred |
| language | literal and direct — no metaphors, no jargon |
| fact placement | front-load every section — key information first |
| list usage | use bullets for features/comparisons, numbers for processes |

### step 3.3 — information gain: how to make ai cite you

ai systems reward **information gain** — content that provides unique, non-duplicative value compared to existing pages. if your article only repeats what competitors already published, you will not be cited.

**the geo citation boosters (princeton research data):**

| technique | citation rate boost | implementation rule |
|-----------|--------------------|--------------------|
| citing authoritative sources | **+40%** | link to academic research, official docs, industry publications |
| adding statistics and data | **+37%** | include specific numbers, percentages, named sources |
| including expert quotations | **+30%** | name + title + company attribution required |
| precise technical terminology | **+28%** | use industry-standard terms; avoid vague synonyms |

**how to implement:**
- include at least 3–5 statistics per article, each with an explicit source citation
- include at least 1–2 expert quotes with full attribution
- end each major claim with a source reference: "(source: gartner, november 2025)"
- provide proprietary data, original research, or first-hand experience that ai models cannot replicate

### step 3.4 — e-e-a-t: the authority signals that ai evaluates

with the internet saturated by ai-generated content, google's **e-e-a-t (experience, expertise, authoritativeness, trustworthiness)** framework has become the central pillar of search evaluation in 2026.

**experience (the primary differentiator):**
- include first-hand observations, real case studies, original testing results
- ai cannot replicate unique human experience — this is your competitive moat
- use "i tested this by...", "based on our data showing...", "in my experience..."

**expertise:**
- author bios must include verifiable credentials, years of experience, areas of specialization
- link all author bios to linkedin profiles and industry publications using the `sameAs` schema property
- author topics should be consistent across multiple publications (establishes expertise pattern)

**authoritativeness:**
- be cited by other authoritative sources (this is geo's "consensus signal" strategy)
- earn backlinks from high-authority industry publications
- maintain a wikipedia-adjacent digital footprint for your brand and key personnel

**trustworthiness:**
- use https, cite sources, display clear authorship on every article
- implement content credentials (c2pa) — a "digital nutrition label" that verifies content provenance
- maintain consistent messaging across all pages, schemas, and external citations

### step 3.5 — writing style for ai parsability

ai systems interpret content differently than humans. they scan for extractable, machine-readable units of information.

**write like a human, structure like a machine:**
- use conversational, natural language — but organize it in a rigid, scannable hierarchy
- define technical terms in-line the first time you use them
- avoid accordion dropdowns, tabs, or interactive elements that hide content (ai crawlers cannot click)
- keep important content in server-rendered html — do not rely on javascript to load key text
- lead with the answer, follow with the context

### step 3.6 — content freshness (ai's recency bias)

ai systems have a significant recency bias. data shows that when content becomes more than **3 months old**, ai citation rates drop sharply.

**freshness protocol:**
- add a visible "last updated: [date]" near the top of each article
- schedule all high-priority articles for a quarterly review
- on each update: refresh statistics, update examples, note new developments
- add a brief "what's new in [year]" section to existing pillar content

---

## phase 4 — faq section (mandatory)

the faq section is the **highest-roi aeo investment** in your article. do not skip it.

**why faqs dominate:**
- pages with faqpage schema achieve citation rates **2.7–3x higher** than pages without it
- faqs directly mirror how llms process queries — question-answering is their native format
- faqs capture "people also ask" boxes, voice search slots, and ai overview inclusion simultaneously

**faq writing rules:**
- minimum of 5 faqs per article (8–10 for pillar/flagship content)
- each faq question formatted as an h3 tag
- each faq answer: 30–80 words, direct, self-contained
- the h3 question text must **exactly match** the "name" property in your faqpage json-ld schema
- target "people also ask" queries from google for your primary keyword
- target long-tail conversational queries (20+ words) that mirror how users ask ai assistants

**faq types to include:**
1. definitional: "what is [topic]?" → captures ai overview definitions
2. comparative: "what is the difference between x and y?" → captures comparison queries
3. procedural: "how do i [do x]?" → captures howto intent
4. cost/specifics: "how much does x cost?" → captures commercial intent
5. troubleshooting: "why is x not working?" → captures problem-intent queries

---

## phase 5 — schema markup (mandatory json-ld)

schema markup is no longer an afterthought. in 2026, it is the **primary mechanism** through which ai agents read, verify, and cite your content. the five essential tags:

### schema tag 1: faqpage (conversational anchor)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "exactly match your h3 question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "your 30-80 word answer that exactly matches what is visible on the page."
      }
    }
  ]
}
```

**implementation rules:**
- only use if there is a single definitive answer per question (no opinion-based faqs)
- answers must be 30–80 words — too short gets ignored, too long loses extractability
- the "name" field must match the visible h3 heading text **exactly** (prevents manual action penalties for spammy markup)

### schema tag 2: howto (procedural guide)

use for any "how to" or step-by-step content. ai systems **preferentially cite** howto schema when generating instructional answers.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "how to [do the thing]",
  "step": [
    {
      "@type": "HowToStep",
      "name": "step name",
      "text": "exact instruction text matching what is visible on the page"
    }
  ]
}
```

**implementation rule:** every step in the schema must exactly match a visible step on the page.

### schema tag 3: article + author (credibility signal)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "your article title",
  "datePublished": "2026-04-12",
  "dateModified": "2026-04-12",
  "author": {
    "@type": "Person",
    "name": "author full name",
    "jobTitle": "professional title",
    "sameAs": [
      "https://www.linkedin.com/in/authorname",
      "https://authorwebsite.com/bio"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "your organization name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/logo.png"
    }
  }
}
```

**the `sameAs` property is critical** — it links author identity across the web, allowing ai systems to build a verified picture of the author's expertise.

### schema tag 4: organization (entity anchor)

implement this site-wide, typically in the footer or homepage. this is the foundational schema that makes all other content credible by connecting it to a verified entity.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "your organization name",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-xxx-xxx-xxxx",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/yourcompany",
    "https://twitter.com/yourcompany",
    "https://www.facebook.com/yourcompany"
  ]
}
```

### schema tag 5: product (commercial driver — for e-commerce)

for product or service pages targeted at purchase-intent queries:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "product name",
  "description": "product description",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "247"
  },
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

**important:** must include `aggregateRating` and `offers` (with price and currency) to be eligible for ai-powered shopping summaries.

### bonus schema: speakable (voice search)

implement to explicitly tell voice assistants which sections are suitable for narration.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-answer", ".key-definition"]
  }
}
```

**implementation rule:** target sections under 20 words for voice narration — brevity is critical for audio.

---

## phase 6 — technical foundations

these are prerequisites. aeo and geo cannot compensate for broken seo foundations.

### core web vitals 2026 thresholds

| metric | description | threshold |
|--------|-------------|-----------|
| **inp** (interaction to next paint) | user interactivity and responsiveness | < 200ms |
| **lcp** (largest contentful paint) | loading speed of main content | < 2.5 seconds |
| **cls** (cumulative layout shift) | visual stability during load | < 0.1 |

failing these thresholds disqualifies content from advanced ai-driven features, regardless of content quality.

### ai crawler accessibility checklist

- [ ] **robots.txt audit:** ensure gptbot, chatgpt-user, and other ai crawlers are not blocked
  - note: cloudflare recently changed its default configuration to block ai bots — check your cdn settings
  - verify by looking for "chatgpt-user" in your server logs
- [ ] **server-side rendering:** all critical content must be in the html returned by the server — not loaded via javascript
  - content behind interactive sliders, tabs, or accordions is invisible to ai crawlers
  - content behind logins, paywalls, or dropdowns will not be cited
- [ ] **https:** baseline trust signal for both users and ai evaluation systems
- [ ] **mobile-first:** majority of searches occur on smartphones; mobile usability is non-negotiable
- [ ] **llms.txt file:** consider creating an `llms.txt` file in your site root to help ai systems understand your site structure and preferred content organization

### multimodal optimization

search results in 2026 are multimodal. optimizing only text content limits your reach.

**image optimization:**
- every image must have a descriptive alt text that explains what the image shows in context
- use purpose-driven visuals — generic stock images confuse algorithms
- file names should include target keywords

**video optimization (youtube is the most cited site in ai search in 2026):**
- embed youtube videos in all pillar articles — increases dwell time and e-e-a-t signals
- use keyword-rich titles and detailed descriptions in youtube
- include a full transcript with timestamps
- **critical tactic:** say your target search prompts aloud in the video — ai models use video transcripts to extract citations for generated answers

**audio:**
- provide structured metadata for podcast episodes and audio content
- use speakable schema to surface audio-compatible answer sections

---

## phase 7 — authority building (geo consensus signals)

this is where geo diverges most from traditional seo. ai systems form views about topics based on **what the collective web says**. if every credible source in your industry says your brand is a leader in x, that consensus gets you included in ai answers about x.

building consensus signals means:

- **digital pr:** earn brand mentions across news outlets, industry publications, and community forums — not just your own website. a brilliant article that lives only on your domain and is linked by nobody will not be included in ai syntheses
- **wikipedia presence:** if your brand is significant enough, a wikipedia page dramatically improves entity recognition. ai systems lean heavily on wikipedia as a ground-truth source
- **guest contributions:** publish articles under your authors' bylines on recognized industry publications. this extends their entity footprint across independent sources
- **partner citations:** encourage satisfied clients, partners, and industry peers to mention your brand in their content
- **backlink consistency:** traditional backlinks still matter as an authority signal — they just need to come from topically relevant, high-authority sources

**the wrong interpretation of geo:** thinking geo is only about what you write on your site. geo is about building a distributed digital footprint that proves to ai systems that your brand is a trusted leader — across many independent sources simultaneously.

---

## phase 8 — internal linking strategy

### pillar + cluster architecture

build every topic as a hub-and-spoke system:

1. **pillar page:** a comprehensive, long-form article covering the broad topic authoritatively (2,000–4,000+ words). this is your entity anchor for the topic.
2. **cluster pages:** focused articles that go deep on specific subtopics, each internally linking back to the pillar with descriptive anchor text
3. **the signal:** this interconnected structure tells both google and ai crawlers that your domain is the authoritative home for this subject area

### internal link rules
- link cluster pages to the pillar using the primary keyword as anchor text
- link related cluster pages to each other when contextually appropriate
- add contextual internal links to adjacent entities and topics within the same knowledge cluster
- every new article should link to at least 3–5 existing articles in the cluster

---

## phase 9 — post-publishing checklist

run through this checklist before and after every publish:

**content quality:**
- [ ] hero answer block is 40–60 words, neutral, self-contained
- [ ] every h2 section opens with a direct 40–60 word answer block
- [ ] paragraphs are 2–3 sentences maximum
- [ ] minimum 3–5 statistics with named source attributions
- [ ] minimum 1–2 expert quotes with full name + title + company
- [ ] minimum 5 faqs formatted as h3 questions with 30–80 word answers
- [ ] author bio present with credentials and sameAs links
- [ ] "last updated" date visible on the page

**schema markup:**
- [ ] faqpage json-ld present — h3 questions match "name" fields exactly
- [ ] article + author schema present with sameAs links
- [ ] howto schema present (if procedural content)
- [ ] organization schema present site-wide
- [ ] all schema validated with google's rich results test tool

**technical:**
- [ ] page scores acceptable on core web vitals (inp <200ms, lcp <2.5s, cls <0.1)
- [ ] all important content is in server-rendered html (not behind js)
- [ ] ai crawlers not blocked in robots.txt
- [ ] images have descriptive alt text
- [ ] page is mobile-optimized

**distribution:**
- [ ] article shared on linkedin (builds author entity footprint)
- [ ] youtube video created targeting the same prompts (say the prompt aloud in the video)
- [ ] submitted to relevant industry publications or repurposed as guest content

---

## phase 10 — measuring success (the 2026 kpi stack)

traditional traffic and ranking metrics are insufficient. you need a new measurement stack.

### the full 2026 kpi framework

| kpi | what it measures | how to track |
|-----|-----------------|--------------|
| **share of model (som)** | % of time your brand is cited in llm responses for target queries | manually query chatgpt, perplexity, gemini for 20–50 target queries; record citations; calculate: (your citations / total citations) × 100 |
| **ai referral traffic** | actual visits from ai platforms | google analytics 4 → explore → session source/medium → filter regex for "openai", "perplexity", "gemini" |
| **ai overview impression rate** | how often your content appears in google ai overviews | google search console → search type: discover / ai overviews |
| **snippet ownership rate** | % of target queries where you capture the featured snippet | track manually or via semrush / ahrefs |
| **citation sentiment** | whether ai describes your brand favorably | review citations in ai responses for positive/neutral/negative framing |
| **organic rankings** | traditional serp position | google search console, ahrefs, semrush |
| **organic traffic** | clicks from traditional serp | google search console |
| **content freshness score** | age of each high-priority article | internal audit: flag any article over 90 days old for review |

### som calculation formula

```
share of model = (your brand citations in ai responses / total citations in ai responses) × 100

measurement process:
1. identify 20–50 queries relevant to your target market
2. query each ai platform (chatgpt, perplexity, gemini, claude)
3. record which brands are cited or mentioned in each response
4. calculate your percentage
5. track monthly to measure trend
```

**som benchmarking example:**
| brand | citations (50 queries) | share of model |
|-------|----------------------|----------------|
| your brand | 12 | 24% |
| competitor a | 18 | 36% |
| competitor b | 10 | 20% |
| others | 10 | 20% |

### ai referral tracking setup (ga4)

1. go to google analytics → explore → start new exploration
2. set dimensions: session source / medium, page path + query string
3. set metrics: views, entrances
4. add filter: session source / medium matches regex: `openai|perplexity|gemini|chatgpt|claude`
5. review which pages are being surfaced by ai platforms

### ai-assisted search visibility (google search console)
1. go to search console → performance → add filter → query
2. choose "custom (regex)" → paste: `(\b\w+\b\s){7,}`
3. this isolates 7+ word queries — the fingerprint of ai-assisted search behavior

---

## quick reference: seo vs aeo vs geo comparison

| dimension | seo | aeo | geo |
|-----------|-----|-----|-----|
| core question | how do i rank? | how do i get cited as an answer? | how do i get selected by ai? |
| primary goal | rankings + clicks | featured in direct answers | inclusion in ai-synthesized responses |
| target platform | google, bing serps | ai overviews, snippets, voice | chatgpt, perplexity, gemini, claude |
| key signals | keywords, backlinks, cwv | structured data, faq schema, e-e-a-t | entity authority, citations, information gain |
| user action | user clicks a link | user reads answer without clicking | user receives ai-synthesized answer |
| content format wins | long-form, keyword-rich pages | concise, question-answer structured content | authoritative, well-cited, entity-rich content |
| success metric | ctr, rank position, traffic | snippet capture rate, voice coverage | citation share, ai mention rate, brand inclusion |

---

## the cardinal sins (what kills your visibility in 2026)

1. **hiding content in javascript** — ai crawlers read server html only. if it loads dynamically, it does not exist to ai
2. **blocking ai crawlers** — check robots.txt and cdn settings (especially cloudflare) for inadvertent ai bot blocking
3. **thin content** — surface-level commentary that repeats existing indexed information gets penalized by ai systems
4. **no author identity** — content without a clear, verifiable author struggles to rank in competitive niches
5. **old metrics only** — tracking only clicks and rankings while ignoring som and citation frequency means flying blind
6. **treating distribution as optional** — geo is a consensus problem. a brilliant article that lives only on your domain will not appear in ai syntheses
7. **content without freshness** — ai has a hard 3-month recency bias. stale content loses citation eligibility regardless of quality
8. **schema mismatch** — faq schema where the "name" field does not exactly match the visible h3 heading text triggers manual action penalties
9. **ignoring video** — youtube is the most cited site in ai search in 2026. no video strategy = reduced geo visibility
10. **silo thinking** — treating seo, aeo, and geo as separate strategies instead of integrated layers of the same goal

---

## knowledge base source

this skill is built from 21 curated research sources in the notebooklm "content writing" notebook:
- aeo trends 2026 (prodigmar)
- aeo vs seo vs geo: key differences (digital agency network)
- ai seo/geo/aeo: how to get shown in llms (edward sturm)
- answer engine optimization 2026: winning search (various)
- comprehensive strategies for integrated search excellence 2026
- geo guide 2026 (digital applied)
- generative engine optimization: the 2026 guide (various)
- schema markup for ai agents: the 5 tags you need (2026)
- seo in 2026: data-driven strategies (alm corp)
- seo vs aeo vs geo: a 2026 roadmap
- search everywhere optimization (digital marketing institute)
- princeton university geo research (aggarwal et al.)
- and 9 additional supporting sources
