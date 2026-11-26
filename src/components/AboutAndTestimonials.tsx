import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, SlidersHorizontal, Sparkles } from 'lucide-react';
import { CLINIC_IMAGES, TESTIMONIALS } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface AboutAndTestimonialsProps {
  onContactClick: (subject?: string) => void;
}

const PILLARS = [
  {
    icon: SlidersHorizontal,
    title: 'Parâmetros calibrados ao vivo',
    description:
      'Cada sessão ajusta fluência, pulso e resfriamento de acordo com a resposta imediata da sua pele naquele dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança clínica em cada detalhe',
    description:
      'Protocolos padronizados com higienização hospitalar, ponteiras esterilizáveis e acompanhamento por especialistas.',
  },
  {
    icon: Sparkles,
    title: 'Tempo reservado sem correria',
    description:
      'Agenda espaçada para receber você com calma, tirar dúvidas e respeitar o conforto de cada etapa.',
  },
];

export function AboutAndTestimonials({ onContactClick }: AboutAndTestimonialsProps) {
  return (
    <section id="sobre" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Bloco Sobre — Composição Editorial Assimétrica */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-warm))] shadow-[var(--shadow-elevated)]">
              <ResilientImage
                src={CLINIC_IMAGES.lounge}
                alt="Recepção curvilínea da Clinica de Estética com banco em travertino e arandelas douradas"
                fallbackTitle="Ambiente Clinica de Estética"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold-deep))]">
              Sobre a Clínica
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.025em] text-[hsl(var(--fg-ink))]">
              Cuidado estético que respeita a biologia da sua pele e o seu tempo.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[hsl(var(--fg-muted))] sm:text-lg">
              A Clinica de Estética nasceu da vontade de transformar o atendimento
              estético em uma experiência tranquila e previsível. Afastamos a
              pressa das grandes redes para oferecer diagnósticos honestos,
              equipamentos de alta precisão e resultados que evoluem com naturalidade.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[hsl(var(--border-hairline))] pt-8 sm:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="space-y-2.5">
                    <Icon
                      className="h-5 w-5 text-[hsl(var(--quartz-deep))]"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-xl font-medium text-[hsl(var(--fg-ink))]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[hsl(var(--fg-muted))]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9">
              <button
                type="button"
                onClick={() => onContactClick('Visita e Avaliação Clínica')}
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-[hsl(var(--bg-espresso))] px-7 py-3 text-sm font-semibold whitespace-nowrap text-[hsl(var(--fg-on-dark))] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--quartz-deep))]"
              >
                <span>Entrar em contato</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bloco Depoimentos Adjacente — Prova Social Atribuível */}
        <div id="depoimentos" className="mt-24 border-t border-[hsl(var(--border-hairline))] pt-16 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold-deep))]">
                Histórias Reais
              </p>
              <h2 className="font-display mt-2 text-[clamp(2rem,3.4vw,3rem)] leading-[1.08] font-medium tracking-[-0.02em] text-[hsl(var(--fg-ink))]">
                Quem vive a rotina da clínica conta como foi a mudança.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[hsl(var(--fg-muted))]">
              Relatos de acompanhamento contínuo com foco em conforto, constância e
              resultados observáveis.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -4 }}
                className="surface-glass flex flex-col justify-between rounded-2xl border border-[hsl(var(--border-hairline))] p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div>
                  <p className="text-xs font-semibold text-[hsl(var(--quartz-deep))]">
                    {item.protocol}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--fg-ink))] sm:text-base">
                    “{item.quote}”
                  </p>
                </div>

                <footer className="mt-6 border-t border-[hsl(var(--border-hairline))] pt-4">
                  <p className="text-xs font-semibold text-[hsl(var(--gold-deep))]">
                    {item.result}
                  </p>
                  <p className="font-display mt-2 text-lg font-semibold text-[hsl(var(--fg-ink))]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[hsl(var(--fg-muted))]">
                    {item.context}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
