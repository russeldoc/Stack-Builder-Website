import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useTechnologies } from "./hooks/useTechnologies";

export default function App() {
  const { technologies, isLoading, error } = useTechnologies();
  const [selectedIds, setSelectedIds] = useState(() => new Set());

  const stack = useMemo(
    () => technologies.filter((tech) => selectedIds.has(tech.id)),
    [technologies, selectedIds]
  );

  function handleAdd(tech) {
    if (selectedIds.has(tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setSelectedIds((prev) => new Set(prev).add(tech.id));
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = technologies.find((t) => t.id === id);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (selectedIds.size === 0) return;
    setSelectedIds(new Set());
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <Hero />

      <section id="technologies" className="px-5 pb-24 pt-8 sm:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-2 text-3xl font-extrabold sm:text-4xl">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="mb-10 text-muted">Pick the technologies you want in your ideal stack.</p>

          {isLoading ? (
            <Loader />
          ) : error ? (
            <p className="py-16 text-center text-sm text-rose-500">{error}</p>
          ) : (
            <div className="grid gap-7 lg:grid-cols-[1fr_300px]">
              <TechnologyGrid technologies={technologies} selectedIds={selectedIds} onAdd={handleAdd} />
              <StackPanel stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
            </div>
          )}
        </div>
      </section>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2500} newestOnTop />
    </div>
  );
}
