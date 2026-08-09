import SectionHeader from "./SectionHeader";

const ENTRIES = [
  {
    when: "Nov 2024 – Dec 2024",
    role: "Full Stack Web Development Intern",
    org: "Unified Mentor",
    points: [
      "Selected and built two of 15+ available projects — a responsive portfolio site (minor) and a real-time chat application (major)",
      "Developed and deployed a fully responsive portfolio site with hero, education, projects, and contact sections on GitHub Pages",
      "Built a foundational chat frontend (signup, room-entry, chat pages) and explored Node.js / Express / Socket.io backend integration, deployed on Vercel",
      "Maintained consistent daily GitHub commits for 30 consecutive days",
    ],
  },
  {
    when: "2024 – 2027 (Expected)",
    role: "Bachelor of Computer Applications (BCA)",
    org: "Guru Nanak Khalsa College, Yamunanagar — Kurukshetra University",
    points: ["CGPA: 8.2 / 10"],
  },
  {
    when: "CBSE",
    role: "12th Standard",
    org: "Govt. Model Sr. Sec. School, Camp, Yamunanagar",
    points: [],
  },
  {
    when: "HBSE",
    role: "10th Standard",
    org: "New Rama Krishna Public School",
    points: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--color-surface)]/40 border-y border-[var(--color-border)]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 scroll-mt-14">
        <SectionHeader
          path="~/nikhil/experience.jsx"
          title="Experience & Education"
          comment="git log --graph --oneline"
        />

        <div className="relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
          <div className="space-y-10">
            {ENTRIES.map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-cyan)]" />
                <p className="font-mono text-xs text-[var(--color-amber)]">
                  {e.when}
                </p>
                <h3 className="font-[var(--font-display)] text-lg font-semibold mt-1">
                  {e.role}
                </h3>
                <p className="text-sm text-[var(--color-muted)] mt-0.5">
                  {e.org}
                </p>
                {e.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-[var(--color-muted)] leading-relaxed"
                      >
                        <span className="text-[var(--color-cyan)] shrink-0">
                          ▸
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
