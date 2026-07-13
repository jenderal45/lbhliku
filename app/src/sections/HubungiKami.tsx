import { ArrowRight } from "lucide-react";

export default function HubungiKami() {
  return (
    <section
      id="kontak"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#8B6914] text-xs font-medium tracking-[0.2em] uppercase">
          Butuh Bantuan?
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Sampaikan pesan atau pertanyaanmu pada kami. Tim LBH LIKU siap 
          membantu masyarakat adat dan korban pelanggaran hak asasi manusia.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors px-8 py-3 text-sm font-medium tracking-wider"
        >
          KONTAK
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
