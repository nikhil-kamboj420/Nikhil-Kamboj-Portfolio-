import SectionHeader from "./SectionHeader";

const TOPICS = [
  "Arrays",
  "Strings",
  "Linked List",
  "Trees",
  "Stack",
  "Binary Search",
  "Heap & Priority Queue",
];

// Decorative grid — a visual motif for consistent practice, not a record of specific dates.
const ROWS = 5;
const COLS = 34;
function seedGrid() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: ROWS * COLS }, () => {
    const r = rand();
    if (r > 0.82) return 3;
    if (r > 0.62) return 2;
    if (r > 0.4) return 1;
    return 0;
  });
}
const GRID = seedGrid();
const LEVELS = [
  "bg-[var(--color-surface-2)]",
  "bg-[var(--color-cyan)]/25",
  "bg-[var(--color-cyan)]/55",
  "bg-[var(--color-cyan)]",
];

export default function DSA() {
  return (
    <section
      id="dsa"
      className="max-w-6xl mx-auto px-5 md:px-8 py-24 scroll-mt-14"
    >
      <SectionHeader
        path="~/nikhil/dsa.log"
        title="Problem Solving"
        comment="steady reps, not sprints"
      />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <p className="font-mono text-4xl font-semibold text-[var(--color-cyan)] text-glow">
            150+
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            problems solved on LeetCode
          </p>

          <a
            href="https://leetcode.com/u/nikhil-kamboj420"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md border border-[var(--color-cyan)]/50 bg-[var(--color-cyan)]/10 hover:bg-[var(--color-cyan)]/20 transition cursor-pointer"
          >
            <span className="font-mono text-xs text-[var(--color-cyan)] font-medium">
              View Profile
            </span>
            <span className="text-[var(--color-cyan)] text-sm">↗</span>
          </a>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--color-amber)]/40 text-[var(--color-amber)]">
              100 Days Badge · 2026
            </span>
            <span className="font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--color-amber)]/40 text-[var(--color-amber)]">
              50 Days Badge · 2026
            </span>
          </div>

          <p className="font-mono text-xs text-[var(--color-muted)] mt-6 mb-2">
            core topics
          </p>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text)]"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-[var(--color-muted)] mt-4">
            Language: Java · Practiced on LeetCode &amp; NeetCode
          </p>
        </div>

        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 overflow-x-auto scrollbar-thin">
          <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
            consistency, visualized
          </p>
          <div
            className="grid gap-1 w-max"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0,1fr))` }}
          >
            {GRID.map((lvl, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${LEVELS[lvl]}`} />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 font-mono text-[10px] text-[var(--color-muted)]">
            <span>less</span>
            {LEVELS.map((l, i) => (
              <span key={i} className={`w-3 h-3 rounded-sm ${l}`} />
            ))}
            <span>more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
