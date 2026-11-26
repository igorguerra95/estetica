import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicData';

interface NavbarProps {
  onContactClick: (subject?: string) => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavNavigate = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas)/0.86)] backdrop-blur-md'
            : 'border-b border-transparent bg-[hsl(var(--bg-canvas)/0.55)] backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-10">
          {/* Zona 1: Wordmark em uma única linha */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavNavigate('#inicio');
            }}
            className="font-display shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight text-[hsl(var(--fg-ink))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--quartz-deep))] sm:text-2xl"
          >
            {CONTACT_INFO.brand}
          </a>

          {/* Zona 2: Links concisos em tipografia limpa */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavNavigate(link.href);
                }}
                className="group relative shrink-0 whitespace-nowrap py-1 text-sm font-medium text-[hsl(var(--fg-muted))] transition-colors duration-200 hover:text-[hsl(var(--fg-ink))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--quartz-deep))]"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[1px] origin-left scale-x-0 bg-[hsl(var(--quartz-deep))] transition-transform duration-200 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação primária única + Trigger Mobile */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => onContactClick()}
              className="hidden min-h-[40px] shrink-0 whitespace-nowrap rounded-full bg-[hsl(var(--bg-espresso))] px-5 py-2 text-xs font-semibold tracking-wide text-[hsl(var(--fg-on-dark))] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--quartz-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--quartz-deep))] md:inline-flex md:items-center"
            >
              Entrar em contato
            </button>

            <button
              type="button"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] text-[hsl(var(--fg-ink))] transition-colors hover:border-[hsl(var(--quartz-deep))] md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sheet / Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[hsl(var(--bg-espresso)/0.45)] backdrop-blur-xs"
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 flex w-[82%] max-w-sm flex-col justify-between border-l border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] p-6 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[hsl(var(--border-hairline))] pb-4">
                  <span className="font-display text-xl font-semibold text-[hsl(var(--fg-ink))]">
                    {CONTACT_INFO.brand}
                  </span>
                  <button
                    type="button"
                    aria-label="Fechar menu"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[hsl(var(--border-hairline))] text-[hsl(var(--fg-ink))]"
                  >
                    <X className="h-5 w-5" strokeWidth={1.6} />
                  </button>
                </div>

                <nav aria-label="Menu móvel" className="mt-6 flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavNavigate(link.href);
                      }}
                      className="font-display flex min-h-[48px] items-center justify-between border-b border-[hsl(var(--border-hairline)/0.6)] text-2xl font-medium text-[hsl(var(--fg-ink))] transition-colors hover:text-[hsl(var(--quartz-deep))]"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 border-t border-[hsl(var(--border-hairline))] pt-5">
                <div className="text-xs leading-relaxed text-[hsl(var(--fg-muted))]">
                  <p className="font-medium text-[hsl(var(--fg-ink))]">
                    Atendimento
                  </p>
                  <p>{CONTACT_INFO.address}</p>
                  <p className="tabular-nums">{CONTACT_INFO.phoneDisplay}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onContactClick();
                  }}
                  className="min-h-[48px] w-full rounded-full bg-[hsl(var(--bg-espresso))] px-6 py-3 text-sm font-semibold text-[hsl(var(--fg-on-dark))] transition-colors hover:bg-[hsl(var(--quartz-deep))]"
                >
                  Entrar em contato
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
