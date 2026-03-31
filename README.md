# ANITIO – Information Technology & Skill Development LLP

A complete, production-ready website for ANITIO computer institute built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

### Core Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, courses, stats, notices, franchise info |
| Courses | `/courses` | Filterable catalog of 30+ programs |
| Course Detail | `/courses/[slug]` | Full syllabus, modules, fees, enroll |
| Online Admission | `/admission` | Multi-step admission form with file uploads |
| Offline Admission | `/admission/offline` | Center-visit process & document list |
| Admission Status | `/admission/status` | Track application by enrollment + DOB |
| Exam Schedule | `/exam` | View upcoming exam dates by course |
| Admit Card | `/exam/admit-card` | Download hall ticket |
| Online Exam | `/exam/online` | Timed MCQ exam with question navigator |
| Results | `/results` | Subject-wise result with grade card |
| Class Schedule | `/schedule` | Weekly timetable online & offline |
| Payment | `/payment` | Fee payment portal (UPI/Card/Net Banking) |
| Franchise Info | `/franchise` | Franchise types, benefits, territory map |
| Franchise Register | `/franchise/register` | Franchise application form |
| Franchise Login | `/franchise/login` | Secure franchise portal login |
| Franchise Dashboard | `/franchise/dashboard` | Analytics, students, revenue |
| Notices | `/notices` | All notices, announcements, exam alerts |
| About | `/about` | Mission, faculty, accreditations |
| Contact | `/contact` | Contact form, map, center addresses |
| Privacy Policy | `/privacy` | GDPR-compliant privacy policy |
| Terms of Service | `/terms` | Terms & conditions |

### Technical Features
- ✅ **SEO Optimized** – Metadata, OpenGraph, Twitter Cards, Sitemap, Robots.txt
- ✅ **Fully Responsive** – Mobile-first, works on all screen sizes
- ✅ **TypeScript** – Fully typed throughout
- ✅ **Online Exam System** – Timer, question navigator, auto-submit, result analysis
- ✅ **Multi-step Admission Form** – With file uploads and validation
- ✅ **Franchise System** – Registration, login, dashboard with analytics
- ✅ **News Ticker** – Scrolling live notices
- ✅ **Result Portal** – Enrollment-based result lookup with grade card
- ✅ **Payment Page** – UPI, card, net banking UI (integrate Razorpay)
- ✅ **Animated UI** – Framer Motion ready, CSS animations
- ✅ **News & Notices** – Category-based notice board

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Toast**: React Hot Toast
- **Counters**: React CountUp
- **Deployment**: Vercel (recommended)

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Clone / Extract the project
```bash
cd anitio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` and fill in your values (see configuration section below).

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm start
```

---

## 🌐 Deployment on Vercel (Recommended)

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add environment variables in Vercel dashboard
4. Click **Deploy** — done!

Custom domain: Add your domain in Vercel → Settings → Domains → Add `anitio.in`

---

## 🔧 Configuration & Integration

### 1. Payment Gateway (Razorpay)
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_live_xxxxxxxx"
RAZORPAY_KEY_SECRET="your_secret"
```
In `/src/app/payment/page.tsx`, integrate `@razorpay/razorpay-js`:
```js
const razorpay = new window.Razorpay({ key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, ... });
```

### 2. SMS Alerts (MSG91)
```env
SMS_API_KEY="your_msg91_key"
SMS_SENDER_ID="ANITIO"
```
Create `/src/app/api/send-sms/route.ts` and call MSG91 API after admission confirmation.

### 3. Database (Recommended: Supabase / PlanetScale)
```env
DATABASE_URL="postgresql://..."
```
Use Prisma ORM:
```bash
npm install prisma @prisma/client
npx prisma init
```

### 4. Authentication (NextAuth.js)
```env
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="https://anitio.in"
```
```bash
npm install next-auth
```
Set up providers for student login and franchise login.

