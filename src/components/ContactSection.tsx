import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_INFO, PRICING_PLANS, SERVICES } from '../data/clinicData';

interface ContactSectionProps {
  selectedSubject: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  date: string;
  period: 'Manhã' | 'Tarde' | 'Noite';
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const INTEREST_OPTIONS = [
  'Avaliação Personalizada',
  ...SERVICES.map((s) => s.title),
  ...PRICING_PLANS.map((p) => `Plano: ${p.name}`),
];

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ selectedSubject }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    interest: selectedSubject || 'Avaliação Personalizada',
    date: '',
    period: 'Manhã',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedSubject) {
      setForm((prev) => ({ ...prev, interest: selectedSubject }));
      setSubmitted(false);
    }
  }, [selectedSubject]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo para personalizarmos o atendimento.';
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Digite um telefone ou WhatsApp válido com DDD.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const buildWhatsAppLink = () => {
    const text = `Olá! Me chamo ${form.name || 'Visitante'} e gostaria de agendar (${form.interest})${
      form.date ? ` para ${form.date}` : ''
    } no período da ${form.period}.`;
    return `https://wa.me/5500000000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contato"
      className="relative border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-tinted)/0.45)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna Esquerda — Dados da Clínica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold-deep))]">
                Agendamento Online &amp; Contato
              </p>
              <h2 className="font-display mt-3 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.025em] text-[hsl(var(--fg-ink))]">
                Reserve seu horário com tranquilidade.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[hsl(var(--fg-muted))]">
                Escolha o protocolo ou plano desejado, indique o melhor período
                para você e nossa equipe confirma a disponibilidade diretamente
                pelo seu WhatsApp.
              </p>

              <dl className="mt-10 space-y-6 border-t border-[hsl(var(--border-hairline))] pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] text-[hsl(var(--quartz-deep))]">
                    <MapPin className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-[hsl(var(--fg-muted))]">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-base font-medium text-[hsl(var(--fg-ink))]">
                      {CONTACT_INFO.address}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] text-[hsl(var(--quartz-deep))]">
                    <Phone className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-[hsl(var(--fg-muted))]">
                      Telefone e WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="tel:+5500000000000"
                        className="tabular-nums text-base font-medium text-[hsl(var(--fg-ink))] transition-colors hover:text-[hsl(var(--quartz-deep))]"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] text-[hsl(var(--quartz-deep))]">
                    <Clock className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-[hsl(var(--fg-muted))]">
                      Horário de Atendimento
                    </dt>
                    <dd className="mt-1 text-base font-medium text-[hsl(var(--fg-ink))]">
                      {CONTACT_INFO.hours}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface)/0.75)] p-6">
              <p className="font-display text-xl font-medium text-[hsl(var(--fg-ink))]">
                Prefere conversar agora pelo WhatsApp?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--fg-muted))]">
                Tire dúvidas sobre preparação pré-laser, intervalos entre sessões
                ou disponibilidade imediata.
              </p>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[hsl(var(--quartz-deep)/0.35)] bg-[hsl(var(--quartz-soft))] px-5 py-2.5 text-xs font-semibold text-[hsl(var(--quartz-deep))] transition-colors hover:bg-[hsl(var(--quartz-deep))] hover:text-[hsl(var(--fg-on-dark))]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                <span>Atendimento via WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita — Formulário Glass de Agendamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="surface-glass rounded-3xl border border-[hsl(var(--border-hairline))] p-6 sm:p-10">
              {submitted ? (
                <div className="py-8 text-center sm:px-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--quartz-soft))] text-[hsl(var(--quartz-deep))]">
                    <CheckCircle2 className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display mt-5 text-3xl font-medium text-[hsl(var(--fg-ink))]">
                    Solicitação registrada com sucesso
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[hsl(var(--fg-muted))]">
                    Obrigada, <strong className="text-[hsl(var(--fg-ink))]">{form.name}</strong>.
                    Recebemos seu interesse em{' '}
                    <strong className="text-[hsl(var(--fg-ink))]">{form.interest}</strong>{' '}
                    para o período da <strong className="text-[hsl(var(--fg-ink))]">{form.period}</strong>.
                  </p>

                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[hsl(var(--bg-espresso))] px-7 py-3 text-sm font-semibold text-[hsl(var(--fg-on-dark))] transition-colors hover:bg-[hsl(var(--quartz-deep))]"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                      <span>Confirmar no WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex min-h-[48px] items-center rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-6 py-3 text-sm font-medium text-[hsl(var(--fg-ink))] transition-colors hover:border-[hsl(var(--quartz-deep))]"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[hsl(var(--border-hairline))] pb-4">
                    <h3 className="font-display text-2xl font-medium text-[hsl(var(--fg-ink))] sm:text-3xl">
                      Solicitar avaliação ou agendamento
                    </h3>
                    <p className="mt-1 text-sm text-[hsl(var(--fg-muted))]">
                      Preencha seus dados abaixo para receber retorno rápido da nossa recepção.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[hsl(var(--fg-ink))]"
                      >
                        Nome completo
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Ex.: Mariana Silva"
                        aria-invalid={Boolean(errors.name)}
                        className="mt-2 min-h-[46px] w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-4 text-sm text-[hsl(var(--fg-ink))] placeholder:text-[hsl(var(--fg-muted)/0.6)] focus:border-[hsl(var(--quartz-deep))] focus:outline-none"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[hsl(var(--quartz-deep))]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[hsl(var(--fg-ink))]"
                      >
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            phone: formatBrazilPhone(e.target.value),
                          });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="(00) 00000-0000"
                        aria-invalid={Boolean(errors.phone)}
                        className="tabular-nums mt-2 min-h-[46px] w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-4 text-sm text-[hsl(var(--fg-ink))] placeholder:text-[hsl(var(--fg-muted)/0.6)] focus:border-[hsl(var(--quartz-deep))] focus:outline-none"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[hsl(var(--quartz-deep))]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[hsl(var(--fg-ink))]"
                      >
                        E-mail
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="voce@exemplo.com.br"
                        aria-invalid={Boolean(errors.email)}
                        className="mt-2 min-h-[46px] w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-4 text-sm text-[hsl(var(--fg-ink))] placeholder:text-[hsl(var(--fg-muted)/0.6)] focus:border-[hsl(var(--quartz-deep))] focus:outline-none"
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-[hsl(var(--quartz-deep))]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-interest"
                        className="block text-xs font-semibold text-[hsl(var(--fg-ink))]"
                      >
                        Protocolo ou plano de interesse
                      </label>
                      <select
                        id="contact-interest"
                        value={form.interest}
                        onChange={(e) =>
                          setForm({ ...form, interest: e.target.value })
                        }
                        className="mt-2 min-h-[46px] w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-4 text-sm text-[hsl(var(--fg-ink))] focus:border-[hsl(var(--quartz-deep))] focus:outline-none"
                      >
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-date"
                        className="block text-xs font-semibold text-[hsl(var(--fg-ink))]"
                      >
                        Data sugerida (opcional)
                      </label>
                      <div className="relative mt-2">
                        <input
                          id="contact-date"
                          type="date"
                          value={form.date}
                          onChange={(e) =>
                            setForm({ ...form, date: e.target.value })
                          }
                          className="tabular-nums min-h-[46px] w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-4 text-sm text-[hsl(var(--fg-ink))] focus:border-[hsl(var(--quartz-deep))] focus:outline-none"
                        />
                        <Calendar
                          aria-hidden="true"
                          className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[hsl(var(--fg-muted))] opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="block text-xs font-semibold text-[hsl(var(--fg-ink))]">
                        Período preferido
                      </span>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {(['Manhã', 'Tarde', 'Noite'] as const).map((period) => {
                          const active = form.period === period;
                          return (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setForm({ ...form, period })}
                              className={`min-h-[46px] rounded-xl border text-xs font-semibold transition-colors ${
                                active
                                  ? 'border-[hsl(var(--bg-espresso))] bg-[hsl(var(--bg-espresso))] text-[hsl(var(--fg-on-dark))]'
                                  : 'border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg-ink))]'
                              }`}
                            >
                              {period}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-semibold text-[hsl(var(--fg-ink))]"
                    >
                      Observações ou dúvidas (opcional)
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      placeholder="Conte se possui alguma sensibilidade na pele ou região específica que deseja avaliar."
                      className="mt-2 w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] p-4 text-sm text-[hsl(var(--fg-ink))] placeholder:text-[hsl(var(--fg-muted)/0.6)] focus:border-[hsl(var(--quartz-deep))] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="text-xs leading-relaxed text-[hsl(var(--fg-muted))]">
                      Seus dados são utilizados exclusivamente para o seu
                      agendamento.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] shrink-0 items-center gap-2.5 rounded-full bg-[hsl(var(--bg-espresso))] px-7 py-3 text-sm font-semibold whitespace-nowrap text-[hsl(var(--fg-on-dark))] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--quartz-deep))]"
                    >
                      <span>Entrar em contato</span>
                      <Send className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
