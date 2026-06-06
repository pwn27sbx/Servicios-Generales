import React, { useState, useEffect } from 'react';
import {
  Car,
  Settings,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Droplets,
  Wrench,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Star
} from 'lucide-react';

export default function RubiconLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lógica añadida para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    modelo: '',
    servicio: 'Lavado de Maquinaria Pesada'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola, mi nombre es ${formData.nombre}. Mi Modelo y Marca es ${formData.modelo} y estoy interesado en: ${formData.servicio}.`;
    const url = `https://wa.me/51931883109?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Efecto para cambiar el estilo del menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* Navegación Sticky */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Car className="text-slate-900 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h1 className={`font-black text-xl md:text-2xl tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>ERE</h1>
                <p className="text-[10px] md:text-xs text-amber-500 font-bold tracking-widest uppercase">Servicios Generales</p>
              </div>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wide">Inicio</a>
              <a href="#servicios" className="text-white hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wide">Servicios</a>
              <a href="#nosotros" className="text-white hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wide">Nosotros</a>
              <a href="#contacto" className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                Cotizar Proyecto
              </a>
            </div>

            {/* Botón Menú Móvil */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-white hover:bg-slate-800 rounded-md">Inicio</a>
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-white hover:bg-slate-800 rounded-md">Servicios</a>
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-white hover:bg-slate-800 rounded-md">Nosotros</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 mt-4 text-center bg-amber-500 text-slate-900 font-bold rounded-md">Cotizar Proyecto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6">
              <Star className="w-4 h-4 fill-amber-500" />
              <span className="text-sm font-bold tracking-wide uppercase">El Roi Elyon EIRL</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Nuestro Compromiso con la <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Excelencia</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Soluciones integrales para vehículos livianos, camiones y maquinaria pesada. Lavado especializado, detailing, planchado y pintura con los más altos estándares de calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all hover:scale-105">
                Solicitar Cotización <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Valores (Banda de estadísticas/valores) */}
      <section id="nosotros" className="bg-amber-500 py-12 relative z-20 -mt-10 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <h3 className="text-4xl font-black text-slate-900">100%</h3>
            <p className="text-slate-800 font-bold mt-1">Compromiso</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-slate-900">Top</h3>
            <p className="text-slate-800 font-bold mt-1">Calidad Garantizada</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-slate-900">+5</h3>
            <p className="text-slate-800 font-bold mt-1">Servicios Especializados</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-slate-900">24/7</h3>
            <p className="text-slate-800 font-bold mt-1">Empatía y Confianza</p>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6">Mantenemos tus equipos en estado óptimo</h2>
            <p className="text-slate-600 text-lg">
              Contamos con personal calificado que destaca por su dedicación, habilidades técnicas y un enfoque innovador, adaptándonos a las necesidades específicas de tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <Droplets className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lavado de Vehículos Automotores</h3>
              <p className="text-slate-600 mb-6">Eficiencia, rapidez y seguridad para tu flota con tecnología de punta y procesos ecológicos.</p>
              <ul className="space-y-3">
                {['Lavado Automático y Presión', 'Lavado a Vapor (Ecológico)', 'Lavado de Chasis y Motor'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <Car className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailing y Estética Vehicular</h3>
              <p className="text-slate-600 mb-6">Limpieza exhaustiva y minuciosa. Recuperamos el brillo y el aspecto original de tu vehículo.</p>
              <ul className="space-y-3">
                {['Lavado a Detalle (Interior/Exterior)', 'Tratamiento de Asientos de Cuero', 'Encerado y Undercoating'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <Wrench className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Planchado y Pintura</h3>
              <p className="text-slate-600 mb-6">Acabados garantizados utilizando productos premium y tecnología especializada.</p>
              <ul className="space-y-3">
                {['Reparación de abolladuras', 'Pinturas resistentes y duraderas', 'Acabados impecables'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Info de contacto */}
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Cerca de tus proyectos</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Trabajemos juntos.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Nuestra visión es fortalecer la unión y estrechar lazos de seguridad, confianza y bienestar con nuestros clientes. Contáctanos hoy para una cotización personalizada.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="bg-slate-700 p-4 rounded-full">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Llámanos (Ing. Marilu Apaza C.)</p>
                    <p className="text-xl font-bold text-white">+51 931 883 109</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="bg-slate-700 p-4 rounded-full">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Escríbenos</p>
                    <p className="text-lg font-bold text-white break-all">elroielyon.seguimiento@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="bg-slate-700 p-4 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Ubicación Principal</p>
                    <p className="text-lg font-bold text-white">Calle Juan Pablo Vizcardo y Guzman 506,<br/>4 de Octubre, Socabaya, Arequipa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario funcional */}
            <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500 rounded-bl-full rounded-tr-3xl -z-10 opacity-20"></div>
              <h3 className="text-2xl font-bold mb-6 text-white">Cotización Rápida</h3>
              <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nombre / Empresa</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Ej. Constructora Sur"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Modelo</label>
                  <input
                    type="tel"
                    name="modelo"
                    required
                    value={formData.modelo}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Ingrese Modelo y Marca"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Servicio de Interés</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option>Lavado de Maquinaria Pesada</option>
                    <option>Lavado de Flota Liviana</option>
                    <option>Detailing Automotriz</option>
                    <option>Planchado y Pintura</option>
                    <option>Otro Servicio</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg py-4 rounded-xl transition-all transform hover:scale-[1.02] mt-4 flex justify-center items-center gap-2"
                >
                  Enviar Mensaje <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <span>&copy; {new Date().getFullYear()} Servicios Generales. Todos los derechos reservados.</span>
          </div>
          <div className="text-slate-500 text-sm">

          </div>
        </div>
      </footer>
    </div>
  );
}
