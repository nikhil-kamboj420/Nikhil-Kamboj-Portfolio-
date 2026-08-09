export default function SectionHeader({ path, title, comment }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-[var(--color-muted)] mb-2">{path}</p>
      <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold">
        {title}
      </h2>
      {comment && (
        <p className="font-mono text-[13px] text-[var(--color-cyan)]/80 mt-2">
          // {comment}
        </p>
      )}
    </div>
  );
}