### 5. File Uploads (Cloudinary)
```bash
npm install cloudinary next-cloudinary
```
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud"
CLOUDINARY_API_KEY="your_key"
CLOUDINARY_API_SECRET="your_secret"
```

### 6. Email (Nodemailer)
```bash
npm install nodemailer @types/nodemailer
```

---

## 📁 Project Structure

```
anitio/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Root layout
│   │   ├── not-found.tsx             # 404 page
│   │   ├── sitemap.ts                # Auto-generated sitemap
│   │   ├── robots.ts                 # SEO robots.txt
│   │   ├── about/page.tsx
│   │   ├── admission/
│   │   │   ├── page.tsx              # Online admission form
│   │   │   ├── offline/page.tsx      # Offline admission info
│   │   │   └── status/page.tsx       # Application status tracker
│   │   ├── courses/
│   │   │   ├── page.tsx              # Course catalog
│   │   │   └── [slug]/page.tsx       # Individual course page
│   │   ├── exam/
│   │   │   ├── page.tsx              # Exam schedule
│   │   │   ├── online/page.tsx       # Live online exam
│   │   │   └── admit-card/page.tsx   # Admit card download
│   │   ├── franchise/
│   │   │   ├── page.tsx              # Franchise information
│   │   │   ├── register/page.tsx     # Franchise application
│   │   │   ├── login/page.tsx        # Franchise login
│   │   │   └── dashboard/page.tsx    # Franchise analytics
│   │   ├── results/page.tsx          # Result portal
│   │   ├── schedule/page.tsx         # Class timetable
│   │   ├── payment/page.tsx          # Fee payment
│   │   ├── notices/page.tsx          # All notices
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky navbar with mega menu
│   │   │   ├── Footer.tsx            # Full footer
│   │   │   ├── TopBar.tsx            # Contact & social bar
│   │   │   └── NewsTicker.tsx        # Scrolling notice ticker
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Auto-sliding hero banner
│   │       ├── CoursesSection.tsx    # Filterable courses grid
│   │       ├── WhyChooseSection.tsx  # Stats + features + testimonials
│   │       ├── NoticesSection.tsx    # Notices + quick actions sidebar
│   │       └── FranchiseSection.tsx  # Franchise types & CTA
│   ├── data/
│   │   ├── courses.ts                # All 15+ course definitions
│   │   └── notices.ts                # Notice board data
│   ├── lib/
│   │   └── utils.ts                  # Utilities, formatters, helpers
│   ├── types/
│   │   └── index.ts                  # All TypeScript types
│   └── styles/
│       └── globals.css               # Tailwind + custom CSS
├── public/
│   └── images/                       # Add your images here
├── .env.example                      # Environment variables template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { 700: '#1e3a8a', ... },  // Change blue shade
  gold: { 500: '#f59e0b', ... },      // Change gold/accent
}
```

### Institute Info
Update these files with your real data:
- `src/data/courses.ts` — Add/modify courses
- `src/data/notices.ts` — Update notices
- `src/components/layout/TopBar.tsx` — Phone/email
- `src/components/layout/Footer.tsx` — Address, social links
- `src/app/layout.tsx` — SEO metadata

### Adding Real Images
Replace gradient placeholders in `public/images/`:
- `courses/bca.jpg`, `courses/mca.jpg`, etc.
- `instructors/*.jpg` — Faculty photos
- `og-image.jpg` — Social share image (1200×630)
- `favicon.ico`, `apple-touch-icon.png`

---

## 📱 SMS Alert Integration

After admission confirmation, trigger SMS to registered mobile:
```typescript
// src/app/api/admission/confirm/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { phone, studentName, enrollmentNo, courseName } = await req.json();
  
  const message = `Dear ${studentName}, your admission to ${courseName} at ANITIO is confirmed! Enrollment No: ${enrollmentNo}. Login at anitio.in. Helpline: 98765 43210`;
  
  // MSG91 API call
  await fetch(`https://api.msg91.com/api/v5/otp?...`, {
    method: 'POST',
    headers: { 'authkey': process.env.SMS_API_KEY! },
    body: JSON.stringify({ mobiles: phone, message })
  });
  
  return NextResponse.json({ success: true });
}
```

---

## 🤝 Support

For technical support or customization assistance, contact:
- 📧 info@anitio.in  
- 📞 +91 98765 43210

---

**ANITIO Information Technology and Skill Development LLP**  
*Empowering India's Digital Future*
