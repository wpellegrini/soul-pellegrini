import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Crown,
  Target,
  Lightbulb,
  Handshake,
  CheckCircle2,
  Star,
} from "lucide-react";

const ADVISORY_IMG =
  "https://mgx-backend-cdn.metadl.com/generate/images/714948/2026-03-17/dea01c12-8340-4614-b009-eb35d5c68dfa.png";

const programs = [
  {
    icon: Crown,
    title: "Advisory Board",
    desc: "Participação como membro do conselho consultivo da sua empresa, trazendo visão estratégica em tecnologia para as decisões mais importantes do negócio.",
    features: [
      "Reuniões mensais de conselho",
      "Análise de investimentos em tecnologia",
      "Avaliação de riscos e oportunidades",
      "Direcionamento estratégico de TI",
      "Networking com líderes do setor",
    ],
  },
  {
    icon: Target,
    title: "Consultoria C-Level",
    desc: "Aconselhamento direto e personalizado para CEOs, CTOs e CIOs, focado em alinhar a estratégia tecnológica com os objetivos de negócio.",
    features: [
      "Sessões one-on-one com executivos",
      "Planejamento estratégico de TI",
      "Due diligence tecnológica",
      "Avaliação de maturidade digital",
      "Benchmarking setorial",
    ],
  },
  {
    icon: Lightbulb,
    title: "Mentoria Executiva",
    desc: "Programa de mentoria para líderes de tecnologia que buscam desenvolver competências estratégicas e ampliar seu impacto na organização.",
    features: [
      "Desenvolvimento de liderança tech",
      "Gestão de stakeholders",
      "Comunicação executiva",
      "Tomada de decisão baseada em dados",
      "Gestão de mudanças",
    ],
  },
  {
    icon: Handshake,
    title: "Programa de Aconselhamento",
    desc: "Programa contínuo de aconselhamento estratégico para empresas em processo de transformação digital ou expansão tecnológica.",
    features: [
      "Acompanhamento trimestral",
      "Revisão de roadmap tecnológico",
      "Análise de tendências e inovação",
      "Suporte em decisões críticas",
      "Acesso a rede de especialistas",
    ],
  },
];

const benefits = [
  "Acesso direto a consultores com mais de 12 anos de experiência",
  "Visão estratégica alinhada às melhores práticas globais",
  "Abordagem personalizada para cada contexto empresarial",
  "Rede de contatos com líderes de tecnologia do mercado",
  "Confidencialidade total em todas as interações",
  "Resultados mensuráveis e acompanhamento contínuo",
];

export default function Advisory() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ADVISORY_IMG}
            alt="Advisory"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-[#0A0F0D]/70 to-[#0A0F0D]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Advisory
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Aconselhamento{" "}
            <span className="text-gradient">estratégico</span> para líderes
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Programas exclusivos de advisory e mentoria para CEOs, diretores e
            executivos que buscam excelência em decisões tecnológicas e
            transformação digital.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Programas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Modelos de <span className="text-gradient">advisory</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="p-8 rounded-2xl bg-[#111916]/50 border border-white/5 hover:border-green-500/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <program.icon size={28} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {program.desc}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-green-400 mt-0.5 shrink-0"
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
                Benefícios
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Por que escolher nosso{" "}
                <span className="text-gradient">advisory</span>?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Nosso programa de advisory é desenhado para executivos que
                entendem que a tecnologia é o principal vetor de transformação e
                competitividade no cenário atual.
              </p>
              <a
                href="mailto:contato@soulpellegrini.com.br"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
              >
                Agendar Reunião
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#111916]/30 border border-white/5"
                >
                  <Star
                    size={18}
                    className="text-amber-400 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#080C0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para elevar sua{" "}
            <span className="text-gradient">liderança tecnológica</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Agende uma conversa confidencial com nossos consultores e descubra o
            programa ideal para você.
          </p>
          <a
            href="mailto:contato@soulpellegrini.com.br"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 text-lg group"
          >
            Fale com um Consultor
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}