/* =========================================================
   ArticleCraft — app.js
   Multi-step wizard + prompt generator
   ========================================================= */

'use strict';

// ── State ──────────────────────────────────────────────────
const state = {
  currentStep: 1,
  totalSteps: 5,
  data: {}
};

// ── Step Definitions ────────────────────────────────────────
const STEPS = [
  {
    id: 1,
    label: 'Article Brief',
    title: 'Tell me about the article',
    desc: 'Start with the core details — topic, keywords, and who you\'re writing for.',
    fields: () => `
      <div class="form-grid">

        <div class="form-group">
          <label class="form-label"><span class="label-num">1</span> Topic / Working Title *</label>
          <input class="form-input" id="f-topic" type="text" placeholder="e.g. Best boutique hotels in Ubud, Bali" />
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label"><span class="label-num">2</span> Primary Keyword *</label>
            <input class="form-input" id="f-primary-kw" type="text" placeholder="e.g. best hotels in ubud bali" />
            <span class="form-hint">The main keyword this article must rank for.</span>
          </div>
          <div class="form-group">
            <label class="form-label"><span class="label-num">3</span> Target Word Count</label>
            <select class="form-select" id="f-wordcount">
              <option value="">Auto-decide based on type</option>
              <option value="800–1,000 words">800–1,000 words (short cluster)</option>
              <option value="1,200–1,500 words">1,200–1,500 words (standard)</option>
              <option value="2,000+ words">2,000+ words (pillar / flagship)</option>
              <option value="500 words">~500 words (thin support page)</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">4</span> Secondary / LSI Keywords</label>
          <input class="form-input" id="f-secondary-kw" type="text" placeholder="e.g. luxury resorts ubud, ubud accommodation, where to stay in ubud" />
          <span class="form-hint">Comma-separated. Related terms and variations to weave in naturally.</span>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">5</span> Target Audience</label>
          <input class="form-input" id="f-audience" type="text" placeholder="e.g. Couples planning a honeymoon, budget mid-range to luxury, UK & US readers" />
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">6</span> Search Intent</label>
          <div class="radio-group" id="f-intent">
            ${radioRow('intent','informational','Informational — reader wants to learn something')}
            ${radioRow('intent','navigational','Navigational — reader is looking for a specific thing')}
            ${radioRow('intent','commercial','Commercial — reader is comparing options before buying')}
            ${radioRow('intent','transactional','Transactional — reader is ready to book / buy now')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">7</span> Article Type</label>
          <div class="radio-group" id="f-arttype">
            ${radioRow('arttype','pillar','Pillar / Flagship article — comprehensive, 2000+ words')}
            ${radioRow('arttype','cluster','Cluster / Supporting article — focused subtopic, 800–1500 words')}
            ${radioRow('arttype','listicle','Listicle — "Top 10 / Best X for Y" format')}
            ${radioRow('arttype','howto','How-To Guide — step-by-step instructions')}
            ${radioRow('arttype','comparison','Comparison article — "X vs Y" format')}
            ${radioRow('arttype','local','Local SEO article — city or region specific')}
            ${radioRow('arttype','product','Product or Service Page')}
          </div>
        </div>

      </div>
    `
  },
  {
    id: 2,
    label: 'Brand & Tone',
    title: 'Brand voice and tonality',
    desc: 'How should the article sound? Define the brand personality so the AI writes in the right voice.',
    fields: () => `
      <div class="form-grid">

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label"><span class="label-num">8</span> Brand / Website Name *</label>
            <input class="form-input" id="f-brand" type="text" placeholder="e.g. Aditya Resort" />
          </div>
          <div class="form-group">
            <label class="form-label"><span class="label-num">9</span> Website URL (optional)</label>
            <input class="form-input" id="f-url" type="url" placeholder="e.g. https://adityaresort.com" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">10</span> Brand Voice / Tonality</label>
          <span class="form-hint">Select all that apply — this shapes how the article sounds.</span>
          <div class="tag-group" id="f-tone" style="margin-top:8px;">
            ${tagChip('Authoritative & Expert')}
            ${tagChip('Friendly & Conversational')}
            ${tagChip('Professional & Formal')}
            ${tagChip('Casual & Approachable')}
            ${tagChip('Bold & Direct')}
            ${tagChip('Empathetic & Supportive')}
            ${tagChip('Inspirational')}
            ${tagChip('Witty & Playful')}
            ${tagChip('Luxury & Sophisticated')}
            ${tagChip('Educational & Informative')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">11</span> Point of View</label>
          <div class="radio-group" id="f-pov">
            ${radioRow('pov','first-singular','First person singular — "I visited, I recommend, I tested"')}
            ${radioRow('pov','first-plural','First person plural — "We offer, our team, our experience"')}
            ${radioRow('pov','second','Second person — "You will find, your next step, you should" (recommended)')}
            ${radioRow('pov','third','Third person — "Travelers can expect, guests will find"')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">12</span> Words / Phrases to Always Use</label>
          <textarea class="form-textarea" id="f-words-use" rows="3" placeholder="e.g. boutique, curated, immersive, sanctuary, understated luxury&#10;Any brand-specific language or product names."></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">13</span> Words / Phrases to Never Use</label>
          <textarea class="form-textarea" id="f-words-avoid" rows="3" placeholder="e.g. cheap, budget, affordable, competitor brand names&#10;Anything that feels off-brand or should be avoided."></textarea>
        </div>

      </div>
    `
  },
  {
    id: 3,
    label: 'SEO & Linking',
    title: 'SEO signals and internal links',
    desc: 'These inputs directly affect how well the article ranks. The sitemap is especially important for internal linking strategy.',
    fields: () => `
      <div class="form-grid">

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label"><span class="label-num">14</span> Target URL Slug</label>
            <input class="form-input" id="f-slug" type="text" placeholder="e.g. /best-hotels-ubud-bali" />
            <span class="form-hint">Leave blank and I'll suggest one.</span>
          </div>
          <div class="form-group">
            <label class="form-label"><span class="label-num">15</span> Meta Title (max 60 chars)</label>
            <input class="form-input" id="f-meta-title" type="text" maxlength="60" placeholder="e.g. 10 Best Boutique Hotels in Ubud Bali (2026 Guide)" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">16</span> Meta Description (150–160 chars)</label>
          <textarea class="form-textarea" id="f-meta-desc" rows="2" maxlength="160" placeholder="A short, compelling summary for Google. If blank, I'll write one."></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">17</span> Sitemap / Existing Pages for Internal Linking</label>
          <textarea class="form-textarea" id="f-sitemap" rows="5"
            placeholder="Paste your sitemap URL: https://yoursite.com/sitemap.xml&#10;&#10;OR list key pages:&#10;- /blog/best-restaurants-ubud (Best Restaurants in Ubud)&#10;- /rooms/luxury-pool-villa (Luxury Pool Villa)&#10;- /experiences/yoga-retreat (Yoga Retreat Experiences)&#10;&#10;Write 'no sitemap' to use placeholders instead."></textarea>
          <span class="form-hint">⚡ Critical — this is how the AI places contextual internal links that boost topical authority.</span>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">18</span> Competitor Articles to Outperform</label>
          <textarea class="form-textarea" id="f-competitors" rows="3" placeholder="Paste 1–3 competitor URLs that currently rank for your keyword.&#10;The AI will structure the article to outrank them."></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">19</span> External Sources to Cite</label>
          <textarea class="form-textarea" id="f-sources" rows="2" placeholder="Any specific studies, statistics, or external websites to cite or reference. Optional."></textarea>
        </div>

      </div>
    `
  },
  {
    id: 4,
    label: 'Content Specifics',
    title: 'What goes inside the article',
    desc: 'Control the specific content — key points, unique angle, CTAs, and FAQs. The more detail here, the better the output.',
    fields: () => `
      <div class="form-grid">

        <div class="form-group">
          <label class="form-label"><span class="label-num">20</span> Key Points That Must Be Covered</label>
          <textarea class="form-textarea" id="f-must-cover" rows="4" placeholder="List topics, arguments, or sections that MUST appear.&#10;e.g.&#10;- Why Ubud is the best area for honeymooners&#10;- Top 10 hotels with private pool villas&#10;- What to know about booking directly vs OTAs&#10;- How much to budget"></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">21</span> Points to Avoid</label>
          <textarea class="form-textarea" id="f-avoid" rows="2" placeholder="Outdated info, sensitive topics, off-topic sections, competitor mentions to skip. Optional."></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">22</span> Unique Angle / Point of Difference *</label>
          <textarea class="form-textarea" id="f-angle" rows="3" placeholder="What makes THIS article better than every other article on this topic?&#10;e.g. Written by a local guide who has lived in Ubud for 8 years. Includes 2026 pricing data. Only covers hotels with direct booking discounts."></textarea>
          <span class="form-hint">🔥 This is your competitive moat — the reason AI systems will cite you over competitors.</span>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">23</span> Real Data / Stats to Include</label>
          <textarea class="form-textarea" id="f-data" rows="2" placeholder="Any proprietary data, research, or statistics from your brand. Optional.&#10;e.g. '94% of our guests book a return stay within 12 months'"></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">24</span> Call to Action (CTA)</label>
          <div class="form-grid-2">
            <input class="form-input" id="f-cta-text" type="text" placeholder="e.g. Book your stay directly" />
            <select class="form-select" id="f-cta-placement">
              <option value="end">End of article only</option>
              <option value="middle-end">Middle + End</option>
              <option value="all">Top + Middle + End</option>
              <option value="none">No CTA</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">25</span> Specific FAQs to Include</label>
          <textarea class="form-textarea" id="f-faqs" rows="4" placeholder="List any specific FAQ questions you want answered.&#10;Leave blank and I'll generate 7 FAQs from People Also Ask patterns.&#10;&#10;e.g.&#10;- What is the best time to visit Ubud?&#10;- Are boutique hotels cheaper than big chain hotels in Bali?&#10;- Do Ubud hotels include breakfast?"></textarea>
        </div>

      </div>
    `
  },
  {
    id: 5,
    label: 'Final Settings',
    title: 'Final settings and output preferences',
    desc: 'Last few options before generating your article brief.',
    fields: () => `
      <div class="form-grid">

        <div class="form-group">
          <label class="form-label"><span class="label-num">26</span> Schema Markup</label>
          <span class="form-hint">JSON-LD structured data at the end of the article (FAQPage, Article + Author, HowTo if applicable).</span>
          <div class="radio-group" id="f-schema" style="margin-top:8px;">
            ${radioRow('schema','yes','Yes — include JSON-LD schema markup (recommended)')}
            ${radioRow('schema','no','No — skip schema markup')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">27</span> Is this replacing an existing article?</label>
          <div class="radio-group" id="f-update">
            ${radioRow('update','no','No — this is a brand new article')}
            ${radioRow('update','yes','Yes — updating / replacing an existing article')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">28</span> Existing Article URL (if updating)</label>
          <input class="form-input" id="f-existing-url" type="url" placeholder="https://yoursite.com/existing-article" />
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">29</span> Humanization Style</label>
          <span class="form-hint">After the AI writes the draft, which humanization approach will you use?</span>
          <div class="radio-group" id="f-humanize" style="margin-top:8px;">
            ${radioRow('humanize','standard','Standard — light humanization, keep it mostly AI-structured')}
            ${radioRow('humanize','deep','Deep humanization — heavy rewrite to sound authentically human')}
            ${radioRow('humanize','voice','Voice-first — rewrite in a strong personal voice with opinions')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="label-num">30</span> Any Other Instructions</label>
          <textarea class="form-textarea" id="f-extra" rows="3" placeholder="Anything else the AI should know before writing.&#10;e.g. Write in British English. Avoid mentioning Chain Hotel XYZ. Include a comparison table of the top 5 hotels."></textarea>
        </div>

      </div>
    `
  }
];

