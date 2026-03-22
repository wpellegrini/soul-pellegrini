import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Shield,
  Brain,
  Cpu,
  BarChart3,
  ChevronRight,
  Zap,
  Globe,
  Lock,
  Users,
} from "lucide-react";

const HERO_IMG =
  "https://mgx-backend-cdn.metadl.com/generate/images/714948/2026-03-17/b6c4f77e-5157-4b8f-bdaa-868e1f4287e0.png";

const services = [
  {
    icon: Cpu,
    title: "Transformação Digital",
    desc: "Estratégias de digitalização end-to-end para acelerar a evolução do seu negócio.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    desc: "Implementação de IA e machine learning para decisões mais inteligentes e eficientes.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Proteção avançada contra ameaças cibernéticas com frameworks de segurança robustos.",
  },
  {
    icon: BarChart3,
    title: "Governança de TI",
    desc: "Estruturação de governança tecnológica alinhada aos objetivos estratégicos.",
  },
];

const stats = [
  { value: "150+", label: "Projetos Entregues" },
  { value: "98%", label: "Satisfação dos Clientes" },
  { value: "12+", label: "Anos de Experiência" },
  { value: "50+", label: "Empresas Atendidas" },
];

const differentials = [
  {
    icon: Zap,
    title: "Agilidade Executiva",
    desc: "Metodologias ágeis adaptadas ao contexto corporativo com entregas rápidas.",
  },
  {
    icon: Globe,
    title: "Visão Global",
    desc: "Experiência internacional com as melhores práticas do mercado global.",
  },
  {
    icon: Lock,
    title: "Segurança First",
    desc: "Abordagem security-by-design em todas as soluções implementadas.",
  },
  {
    icon: Users,
    title: "C-Level Advisory",
    desc: "Aconselhamento estratégico direto para CEOs e diretores executivos.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Technology consulting"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D] via-[#0A0F0D]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-transparent to-[#0A0F0D]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                Consultoria Estratégica em Tecnologia
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Transformamos{" "}
              <span className="text-gradient">tecnologia</span> em{" "}
              <span className="text-gradient-gold">vantagem competitiva</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Consultoria estratégica em transformação digital, inteligência
              artificial, governança e cybersecurity para líderes que moldam o
              futuro dos negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contato@soulpellegrini.com.br"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 group"
              >
                Agende uma Consultoria
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Conheça Nossos Serviços
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-[#0A0F0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Nossos Serviços
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Soluções que impulsionam{" "}
              <span className="text-gradient">resultados</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oferecemos consultoria especializada nas áreas mais críticas da
              tecnologia empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-[#111916]/50 border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:glow-green-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                  <service.icon size={28} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-1 text-green-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                >
                  Saiba mais <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
                Por que a Soul Pellegrini
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Excelência e autoridade em{" "}
                <span className="text-gradient">cada projeto</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Combinamos profundo conhecimento técnico com visão estratégica de
                negócios para entregar resultados mensuráveis e transformadores.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-green-400 font-semibold hover:gap-3 transition-all duration-300"
              >
                Conheça nossa história <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((diff) => (
                <div
                  key={diff.title}
                  className="p-6 rounded-xl bg-[#111916]/50 border border-white/5 hover:border-green-500/20 transition-all duration-300"
                >
                  <diff.icon size={24} className="text-green-400 mb-4" />
                  <h4 className="text-white font-semibold mb-2">
                    {diff.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#080C0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu{" "}
            <span className="text-gradient">negócio</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos acelerar a transformação
            digital da sua empresa com segurança e estratégia.
          </p>
          <a
            href="mailto:contato@soulpellegrini.com.br"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 text-lg group"
          >
            Fale com um Especialista
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