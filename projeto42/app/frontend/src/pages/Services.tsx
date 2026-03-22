import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Cpu,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Server,
  Cloud,
} from "lucide-react";

const SERVICES_IMG =
  "https://mgx-backend-cdn.metadl.com/generate/images/714948/2026-03-17/2efdb37c-b55a-4239-9a54-53fb685f77f7.png";

const services = [
  {
    icon: Cpu,
    title: "Transformação Digital",
    desc: "Conduzimos a jornada de transformação digital da sua empresa com estratégia, tecnologia e gestão de mudanças. Desde o diagnóstico de maturidade digital até a implementação de soluções que revolucionam processos e modelos de negócio.",
    benefits: [
      "Diagnóstico de maturidade digital",
      "Roadmap de transformação personalizado",
      "Automação de processos (RPA)",
      "Integração de sistemas legados",
      "Cultura de inovação digital",
      "Métricas e KPIs de transformação",
    ],
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    desc: "Implementamos soluções de IA e machine learning que geram insights acionáveis e automatizam decisões complexas. Da análise preditiva à automação inteligente, transformamos dados em vantagem competitiva.",
    benefits: [
      "Machine Learning e Deep Learning",
      "Processamento de linguagem natural (NLP)",
      "Análise preditiva e prescritiva",
      "Computer Vision industrial",
      "Chatbots e assistentes virtuais",
      "Estratégia de dados e IA",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protegemos sua organização contra ameaças cibernéticas com frameworks de segurança robustos e abordagem proativa. Implementamos defesas em camadas e cultura de segurança em toda a organização.",
    benefits: [
      "Assessment de vulnerabilidades",
      "SOC e monitoramento 24/7",
      "Resposta a incidentes",
      "Compliance (LGPD, ISO 27001)",
      "Testes de penetração",
      "Treinamento de conscientização",
    ],
  },
  {
    icon: BarChart3,
    title: "Governança de TI",
    desc: "Estruturamos a governança tecnológica da sua empresa alinhada aos objetivos estratégicos do negócio. Implementamos frameworks reconhecidos e processos que garantem eficiência e controle.",
    benefits: [
      "COBIT e ITIL implementation",
      "Gestão de riscos de TI",
      "Planejamento estratégico de TI",
      "Gestão de portfólio de projetos",
      "Otimização de investimentos em TI",
      "Auditoria e compliance",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Strategy",
    desc: "Desenhamos e executamos estratégias de migração e otimização em nuvem que reduzem custos, aumentam a agilidade e garantem escalabilidade para o crescimento do seu negócio.",
    benefits: [
      "Cloud assessment e planejamento",
      "Migração para nuvem (AWS, Azure, GCP)",
      "Arquitetura cloud-native",
      "Otimização de custos em nuvem",
      "Multi-cloud e hybrid cloud",
      "DevOps e CI/CD",
    ],
  },
  {
    icon: Server,
    title: "Infraestrutura & Modernização",
    desc: "Modernizamos a infraestrutura tecnológica da sua empresa para suportar a transformação digital com alta disponibilidade, performance e segurança.",
    benefits: [
      "Modernização de data centers",
      "Virtualização e containers",
      "Redes e conectividade",
      "Disaster recovery",
      "Monitoramento e observabilidade",
      "Capacity planning",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={SERVICES_IMG}
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-[#0A0F0D]/70 to-[#0A0F0D]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Nossos Serviços
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Soluções <span className="text-gradient">completas</span> para sua
            empresa
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Oferecemos um portfólio completo de serviços de consultoria em
            tecnologia, desenhados para atender às necessidades específicas de
            cada organização.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <a
                  href="mailto:contato@soulpellegrini.com.br"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
                >
                  Solicitar Proposta
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div
                className={`p-8 rounded-2xl bg-[#111916]/50 border border-white/5 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                  O que inclui
                </h4>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-green-400 mt-0.5 shrink-0"
                      />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0F0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Precisa de uma solução{" "}
            <span className="text-gradient">personalizada</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Nossa equipe de especialistas está pronta para entender suas
            necessidades e propor a melhor estratégia.
          </p>
          <a
            href="mailto:contato@soulpellegrini.com.br"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 text-lg group"
          >
            Entre em Contato
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