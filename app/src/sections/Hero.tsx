import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
    title: "LEMBAGA BANTUAN HUKUM LINTAS SUKU",
    subtitle: "Membela Hak, Menjaga Martabat Masyarakat Adat",
    quote:
      "\"Hukum harus menjadi benteng bagi yang lemah, bukan senjata bagi yang kuat.\"",
    author: "Adnan Buyung Nasution (1934-2015)",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1590422749897-3d53b61fd451?w=1920&q=80",
    title: "ADVOKASI UNTUK KEADILAN",
    subtitle: "Bersama Masyarakat Adat Melawan Ketidakadilan",
    quote:
      "\"Keadilan sejati adalah ketika hukum melindungi setiap insan, tanpa memandang suku dan ras.\"",
    author: "LBH LIKU",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1920&q=80",
    title: "PEMBELA HAK ASASI MANUSIA",
    subtitle: "Lintas Suku, Lintas Agama, Untuk Kemanusiaan",
    quote:
      "\"Hak asasi manusia adalah hak dasar yang melekat pada setiap individu sejak lahir.\"",
    author: "Deklarasi Universal Hak Asasi Manusia",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Slide Title */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <p className="text-[#C4A035] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    {slide.title}
                  </h1>
                  <div className="border-l-2 border-[#C4A035] pl-4 mb-8">
                    <p className="text-white/90 text-sm sm:text-base italic">
                      {slide.quote}
                    </p>
                    <p className="text-[#C4A035] text-xs mt-2">{slide.author}</p>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`text-xs font-medium transition-colors ${
                    index === currentSlide
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Social Media - Right Side */}
      <div className="absolute right-4 sm:right-8 bottom-1/3 z-10 hidden md:flex flex-col items-center gap-4">
        <span className="text-white/60 text-[10px] tracking-widest uppercase rotate-90 origin-center mb-8">
          Follow Us
        </span>
        <a
          href="#"
          className="text-white/60 hover:text-[#C4A035] transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white/60 hover:text-[#C4A035] transition-colors"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white/60 hover:text-[#C4A035] transition-colors"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white/60 hover:text-[#C4A035] transition-colors"
        >
          <Youtube className="w-4 h-4" />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-xs">
              Lembaga Swadaya Masyarakat
            </p>
            <p className="text-white/60 text-xs hidden sm:block">
              LBH LIKU &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
