const StackItem = ({ tech, onRemove }) => {
  return (
    <div className="mb-2.5 flex items-center gap-3 rounded-lg border border-border p-2.5">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-panel">
        <img src={tech.icon} alt="" className="h-4 w-4" />
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold">{tech.name}</span>
        <span className="text-xs text-muted">{tech.category}</span>
      </span>

      <button
        type="button"
        onClick={() => onRemove(tech.id)}
        aria-label={`Remove ${tech.name}`}
        className="ml-auto p-1 text-muted hover:text-rose-500"
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;