import React from 'react';
import { CONTACT_INFO } from '../data/clinicData';

const FOOTER_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(var(--bg-espresso))] text-[hsl(var(--fg-on-dark))]">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-[hsl(var(--border-dark))] pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight text-[hsl(var(--fg-on-dark))]">
              {CONTACT_INFO.brand}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[hsl(var(--fg-on-dark-muted))]">
              Depilação a laser de alta precisão, protocolos faciais e cuidado
              corporal em um ambiente desenhado para o seu conforto.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold))]">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-[hsl(var(--fg-on-dark-muted))] transition-colors hover:text-[hsl(var(--quartz))]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold))]">
              Informações de Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[hsl(var(--fg-on-dark-muted))]">
              <li>Endereço: {CONTACT_INFO.address}</li>
              <li className="tabular-nums">
                Telefone:{' '}
                <a
                  href="tel:+5500000000000"
                  className="text-[hsl(var(--fg-on-dark))] transition-colors hover:text-[hsl(var(--quartz))]"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li>Horário: {CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-[hsl(var(--fg-on-dark-muted))] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {CONTACT_INFO.brand}. Todos os direitos
            reservados.
          </p>
          <p>Atendimento mediante avaliação clínica individual.</p>
        </div>
      </div>
    </footer>
  );
}
