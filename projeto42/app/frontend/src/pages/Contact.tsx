import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Contato
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Vamos <span className="text-gradient">conversar</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Entre em contato conosco para agendar uma consultoria, tirar dúvidas
            ou solicitar uma proposta personalizada.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#080C0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Endereço
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Rua Felix a Cunha
                        <br />
                        Floresta - Porto Alegre, RS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Telefone
                      </h4>
                      <a
                        href="tel:+5551981659454"
                        className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                      >
                        +55 (51) 98165-9454
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">E-mail</h4>
                      <a
                        href="mailto:contato@soulpellegrini.com.br"
                        className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                      >
                        contato@soulpellegrini.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Horário de Atendimento
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Segunda a Sexta: 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/5 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2!2d-51.2!3d-30.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzI0LjAiUyA1McKwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Soul Pellegrini Tech"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-2xl bg-[#111916]/50 border border-white/5">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Obrigado pelo seu contato. Nossa equipe retornará em até
                      24 horas úteis.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          role: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-8 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Envie sua Mensagem
                    </h3>
                    <p className="text-gray-400 text-sm mb-8">
                      Preencha o formulário abaixo e entraremos em contato o
                      mais breve possível.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all text-sm"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">
                            E-mail Corporativo *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all text-sm"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">
                            Telefone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all text-sm"
                            placeholder="(51) 99999-9999"
                          />
                        </div>
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">
                            Empresa
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all text-sm"
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">
                            Cargo
                          </label>
                          <input
                            type="text"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all text-sm"
                            placeholder="Seu cargo"
                          />
                        </div>
                        <div>
                          <label className="text-white text-sm font-medium mb-2 block">
                            Assunto *
                          </label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all text-sm"
                          >
                            <option value="" className="text-gray-500">
                              Selecione um assunto
                            </option>
                            <option value="consultoria">
                              Consultoria Estratégica
                            </option>
                            <option value="transformacao">
                              Transformação Digital
                            </option>
                            <option value="ia">Inteligência Artificial</option>
                            <option value="cybersecurity">Cybersecurity</option>
                            <option value="governanca">
                              Governança de TI
                            </option>
                            <option value="advisory">Advisory C-Level</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">
                          Mensagem *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-[#0A0F0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 outline-none transition-all resize-none text-sm"
                          placeholder="Descreva como podemos ajudar sua empresa..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
                      >
                        Enviar Mensagem
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}