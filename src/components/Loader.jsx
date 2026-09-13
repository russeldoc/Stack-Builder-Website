export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24" role="status" aria-live="polite">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-purple-500" />
      <p className="text-sm text-muted">Loading technologies…</p>
    </div>
  );
}