// ── Helpers ─────────────────────────────────────────────────
function radioRow(name, value, label) {
  return `
    <label class="check-row" data-group="${name}" data-value="${value}">
      <input type="radio" name="${name}" value="${value}" />
      <span class="radio-box"></span>
      <span>${label}</span>
    </label>`;
}

function tagChip(label) {
  return `<span class="tag-chip" data-label="${label}">${label}</span>`;
}

function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  const heroSection    = document.getElementById('hero-section');
  const wizardWrapper  = document.getElementById('wizard-wrapper');
  const outputSection  = document.getElementById('output-section');
  const startBtn       = document.getElementById('start-btn');
  const nextBtn        = document.getElementById('next-btn');
  const prevBtn        = document.getElementById('prev-btn');
  const navInfo        = document.getElementById('nav-info');
  const progressFill   = document.getElementById('progress-fill');
  const progressSteps  = document.getElementById('progress-steps');
  const copyBtn        = document.getElementById('copy-btn');
  const copyInlineBtn  = document.getElementById('copy-inline-btn');
  const restartBtn     = document.getElementById('restart-btn');
  const outputStats    = document.getElementById('output-stats-row');

  // We are not targeting #prompt-content for the prompt anymore, as the UI was changed.

  // Build progress step indicators
  STEPS.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'progress-step';
    el.id = `pstep-${s.id}`;
    el.innerHTML = `<span class="step-num">${s.id}</span><span class="step-label">${s.label}</span>`;
    progressSteps.appendChild(el);
  });

  // Render all step panels
  STEPS.forEach(s => {
    const panel = document.getElementById(`step-${s.id}`);
    panel.innerHTML = `
      <div class="step-title">${s.title}</div>
      <p class="step-desc">${s.desc}</p>
      ${s.fields()}
    `;
    attachInteractivity(panel);
  });

  // ── Start ──
  startBtn.addEventListener('click', () => {
    heroSection.style.display = 'none';
    wizardWrapper.style.display = 'block';
    goToStep(1);
  });

  // ── Navigation ──
  nextBtn.addEventListener('click', () => {
    if (state.currentStep < state.totalSteps) {
      collectStepData(state.currentStep);
      goToStep(state.currentStep + 1);
    } else {
      collectStepData(state.currentStep);
      generateOutput();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (state.currentStep > 1) {
      goToStep(state.currentStep - 1);
    } else {
      wizardWrapper.style.display = 'none';
      heroSection.style.display = 'flex';
    }
  });

  // ── Restart ──
  restartBtn.addEventListener('click', () => {
    state.data = {};
    state.currentStep = 1;
    outputSection.style.display = 'none';
    heroSection.style.display = 'flex';
  });

  // ── Copy buttons ──
  function doCopy() {
    const text = document.getElementById('tab-raw').textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = '✓ Copied!';
      showToast('Final Article copied to clipboard!');
      setTimeout(() => {
        copyBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Content`;
      }, 2500);
    });
  }
  copyBtn.addEventListener('click', doCopy);

  // ── Step management ──
  function goToStep(n) {
    // Hide all panels
    STEPS.forEach(s => {
      document.getElementById(`step-${s.id}`).classList.remove('active');
      const ps = document.getElementById(`pstep-${s.id}`);
      ps.classList.remove('active', 'done');
      if (s.id < n) ps.classList.add('done');
      if (s.id === n) ps.classList.add('active');
    });

    document.getElementById(`step-${n}`).classList.add('active');
    state.currentStep = n;

    // Progress bar
    const pct = ((n - 1) / (state.totalSteps - 1)) * 100;
    progressFill.style.width = Math.min(pct, 100) + '%';

    // Nav
    navInfo.textContent = `Step ${n} of ${state.totalSteps}`;
    prevBtn.style.visibility = n === 1 ? 'hidden' : 'visible';
    if (n === state.totalSteps) {
      nextBtn.innerHTML = `Generate Article Brief <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      nextBtn.style.background = 'linear-gradient(135deg, #059669, #0d9488)';
      nextBtn.style.boxShadow = '0 4px 20px rgba(5,150,105,0.35)';
    } else {
      nextBtn.innerHTML = `Next Step <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      nextBtn.style.background = '';
      nextBtn.style.boxShadow = '';
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Collect data from current step ──
  function collectStepData(step) {
    const d = state.data;

    if (step === 1) {
      d.topic       = val('f-topic');
      d.primaryKw   = val('f-primary-kw');
      d.secondaryKw = val('f-secondary-kw');
      d.audience    = val('f-audience');
      d.wordcount   = val('f-wordcount');
      d.intent      = radioVal('intent');
      d.arttype     = radioVal('arttype');
    }
    if (step === 2) {
      d.brand       = val('f-brand');
      d.url         = val('f-url');
      d.tone        = getTagChips('f-tone');
      d.pov         = radioVal('pov');
      d.wordsUse    = val('f-words-use');
      d.wordsAvoid  = val('f-words-avoid');
    }
    if (step === 3) {
      d.slug        = val('f-slug');
      d.metaTitle   = val('f-meta-title');
      d.metaDesc    = val('f-meta-desc');
      d.sitemap     = val('f-sitemap');
      d.competitors = val('f-competitors');
      d.sources     = val('f-sources');
    }
    if (step === 4) {
      d.mustCover   = val('f-must-cover');
      d.avoid       = val('f-avoid');
      d.angle       = val('f-angle');
      d.data        = val('f-data');
      d.ctaText     = val('f-cta-text');
      d.ctaPlace    = val('f-cta-placement');
      d.faqs        = val('f-faqs');
    }
    if (step === 5) {
      d.schema      = radioVal('schema');
      d.update      = radioVal('update');
      d.existingUrl = val('f-existing-url');
      d.humanize    = radioVal('humanize');
      d.extra       = val('f-extra');
    }
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function radioVal(name) {
    const sel = document.querySelector(`.check-row.selected[data-group="${name}"]`);
    return sel ? sel.dataset.value : '';
  }

  function getTagChips(id) {
    const chips = document.querySelectorAll(`#${id} .tag-chip.selected`);
    return Array.from(chips).map(c => c.dataset.label).join(', ');
  }

  // ── Attach interactivity to a panel ──
  function attachInteractivity(panel) {
    // Radio rows
    panel.querySelectorAll('.check-row[data-group]').forEach(row => {
      row.addEventListener('click', () => {
        const group = row.dataset.group;
        document.querySelectorAll(`.check-row[data-group="${group}"]`).forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
      });
    });

    // Tag chips
    panel.querySelectorAll('.tag-chip').forEach(chip => {
      chip.addEventListener('click', () => chip.classList.toggle('selected'));
    });
  }

  // ── Modals & API Key ─────────────────────────────────────
  const openSettingsBtn = document.getElementById('open-settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const closeSettingsBtn = document.getElementById('close-settings-btn');
  const saveSettingsBtn = document.getElementById('save-settings-btn');
  const apiKeyInput = document.getElementById('api-key-input');
  
  // Load saved key
  const savedKey = localStorage.getItem('articlecraft_api_key');
  if(savedKey) apiKeyInput.value = savedKey;

  openSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'flex';
  });
  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
  });
  saveSettingsBtn.addEventListener('click', () => {
    localStorage.setItem('articlecraft_api_key', apiKeyInput.value.trim());
    settingsModal.style.display = 'none';
    showToast('API Key saved successfully!');
  });

  // Output Tabs
  document.querySelectorAll('.t-tab').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.t-tab').forEach(b => b.classList.remove('active'));
      t.classList.add('active');
      document.getElementById('tab-render').style.display = 'none';
      document.getElementById('tab-raw').style.display = 'none';
      document.getElementById(t.dataset.target).style.display = 'block';
    });
  });

  // ── Generate Output ──────────────────────────────────────
  async function generateOutput() {
    const key = localStorage.getItem('articlecraft_api_key');
    if(!key || key.trim() === '') {
      settingsModal.style.display = 'flex';
      // Force user to save key before proceeding
      return;
    }

    wizardWrapper.style.display = 'none';
    const loader = document.getElementById('loading-overlay');
    loader.style.display = 'flex';

    const d = state.data;
    const prompt = buildPrompt(d);

    try {
      // Stage 1: Generate SEO Draft
      document.getElementById('loading-title').textContent = 'Stage 1: Generating SEO Outline & Draft...';
      const r1 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${key}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 
            contents: [{ role:'user', parts: [{ text: prompt }] }]
          })
      });
      const d1 = await r1.json();
      if(d1.error) throw new Error(d1.error.message);
      const draft = d1.candidates[0].content.parts[0].text;
      
      // Stage 2: Humanize Draft
      document.getElementById('loading-title').textContent = 'Stage 2: Applying Humanization Skill...';
      
      let humanizeSkillContent = "";
      try {
        const res = await fetch('humanize_skill.md');
        if (res.ok) {
          humanizeSkillContent = await res.text();
        } else {
          throw new Error('Failed to fetch humanize_skill.md');
        }
      } catch (e) {
        console.warn('Could not fetch humanize_skill.md, using minimal fallback.', e);
        humanizeSkillContent = `You are an expert humanizer and content editor. Your job is to take an AI draft and rewrite it to be 100% human-sounding and undetectable by AI detectors.
Apply these rules strictly:
1. Kill the buzzwords. If "delve", "tapestry", "synergy", "landscape", "unwavering", "transformative", or "vital" appear, you've failed.
2. Vary your rhythm. Short sentence. Then a long, winding one. Then short again.
3. Use contractions ("don't" not "do not", "it's" not "it is").
4. Break grammar rules strategically (start with "And" or "But").
5. Add plausible personal anecdotes or authoritative expert statements.
6. Remove em-dashes (—). Replace with space-dash-space ( - ).
7. Eradicate transition fluff ("Moreover", "Furthermore", "In conclusion", "Additionally").
8. Do not use Bold + Colon list formats.
9. Have opinions. Be bold or be boring.`;
      }

      const humanizeInstruction = `You are an expert humanizer and content editor. 
Your job is to rewrite the provided AI draft to be 100% natural, human-sounding, and pass AI detectors, applying the following rules and framework strictly:

${humanizeSkillContent}`;

      const userMessage = `Here is the SEO structured draft. Please rewrite the actual text and body of the article completely to sound natively human. KEEP ALL HEADINGS and SEO METADATA precisely but humanize the core text strings.\n\n### DRAFT ###\n${draft}`;

      const r2 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${key}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 
              systemInstruction: {
                parts: [{ text: humanizeInstruction }]
              },
              contents: [{
                role: 'user', 
                parts: [{ text: userMessage }]
              }],
              generationConfig: {
                temperature: 0.8
              }
          })
      });
      const d2 = await r2.json();
      if(d2.error) throw new Error(d2.error.message);
      
      const finalRaw = d2.candidates[0].content.parts[0].text;
      
      // Render
      document.getElementById('tab-render').innerHTML = marked.parse(finalRaw);
      document.getElementById('tab-raw').textContent = finalRaw;
      
      loader.style.display = 'none';
      outputSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch(err) {
      loader.style.display = 'none';
      alert('API Error: ' + err.message);
      wizardWrapper.style.display = 'block'; // Fall back
      return;
    }

    // Stats chips
    const chips = [
      { label: 'Topic', val: d.topic || '—' },
      { label: 'Keyword', val: d.primaryKw || '—' },
      { label: 'Type', val: formatarttype(d.arttype) || '—' },
      { label: 'Tone', val: d.tone ? d.tone.split(',')[0] : '—' },
      { label: 'Brand', val: d.brand || '—' },
    ];
    outputStats.innerHTML = chips.map(c =>
      `<div class="output-stat-chip"><strong>${c.label}:</strong> ${c.val}</div>`
    ).join('');
  }

  function formatартtype(t) {
    const map = {
      pillar: 'Pillar Article', cluster: 'Cluster Article', listicle: 'Listicle',
      howto: 'How-To Guide', comparison: 'Comparison', local: 'Local SEO', product: 'Product Page'
    };
    return map[t] || t;
  }

  // ── Prompt Builder ───────────────────────────────────────
  function buildPrompt(d) {
    const or = (v, fallback) => v && v.trim() ? v.trim() : fallback;
    const opt = (label, v) => v && v.trim() ? `${label}: ${v.trim()}` : '';

    const intentMap = {
      informational: 'Informational (reader wants to learn)',
      navigational:  'Navigational (reader is looking for a specific thing)',
      commercial:    'Commercial (reader is comparing options)',
      transactional: 'Transactional (reader is ready to buy/book)'
    };
    const artMap = {
      pillar: 'Pillar / Flagship article (comprehensive, 2000+ words)',
      cluster: 'Cluster / Supporting article (focused subtopic, 800–1500 words)',
      listicle: 'Listicle ("Top 10 / Best X for Y" format)',
      howto: 'How-To Guide (step-by-step)',
      comparison: 'Comparison article ("X vs Y")',
      local: 'Local SEO article (city/region specific)',
      product: 'Product or Service Page'
    };
    const povMap = {
      'first-singular': 'First person singular ("I visited, I recommend")',
      'first-plural': 'First person plural ("We offer, our experience")',
      'second': 'Second person ("You will find, your next step")',
      'third': 'Third person ("Travelers can expect")'
    };
    const humanMap = {
      standard: 'Standard humanization (light rewrite)',
      deep: 'Deep humanization (heavy rewrite for authentic human voice)',
      'voice-first': 'Voice-first (strong personal voice, opinions, standout perspective)'
    };

    const sitemapBlock = d.sitemap && d.sitemap !== 'no sitemap' && d.sitemap.trim()
      ? `Here are my existing pages. Use them to add contextual internal links with descriptive anchor text:\n${d.sitemap}`
      : `No sitemap provided. Use [INTERNAL LINK: relevant topic] placeholders throughout where internal links would be appropriate.`;

    const faqBlock = d.faqs && d.faqs.trim()
      ? `Include a FAQ section with AT LEAST these specific questions (add more if needed):\n${d.faqs}`
      : `Generate a FAQ section with 7 questions based on "People Also Ask" patterns for the primary keyword. Include definitional, comparative, procedural, cost, and troubleshooting question types.`;

    const schemaBlock = d.schema !== 'no'
      ? `Include JSON-LD schema markup at the end of the article for: FAQPage, Article + Author${d.arttype === 'howto' ? ', HowTo' : ''}. Ensure FAQ schema "name" fields exactly match the visible H3 question text.`
      : `Skip schema markup.`;

    const competitorBlock = d.competitors && d.competitors.trim()
      ? `These competitor articles currently rank for this keyword. Analyze their structure and ensure this article is more comprehensive, better structured, and more answer-rich than:\n${d.competitors}`
      : '';

    const updateBlock = d.update === 'yes' && d.existingUrl
      ? `This article is UPDATING an existing page: ${d.existingUrl}. Preserve the URL slug if provided. Improve and restructure the content rather than starting from scratch.`
      : '';

    const humanizeBlock = d.humanize
      ? `\nHUMANIZATION & VOICE RULES (CRITICAL):
- Approach: ${humanMap[d.humanize] || d.humanize}.
- Because this is a two-step API generation, output structural markers like [HUMANIZE: PERSONAL EXPERIENCE] or [HUMANIZE: EXPERT OPINION] where the humanization pass should inject bold claims or anecdotes.`
      : '';

    const prompt = `You are an expert SEO, GEO, and AEO content writer. Write a fully structured, optimized article draft using the brief below.

════════════════════════════════════════
ARTICLE BRIEF
════════════════════════════════════════

TOPIC: ${or(d.topic, '[No topic provided]')}
PRIMARY KEYWORD: ${or(d.primaryKw, '[No keyword provided]')}
${d.secondaryKw ? `SECONDARY KEYWORDS: ${d.secondaryKw}` : ''}
TARGET AUDIENCE: ${or(d.audience, 'General readers interested in this topic')}
SEARCH INTENT: ${intentMap[d.intent] || or(d.intent, 'Informational')}
ARTICLE TYPE: ${artMap[d.arttype] || or(d.arttype, 'Standard blog article')}
TARGET WORD COUNT: ${or(d.wordcount, 'Auto-decide based on article type and competitive landscape')}

════════════════════════════════════════
BRAND & VOICE
════════════════════════════════════════

BRAND: ${or(d.brand, '[Not provided]')}
${d.url ? `WEBSITE: ${d.url}` : ''}
TONE / VOICE: ${or(d.tone, 'Friendly, informative, and authoritative')}
POINT OF VIEW: ${povMap[d.pov] || or(d.pov, 'Second person ("you")')}
${d.wordsUse ? `ALWAYS USE: ${d.wordsUse}` : ''}
${d.wordsAvoid ? `NEVER USE: ${d.wordsAvoid}` : ''}

════════════════════════════════════════
SEO & META
════════════════════════════════════════

${d.slug ? `URL SLUG: ${d.slug}` : 'URL SLUG: Suggest an optimized slug based on the primary keyword.'}
${d.metaTitle ? `META TITLE: ${d.metaTitle}` : 'META TITLE: Write an optimized meta title (max 60 characters, primary keyword near the front).'}
${d.metaDesc ? `META DESCRIPTION: ${d.metaDesc}` : 'META DESCRIPTION: Write an answer-first meta description (150–160 characters).'}

INTERNAL LINKING:
${sitemapBlock}

${competitorBlock}
${d.sources ? `EXTERNAL SOURCES TO CITE: ${d.sources}` : ''}

════════════════════════════════════════
CONTENT REQUIREMENTS
════════════════════════════════════════

${d.mustCover ? `MUST COVER THESE POINTS:\n${d.mustCover}` : ''}
${d.avoid ? `AVOID / DO NOT INCLUDE:\n${d.avoid}` : ''}

UNIQUE ANGLE & DIFFERENTIATOR:
${or(d.angle, 'Make this the most comprehensive, well-structured, and answer-rich article on this topic. Include more specific detail, better organization, and more actionable advice than any competing article.')}

${d.data ? `REAL DATA / STATS TO USE:\n${d.data}` : ''}

CTA: ${or(d.ctaText, 'Include a contextual call to action')}
CTA PLACEMENT: ${d.ctaPlace || 'End of article'}

${updateBlock}
${d.extra ? `ADDITIONAL INSTRUCTIONS:\n${d.extra}` : ''}

════════════════════════════════════════
FAQ REQUIREMENTS
════════════════════════════════════════

${faqBlock}

════════════════════════════════════════
WRITING RULES (apply silently)
════════════════════════════════════════

STRUCTURE:
- Open with a Hero Answer Block: 40–60 words, direct answer to the article's core question. Neutral, standalone, citation-friendly.
- Use H2s formatted as natural-language questions ("How does X work?", "What is the best X for Y?")
- Each H2 section opens with a 40–60 word direct answer before expanding with context and data
- H3s used for FAQ questions only — these must be exact question text
- Paragraphs: maximum 2–3 sentences. Front-load the most important fact.
- Use bullet points for features and comparisons. Use numbered lists for steps and processes.
- Use comparison tables where data benefits from it.

CONTENT QUALITY:
- Include at least 3–5 statistics with named source attributions
- Include at least 1 expert quote with full name + title attribution
- Use literal, direct language — no metaphors AI cannot parse
- No fluffy openers like "In today's fast-paced world..."
- Define technical terms inline the first time they appear
- Front-load every section — key information always first

${humanizeBlock}

════════════════════════════════════════
OUTPUT FORMAT
════════════════════════════════════════

Deliver the output in this exact order:

---
SEO METADATA
---
Title Tag: [max 60 chars]
Meta Description: [150–160 chars]
URL Slug: /suggested-slug
Target Keyword: [primary]
Secondary Keywords: [list]
Search Intent: [type]
Word Count: [approximate]
Article Type: [type]

---
ARTICLE
---

[H1 — Article Headline]

[Hero Answer Block — 40–60 words]

[H2 — Section 1 as a question]
[Answer block — 40–60 words]
[Body with facts, stats, lists]

[Continue all sections...]

[H2 — Frequently Asked Questions]
[H3 — Question 1?]
[Answer — 30–80 words]
[Continue all FAQs...]

[CTA Block]

Author Bio: [AUTHOR NAME], [Title], [Brief credential]. [sameAs links placeholder]
Last Updated: ${new Date().toLocaleDateString('en-GB', {day:'numeric',month:'long',year:'numeric'})}

---
${schemaBlock !== 'Skip schema markup.' ? 'SCHEMA MARKUP\n---\n[Include FAQPage JSON-LD here]\n[Include Article + Author JSON-LD here]' : ''}

---
INTERNAL LINKS SUMMARY
---
[List all internal links placed: anchor text → target URL or placeholder]

---
INTERNAL LINKS SUMMARY
---
[List all internal links placed: anchor text → target URL or placeholder]

════════════════════════════════════════
Now write the complete, humanized, rank-ready article following all instructions above.
════════════════════════════════════════`;

    return prompt.replace(/\n{3,}/g, '\n\n').trim();
  }

});
