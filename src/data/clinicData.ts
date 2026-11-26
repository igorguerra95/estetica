import heroClinicImg from '../assets/images/hero_estetica_clinic_1795695810852.jpg';
import laserServiceImg from '../assets/images/servico_laser_precisao_1795695811204.jpg';
import facialServiceImg from '../assets/images/servico_facial_ritual_1795695812713.jpg';
import studioLoungeImg from '../assets/images/sobre_studio_ambiente_1795695812037.jpg';

export type ServiceCategory = 'Todos' | 'Depilação' | 'Facial' | 'Corporal';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ServiceCategory, 'Todos'>;
  duration: string;
  technology: string;
  summary: string;
  outcome: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  protocol: string;
  quote: string;
  result: string;
}

export interface MetricItem {
  id: string;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  detail: string;
}

export const CLINIC_IMAGES = {
  hero: heroClinicImg,
  laser: laserServiceImg,
  facial: facialServiceImg,
  lounge: studioLoungeImg,
} as const;

export const CONTACT_INFO = {
  brand: 'Clinica de Estética',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  whatsappHref:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Clinica%20de%20Est%C3%A9tica.',
  hours: 'Não informado',
} as const;

export const HERO_METRICS: MetricItem[] = [
  {
    id: 'sessions',
    target: 12400,
    prefix: '+',
    suffix: '',
    label: 'Sessões concluídas',
    detail: 'Protocolos acompanhados com registro fotográfico',
  },
  {
    id: 'satisfaction',
    target: 98.6,
    decimals: 1,
    suffix: '%',
    label: 'Satisfação em pesquisa',
    detail: 'Avaliação pós-ciclo entre clientes ativos',
  },
  {
    id: 'wavelengths',
    target: 3,
    prefix: '0',
    suffix: '',
    label: 'Comprimentos de onda',
    detail: 'Laser calibrado para todos os fototipos de pele',
  },
  {
    id: 'comfort',
    target: -4,
    suffix: ' °C',
    label: 'Ponteira criogênica',
    detail: 'Resfriamento contínuo para conforto durante a aplicação',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'laser-triplo',
    number: '01',
    title: 'Epilação a Laser de Tripla Onda',
    category: 'Depilação',
    duration: '20 a 45 min',
    technology: 'Diodo + Alexandrite + Nd:YAG',
    summary:
      'Redução progressiva e duradoura dos pelos com ponteira refrigerada a -4 °C, ajustada à densidade do fio e ao seu fototipo.',
    outcome: 'Pele uniforme, sem foliculite e com redução média de 85% após o ciclo inicial.',
    image: laserServiceImg,
    imageAlt: 'Sérum calmante e quartzo rosa sobre mármore travertino em suíte de depilação a laser',
    featured: true,
  },
  {
    id: 'facial-luminosidade',
    number: '02',
    title: 'Protocolo Facial de Hidratação e Viço',
    category: 'Facial',
    duration: '60 min',
    technology: 'Hidrodermoabrasão + LED Terapêutico',
    summary:
      'Limpeza profunda sem agressão seguida de infusão de ácido hialurônico, peptídeos calmantes e fotobiomodulação suave.',
    outcome: 'Textura refinada e luminosidade imediata sem tempo de recuperação.',
    image: facialServiceImg,
    imageAlt: 'Bandeja dourada com cremes faciais artesanais e toalhas de algodão sobre pedra natural',
    featured: true,
  },
  {
    id: 'epilacao-sensivel',
    number: '03',
    title: 'Epilação Delicada para Áreas Sensíveis',
    category: 'Depilação',
    duration: '25 min',
    technology: 'Cera Elástica Morna + Pré-Sérum',
    summary:
      'Atendimento cuidadoso para rosto, axilas e região íntima com fórmulas hipoalergênicas de baixa temperatura e extração gentil.',
    outcome: 'Toque macio por semanas com proteção da barreira cutânea desde a primeira visita.',
  },
  {
    id: 'bioestimulacao-facial',
    number: '04',
    title: 'Renovação Dérmica e Firmeza Facial',
    category: 'Facial',
    duration: '50 min',
    technology: 'Radiofrequência Fracionada Suave',
    summary:
      'Estímulo térmico controlado para produção gradual de colágeno no contorno mandibular, maçãs do rosto e região dos olhos.',
    outcome: 'Sustentação natural e expressão descansada com evolução progressiva.',
  },
  {
    id: 'drenagem-escultural',
    number: '05',
    title: 'Drenagem Linfática e Contorno Corporal',
    category: 'Corporal',
    duration: '60 min',
    technology: 'Manobras Miofasciais + Ativos Botânicos',
    summary:
      'Técnica rítmica de precisão que alivia retenção hídrica, melhora a circulação periférica e reduz a sensação de peso.',
    outcome: 'Leveza imediata nas pernas e definição sutil da silhueta.',
  },
  {
    id: 'remodelagem-corporal',
    number: '06',
    title: 'Protocolo Corporal de Textura e Elasticidade',
    category: 'Corporal',
    duration: '50 min',
    technology: 'Ultrassom Focado + Massagem Modeladora',
    summary:
      'Combinação clínica para suavizar irregularidades cutâneas em abdômen, flancos e coxas com acompanhamento biométrico.',
    outcome: 'Pele mais firme, tonificada e resposta mensurável a cada bloco de sessões.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plano-avulso',
    name: 'Sessão Avulsa',
    subtitle: 'Experiência inicial ou manutenção',
    price: 'R$ 240',
    period: 'por sessão',
    description:
      'Ideal para conhecer nosso padrão clínico, realizar uma sessão pontual de manutenção ou experimentar um ritual facial.',
    features: [
      'Avaliação individual da pele e do fio incluída',
      'Escolha de 1 área de epilação ou 1 ritual facial',
      'Pós-procedimento com sérum calmante de rosa mosqueta',
      'Agendamento flexível sem fidelidade contratual',
    ],
  },
  {
    id: 'plano-continuo',
    name: 'Protocolo Contínuo',
    subtitle: 'Mais procurado · Ciclo completo',
    price: 'R$ 590',
    period: 'por mês (6 sessões)',
    description:
      'Planejamento estruturado para resultados consistentes em depilação a laser ou rejuvenescimento facial progressivo.',
    features: [
      '2 áreas combinadas por visita com calibração digital',
      'Acompanhamento de evolução a cada 30 dias',
      'Prioridade na escolha de horários da semana',
      'Kit domiciliar de preparação e hidratação calmante',
    ],
    highlighted: true,
  },
  {
    id: 'plano-anual',
    name: 'Programa Anual Completo',
    subtitle: 'Cuidado integral o ano inteiro',
    price: 'R$ 1.180',
    period: 'por mês (12 meses)',
    description:
      'Curadoria contínua que une depilação a laser em múltiplas áreas, rituais faciais mensais e drenagem corporal.',
    features: [
      'Cobertura de até 4 áreas no laser + 1 ritual facial mensal',
      '2 sessões de drenagem linfática corporal por mês',
      'Sessões de retoque anual inclusas sem custo adicional',
      'Atendimento dedicado com especialista fixa da clínica',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-camila',
    name: 'Camila Andrade Ribeiro',
    context: 'Arquiteta · Cliente há 14 meses',
    protocol: 'Epilação a Laser de Tripla Onda',
    quote:
      'Eu evitava depilação a laser por causa da sensibilidade na pele e do receio de dor. Aqui cada parâmetro foi testado comigo antes de começar, e o resfriamento da ponteira tornou as sessões tranquilas.',
    result: 'Foliculite zerada e pele uniforme após 6 sessões.',
  },
  {
    id: 'dep-fernanda',
    name: 'Fernanda Vasconcelos',
    context: 'Médica Pediatra · Cliente há 9 meses',
    protocol: 'Protocolo Facial de Hidratação e Viço',
    quote:
      'A rotina de plantões deixava minha pele opaca e reativa. O atendimento não tem pressa nem empurra procedimentos desnecessários: é silencioso, técnico e realmente acolhedor.',
    result: 'Barreira cutânea recuperada e luminosidade estável.',
  },
  {
    id: 'dep-beatriz',
    name: 'Beatriz Monteiro Costa',
    context: 'Empresária · Cliente do Protocolo Contínuo',
    protocol: 'Drenagem Escultural + Laser',
    quote:
      'O que me conquistou foi a clareza desde o primeiro contato. Recebi o cronograma real das minhas sessões, valores fechados e resultados que acompanhei mês a mês.',
    result: 'Redução de medidas por retenção e agenda organizada.',
  },
];
