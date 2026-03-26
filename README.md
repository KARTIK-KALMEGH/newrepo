# SkillBridge AI — Student Employability Platform

SkillBridge AI is a production-ready blueprint and starter codebase for a mobile + web app that helps Indian college students and recent graduates close employability skill gaps.

---

## Step 1 — Idea Validation

### Problem in India
- Many graduates have strong theory knowledge but low practical exposure (projects, internship experience, tool familiarity).
- Hiring increasingly prioritizes demonstrable skills (Git, APIs, cloud basics, communication, domain projects) over marks alone.
- Students struggle to pick career paths (software, data, product, design, QA, sales) and often follow random courses without milestones.

### Why Employability Struggles Happen
1. **Curriculum lag**: Academic syllabi update slower than industry tools.
2. **Low mentorship access**: Most students do not have personalized guidance.
3. **No competency baseline**: Students rarely get a clear skill-gap report.
4. **Poor portfolio quality**: Lack of project storytelling and proof.
5. **Weak signaling**: Resume quality and interview readiness are inconsistent.

### Target Audience and Needs
- **Primary**: 18–26 year old Indian students/freshers
  - Need career direction, structured roadmap, practical projects, and internships.
- **Secondary**:
  - Trainers/mentors need class-level analytics and assignment workflows.
  - Companies need filtered intern-ready talent pools.

### Scalability Improvements
- Start role-focused tracks (e.g., Frontend Dev, Data Analyst, QA Engineer).
- Introduce skill verification badges with project reviews.
- Add regional language support and low-bandwidth mode.
- Build mentor/recruiter marketplace with quality scoring.

---

## Step 2 — Product Blueprint

### Core Features
1. AI Career Mentor (chat + goal planning)
2. Adaptive Skill Assessment Test
3. Personalized Skill Roadmap
4. Internship & Project Finder
5. Resume Builder
6. Portfolio Builder

### Advanced Features
- AI skill-gap analysis with benchmark by role level.
- Real-world project challenges with rubric-based evaluation.
- Industry mentor sessions (1:1 + group cohorts).
- Skill verification badges (portfolio-linked evidence).

### Automation Features
- Auto roadmap generation from assessment outcomes.
- AI learning recommendations (courses/videos/docs).
- Internship matching engine based on profile + skill confidence.
- Automated progress tracking and weekly nudges.

### Monetization
- **Freemium**: basic assessment + limited mentor chat.
- **Premium**: full roadmap, deep AI reviews, mock interviews.
- **B2B recruiter access**: paid candidate search + filters.

---

## Step 3 — UI/UX Design

### Main Screens
1. Onboarding (goal, branch, current skill level)
2. Skill Assessment (MCQ + practical tasks)
3. AI Mentor Chat
4. Roadmap Dashboard (milestones, deadlines)
5. Project Challenge Page (brief, submission, rubric)
6. Internship Marketplace
7. Resume Builder
8. Profile & Progress Tracker

### Navigation Flow
- Onboarding -> Assessment -> Skill Report -> Roadmap -> Weekly Cycle (Learn -> Build -> Apply)
- Bottom nav (mobile): Home, Roadmap, Challenges, Internships, Profile
- Left sidebar (web): Dashboard, Mentor, Assessments, Resume, Portfolio, Recruiter

### Style System (Startup UI)
- **Palette**:
  - Primary: `#4F46E5` (Indigo)
  - Accent: `#06B6D4` (Cyan)
  - Success: `#10B981` (Emerald)
  - Warning: `#F59E0B` (Amber)
  - Background: `#0B1020` / light mode `#F8FAFC`
- **Typography**: Inter (UI), Poppins (headings)
- **Design language**: cards, soft shadows, 8px spacing grid, clear progress indicators

---

## Step 4 — Technical Architecture

### Recommended Stack
- **Mobile**: React Native (Expo) + TypeScript
- **Web**: Next.js (App Router)
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **AI**: OpenAI API for mentoring, gap analysis, roadmap generation
- **Auth**: JWT + refresh tokens (or Firebase Auth in early MVP)
- **Hosting**:
  - Web: Vercel
  - Backend: AWS ECS/Fargate or Render/Railway (early stage)
  - DB: AWS RDS PostgreSQL / Neon
