import React, { useState, useEffect } from 'react';
import {
  Car,
  Truck,
  Tractor,
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
  Star,
  MapPinned,
  Building2,
  Factory
} from 'lucide-react';

export default function RubiconLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado del formulario de contacto
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
    const mensaje = `Hola, mi nombre/empresa es ${formData.nombre}. El Modelo/Marca del equipo es ${formData.modelo} y estoy interesado en cotizar: ${formData.servicio}.`;
    const url = `https://wa.me/51931883109?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-xl border-b border-slate-800' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo y Branding */}
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-lg shadow-lg shadow-amber-500/20">
                <Tractor className="text-slate-900 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h1 className="font-black text-xl md:text-2xl tracking-tight text-white">ERE</h1>
                <p className="text-[10px] md:text-xs text-amber-500 font-bold tracking-widest uppercase">Servicios Generales</p>
              </div>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wide">Inicio</a>
              <a href="#servicios" className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wide">Servicios</a>
              <a href="#cobertura" className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wide">Cobertura</a>
              <a href="#contacto" className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                Cotizar Proyecto
              </a>
            </div>

            {/* Botón Menú Móvil */}
            <button
              className="md:hidden text-white hover:text-amber-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-300 hover:text-amber-500 hover:bg-slate-800 rounded-md font-medium">Inicio</a>
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-300 hover:text-amber-500 hover:bg-slate-800 rounded-md font-medium">Servicios</a>
              <a href="#cobertura" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-300 hover:text-amber-500 hover:bg-slate-800 rounded-md font-medium">Cobertura</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 mt-4 text-center bg-amber-500 text-slate-900 font-bold rounded-md">Cotizar Proyecto</a>
            </div>
          </div>
        )}
      </nav>

      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Imagen de fondo industrial (camión/minería) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-6 backdrop-blur-sm">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide uppercase">Socios Estratégicos B2B & B2C</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Soporte Integral para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Industria y Minería</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Mantenimiento estético, lavado especializado y planchado para <strong>maquinaria pesada, flotas de concesionarios y vehículos particulares</strong>. Estándares rigurosos para los terrenos más exigentes del sur peruano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
                Contactar a un Asesor <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 bg-slate-800/50 text-white backdrop-blur-md border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-lg transition-all">
                Explorar Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-amber-500 py-12 relative z-20 -mt-10 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">SST</h3>
            <p className="text-slate-800 font-bold mt-1 text-sm md:text-base">Seguridad Ocupacional</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">100%</h3>
            <p className="text-slate-800 font-bold mt-1 text-sm md:text-base">Garantía Corporativa</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">24/7</h3>
            <p className="text-slate-800 font-bold mt-1 text-sm md:text-base">Respuesta Operativa</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Eco</h3>
            <p className="text-slate-800 font-bold mt-1 text-sm md:text-base">Procesos Sostenibles</p>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 mb-3">
              <Factory className="w-5 h-5" /> Catálogo de Especialidades
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Rendimiento óptimo para su maquinaria</h2>
            <p className="text-slate-600 text-lg">
              Adaptamos nuestros procesos a las exigencias de empresas contratistas, concesionarios y clientes exigentes, asegurando la preservación de sus activos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Tractor className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lavado Industrial y de Maquinaria</h3>
              <p className="text-slate-600 mb-6">Remoción profunda de minerales, barro y grasas pesadas para maquinaria amarilla y flotas logísticas.</p>
              <ul className="space-y-3">
                {['Hidrolavado de Alta Presión', 'Desengrasado de Chasis y Motor', 'Atención en Base o Taller'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Car className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailing y Flotas Comerciales</h3>
              <p className="text-slate-600 mb-6">Estética vehicular avanzada para vehículos ejecutivos, camionetas de supervisión y particulares.</p>
              <ul className="space-y-3">
                {['Restauración de Interiores', 'Tratamiento de Pintura y Cuero', 'Aplicación de Undercoating'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Wrench className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Planchado y Pintura Automotriz</h3>
              <p className="text-slate-600 mb-6">Restauración estructural y estética con cabinas presurizadas y pintura de alto tráfico (poliuretano).</p>
              <ul className="space-y-3">
                {['Reparación de Siniestros', 'Pintura Epóxica y Poliuretano', 'Tratamientos Anticorrosivos'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cobertura" className="py-20 bg-slate-900 relative overflow-hidden border-y border-slate-800">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-5 pointer-events-none">
          <MapPinned className="w-full h-full text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="text-slate-300 font-bold uppercase tracking-widest text-sm">Alcance Logístico</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Brindamos servicios en <br className="hidden lg:block"/>
                <span className="text-amber-500">Todo el Sur del Perú</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Nuestra capacidad operativa nos permite desplazarnos y atender requerimientos corporativos y de maquinaria pesada en las principales zonas mineras, puertos y ciudades del sur del país.
              </p>

              {/* Badges de locaciones */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['Arequipa', 'Mollendo', 'Moquegua', 'Ilo', 'Tacna'].map((ciudad, idx) => (
                  <div key={idx} className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 px-5 py-2.5 rounded-lg flex items-center gap-2 hover:border-amber-500/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    <span className="text-slate-200 font-semibold">{ciudad}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa de Cobertura */}
            <div className="flex-1 w-full max-w-2xl relative">
              <div className="aspect-square md:aspect-[4/3] w-full bg-slate-900 rounded-3xl border border-slate-700 relative overflow-hidden shadow-2xl">
                {/* Fondo Topográfico / Mapa (Imagen de stock en escala de grises) */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-lighten"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
                ></div>
                {/* Gradiente para mejorar la legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/60 to-transparent"></div>

                {/* Marcadores del Mapa */}
                {/* Arequipa */}
                <div className="absolute top-[25%] left-[45%] flex flex-col items-center group cursor-default">
                  <div className="relative">
                    <div className="w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] z-10 relative"></div>
                    <div className="w-4 h-4 bg-amber-500 rounded-full absolute inset-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="mt-2 text-white font-bold text-sm bg-slate-800/90 px-3 py-1 rounded-md backdrop-blur-sm border border-slate-600 transition-all group-hover:scale-110 group-hover:border-amber-500 shadow-lg">Arequipa</span>
                </div>

                {/* Mollendo */}
                <div className="absolute top-[40%] left-[25%] flex flex-col items-center group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)] z-10 relative"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full absolute inset-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="mt-2 text-slate-200 font-semibold text-xs bg-slate-800/90 px-2 py-1 rounded-md backdrop-blur-sm border border-slate-700 transition-all group-hover:scale-110 group-hover:border-amber-400">Mollendo</span>
                </div>

                {/* Moquegua */}
                <div className="absolute top-[55%] left-[58%] flex flex-col items-center group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)] z-10 relative"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full absolute inset-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="mt-2 text-slate-200 font-semibold text-xs bg-slate-800/90 px-2 py-1 rounded-md backdrop-blur-sm border border-slate-700 transition-all group-hover:scale-110 group-hover:border-amber-400">Moquegua</span>
                </div>

                {/* Ilo */}
                <div className="absolute top-[68%] left-[38%] flex flex-col items-center group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)] z-10 relative"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full absolute inset-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="mt-2 text-slate-200 font-semibold text-xs bg-slate-800/90 px-2 py-1 rounded-md backdrop-blur-sm border border-slate-700 transition-all group-hover:scale-110 group-hover:border-amber-400">Ilo</span>
                </div>

                {/* Tacna */}
                <div className="absolute top-[80%] left-[70%] flex flex-col items-center group cursor-default">
                  <div className="relative">
                    <div className="w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] z-10 relative"></div>
                    <div className="w-4 h-4 bg-amber-500 rounded-full absolute inset-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="mt-2 text-white font-bold text-sm bg-slate-800/90 px-3 py-1 rounded-md backdrop-blur-sm border border-slate-600 transition-all group-hover:scale-110 group-hover:border-amber-500 shadow-lg">Tacna</span>
                </div>

                {/* Overlay text */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <div className="inline-block bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl p-3 shadow-xl">
                    <p className="text-amber-500 font-bold text-sm flex items-center justify-center gap-2">
                      <Truck className="w-4 h-4" /> Despliegue Logístico Completo
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Info de contacto */}
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Contacto Comercial</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Iniciemos su proyecto.</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Fortalecemos la seguridad, confianza y el óptimo rendimiento de sus activos. Contacte a nuestro equipo para una evaluación técnica y cotización formal.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Área Comercial / Ing. Marilu Apaza C.</p>
                    <p className="text-xl font-bold text-slate-900">+51 931 883 109</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Correos Electrónicos</p>
                    <p className="text-base font-bold text-slate-900">elroielyon.seguimiento@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <Building2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Oficina Central</p>
                    <p className="text-base font-bold text-slate-900">Calle Juan Pablo Vizcardo y Guzman 506,<br/>4 de Octubre, Socabaya, Arequipa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario funcional */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-2xl relative">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Cotización Inmediata</h3>
              <p className="text-slate-500 mb-6 text-sm">Reciba respuesta por WhatsApp en minutos.</p>

              <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre / Razón Social *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Ej. Constructora Sur S.A.C."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Modelo de Equipo / Vehículo *</label>
                  <input
                    type="text" // Cambiado de tel a text como se sugirió
                    name="modelo"
                    required
                    value={formData.modelo}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Ej. Excavadora CAT 320 / Toyota Hilux"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Servicio de Interés</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option>Lavado de Maquinaria Pesada</option>
                    <option>Mantenimiento de Flotas (Pickups/Camiones)</option>
                    <option>Detailing y Estética (Particulares)</option>
                    <option>Planchado y Pintura Industrial</option>
                    <option>Otro Requerimiento</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-lg py-4 rounded-xl transition-all transform hover:scale-[1.02] mt-4 flex justify-center items-center gap-2 shadow-lg shadow-amber-500/30"
                >
                  Enviar a WhatsApp <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <div>
                <span className="text-slate-300 font-bold block">El Roi Elyon E.I.R.L.</span>
                <span className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</span>
              </div>
            </div>
            <div className="text-slate-500 text-sm flex gap-6">
              <span className="hover:text-amber-500 cursor-pointer transition-colors">Servicio B2B</span>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">Cobertura Sur</span>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">SST</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
