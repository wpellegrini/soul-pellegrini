import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Factory,
  Building2,
  GraduationCap,
  TrendingUp,
  Clock,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const sectors = [
  {
    icon: Factory,
    name: "Indústria",
    desc: "Transformação digital e automação para o setor industrial.",
  },
  {
    icon: HeartPulse,
    name: "Hospitais",
    desc: "Segurança de dados e modernização de sistemas hospitalares.",
  },
  {
    icon: GraduationCap,
    name: "Escolas",
    desc: "Governança de TI e transformação digital educacional.",
  },
  {
    icon: Building2,
    name: "Corporativo",
    desc: "Consultoria estratégica para grandes empresas e grupos.",
  },
];

const cases = [
  {
    sector: "Hospitais",
    sectorIcon: HeartPulse,
    title: "Cybersecurity e LGPD em Rede Hospitalar",
    desc: "Projeto de adequação à LGPD e implementação de framework de cybersecurity para uma rede hospitalar com 3 unidades, protegendo dados sensíveis de pacientes e garantindo conformidade regulatória.",
    metrics: [
      { value: "100%", label: "Conformidade LGPD" },
      { value: "Zero", label: "Incidentes de segurança" },
      { value: "85%", label: "Redução de vulnerabilidades" },
    ],
    tags: ["Cybersecurity", "LGPD", "Governança"],
  },
  {
    sector: "Escolas",
    sectorIcon: GraduationCap,
    title: "Modernização Tecnológica em Rede de Ensino",
    desc: "Planejamento e execução da modernização tecnológica de uma rede de ensino com 5 unidades, incluindo migração para nuvem, implementação de plataformas educacionais e governança de TI.",
    metrics: [
      { value: "70%", label: "Redução de custos com TI" },
      { value: "5", label: "Unidades integradas" },
      { value: "2mil+", label: "Alunos beneficiados" },
    ],
    tags: ["Cloud", "Governança de TI", "EdTech"],
  },
  {
    sector: "Indústria",
    sectorIcon: Factory,
    title: "IA para Manutenção Preditiva Industrial",
    desc: "Desenvolvimento e implementação de solução de inteligência artificial para manutenção preditiva em planta industrial, reduzindo paradas não programadas e otimizando a vida útil dos equipamentos.",
    metrics: [
      { value: "55%", label: "Menos paradas não programadas" },
      { value: "R$2M", label: "Economia anual estimada" },
      { value: "90%", label: "Precisão preditiva" },
    ],
    tags: ["Inteligência Artificial", "IoT", "Indústria 4.0"],
  },
  {
    sector: "Corporativo",
    sectorIcon: Building2,
    title: "Governança de TI para Grupo Empresarial",
    desc: "Estruturação completa da governança de TI para um grupo empresarial com 8 empresas, implementando COBIT, gestão de riscos e planejamento estratégico de tecnologia unificado.",
    metrics: [
      { value: "8", label: "Empresas integradas" },
      { value: "35%", label: "Otimização de investimentos" },
      { value: "ISO", label: "Certificação 27001" },
    ],
    tags: ["Governança", "COBIT", "ISO 27001"],
  },
  {
    sector: "Hospitais",
    sectorIcon: HeartPulse,
    title: "Transformação Digital em Hospital de Grande Porte",
    desc: "Projeto de transformação digital para hospital com mais de 300 leitos, incluindo prontuário eletrônico, telemedicina e integração de sistemas clínicos com analytics avançado.",
    metrics: [
      { value: "50%", label: "Redução tempo de atendimento" },
      { value: "300+", label: "Leitos conectados" },
      { value: "95%", label: "Satisfação dos médicos" },
    ],
    tags: ["Transformação Digital", "HealthTech", "Analytics"],
  },
  {
    sector: "Indústria",
    sectorIcon: Factory,
    title: "Transformação Digital na Indústria",
    desc: "Implementação completa de estratégia de transformação digital para uma indústria com mais de 500 colaboradores, incluindo automação de processos, IoT industrial e dashboards de gestão em tempo real.",
    metrics: [
      { value: "40%", label: "Redução de custos operacionais" },
      { value: "3x", label: "Aumento na produtividade" },
      { value: "60%", label: "Menos tempo de inatividade" },
    ],
    tags: ["Transformação Digital", "IoT", "Automação"],
  },
];

const testimonials = [
  {
    quote:
      "A Soul Pellegrini Tech transformou completamente nossa visão sobre tecnologia. O advisory estratégico nos ajudou a tomar decisões que impactaram diretamente nossos resultados.",
    role: "CEO, Indústria",
  },
  {
    quote:
      "A expertise em cybersecurity e LGPD foi fundamental para nossa rede hospitalar. Profissionalismo e conhecimento técnico de altíssimo nível.",
    role: "Diretora, Rede Hospitalar",
  },
  {
    quote:
      "O projeto de modernização tecnológica superou nossas expectativas. A equipe entendeu perfeitamente as necessidades do setor educacional.",
    role: "Diretor Geral, Rede de Ensino",
  },
];

export default function Cases() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Cases de Sucesso
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Resultados que{" "}
            <span className="text-gradient">falam por si</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Conheça alguns dos projetos que realizamos e os resultados
            transformadores que entregamos para nossos clientes em diversos
            setores.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="p-6 rounded-xl bg-[#111916]/50 border border-white/5 text-center hover:border-green-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <sector.icon size={24} className="text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">
                  {sector.name}
                </h4>
                <p className="text-gray-500 text-xs">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 rounded-2xl bg-[#111916]/30 border border-white/5 hover:border-green-500/15 transition-all duration-500"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <caseItem.sectorIcon size={14} className="text-green-400" />
                  <span className="text-green-400 text-xs font-semibold">
                    {caseItem.sector}
                  </span>
                </div>
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/5 text-gray-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {caseItem.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl">
                {caseItem.desc}
              </p>

              <div className="grid grid-cols-3 gap-6">
                {caseItem.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-[#0A0F0D]/50 border border-white/5 text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-xs lg:text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Depoimentos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              O que nossos clientes{" "}
              <span className="text-gradient">dizem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#111916]/30 border border-white/5"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TrendingUp
                      key={star}
                      size={16}
                      className="text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-[#0A0F0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: TrendingUp, value: "150+", label: "Projetos Entregues" },
              { icon: Clock, value: "12+", label: "Anos de Experiência" },
              { icon: ShieldCheck, value: "98%", label: "Taxa de Sucesso" },
              { icon: Building2, value: "50+", label: "Empresas Atendidas" },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon
                  size={24}
                  className="text-green-400 mx-auto mb-3"
                />
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#080C0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Quer ser nosso próximo{" "}
            <span className="text-gradient">case de sucesso</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Entre em contato e descubra como podemos transformar os desafios
            tecnológicos da sua empresa em resultados extraordinários.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 text-lg group"
          >
            Iniciar Conversa
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}