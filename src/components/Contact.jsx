import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import ContactModal from "./ContactModal";

const LINKS = [
  {
    label: "Email",
    value: "kambojnikhil44@gmail.com",
    href: "mailto:kambojnikhil44@gmail.com",
  },
  { label: "Phone", value: "+91 88139 65378", href: "tel:+918813965378" },
  {
    label: "GitHub",
    value: "github.com/nikhil-kamboj420",
    href: "https://github.com/nikhil-kamboj420",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nikhil-kamboj6969",
    href: "https://linkedin.com/in/nikhil-kamboj6969",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/nikhil-kamboj420",
    href: "https://leetcode.com/u/nikhil-kamboj420",
  },
];

function VisitCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/nikhil-kamboj-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.value ?? 0))
      .catch(() => {});
  }, []);

  return (
    <span className="text-[8px] tabular-nums text-[var(--color-muted)]">
      {visits.toLocaleString()}
    </span>
  );
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-5 md:px-8 py-24 scroll-mt-14"
    >
      <SectionHeader
        path="~/nikhil/contact.sh"
        title="Get in Touch"
        comment="./run this"
      />

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-rose)]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-amber)]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-cyan)]/70" />
          <span className="ml-3 font-mono text-[11px] text-[var(--color-muted)]">
            contact.sh
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-sm text-[var(--color-muted)] mb-6">
            $ echo "Open to MERN Stack Developer roles &amp; collaborations"
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md border border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-cyan)]/60 transition"
              >
                <span className="font-mono text-xs text-[var(--color-amber)]">
                  {l.label}
                </span>
                <span className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-cyan)] transition sm:ml-3">
                  {l.value}
                </span>
              </a>
            ))}

            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md border border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-cyan)]/60 transition bg-[var(--color-surface)] hover:bg-[var(--color-surface-2)]/50 cursor-pointer"
            >
              <span className="font-mono text-xs text-[var(--color-amber)]">
                Message
              </span>
              <span className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-cyan)] transition sm:ml-3">
                Send instant message →
              </span>
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center gap-3 font-mono text-xs text-[var(--color-muted)]">
        <span className="sm:flex-1 text-left">
          © {new Date().getFullYear()} Nikhil Kamboj. Built with React +
          Tailwind CSS.
        </span>
        <VisitCounter />
        <span className="sm:flex-1 text-right">
          Yamunanagar, Haryana, India
        </span>
      </footer>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