- **Security**: HTTPS everywhere, hashed passwords (Argon2/bcrypt), RBAC, rate limits, audit logs

### High-Level Architecture
- Client apps -> API Gateway/Express -> Service layer -> PostgreSQL + Redis cache
- Background jobs (BullMQ/Redis) for roadmap generation and weekly analytics
- Object storage (S3) for resume PDFs and portfolio media

---

## Step 5 — Development Roadmap (Beginner-Friendly)

### Phase 1 — MVP (4–6 weeks)
1. Setup monorepo and environment variables.
2. Build register/login + profile onboarding.
3. Create skill assessment APIs + UI.
4. Integrate AI endpoint for basic career suggestions.
5. Generate first roadmap milestones.

### Phase 2 — Beta (6–8 weeks)
1. Internship listing + filtering + save feature.
2. Resume builder with templates and export PDF.
3. Project challenge submission + mentor review.

### Phase 3 — Full Version (8–12 weeks)
1. Real-time AI mentor chat with memory context.
2. Automated course/project recommendations.
3. Recruiter dashboard + candidate shortlist.
4. Analytics + retention experiments.

---

## Step 6 — Full Project Structure

```text
skillbridge-ai/
├─ frontend-web/                # Next.js web app
├─ frontend-mobile/             # React Native (Expo)
├─ backend/                     # Express API
├─ database/
│  ├─ schema.sql
│  └─ seed.sql
├─ docs/
│  ├─ api-routes.md
│  └─ product-spec.md
└─ docker-compose.yml
```

### API Routes (examples)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/me`
- `POST /api/assessment/submit`
- `POST /api/ai/mentor`
- `POST /api/roadmap/generate`
- `GET /api/internships`
- `POST /api/resume/build`

See `docs/api-routes.md` for details.

---

## Step 7 — Automation System Design

1. Student completes assessment + profile import.
2. AI normalizes skills into competency graph (beginner/intermediate/advanced).
3. Rule + AI hybrid engine generates roadmap by target role and deadline.
4. Recommendation service suggests:
   - learning resources,
   - projects,
   - internships.
5. Progress tracker updates confidence score from quizzes, submissions, and streaks.
6. Weekly automation sends mentor summary + next-best-action suggestions.

---

## Step 8 — Deployment Guide

### Run locally
1. Install Node 20+, pnpm/npm, PostgreSQL, Redis.
2. Create `.env` for backend and frontend.
3. Start database and cache via Docker Compose:
   - `docker compose up -d`
4. Run backend:
   - `cd backend && npm install && npm run dev`
5. Run web:
   - `cd frontend-web && npm install && npm run dev`
6. Run mobile:
   - `cd frontend-mobile && npm install && npm run start`

### Cloud Deployment
- Backend: deploy container to AWS ECS/Render; configure env secrets.
- DB: migrate to managed PostgreSQL (RDS/Neon).
- Web: deploy Next.js on Vercel.
- Mobile: publish via Expo EAS -> Play Store/App Store.

---

## Step 9 — Marketing Strategy

### Campus GTM
- Partner with placement cells and coding clubs.
- Run “SkillGap Score Challenge” events.
- Offer premium trials for top campuses.

### Social Growth
- Daily short-form content: resume tips, interview hacks, role roadmaps.
- Build “30-day employability challenge”.
- Share anonymized success dashboards.

### Referral Engine
- Reward invites with mentor credits.
- Campus ambassador leaderboard.

### College Partnerships
- White-label analytics for institutions.
- Department-level employability reports.

---

## Step 10 — Future Scaling

### 10,000 users
- Single region deployment, vertical scaling, basic Redis caching.
- Async queues for AI tasks.

### 100,000 users
- Horizontal API scaling with autoscaling.
- Read replicas for PostgreSQL.
- CDN + object storage optimization.

### 1 million users
- Multi-region architecture.
- Event-driven microservices for recommendations/matching.
- Model routing + prompt caching for AI cost control.
- Data warehouse + feature store for personalization at scale.

---

## Beginner Build Checklist
- [ ] Finish auth + onboarding
- [ ] Implement assessment and scoring
- [ ] Add AI mentor + roadmap APIs
- [ ] Build internship + resume modules
- [ ] Add analytics + notifications
- [ ] Deploy and run pilot with one college

