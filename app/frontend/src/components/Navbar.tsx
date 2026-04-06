import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Advisory", path: "/advisory" },
  { name: "Cases", path: "/cases" },
  { name: "Contato", path: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0F0D]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center font-bold text-white text-lg group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
              SP
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-wider leading-tight">
                SOUL PELLEGRINI
              </span>
              <span className="text-green-400 text-[10px] font-semibold tracking-[0.3em] uppercase leading-tight">
                TECH
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-green-400 bg-green-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contato"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            Fale Conosco
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A0F0D]/98 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-green-400 bg-green-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="block mt-4 text-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-lg"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  );
}