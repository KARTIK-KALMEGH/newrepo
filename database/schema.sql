CREATE TABLE users (
  id UUID PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE skill_assessments (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  score INT NOT NULL,
  coding_level TEXT,
  communication_level TEXT,
  problem_solving_level TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE roadmaps (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  target_role TEXT NOT NULL,
  week_no INT NOT NULL,
  focus_area TEXT NOT NULL,
  deliverable TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
);

CREATE TABLE internships (
  id UUID PRIMARY KEY,
  company_name TEXT NOT NULL,
  role TEXT NOT NULL,
  location TEXT,
  stipend TEXT,
  skills_required TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE internship_applications (
  id UUID PRIMARY KEY,
  internship_id UUID NOT NULL REFERENCES internships(id),
  user_id UUID NOT NULL REFERENCES users(id),
  resume_url TEXT,
  status TEXT NOT NULL DEFAULT 'applied',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
