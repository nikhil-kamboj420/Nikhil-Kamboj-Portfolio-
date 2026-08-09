import SectionHeader from "./SectionHeader";

const GROUPS = [
  { key: "languages", items: ["JavaScript", "Java (DSA & OOPs)"] },
  {
    key: "frontend",
    items: [
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "React Router",
      "TanStack Query",
      "Axios",
    ],
  },
  { key: "backend", items: ["Node.js", "Express.js"] },
  { key: "database", items: ["MongoDB", "Mongoose", "MySQL"] },
  { key: "cloud", items: ["MongoDB Atlas"] },
  { key: "tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  { key: "deployment", items: ["Vercel", "Render", "Netlify", "Railway"] },
  {
    key: "competencies",
    items: [
      "JWT Auth",
      "REST APIs",
      "Real-Time (Socket.io / Stream)",
      "Responsive Design",
      "AI-Assisted Dev",
      "Prompt Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[var(--color-surface)]/40 border-y border-[var(--color-border)]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 scroll-mt-14">
        <SectionHeader
          path="~/nikhil/skills.json"
          title="Skills"
          comment="what's installed"
        />

        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 font-mono text-[13px] overflow-x-auto">
          <p className="text-[var(--color-muted)]">{"{"}</p>
          {GROUPS.map((g, i) => (
            <div key={g.key} className="pl-5 py-1.5">
              <span className="text-[var(--color-amber)]">"{g.key}"</span>
              <span className="text-[var(--color-muted)]">: [</span>
              <span className="text-[var(--color-cyan)]">
                {g.items.map((it) => `"${it}"`).join(", ")}
              </span>
              <span className="text-[var(--color-muted)]">
                ]{i < GROUPS.length - 1 ? "," : ""}
              </span>
            </div>
          ))}
          <p className="text-[var(--color-muted)]">{"}"}</p>
        </div>
      </div>
    </section>
  );
}
