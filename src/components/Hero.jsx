import { useEffect, useState } from "react";

const ROLES = [
  "MERN Stack Developer",
  "React + Node.js + MongoDB",
  "Real-Time Systems Builder",
  "150+ DSA Problems on LeetCode",
];

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 1.6,
      );
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const [profileHovered, setProfileHovered] = useState(false);
  const [profileInteracted, setProfileInteracted] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-14 bg-grid overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-cyan)]/[0.06] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--color-amber)]/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-[13px] text-[var(--color-cyan)] mb-4 tracking-wide">
            const developer = require('nikhil-kamboj');
          </p>
          <h1 className="font-[var(--font-display)] font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl text-glow">
            Nikhil Kamboj
          </h1>
          <div className="mt-4 h-8 font-mono text-base sm:text-lg text-[var(--color-muted)]">
            <span className="text-[var(--color-text)]">{typed}</span>
            <span className="animate-blink text-[var(--color-cyan)]">|</span>
          </div>
          <p className="mt-6 text-[var(--color-muted)] max-w-lg leading-relaxed">
            I build full-stack, real-time web apps with React, Node.js, Express
            and MongoDB — most recently a chat &amp; video platform with live
            messaging, calls, screen sharing, and an AI assistant baked in.
          </p>

           <div className="mt-8 flex flex-wrap items-center gap-4">
             <a
               href="#projects"
               onClick={(e) => {
                 e.preventDefault();
                 document
                   .getElementById("projects")
                   ?.scrollIntoView({ behavior: "smooth" });
               }}
               className="px-5 py-2.5 rounded-md bg-[var(--color-cyan)] text-[#0F1117] font-medium text-sm hover:brightness-110 transition"
             >
               View Projects
             </a>
             <a
               href="/Nikhil_Kamboj_Resume.pdf"
               target="_blank"
               rel="noreferrer"
               className="px-5 py-2.5 rounded-md border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-amber)]/60 hover:text-[var(--color-amber)] transition"
             >
               View Resume
             </a>
             <a
               href="#contact"
               onClick={(e) => {
                 e.preventDefault();
                 document
                   .getElementById("contact")
                   ?.scrollIntoView({ behavior: "smooth" });
               }}
               className="px-5 py-2.5 rounded-md border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-cyan)]/60 hover:text-[var(--color-cyan)] transition"
             >
               Get in Touch
             </a>
           </div>

          <div className="mt-8 flex items-center gap-5 font-mono text-xs text-[var(--color-muted)]">
            <a
              href="https://github.com/nikhil-kamboj420"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-cyan)] transition"
            >
              github
            </a>
            <span className="text-[var(--color-border)]">/</span>
            <a
              href="https://linkedin.com/in/nikhil-kamboj6969"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-cyan)] transition"
            >
              linkedin
            </a>
            <span className="text-[var(--color-border)]">/</span>
            <a
              href="https://leetcode.com/u/nikhil-kamboj420"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-cyan)] transition"
            >
              leetcode
            </a>
          </div>
        </div>

        <div className="md:hidden relative h-64 mb-8">
          <div className="absolute inset-0 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/40 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <span className="w-3 h-3 rounded-full bg-[var(--color-rose)]/70" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-amber)]/70" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-cyan)]/70" />
              <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
                developer.tsx
              </span>
            </div>

            <div className="p-4 font-mono text-xs text-[var(--color-muted)] space-y-2">
              <div className="flex justify-center mb-3">
                <div
                  onMouseEnter={() => {
                    setProfileHovered(true)
                    setProfileInteracted(true)
                  }}
                  onMouseLeave={() => setProfileHovered(false)}
                  onClick={() => setProfileHovered(true)}
                  className="relative inline-block"
                >
                  <img
                    src="/myimage.JPEG"
                    alt="Nikhil Kamboj"
                    className={`w-16 h-16 rounded-full object-cover border-2 border-[var(--color-cyan)]/40 shadow-lg shadow-[var(--color-cyan)]/10 transition-all duration-300 ease-out cursor-pointer ${
                      profileHovered ? "opacity-0 scale-150" : "opacity-100 scale-100"
                    } ${!profileInteracted ? "animate-glow-pulse" : ""}`}
                  />
                </div>
              </div>
              <div>
                <span className="text-[var(--color-amber)]">interface</span>{" "}
                <span className="text-[var(--color-cyan)]">Developer</span>{" "}
                <span className="text-[var(--color-text)]">{`{`}</span>
              </div>
              <div className="pl-3">
                <span className="text-[var(--color-text)]">name:</span>{" "}
                <span className="text-[var(--color-amber)]">
                  "Nikhil Kamboj"
                </span>
              </div>
              <div className="pl-3">
                <span className="text-[var(--color-text)]">stack:</span>{" "}
                <span className="text-[var(--color-amber)]">[</span>
                <span className="text-[var(--color-cyan)]">"React"</span>,{" "}
                <span className="text-[var(--color-cyan)]">"Node"</span>,{" "}
                <span className="text-[var(--color-amber)]">...</span>
                <span className="text-[var(--color-amber)]">]</span>
              </div>
              <div className="pl-3">
                <span className="text-[var(--color-text)]">dsa:</span>{" "}
                <span className="text-[var(--color-amber)]">150</span>+{" "}
                <span className="text-[var(--color-muted)]">// LeetCode</span>
              </div>
              <div className="pl-3">
                <span className="text-[var(--color-text)]">status:</span>{" "}
                <span className="text-[var(--color-cyan)]">
                  "Open to opportunities"
                </span>
              </div>
              <div>
                <span className="text-[var(--color-text)]">{`}`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative h-96">
          <div className="absolute inset-0 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/40 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <span className="w-3 h-3 rounded-full bg-[var(--color-rose)]/70" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-amber)]/70" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-cyan)]/70" />
              <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
                developer.tsx
              </span>
            </div>

            <div className="p-6 font-mono text-xs text-[var(--color-muted)] space-y-2">
              <div className="flex justify-center mb-4">
                <div
                  onMouseEnter={() => {
                    setProfileHovered(true)
                    setProfileInteracted(true)
                  }}
                  onMouseLeave={() => setProfileHovered(false)}
                  onClick={() => setProfileHovered(true)}
                  className="relative inline-block"
                >
                  <img
                    src="/myimage.JPEG"
                    alt="Nikhil Kamboj"
                    className={`w-20 h-20 rounded-full object-cover border-2 border-[var(--color-cyan)]/40 shadow-lg shadow-[var(--color-cyan)]/10 transition-all duration-300 ease-out cursor-pointer ${
                      profileHovered ? "opacity-0 scale-150" : "opacity-100 scale-100"
                    } ${!profileInteracted ? "animate-glow-pulse" : ""}`}
                  />
                </div>
              </div>
              <div>
                <span className="text-[var(--color-amber)]">interface</span>{" "}
                <span className="text-[var(--color-cyan)]">Developer</span>{" "}
                <span className="text-[var(--color-text)]">{`{`}</span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-text)]">name:</span>{" "}
                <span className="text-[var(--color-amber)]">
                  "Nikhil Kamboj"
                </span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-text)]">stack:</span>{" "}
                <span className="text-[var(--color-amber)]">[</span>
                <span className="text-[var(--color-cyan)]">"React"</span>,{" "}
                <span className="text-[var(--color-cyan)]">"Node"</span>,{" "}
                <span className="text-[var(--color-amber)]">...</span>
                <span className="text-[var(--color-amber)]">]</span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-text)]">dsa:</span>{" "}
                <span className="text-[var(--color-amber)]">150</span>+{" "}
                <span className="text-[var(--color-muted)]">// LeetCode</span>
              </div>
              <div className="pl-4">
                <span className="text-[var(--color-text)]">status:</span>{" "}
                <span className="text-[var(--color-cyan)]">
                  "Open to opportunities"
                </span>
              </div>
              <div>
                <span className="text-[var(--color-text)]">{`}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {profileHovered && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onMouseEnter={() => setProfileHovered(true)}
          onMouseLeave={() => setProfileHovered(false)}
          onClick={() => setProfileHovered(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setProfileHovered(false)
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-cyan)] flex items-center justify-center text-lg z-50"
          >
            ✕
          </button>
          <img
            src="/myimage.JPEG"
            alt="Nikhil Kamboj"
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-[var(--color-border)]"
          />
        </div>
      )}
    </section>
  );
}
