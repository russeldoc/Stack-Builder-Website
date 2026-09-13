import TechnologyCard from "./TechnologyCard";

export default function TechnologyGrid({ technologies, selectedIds, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard key={tech.id} tech={tech} isAdded={selectedIds.has(tech.id)} onAdd={onAdd} />
      ))}
    </div>
  );
}
