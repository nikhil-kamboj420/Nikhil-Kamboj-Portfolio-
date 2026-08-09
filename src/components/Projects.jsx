import { useState } from "react";
import SectionHeader from "./SectionHeader";

const FEATURES = [
  { tag: "auth", label: "JWT authentication with bcrypt password hashing" },
  { tag: "chat", label: "Real-time messaging via Stream Chat SDK" },
  { tag: "calls", label: "Video / audio calls & screen sharing via Stream Video" },
  { tag: "ai", label: "In-app AI chatbot powered by Google Gemini API" },
  { tag: "social", label: "Friends system — send, accept, reject, remove" },
  { tag: "alerts", label: "Real-time in-app notifications" },
];

const STACK = [
  "React", "Vite", "Tailwind CSS", "GSAP", "TanStack Query", "Axios",
  "Node.js", "Express", "MongoDB", "Stream SDKs", "Gemini API", "JWT",
];

export default function Projects() {
  const [thumbHovered, setThumbHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 md:px-8 py-24 scroll-mt-14">
      <SectionHeader path="~/nikhil/projects.jsx" title="Featured Project" comment="the flagship build" />

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-rose)]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-amber)]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-cyan)]/70" />
          <span className="ml-3 font-mono text-[11px] text-[var(--color-muted)]">HaveaTalk / README.md</span>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/thumbnail haveatalk.png"
                  alt="HaveaTalk thumbnail"
                  onMouseEnter={() => {
                    setThumbHovered(true);
                    setHasInteracted(true);
                  }}
                  onMouseLeave={() => setThumbHovered(false)}
                  className={`w-12 h-12 rounded-lg object-cover border border-[var(--color-border)] transition-all duration-300 ease-out cursor-pointer ${
                    !hasInteracted ? "animate-glow-pulse" : ""
                  }`}
                />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-2xl font-semibold">HaveaTalk</h3>
                <p className="text-[var(--color-muted)] mt-1 text-sm">
                  Real-time chat &amp; video calling platform — 7 core features, ~136 commits, 25+ days.
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="https://github.com/nikhil-kamboj420/haveatalk"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md border border-[var(--color-border)] font-mono text-xs hover:border-[var(--color-cyan)]/60 hover:text-[var(--color-cyan)] transition"
              >
                GitHub ↗
              </a>
              <a
                href="https://haveatalk.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] border border-[var(--color-cyan)]/30 font-mono text-xs hover:bg-[var(--color-cyan)]/20 transition"
              >
                Live ↗
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-7">
            {FEATURES.map((f) => (
              <div
                key={f.tag}
                className="flex items-start gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 px-4 py-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-amber)] mt-0.5 shrink-0">
                  {f.tag}
                </span>
                <span className="text-sm text-[var(--color-text)]">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {STACK.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-muted)]"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-7 text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-5">
            Shipped the core product in 25+ days, totaling roughly 5,000–7,000 lines of code, while
            resolving integration challenges across multiple third-party SDKs, cross-service
            authentication, and production deployment debugging.
          </p>
        </div>
      </div>

      {thumbHovered && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onMouseEnter={() => setThumbHovered(true)}
          onMouseLeave={() => setThumbHovered(false)}
        >
          <button
            onClick={() => setThumbHovered(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-cyan)] flex items-center justify-center text-lg z-50"
          >
            ✕
          </button>
          <img
            src="/thumbnail haveatalk.png"
            alt="HaveaTalk thumbnail expanded"
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-[var(--color-border)]"
          />
        </div>
      )}
    </section>
  );
}
