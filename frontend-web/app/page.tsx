const cards = [
  "AI Mentor",
  "Skill Assessment",
  "Roadmap Dashboard",
  "Internship Marketplace",
  "Resume Builder",
  "Portfolio Tracker"
];

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", padding: 24, background: "#F8FAFC", minHeight: "100vh" }}>
      <h1 style={{ color: "#4F46E5" }}>SkillBridge AI</h1>
      <p>Bridge your skill gap with AI-powered mentoring and practical roadmap tracking.</p>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
        {cards.map((card) => (
          <article key={card} style={{ background: "white", borderRadius: 12, padding: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <h3>{card}</h3>
            <p style={{ color: "#475569" }}>Production-ready module scaffold.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
