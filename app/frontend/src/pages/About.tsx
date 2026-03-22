import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

const ABOUT_IMG =
  "https://mgx-backend-cdn.metadl.com/generate/images/714948/2026-03-17/0206e6fa-7554-41eb-9869-71ace1a15a28.png";

const values = [
  {
    icon: Award,
    title: "Excelência",
    desc: "Buscamos a excelência em cada entrega, superando expectativas com soluções de alto impacto.",
  },
  {
    icon: Users,
    title: "Parceria",
    desc: "Construímos relações de confiança duradouras, atuando como verdadeiros parceiros estratégicos.",
  },
  {
    icon: TrendingUp,
    title: "Inovação",
    desc: "Estamos na vanguarda da tecnologia, trazendo as melhores práticas e tendências globais.",
  },
  {
    icon: Heart,
    title: "Integridade",
    desc: "Atuamos com ética e transparência em todos os nossos relacionamentos e projetos.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Fundação",
    desc: "Consultoria estratégica de TI e transformação digital para o setor de health care. Início das operações com foco nessas áreas.",
  },
  {
    year: "2020",
    title: "Cybersecurity & Governança",
    desc: "Ampliação do portfólio com serviços de cybersecurity e governança de TI, atendendo demandas crescentes do mercado.",
  },
  {
    year: "2022",
    title: "Inteligência Artificial",
    desc: "Incorporação de IA e machine learning ao portfólio de soluções, impulsionando a inovação nos clientes.",
  },
  {
    year: "2024",
    title: "Advisory C-Level",
    desc: "Lançamento do programa de advisory estratégico para executivos C-Level. Participação no programa e aplicação nos setores, com expansão para novos mercados.",
  },
  {
    year: "2026",
    title: "Referência Nacional",
    desc: "Consolidação como referência em consultoria estratégica em tecnologia, atendendo indústrias, hospitais e escolas em todo o Brasil.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ABOUT_IMG}
            alt="About Soul Pellegrini Tech"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-[#0A0F0D]/70 to-[#0A0F0D]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Sobre Nós
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Quem somos
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            A Soul Pellegrini Tech é uma consultoria estratégica em tecnologia
            que combina visão executiva com profundo conhecimento técnico para
            transformar negócios através da inovação digital.
          </p>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-24 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl bg-[#111916]/50 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empoderar líderes empresariais com estratégias tecnológicas que
                geram valor real, acelerando a transformação digital com
                segurança, governança e inteligência artificial de ponta.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-[#111916]/50 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ser a consultoria de referência no Brasil para CEOs e diretores
                que buscam excelência em tecnologia, reconhecida pela capacidade
                de transformar desafios complexos em vantagens competitivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Nossos Valores
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Princípios que nos <span className="text-gradient">guiam</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-2xl bg-[#111916]/30 border border-white/5 hover:border-green-500/20 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                  <val.icon size={28} className="text-green-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">
                  {val.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Nossa Trajetória
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Uma história de{" "}
              <span className="text-gradient">transformação</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-green-400 -translate-x-1.5 mt-2 ring-4 ring-[#080C0A]" />

                  {/* Content */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <span className="text-green-400 font-bold text-2xl">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-xl mt-2 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Metodologia
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Nossa abordagem{" "}
              <span className="text-gradient">estratégica</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                desc: "Análise profunda do cenário atual, identificando gaps, riscos e oportunidades de melhoria tecnológica.",
              },
              {
                step: "02",
                title: "Estratégia",
                desc: "Desenvolvimento de roadmap personalizado com priorização baseada em impacto e viabilidade.",
              },
              {
                step: "03",
                title: "Execução",
                desc: "Implementação acompanhada com métricas claras, garantindo resultados mensuráveis e sustentáveis.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl bg-[#111916]/30 border border-white/5 hover:border-green-500/20 transition-all duration-300 group"
              >
                <span className="text-6xl font-black text-green-500/10 absolute top-4 right-6 group-hover:text-green-500/20 transition-colors">
                  {item.step}
                </span>
                <h4 className="text-white font-bold text-xl mb-4 relative">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed relative">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}