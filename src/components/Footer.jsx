import logo from "../assets/logo-text.png";

const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 pb-10 pt-14 sm:px-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="Dev Stack" className="mb-3.5 h-6" />
          <p className="mb-4 max-w-[34ch] text-sm leading-relaxed text-muted">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-sm text-ink-soft">
            <a href="#" className="hover:text-purple-600">GitHub</a>
            <a href="#" className="hover:text-purple-600">Twitter</a>
            <a href="#" className="hover:text-purple-600">LinkedIn</a>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 text-xs font-bold tracking-wide">{group.title}</h4>
            {group.links.map((link) => (
              <a key={link.label} href={link.href} className="mb-3 block text-sm text-ink-soft hover:text-purple-600">
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-5 py-5 text-sm text-muted sm:flex-row sm:px-10">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-purple-600">Privacy</a>
            <a href="#" className="hover:text-purple-600">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
