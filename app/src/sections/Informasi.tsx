import { ArrowRight, Calendar } from "lucide-react";

const berita = [
  {
    id: 1,
    kategori: "INFORMASI",
    judul:
      "LBH LIKU Desak Pemerintah Segera Mengakui Hak Ulayat Masyarakat Adat di Kawasan Hutan",
    tanggal: "10 Juli 2026",
    gambar:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
  },
  {
    id: 2,
    kategori: "SIARAN PERS",
    judul:
      "LBH LIKU Kecam Keras Penyerangan terhadap Komunitas Adat di Papua, Desak Investigasi Independen",
    tanggal: "8 Juli 2026",
    gambar:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: 3,
    kategori: "ADVOKASI",
    judul:
      "Kemenangan Perjuangan: PTUN Batalkan Izin Tambang yang Merusak Lahan Adat Kalimantan",
    tanggal: "5 Juli 2026",
    gambar:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80",
  },
];

export default function Informasi() {
  return (
    <section id="informasi" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#8B6914] text-xs font-medium tracking-[0.2em] uppercase">
              Terbaru
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-1">
              INFORMASI
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-sm text-gray-600 hover:text-[#8B6914] transition-colors border border-gray-300 hover:border-[#8B6914] px-4 py-2 rounded-sm"
          >
            Artikel Lainnya
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {berita.map((item) => (
            <article
              key={item.id}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#C4A035] text-white text-[10px] font-medium px-3 py-1 tracking-wider uppercase">
                  {item.kategori}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{item.tanggal}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#8B6914] transition-colors line-clamp-3">
                  {item.judul}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#8B6914] transition-colors border border-gray-300 hover:border-[#8B6914] px-4 py-2 rounded-sm"
          >
            Artikel Lainnya
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
