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
              {/* Contenedor del Logo Personalizado */}
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-lg p-1.5 shadow-lg shadow-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="120 60 810 750" className="w-full h-full text-slate-900 drop-shadow-sm">
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M382.764 223.385L432.678 223.363C453.686 223.331 472.347 221.92 493.004 227.587C533.444 238.681 549.637 280.168 538.035 318.106C531.933 338.059 522.132 348.479 503.864 358.169C509.318 366.148 514.005 374.359 519.004 382.609L544.883 425.656L568.448 464.837C574.555 474.876 581.062 485.218 586.76 495.45L560.89 495.354L538.615 495.444L461.301 366.647C458.011 366.866 452.048 366.689 448.554 366.692C441.118 366.727 433.682 366.716 426.246 366.658L426.023 428.49L382.892 428.463C383.23 360.104 383.187 291.743 382.764 223.385ZM426.228 328.456C443.318 328.438 476.187 331.421 488.206 319.041C495.257 310.4 498.333 302.132 497.243 290.917C493.593 253.363 451.837 262.775 426.21 261.501L426.228 328.456Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M220.044 223.334L359.909 223.396C359.888 227.029 360.148 260.3 359.624 261.361L358.125 261.75C355.957 261.238 333.506 261.402 330.107 261.45C308.04 261.76 285.332 261.066 263.342 261.53C263.695 266.195 263.951 303.76 263.316 305.888C264.347 306.054 269.488 305.914 270.801 305.905L286.969 305.814L348.318 305.595C348.863 316.15 348.393 332.281 348.39 343.059C339.363 342.78 328.864 343.056 319.71 343.064L263.3 343.059C263.124 358.766 263.166 374.475 263.425 390.181L362.577 390.36L362.572 428.546C356.258 428.286 348.433 428.485 342.021 428.485L303.621 428.48C276.408 428.477 247.38 428.008 220.246 428.604C219.891 412.314 220.392 395.809 220.232 379.494C220.167 372.85 220.097 365.865 220.355 359.257C208.176 356.937 193.043 352.865 180.768 349.985L109.06 333.384C96.9781 330.559 84.3467 327.19 72.3598 324.64C82.3712 322.755 96.1898 319.016 106.389 316.609L180.37 298.832C193.337 295.754 207.224 292.333 220.243 289.72C220.193 267.825 220.557 245.172 220.044 223.334Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M241.426 242.311L345.933 242.298C348.756 246.792 357.594 257.597 358.125 261.75C355.957 261.238 333.506 261.402 330.107 261.45C308.04 261.76 285.332 261.066 263.342 261.53C263.695 266.195 263.951 303.76 263.316 305.888C262.037 306.281 245.618 321.933 242.093 324.345C241.552 297.004 241.329 269.657 241.426 242.311Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M405.705 84.2172C407.479 84.5324 409.76 84.7371 411.57 84.9038C423.049 85.9616 434.095 88.3859 445.369 90.6265C445.749 98.6138 445.149 111.105 446.053 118.589C455.192 121.106 466.436 125.632 474.993 129.581C479.356 123.795 487.369 113.268 492.119 108.248C495.661 109.726 500.546 112.667 503.907 114.638C516.509 122.027 528.212 130.606 539.689 139.604C537.356 145.615 530.629 158.255 527.538 164.449C535.292 170.171 548.173 185.143 553.785 192.967C560.541 189.408 573.071 184.438 580.554 181.246C589.564 192.23 602.913 218.678 608.227 232.193C602.942 236.334 589.996 244.259 584.118 247.732C588.068 258.229 591.788 274.053 593.455 285.157C602.658 285.719 613.25 287.059 622.521 288.014C622.555 289.606 622.697 291.544 622.875 293.129C624.831 310.599 623.708 327.093 622.109 344.509C614.292 344.422 601.752 346.218 593.477 346.841C592.901 355.965 588.535 371.544 585.9 380.523L584.619 384.69L607.999 400.588C602.93 416.699 592.973 433.578 583.923 447.759L561.976 411.168C557.747 404.139 552.683 396.407 548.827 389.339C554.416 375.189 557.415 366.166 560.691 350.953C563.71 336.935 563.482 326.371 564.361 312.269C564.765 305.798 565.475 299.777 565.435 293.218C565.306 274.658 559.79 256.535 549.556 241.049C544.393 233.206 538.425 225.978 533.274 218.085C507.555 178.676 464.168 152.864 418.71 143.287C414.971 123.789 409.37 104.457 405.705 84.2172Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M155.282 198.157L276.421 126.978C303.311 111.125 331.262 94.0553 358.394 78.8957C356.957 88.6063 354.351 98.3326 352.238 107.951C351.132 113.136 348.464 127.083 346.978 131.484C339.02 137.033 324.09 145.19 315.148 150.42L256.001 185.114L216.107 208.618C211.5 211.352 199.356 218.924 195.311 220.577C195.676 227.104 195.518 235.033 195.531 241.701L195.548 278.479C189.822 279.825 182.059 281.869 176.44 282.887C172.158 284.384 160.7 286.312 155.317 287.764C154.889 258.27 155.286 227.724 155.282 198.157Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M175.318 209.806C180.802 205.873 190.841 200.433 196.855 196.931L231.93 176.292L303.19 134.467C316.369 126.559 329.61 118.755 342.912 111.055C344.858 109.94 348.668 107.582 350.861 107.106C351.279 107.015 351.816 107.611 352.238 107.951C351.132 113.136 348.464 127.083 346.978 131.484C339.02 137.033 324.09 145.19 315.148 150.42L256.001 185.114L216.107 208.618C211.5 211.352 199.356 218.924 195.311 220.577C195.676 227.104 195.518 235.033 195.531 241.701L195.548 278.479C189.822 279.825 182.059 281.869 176.44 282.887C174.429 279.608 175.291 219.03 175.318 209.806Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M381.537 540.233C385.307 537.494 394.667 532.253 399.13 529.604L434.886 508.469C445.002 502.525 455.078 496.513 465.112 490.434C475.991 483.781 487.064 476.725 498.495 471.088C501.82 476.089 505.407 482.438 508.587 487.701C511.952 493.235 515.569 498.985 518.739 504.606C513.986 508.092 506.029 512.533 500.778 515.647L469.216 534.328C440.538 551.313 410.534 569.691 381.594 586.059C375.645 582.92 369.557 578.929 363.71 575.481L325.759 553.317C312.722 545.841 299.728 538.292 286.776 530.671C282.103 527.922 271 521.661 267.007 518.587C272.167 513.816 277.269 509.466 282.405 504.805C286.382 500.853 293.829 494.865 298.256 491.223C301.272 492.717 304.785 495.018 307.742 496.781L324.073 506.429L381.537 540.233Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M381.537 540.233C385.307 537.494 394.667 532.253 399.13 529.604L434.886 508.469C445.002 502.525 455.078 496.513 465.112 490.434C475.991 483.781 487.064 476.725 498.495 471.088C501.82 476.089 505.407 482.438 508.587 487.701C504.729 490.012 501.141 492.507 497.322 494.816L452.471 521.423C428.695 535.347 404.871 548.706 381.353 563.152C373.11 557.284 360.511 550.649 351.391 545.4L303.969 517.86C300.75 516.006 284 506.658 282.405 504.805C286.382 500.853 293.829 494.865 298.256 491.223C301.272 492.717 304.785 495.018 307.742 496.781L324.073 506.429L381.537 540.233Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M381.341 43.8348C382.598 45.0618 412.473 187.579 415.706 201.71C404.958 201.391 392.988 201.624 382.141 201.597C370.59 201.583 359.039 201.628 347.488 201.734C349.122 191.467 351.895 180.113 354.156 169.868L363.337 126.724L374.251 75.048C376.131 66.2123 378.762 52.2962 381.341 43.8348Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M155.337 361.973C166.067 363.728 184.482 368.465 195.427 371.116C195.501 382.294 195.469 390.522 198.23 401.575C203.095 421.055 214.339 438.347 230.172 450.698C235.38 454.736 240.948 457.975 246.596 461.351C245.481 463.895 243.295 467.665 241.924 470.28C239.404 475.166 236.911 480.066 234.445 484.98C232.355 488.929 230.354 492.924 228.444 496.962C212.594 487.115 205.402 482.932 192.149 469.483C169.2 446.193 158.218 419.673 155.744 387.161C155.111 378.836 155.285 370.325 155.337 361.973Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M266.363 450.494C270.081 450.473 286.294 450.096 288.619 450.98C294.634 453.265 304.35 460.842 311.142 464.366C324.24 471.161 333.47 474.17 347.435 477.836C349.452 481.303 352.223 488.465 353.872 492.398C333.588 487.735 318.701 484.006 300.358 473.262L252.645 514.142C242.064 523.243 230.811 532.661 220.539 542.016C219.938 541.249 219.964 540.512 219.835 539.525C231.408 518.417 242.152 495.942 253.665 474.716C257.785 467.12 262.119 457.785 266.363 450.494Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M351.256 450.517C356.54 450.937 365.695 450.701 371.198 450.723L411.087 450.707C409.256 455.989 405.986 462.872 403.669 468.083L390.879 496.957C387.711 504.014 384.432 511.122 381.55 518.294C376.697 508.755 371.268 495.951 366.922 486.111C361.602 474.289 356.38 462.424 351.256 450.517Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M421.023 154.076C427.227 155.867 432.413 156.783 439.155 158.977C461.609 166.357 482.181 178.548 499.435 194.7C504.239 199.11 511.924 206.281 515.694 211.557C513.586 211.171 507.163 208.129 504.685 207.214C499.815 205.415 492.892 204.051 488.494 201.743C483.417 199.079 478.006 194.217 473.056 190.865C458.918 181.286 440.916 173.056 424.269 169.195C423.222 164.234 422.201 158.986 421.023 154.076Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M340.752 153.838C341.064 153.812 341.181 153.91 341.519 154.03C342.007 156.304 339.344 165.786 338.531 168.304C334.4 169.853 329.634 171.189 325.344 172.733C315.517 176.219 306.073 180.702 297.159 186.111C291.596 189.533 286.215 193.199 281.04 197.178C279.256 198.55 277.483 199.929 275.55 201.088L275.179 201.308C270.209 201.585 263.205 201.335 258.087 201.308C257.29 201.269 257.645 201.388 257.049 200.838C257.13 200.603 257.217 200.291 257.393 200.112C279.911 177.232 309.448 161.3 340.752 153.838Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M481.351 444.07C483.823 446.374 486.894 451.99 488.627 455.027C467.785 472.057 442.843 485.064 416.323 490.483C413.691 491.141 411.661 491.464 408.983 491.878C410.586 487.816 413.017 481.229 415.166 477.603C420.956 475.667 426.655 474.449 432.853 472.205C451.939 465.296 465.234 455.621 481.351 444.07Z"/>
                  <path fill="currentColor" transform="scale(1.42533 1.42459)" d="M219.835 539.525C219.964 540.512 219.938 541.249 220.539 542.016C219.58 542.875 218.204 543.821 217.141 544.604L219.835 539.525Z"/>
                </svg>
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
          {/* CAMBIO 1: max-w-3xl a max-w-5xl para dar más espacio horizontal */}
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 mb-6 backdrop-blur-sm">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide uppercase">Socios Estratégicos B2B & B2C</span>
            </div>

            {/* CAMBIO 2: Ajuste de text-7xl a text-6xl en pantallas grandes y eliminación del <br/> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Soporte Integral de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Lavado Industrial, Mantenimiento Estético, Lavado Especializado y Planchado y Pintura </span><span>para</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> Maquinaria Pesada, Flotas de Consecionarias, Empresas del rubro automotriz,
              </span> estandares rigurosos para toda la zona del sur del país.
            </h2>

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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Rendimiento óptimo para sus vehículos y maquinarias</h2>
            <p className="text-slate-600 text-lg">
              Adaptamos nuestros procesos a las exigencias de las concesionarias y empresas privadas, asegurando la preservacion de sus activos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Tractor className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lavado Industrial y de Maquinaria Pesada</h3>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lavado de vehículos livianos y flotas comerciales </h3>
              <p className="text-slate-600 mb-6">Estética vehicular avanzada para vehículos ejecutivos, camionetas de supervisión y particulares.</p>
              <ul className="space-y-3">
                {['Lavado Automático de Vapor y a Detalle', 'Lavado a Presión', 'Lavado de Salón', 'Lavado de Chasis y Motor', 'Encerado'].map((item, i) => (
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Planchado y Pintura Vehicular y Maquinaria Pesada</h3>
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
                Nuestra capacidad operativa nos permite desplazarnos y atender requerimientos corporativos en consecionarias de vehiculos livianos, camiones y maquinaria pesada en las ciudades del sur del país, teniendo nuestra sede principal en Arequipa.
              </p>

              {/* Badges de locaciones */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['Arequipa - Sede Principal', 'Mollendo', 'Moquegua', 'Ilo', 'Tacna'].map((ciudad, idx) => (
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
                  <span className="mt-2 text-white font-bold text-sm bg-slate-800/90 px-3 py-1 rounded-md backdrop-blur-sm border border-slate-600 transition-all group-hover:scale-110 group-hover:border-amber-500 shadow-lg">Arequipa - Sede Principal</span>
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
                    type="text"
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
