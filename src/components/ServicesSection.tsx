import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  SERVICES,
  type ServiceCategory,
  type ServiceItem,
} from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const CATEGORIES: ServiceCategory[] = ['Todos', 'Depilação', 'Facial', 'Corporal'];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Todos');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'Todos') return SERVICES;
    return SERVICES.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const featuredServices = filteredServices.filter((s) => s.featured && s.image);
  const editorialServices = filteredServices.filter((s) => !(s.featured && s.image));

  return (
    <section
      id="servicos"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho da Seção + Filtro Interativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col justify-between gap-8 border-b border-[hsl(var(--border-hairline))] pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[hsl(var(--gold-deep))]">
              Protocolos e Cuidados
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.04] font-medium tracking-[-0.025em] text-[hsl(var(--fg-ink))]">
              Tratamentos desenhados para o ritmo real da sua pele.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[hsl(var(--fg-muted))]">
              Da depilação a laser de alta precisão aos protocolos faciais e
              corporais, cada etapa é explicada com clareza antes de qualquer
              aplicação.
            </p>
          </div>

          {/* Segmented Control Interativo */}
          <div
            role="tablist"
            aria-label="Filtrar tratamentos por categoria"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] p-1.5"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[38px] shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[hsl(var(--bg-espresso))] text-[hsl(var(--fg-on-dark))] shadow-sm'
                      : 'text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg-ink))]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Fotográfico Assimétrico (para itens em destaque) */}
        {featuredServices.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {featuredServices.map((service, index) => {
              const isWide = featuredServices.length === 2 ? index === 0 : true;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -4 }}
                  className={`surface-glass group flex flex-col overflow-hidden rounded-3xl border border-[hsl(var(--border-hairline))] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)] ${
                    isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[hsl(var(--bg-surface-warm))]">
                    <ResilientImage
                      src={service.image!}
                      alt={service.imageAlt || service.title}
                      fallbackTitle={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[hsl(var(--fg-muted))]">
                        <span className="font-semibold text-[hsl(var(--gold-deep))]">
                          {service.number}.
                        </span>
                        <span>{service.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{service.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.technology}</span>
                      </div>

                      <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-[hsl(var(--fg-ink))] sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--fg-muted))] sm:text-base">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-t border-[hsl(var(--border-hairline))] pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-sm text-xs font-medium leading-relaxed text-[hsl(var(--fg-ink))]">
                        {service.outcome}
                      </p>

                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="inline-flex min-h-[42px] shrink-0 items-center gap-2 self-start rounded-full border border-[hsl(var(--bg-espresso)/0.2)] bg-[hsl(var(--bg-surface))] px-5 py-2 text-xs font-semibold whitespace-nowrap text-[hsl(var(--fg-ink))] transition-all duration-200 hover:border-[hsl(var(--quartz-deep))] hover:bg-[hsl(var(--quartz-soft))] hover:text-[hsl(var(--quartz-deep))] sm:self-auto"
                      >
                        <span>Entrar em contato</span>
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* Grade Editorial Complementar */}
        {editorialServices.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {editorialServices.map((service: ServiceItem, index: number) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -4 }}
                className="surface-glass flex flex-col justify-between rounded-2xl border border-[hsl(var(--border-hairline))] p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[hsl(var(--fg-muted))]">
                    <span className="font-semibold text-[hsl(var(--gold-deep))]">
                      {service.number}. {service.category}
                    </span>
                    <span className="tabular-nums">{service.duration}</span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl leading-snug font-medium text-[hsl(var(--fg-ink))]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[hsl(var(--quartz-deep))]">
                    {service.technology}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--fg-muted))]">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-[hsl(var(--border-hairline))] pt-4">
                  <p className="text-xs leading-relaxed text-[hsl(var(--fg-ink))]">
                    {service.outcome}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold whitespace-nowrap text-[hsl(var(--quartz-deep))] transition-colors hover:text-[hsl(var(--fg-ink))]"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
