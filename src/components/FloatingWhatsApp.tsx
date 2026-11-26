import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicData';

export function FloatingWhatsApp() {
  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <div className="relative flex items-center justify-center">
        <span
          aria-hidden="true"
          className="whatsapp-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-[hsl(var(--quartz))]"
        />
        <a
          href={CONTACT_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Conversar pelo WhatsApp no número ${CONTACT_INFO.phoneDisplay}`}
          title={`WhatsApp: ${CONTACT_INFO.phoneDisplay}`}
          className="relative flex h-13 w-13 items-center justify-center rounded-full border border-[hsl(var(--gold)/0.5)] bg-[hsl(var(--bg-espresso))] text-[hsl(var(--fg-on-dark))] shadow-[var(--shadow-elevated)] transition-transform duration-200 hover:scale-105 hover:bg-[hsl(var(--quartz-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--quartz-deep))]"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
