const BADGE_COLORS = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-emerald-50 text-emerald-600",
  Minimal: "bg-sky-50 text-sky-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  NoSQL: "bg-emerald-50 text-emerald-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-blue-50 text-blue-600",
  Modern: "bg-sky-50 text-sky-600",
  Containers: "bg-sky-50 text-sky-600",
  "Fast Build": "bg-orange-50 text-orange-600",
  Orchestration: "bg-sky-50 text-sky-600",
};

const TechnologyCard = ({ tech, isAdded, onAdd }) => {
  const badgeClass = BADGE_COLORS[tech.badge] ?? "bg-slate-100 text-slate-600";

  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        isAdded ? "border-purple-200 ring-2 ring-purple-100" : "border-border"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-panel">
          <img src={tech.icon} alt="" className="h-6 w-6" loading="lazy" />
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass}`}>{tech.badge}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold">{tech.name}</h3>
      <p className="mb-4 min-h-[62px] text-sm leading-relaxed text-ink-soft">{tech.description}</p>

      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-border bg-panel px-2.5 py-1 text-ink-soft">
          {tech.category}
        </span>
        <span className="rounded-full border border-border bg-panel px-2.5 py-1 text-ink-soft">
          {tech.difficulty}
        </span>
        <span className="ml-auto font-semibold text-amber-500">★ {tech.rating}</span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-auto w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed border border-emerald-200 bg-emerald-50 text-emerald-600"
            : "bg-ink text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;