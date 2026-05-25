import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Globe2,
  Instagram,
  Linkedin,
  Terminal,
  UsersRound,
  Youtube,
} from "lucide-react";
import {
  LinktreeIcon,
  LinktreeSocialIcon,
  linktreeFooterLinks,
  linktreeLinks,
  linktreeProfile,
  linktreeSocialLinks,
} from "@/data/linktree";

const iconMap: Record<LinktreeIcon, typeof Globe2> = {
  code: Code2,
  community: UsersRound,
  globe: Globe2,
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 3v11.2a4.2 4.2 0 1 1-4.2-4.2" />
    <path d="M14 5.8c1.1 2.3 2.9 3.8 5 4.2" />
  </svg>
);

const socialIconMap: Record<LinktreeSocialIcon, typeof Instagram> = {
  instagram: Instagram,
  linkedin: Linkedin,
  tiktok: TikTokIcon,
  youtube: Youtube,
};

const isExternalHref = (href: string) => /^https?:\/\//.test(href);

const LinktreeAnchor = ({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) => {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};

const LinktreePage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-roboto-mono selection:bg-csgirlies-pink selection:text-black">
      <div
        className="fixed inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: "radial-gradient(white 0.5px, transparent 0)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="sticky top-0 z-20 border-b-2 border-csgirlies-pink bg-black/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
            <Link to="/" className="flex min-w-0 items-center gap-4">
              <span className="font-righteous text-xl text-white sm:text-2xl">
                CS Girlies
              </span>
              <span className="h-8 w-px bg-csgirlies-pink-light" />
              <span className="hidden truncate text-sm uppercase tracking-[0.2em] text-gray-300 sm:block">
                FOR GEN Z, BY GEN Z
              </span>
            </Link>
            <div className="flex items-center gap-3 text-csgirlies-pink-light">
              <Terminal className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm uppercase tracking-[0.35em] sm:text-base">
                ONLINE<span className="animate-blink">_</span>
              </span>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-[600px] flex-1 flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16">
          <section className="flex flex-col items-center gap-4 text-center">
            <img
              src={linktreeProfile.avatar}
              alt="CS Girlies logo"
              className="h-36 w-36 object-contain drop-shadow-[0_0_22px_rgba(255,99,132,0.55)] sm:h-40 sm:w-40"
            />
            <div className="space-y-1">
              <h1 className="font-righteous text-2xl text-white">
                {linktreeProfile.handle}
              </h1>
              <p className="text-base text-gray-300 sm:text-lg">
                {linktreeProfile.tagline}
              </p>
            </div>
          </section>

          <nav className="flex items-center justify-center gap-4" aria-label="CS Girlies social media">
            {linktreeSocialLinks.map((item) => {
              const Icon = socialIconMap[item.icon];

              return (
                <LinktreeAnchor
                  key={item.label}
                  href={item.href}
                  ariaLabel={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-csgirlies-pink bg-black/90 text-csgirlies-pink-light shadow-lg transition hover:-translate-y-0.5 hover:bg-csgirlies-pink/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-csgirlies-pink focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Icon className="h-5 w-5" />
                </LinktreeAnchor>
              );
            })}
          </nav>

          <section className="flex w-full flex-col gap-4" aria-label="CS Girlies links">
            {linktreeLinks.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <LinktreeAnchor
                  key={item.label}
                  href={item.href}
                  ariaLabel={item.label}
                  className="group grid min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border-2 border-csgirlies-pink bg-black/90 px-4 py-4 text-csgirlies-pink-light shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-csgirlies-pink/10 hover:shadow-[0_0_24px_rgba(255,99,132,0.35)] focus:outline-none focus:ring-2 focus:ring-csgirlies-pink focus:ring-offset-2 focus:ring-offset-black sm:gap-4 sm:px-6"
                >
                  <Icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden="true" />
                  <span className="min-w-0 text-left text-[0.7rem] font-bold uppercase tracking-[0.06em] min-[380px]:text-xs sm:text-lg sm:tracking-[0.08em]">
                    {item.label}
                  </span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-csgirlies-pink transition-transform group-hover:translate-x-1 sm:text-base sm:tracking-[0.16em]">
                    {item.action}
                    {item.action === "EXECUTE" ? (
                      <span className="animate-blink">_</span>
                    ) : null}
                  </span>
                </LinktreeAnchor>
              );
            })}
          </section>

        </main>

        <footer className="border-t-2 border-csgirlies-pink bg-black/95 px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3">
              {linktreeFooterLinks.map((item) => (
                <LinktreeAnchor
                  key={item.label}
                  href={item.href}
                  className="text-sm text-csgirlies-pink-light underline decoration-2 underline-offset-4 transition hover:text-csgirlies-pink sm:text-base"
                >
                  {item.label}
                </LinktreeAnchor>
              ))}
            </nav>
            <p className="max-w-xl text-xs leading-6 tracking-[0.08em] text-gray-500 sm:text-sm">
              © 2026 CS Girlies. Making computer science education more open,
              social, and beginner-friendly.
              <br />
              <span>For Gen Z, by Gen Z.</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LinktreePage;
