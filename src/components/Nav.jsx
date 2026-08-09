import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "about.md" },
  { id: "experience", label: "experience.jsx" },
  { id: "projects", label: "projects.jsx" },
  { id: "skills", label: "skills.json" },
  { id: "dsa", label: "dsa.log" },
  { id: "certifications", label: "certifications.log" },
  { id: "contact", label: "contact.sh" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => go("hero")}
            className="font-mono text-sm text-[var(--color-cyan)] flex items-center gap-2 shrink-0"
          >
            <span className="text-[var(--color-muted)]">~/</span>nikhil
            <span className="animate-blink">_</span>
          </button>

          <nav className="hidden md:flex items-stretch h-14">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`font-mono text-[13px] px-4 border-x border-[var(--color-border)]/0 -ml-px transition-colors relative flex items-center
                  ${
                    active === link.id
                      ? "text-[var(--color-text)] bg-[var(--color-surface)] border-[var(--color-border)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
              >
                {active === link.id && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-cyan)]" />
                )}
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden font-mono text-[var(--color-muted)] text-xl leading-none px-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? "×" : "≡"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`w-full text-left font-mono text-sm px-5 py-2.5 border-b border-[var(--color-border)] transition-colors
                ${
                  active === link.id
                    ? "text-[var(--color-cyan)] bg-[var(--color-surface-2)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
