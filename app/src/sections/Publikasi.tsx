import { useState } from "react";
import { Loader2 } from "lucide-react";

const publikasi = [
  {
    id: 1,
    judul:
      "Konflik Agraria dan Perlindungan Hak Masyarakat Adat di Tanah Papua dalam Perspektif Hukum Internasional",
    tipe: "LAPORAN",
    gambar:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=600&q=80",
  },
  {
    id: 2,
    judul:
      "Pandemi Eksploitasi: Ketika Perusahaan Tambang Memanfaatkan Kelemahan Hukum di Masa Pandemi",
    tipe: "KERTAS POSISI",
    gambar:
      "https://images.unsplash.com/photo-1626263568925-57426f3a9f6f?w=600&q=80",
  },
  {
    id: 3,
    judul:
      "KRIMINALISASI PEMbela MASYARAKAT ADAT: Modus dan Kasus-kasusnya di Indonesia",
    tipe: "BUKU",
    gambar:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80",
  },
  {
    id: 4,
    judul:
      "Menebas yang Tersisa: Perusakan Sistematis Hutan Adat dan Semangat Reformasi Agraria di Indonesia",
    tipe: "LAPORAN TAHUNAN",
    gambar:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
  },
  {
    id: 5,
    judul:
      "Laporan Investigasi: Operasi Militer dan Pembungkaman Suara Masyarakat Adat di Papua Pegunungan",
    tipe: "LAPORAN",
    gambar:
      "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=600&q=80",
  },
  {
    id: 6,
    judul:
      "40 Tahun Bencana Lingkungan: Inkompetensi Pemerintah dan Arogansi Korporasi dalam Penanganan Kerusakan Lingkungan di Kalimantan",
    tipe: "KERTAS POSISI",
    gambar:
      "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&q=80",
  },
];

export default function Publikasi() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, publikasi.length));
      setLoading(false);
    }, 800);
  };

  return (
    <section id="publikasi" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[#8B6914] text-xs font-medium tracking-[0.2em] uppercase">
            Terbaru
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-1">
            PUBLIKASI
          </h2>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publikasi.slice(0, visibleCount).map((item) => (
            <article key={item.id} className="group text-center">
              {/* Cover Image */}
              <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4] max-w-[280px] mx-auto">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-[#8B6914] text-white text-[9px] font-medium px-2 py-0.5 tracking-wider">
                  {item.tipe}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#8B6914] transition-colors max-w-[280px] mx-auto">
                {item.judul}
              </h3>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < publikasi.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#8B6914] transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Memuat...
                </>
              ) : (
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
