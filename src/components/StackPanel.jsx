import StackItem from "./StackItem";

export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-border p-5 lg:sticky lg:top-24">
      <h3 className="mb-1 text-lg font-bold">Your Stack</h3>
      <p className="mb-4 text-sm text-muted">{count} Technology Selected</p>

      {count === 0 ? (
        <p className="py-4 text-sm leading-relaxed text-muted">
          No technologies selected yet. Add one from the list to get started.
        </p>
      ) : (
        <div className="flex flex-col">
          {stack.map((tech) => (
            <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
          ))}
        </div>
      )}

      <button
        type="button"
        disabled={count === 0}
        onClick={onRemoveAll}
        className="mt-3 w-full rounded-lg border border-rose-200 bg-white py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:enabled:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
}
