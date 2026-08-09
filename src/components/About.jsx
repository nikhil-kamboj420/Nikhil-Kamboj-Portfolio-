import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-5 md:px-8 py-24 scroll-mt-14"
    >
      <SectionHeader
        path="~/nikhil/about.md"
        title="About"
        comment="a quick summary"
      />

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10">
        <p className="text-[var(--color-muted)] leading-relaxed text-[15px]">
          I'm a BCA student at Guru Nanak Khalsa College, Yamunanagar
          (affiliated to Kurukshetra University), graduating in 2027, with a
          focus on the MERN stack. I like building things that actually run in
          real time — chat, video, live notifications — rather than just static
          pages. My flagship project, HaveaTalk, is a full-stack chat &amp;
          video calling app built with React, Node.js, Express and MongoDB,
          using Stream's SDKs for messaging and calls and the Gemini API for an
          in-app AI assistant.
          <br />
          <br />
          Alongside web development I keep a steady DSA practice in Java — 150+
          problems solved on LeetCode — and I use AI coding agents like GitHub
          Copilot and Claude to move faster without skipping the fundamentals. I
          completed a Full Stack Web Development internship at Unified Mentor,
          where I shipped a portfolio site and a real-time chat frontend.
        </p>

        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
            profile.json
          </p>
          <dl className="space-y-3 text-sm">
            {[
              ["role", "MERN Stack Developer"],
              ["education", "BCA, GNK College (2024–2027)"],
              ["university", "Kurukshetra University"],
              ["cgpa", "8.2 / 10"],
              ["location", "Yamunanagar, Haryana"],
              ["focus", "React · Node · Express · MongoDB"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between gap-4 font-mono text-[13px]"
              >
                <dt className="text-[var(--color-amber)]">{k}:</dt>
                <dd className="text-right text-[var(--color-text)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
