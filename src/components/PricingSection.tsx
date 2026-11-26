import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_PLANS } from '../data/clinicData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section
      id="planos"
      className="relative border-y border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-tinted)/0.55)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold-deep))]">
            Investimento Transparente
          </p>
          <h2 className="font-display mt-3 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.025em] text-[hsl(var(--fg-ink))]">
            Três formatos claros para o seu momento de cuidado.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--fg-muted))]">
            Sem pacotes confusos ou letras miúdas. Você escolhe entre sessão
            pontual, ciclo contínuo ou acompanhamento completo durante todo o ano.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => {
            const isHighlighted = Boolean(plan.highlighted);
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -5 }}
                className={`flex flex-col justify-between rounded-3xl border p-7 transition-shadow duration-300 sm:p-8 ${
                  isHighlighted
                    ? 'border-[hsl(var(--gold)/0.45)] bg-[hsl(var(--bg-espresso))] text-[hsl(var(--fg-on-dark))] shadow-[var(--shadow-elevated)]'
                    : 'surface-glass border-[hsl(var(--border-hairline))] text-[hsl(var(--fg-ink))] hover:shadow-[var(--shadow-elevated)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-xs font-semibold tracking-wide ${
                        isHighlighted
                          ? 'text-[hsl(var(--gold))]'
                          : 'text-[hsl(var(--gold-deep))]'
                      }`}
                    >
                      {plan.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display mt-3 text-3xl font-medium tracking-tight">
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-2 border-b pb-6 border-current/12">
                    <span className="font-display tabular-nums text-4xl font-semibold tracking-tight sm:text-5xl">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isHighlighted
                          ? 'text-[hsl(var(--fg-on-dark-muted))]'
                          : 'text-[hsl(var(--fg-muted))]'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      isHighlighted
                        ? 'text-[hsl(var(--fg-on-dark-muted))]'
                        : 'text-[hsl(var(--fg-muted))]'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-snug"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isHighlighted
                              ? 'text-[hsl(var(--quartz))]'
                              : 'text-[hsl(var(--quartz-deep))]'
                          }`}
                          strokeWidth={1.8}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(`Plano: ${plan.name}`)}
                    className={`group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                      isHighlighted
                        ? 'bg-[hsl(var(--quartz))] text-[hsl(var(--bg-espresso))] hover:bg-[hsl(var(--gold))]'
                        : 'bg-[hsl(var(--bg-espresso))] text-[hsl(var(--fg-on-dark))] hover:bg-[hsl(var(--quartz-deep))]'
                    }`}
                  >
                    <span>Entrar em contato</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
