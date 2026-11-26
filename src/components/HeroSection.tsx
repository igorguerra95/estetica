import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { CLINIC_IMAGES, HERO_METRICS } from '../data/clinicData';
import { CountUpMetric } from './CountUpMetric';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onContactClick: (subject?: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-16"
    >
      {/* Véus atmosféricos sutis em Rosa Quartzo e Dourado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-[520px] w-[520px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--quartz) / 0.24) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 -left-24 h-[440px] w-[440px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--gold) / 0.18) 0%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda — Manifesto Tipográfico */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center lg:col-span-6 lg:py-6"
          >
            <motion.div
              variants={itemVariants}
              className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-[hsl(var(--gold-deep))]"
            >
              <span>Estética Avançada</span>
              <span aria-hidden="true" className="text-[hsl(var(--quartz-deep))]">
                ·
              </span>
              <span>Epilação a Laser</span>
              <span aria-hidden="true" className="text-[hsl(var(--quartz-deep))]">
                ·
              </span>
              <span>Protocolos Faciais</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display max-w-2xl text-[clamp(3rem,5.4vw,5.5rem)] leading-[0.98] font-medium tracking-[-0.03em] text-[hsl(var(--fg-ink))]"
            >
              Pele serena, precisão clínica e o prazer de estar à vontade consigo.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-[hsl(var(--fg-muted))] sm:text-lg"
            >
              Unimos tecnologia de laser refrigerado e rituais faciais e corporais
              calibrados para o seu tom de pele — em um ambiente silencioso,
              acolhedor e sem pressa.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => onContactClick('Avaliação Personalizada')}
                className="group inline-flex min-h-[48px] shrink-0 items-center gap-2.5 rounded-full bg-[hsl(var(--bg-espresso))] px-7 py-3.5 text-sm font-semibold whitespace-nowrap text-[hsl(var(--fg-on-dark))] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--quartz-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--quartz-deep))]"
              >
                <span>Entrar em contato</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface)/0.8)] px-6 py-3.5 text-sm font-medium whitespace-nowrap text-[hsl(var(--fg-ink))] backdrop-blur-sm transition-all duration-200 hover:border-[hsl(var(--gold-deep))] hover:bg-[hsl(var(--bg-surface))]"
              >
                <span>Explorar protocolos</span>
                <ArrowDownRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </motion.div>
          </motion.div>

          {/* Coluna Direita — Fotografia Editorial Full-Height */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex lg:col-span-6"
          >
            <div className="relative min-h-[340px] w-full overflow-hidden rounded-3xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-warm))] shadow-[var(--shadow-elevated)] sm:min-h-[440px] lg:min-h-[540px]">
              <ResilientImage
                src={CLINIC_IMAGES.hero}
                alt="Suíte iluminada da Clinica de Estética com bancada em travertino, vasos em quartzo rosa e luz natural"
                loading="eager"
                className="h-full w-full object-cover object-center lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-espresso)/0.55)] via-transparent to-transparent"
              />

              {/* Cartão Glass sobreposto discreto */}
              <div className="surface-glass absolute right-4 bottom-4 left-4 rounded-2xl border border-[hsl(var(--bg-surface)/0.55)] p-4 sm:right-6 sm:bottom-6 sm:left-6 sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[hsl(var(--quartz-deep))]">
                      Avaliação diagnóstica individual
                    </p>
                    <p className="font-display mt-0.5 text-xl font-medium text-[hsl(var(--fg-ink))]">
                      Mapeamento de fototipo e plano sob medida
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-[hsl(var(--fg-muted))]">
                    Tripla onda · -4 °C
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas Animadas (4 colunas em largura total) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-2 border-y border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface)/0.55)] backdrop-blur-sm lg:mt-16 lg:grid-cols-4"
        >
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`flex flex-col justify-between p-5 sm:p-6 ${
                idx % 2 === 0
                  ? 'border-r border-[hsl(var(--border-hairline))]'
                  : 'lg:border-r lg:border-[hsl(var(--border-hairline))]'
              } ${idx < 2 ? 'border-b border-[hsl(var(--border-hairline))] lg:border-b-0' : ''} ${
                idx === 3 ? 'lg:border-r-0' : ''
              }`}
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-[hsl(var(--fg-ink))] sm:text-4xl">
                <CountUpMetric
                  target={metric.target}
                  decimals={metric.decimals}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </p>
              <div className="mt-2">
                <p className="text-sm font-semibold text-[hsl(var(--fg-ink))]">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[hsl(var(--fg-muted))]">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
