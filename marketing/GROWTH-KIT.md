# KayTech Africa — Growth & Launch Kit

Everything off-site that makes the website actually pull in customers and gets
KayTech cited by Google and AI assistants. Work top to bottom.

---

## 0. Consistent business details (NAP)

Use these EXACT details everywhere (Google, directories, socials). Consistency
is what builds trust with Google and AI engines.

- **Name:** KayTech Africa
- **Category:** Website designer / Web developer / Software company
- **Phone:** 024 840 8154  (+233 24 840 8154)
- **WhatsApp:** 055 992 1979
- **Email:** info@kaytechafrica.com
- **Website:** https://kaytechafrica.com
- **Area served:** Accra, Kumasi, Tema, Takoradi, Cape Coast & all of Ghana
- **Hours:** Mon–Fri 9:00–18:00, Sat by appointment

---

## 1. Site configuration (do these first — 30 mins)

In Vercel → Project → Settings → Environment Variables, add:

| Variable | Where to get it | What it unlocks |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | analytics.google.com → Admin → Data Streams → Measurement ID (`G-XXXX`) | Traffic + conversion analytics |
| `GOOGLE_SITE_VERIFICATION` | search.google.com/search-console → add property → HTML tag → copy the `content="..."` value | Faster Google indexing + search data |
| `RESEND_API_KEY` | resend.com → API Keys | Contact form emails leads to your inbox |
| `LEAD_INBOX` | your email (default info@kaytechafrica.com) | Where leads are delivered |
| `LEAD_FROM` | e.g. `KayTech Africa <info@kaytechafrica.com>` (after verifying domain in Resend) | Sender of lead emails |

After adding, redeploy. The site works without these — they just turn features on.

### Google Search Console (critical for SEO speed)
1. Add property `https://kaytechafrica.com`.
2. Verify with the `GOOGLE_SITE_VERIFICATION` token (above) or via DNS.
3. Submit sitemap: `https://kaytechafrica.com/sitemap.xml`.
4. Use "URL Inspection" → "Request indexing" for the homepage and key pages.

### Bing Webmaster Tools (powers Copilot + some AI search)
1. Sign in at bing.com/webmasters, import from Search Console.
2. Submit the same sitemap.

---

## 2. Google Business Profile (biggest local + AI lever)

Create/claim at business.google.com. This is the single most important step for
"web designer near me" searches AND for AI assistants recommending you.

**Primary category:** Website designer
**Additional categories:** Web developer, Software company, Marketing agency, Internet marketing service

**Short description (750 char max — paste this):**
> KayTech Africa is a web design and web development company based in Accra,
> Ghana. We build fast, mobile-first websites, e-commerce stores, SEO, and AI
> business automation for businesses across Accra, Kumasi, Tema, Takoradi, and
> all of Ghana. With 250+ projects delivered since 2020, we're known as one of
> the best web developers and web designers in Ghana. We also run KayTech
> Academy, training the next generation of Ghanaian digital talent. Call
> 024 840 8154 or WhatsApp 055 992 1979 for a free consultation.

**Services to add:** Web design, Web development, E-commerce development, SEO,
Digital marketing, AI automation / chatbots, WhatsApp automation, Website
maintenance.

**Then:**
- Add 8–12 photos (logo, team, work screenshots — compressed versions are in `/public/images`).
- Add your real opening hours.
- Turn on messaging.
- Post a weekly "Update" (a project, tip, or offer) — keeps the profile active.

---

## 3. Reviews (this is what makes AI confident to recommend you)

AI assistants and Google both weight reviews heavily. Target 10 reviews in
month one. Send this after every happy delivery:

**WhatsApp / SMS template:**
> Hi [Name], thanks for trusting KayTech with your project! 🙏 Would you mind
> leaving us a quick Google review? It really helps other Ghanaian businesses
> find us: [your Google review link]

Get your review link from your Business Profile → "Ask for reviews".

---

## 4. Directory & citation listings (NAP consistency)

List KayTech on each of these with the EXACT details from section 0:

- Google Business Profile (section 2)
- Bing Places — bingplaces.com
- Apple Business Connect — businessconnect.apple.com (feeds Apple Maps + Siri)
- LinkedIn Company Page — linkedin.com/company/kaytech-africa (already referenced)
- Ghana business directories: GhanaYello, BusinessGhana, Ghana Business Web, JiJi business
- Clutch.co and GoodFirms (B2B agency directories — strong for "best agency" queries)
- Crunchbase (company entity — helps AI knowledge graphs)

**One-line description for directories:**
> Accra-based web design, development, SEO & AI automation company serving
> businesses across Ghana. 250+ projects delivered.

---

## 5. Social profile bios (keep identical wording)

**Instagram / X bio:**
> 🇬🇭 Web design, development, SEO & AI automation in Ghana
> 250+ projects · Accra-based, nationwide
> 📞 024 840 8154 · WhatsApp 055 992 1979
> 👇 Get a quote

**LinkedIn tagline:**
> Best web design & development company in Ghana | Websites, SEO, e-commerce & AI automation | Accra

---

## 6. Content that compounds (ongoing — for SEO + AI citation)

Publish short, useful articles answering what customers ask. Each one is
something Google ranks and AI can cite:

- "How much does a website cost in Ghana? (2026 guide)"
- "Best e-commerce setup for selling online in Ghana (MoMo + Paystack)"
- "Do I need SEO for my Ghana business website?"
- "How AI chatbots help Ghanaian businesses capture more leads"

Ask if you want a `/blog` section added to the site to host these.

---

## 7. Launch checklist

- [ ] Env vars set in Vercel + redeployed
- [ ] Search Console verified + sitemap submitted + homepage indexed
- [ ] Bing Webmaster verified + sitemap submitted
- [ ] Google Business Profile published with photos, services, hours
- [ ] First 5 review requests sent
- [ ] LinkedIn, Instagram, X bios updated to match
- [ ] Listed on 5+ directories with identical NAP
- [ ] Test the contact form (check the lead email arrives)
- [ ] Test the on-site AI assistant + WhatsApp buttons on a real phone
