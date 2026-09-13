import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="px-5 pb-16 pt-16 sm:px-10 sm:pt-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mb-9 max-w-[46ch] text-base leading-relaxed text-ink-soft sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#technologies"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gradient-cta px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-500/20"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="order-first flex justify-center md:order-last">
          <img
            src={banner}
            alt="Isometric illustration of a layered development stack"
            className="w-full max-w-[360px] sm:max-w-[420px]"
            width={526}
            height={526}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;