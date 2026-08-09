import SectionHeader from "./SectionHeader";

const CERTS = [
  { title: "LeetCode 100 Days Badge", org: "LeetCode · 2026" },
  { title: "LeetCode 50 Days Badge", org: "LeetCode · 2026" },
  { title: "HTML, CSS & JavaScript Certifications", org: "Great Learning" },
  {
    title: "Cyber Security Workshop Certificate",
    org: "Guru Nanak Khalsa College",
  },
  { title: "MERN Stack Workshop", org: "College exposure program" },
  { title: "Programming in Python with AI Training", org: "Internshala" },
  {
    title: "GNK-JAI Scholarship Award 2026 (₹6,700)",
    org: "GNK Group of Institutions — outstanding academic performance",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[var(--color-surface)]/40 border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24">
        <SectionHeader
          path="~/nikhil/certifications.log"
          title="Certifications & Achievements"
          comment="verified credentials"
        />

        <div className="grid sm:grid-cols-2 gap-3">
          {CERTS.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5"
            >
              <span className="text-[var(--color-cyan)] font-mono text-sm mt-0.5">
                ✓
              </span>
              <div>
                <p className="text-sm text-[var(--color-text)]">{c.title}</p>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">
                  {c.org}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://drive.google.com/drive/folders/15Hlj04fJ0Qa7pJovt23cH9V4jSEbX4ku"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-border)] font-mono text-sm font-medium hover:border-[var(--color-cyan)]/60 hover:text-[var(--color-cyan)] transition"
          >
            View all certificates ↗
          </a>
        </div>
      </div>
    </section>
  );
}
