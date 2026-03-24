# Global Water Systems — Company Website

A production-grade, animated Next.js 14 company portfolio website for **Global Water Systems**, a water & wastewater treatment company based in Chennai, Tamil Nadu.

---

## ⚡ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **React Hot Toast** | Notifications |
| **React CountUp** | Animated counters |
| **React Intersection Observer** | Scroll-triggered animations |

---

## 🚀 Getting Started

### 1. Open in VS Code
```bash
cd gws-website
code .
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    ← Home page
│   ├── layout.tsx                  ← Root layout (Navbar + Footer)
│   ├── globals.css                 ← Global styles + animations
│   ├── about/                      ← About Us page
│   ├── clients/                    ← Clients page (full list from PDF)
│   ├── contact/                    ← Contact Us page with form
│   ├── our-works/
│   │   ├── water-treatment/
│   │   ├── sewage-effluent/
│   │   ├── zero-discharge/
│   │   └── multi-stage-bio/
│   └── products/
│       ├── water-filtration/
│       ├── water-softening/
│       ├── demineralization/
│       ├── desalination/
│       ├── extended-aeration/
│       ├── mbbr/
│       ├── saff/
│       ├── nano-filtration/
│       └── evaporation/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              ← Sticky navbar with mega dropdown
│   │   └── Footer.tsx              ← Full footer
│   ├── sections/                   ← Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ClientsPreview.tsx
│   │   └── CtaSection.tsx
│   └── ui/
│       ├── PageHero.tsx            ← Reusable inner-page hero
│       ├── ProductDetailPage.tsx   ← Reusable product detail template
│       └── WorkDetailPage.tsx      ← Reusable works detail template
└── lib/
    ├── utils.ts                    ← cn() helper
    ├── clientsData.ts              ← All client data from the PDF
    └── productsData.ts             ← Products list
```

---

## 🌐 Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Stats, Services, Why Us, Clients preview, CTA |
| `/about` | About Us — Company story, scope, industry list, timeline |
| `/our-works` | Our Works overview |
| `/our-works/water-treatment` | Water Treatment Plant detail |
| `/our-works/sewage-effluent` | Sewage & Effluent Treatment detail |
| `/our-works/zero-discharge` | Zero Discharge Plant detail |
| `/our-works/multi-stage-bio` | Multi Stage Biological Treatment detail |
| `/products` | Products & Services grid |
| `/products/water-filtration` | Water Filtration Plant |
| `/products/water-softening` | Water Softening Plant |
| `/products/demineralization` | Demineralization Plant |
| `/products/desalination` | Sea Water Desalination Plant |
| `/products/extended-aeration` | Extended Aeration with ASP |
| `/products/mbbr` | Moving Bed Bio Reactor |
| `/products/saff` | Submerged Aerobic Fixed Film |
| `/products/nano-filtration` | Nano Filtration for Textile |
| `/products/evaporation` | MEE with Crystallizer |
| `/clients` | Full client list (accordion, from PDF) |
| `/contact` | Contact form |

---

## 📧 Adding Email Functionality to the Contact Form

The contact form is ready — just replace the simulated delay in `src/app/contact/ContactClient.tsx` with a real API call.

**Recommended options:**
1. **Nodemailer** via a Next.js API route (`/app/api/contact/route.ts`)
2. **EmailJS** (frontend-only, no backend needed)
3. **Resend** (modern email API — free tier available)
4. **Formspree** (drop-in form handling service)

---

## 🎨 Design System

- **Fonts:** Playfair Display (headings) + DM Sans (body) + Space Mono (labels)
- **Primary colour:** `#0087ff` (royal blue)
- **Accent:** `#00d4ff` (cyan)
- **Background:** `#020e1f` (deep navy)
- **Glass morphism** cards throughout
- **Framer Motion** page & scroll animations on all elements

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

Built with ❤️ for Global Water Systems, Chennai.
