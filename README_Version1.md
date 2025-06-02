# 🌟 13th Wisdom — Cosmic Spiritual Platform Starter Kit

Welcome to the **13th Wisdom** monorepo!  
This kit provides a ready-to-deploy foundation for a viral, spiritual astrology platform—featuring mobile (Expo/React Native), web (Next.js), a Node/Express backend with Stripe, and a Figma cosmic design system.

---

## 🚀 Quick Start

### 1️⃣ Repo Structure

```
13th-wisdom/
│
├── apps/
│   ├── mobile/      # Expo React Native app (iOS/Android)
│   └── web/         # Next.js web app
│
├── backend/         # Node.js/Express API & Stripe integration
│
├── packages/
│   ├── ui/          # Shared UI components (optional)
│   └── utils/       # Shared utilities/hooks
│
├── design/
│   └── figma/       # Figma export, link, and design tokens
│
└── README.md        # This file
```

---

### 2️⃣ Install & Run

**Prerequisites:**  
- Node.js 18+  
- Yarn or npm  
- Expo CLI (`npm install -g expo-cli`)

#### Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/13th-wisdom.git
cd 13th-wisdom

# Install all dependencies
yarn install      # or: npm install
```

#### Start Mobile (Expo - iOS/Android)

```bash
cd apps/mobile
yarn install
expo start
```
- Scan QR in Expo Go app (iOS/Android) or run on simulator.

#### Start Web (Next.js)

```bash
cd apps/web
yarn install
yarn dev
```
- App runs at `http://localhost:3000`

#### Start Backend API

```bash
cd backend
yarn install
cp .env.example .env   # Fill in API keys & Stripe secrets
yarn dev
```
- API runs at `http://localhost:5000`

---

## 🎨 Figma Design System

- Figma project link: [Figma Cosmic UI Kit](https://www.figma.com/file/XXXXXX/13th-Wisdom-Cosmic-Design)
- Includes:
  - Color palette: deep blue, purple, gold, ethereal gradients
  - Typography: spiritual serif + sans, Hebrew/astrology fonts
  - Components: Card, Button, Zodiac Wheel, Tree of Life, Modal, Onboarding, Iconography
  - Example screens: onboarding, dashboard, chart, shop

---

## 🧩 Core Components

**Shared between web/mobile (see `/packages/ui`):**
- `ZodiacWheel`: Animated SVG/Canvas zodiac wheel, astrological glyphs
- `TreeOfLifeOverlay`: Kabbalistic Sefirot with glowing lines/nodes
- `OnboardingScreen`: Magical name/birth input, cosmic intro

---

## 🔑 API & Stripe Backend

- Node.js/Express API with modular routes
- Stripe endpoints:
  - `/api/payments/create-checkout-session`
  - `/api/payments/webhook`
- User authentication: Firebase/Supabase ready (optional)
- MongoDB/Postgres connection (ORM-ready)

---

## 🌏 Production & Publishing

- **iOS/Android:**  
  - Expo config ready for `eas build`
  - Add icons, splash, and privacy policy in `/apps/mobile/app.json`
  - Follow Expo docs for [publishing](https://docs.expo.dev/distribution/app-stores/)

- **Web:**  
  - Deploy to [Vercel](https://vercel.com/) (Next.js optimized)

- **Backend:**  
  - Deploy to [Render](https://render.com/) or [Railway](https://railway.app/)

---

## 🚦 Next Steps

1. **Customize Figma design & export assets to `/design/figma`**
2. **Configure Stripe keys, Firebase/Supabase, and DB in `/backend/.env`**
3. **Update onboarding copy and cosmic art**
4. **Test payments, push notifications, and chart sharing**
5. **Build and submit to App Store/Google Play**

---

## 🌟 Questions/Support

- Figma design, dev workflow, or publishing help?  
  DM @yourusername or open an issue!

---

**Ready to build something legendary?**