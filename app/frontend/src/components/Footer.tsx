import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
/*import logoImg from "@/assets/logo-soulpellegrini-v2-small.png";*/
const logoImg = "*./assets/logo-soulpellegrini-v2-small.png";

export default function Footer() {
  return (
    <footer className="bg-[#060A08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={logoImg}
                alt="Soul Pellegrini Tech"
                className="h-36 md:h-44 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consultoria estratégica em tecnologia, transformação digital, IA e
              cybersecurity para líderes que transformam o futuro dos negócios.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Sobre", path: "/sobre" },
                { name: "Serviços", path: "/servicos" },
                { name: "Advisory", path: "/advisory" },
                { name: "Cases", path: "/cases" },
                { name: "Contato", path: "/contato" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                "Transformação Digital",
                "Inteligência Artificial",
                "Governança de TI",
                "Cybersecurity",
                "Advisory C-Level",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Rua Felix a Cunha, Floresta
                  <br />
                  Porto Alegre, RS
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 shrink-0" />
                <a
                  href="tel:+5551981659454"
                  className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                >
                  +55 (51) 98165-9454
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-400 shrink-0" />
                <a
                  href="mailto:contato@soulpellegrini.com.br"
                  className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                >
                  contato@soulpellegrini.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Soul Pellegrini Tech. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-xs">
              Política de Privacidade
            </span>
            <span className="text-gray-500 text-xs">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
