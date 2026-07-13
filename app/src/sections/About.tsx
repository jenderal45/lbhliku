import { Scale, Users, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80"
                alt="LBH LIKU - Lembaga Bantuan Hukum Lintas Suku"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8B6914]/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#C4A035]/10 -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-[#8B6914] text-xs font-medium tracking-[0.2em] uppercase">
              Lembaga Swadaya Masyarakat
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Lembaga Bantuan Hukum Lintas Suku
            </h2>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                Lembaga Bantuan Hukum Lintas Suku (LBH LIKU) didirikan sebagai 
                respons terhadap meningkatnya pelanggaran hak-hak masyarakat adat 
                dan komunitas suku-suku di Indonesia. Kami berkomitmen untuk 
                memberikan akses keadilan bagi mereka yang termarginalkan.
              </p>
              <p>
                LBH LIKU memiliki jaringan advokat dan relawan yang tersebar di 
                berbagai daerah dengan populasi masyarakat adat yang signifikan, 
                termasuk Papua, Kalimantan, Sumatera, Sulawesi, dan Maluku. 
                Saat ini LBH LIKU memiliki 12 kantor layanan di 12 provinsi 
                prioritas.
              </p>
              <p>
                Kami percaya bahwa keadilan harus dirasakan oleh semua pihak, 
                tanpa memandang suku, ras, atau latar belakang sosial. LBH LIKU 
                hadir untuk memastikan suara masyarakat adat didengar di ruang-ruang 
                hukum dan kebijakan.
              </p>
            </div>

            {/* Mission Tags */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Scale className="w-4 h-4 text-[#8B6914]" />
                  <span>Bantuan Hukum Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users className="w-4 h-4 text-[#8B6914]" />
                  <span>Advokasi Masyarakat Adat</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-4 h-4 text-[#8B6914]" />
                  <span>Edukasi Hukum</span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-6 inline-flex items-center gap-3 bg-[#8B6914]/5 px-4 py-3 rounded-sm">
              <Scale className="w-5 h-5 text-[#8B6914] shrink-0" />
              <p className="text-sm text-gray-700">
                Bantuan hukum untuk masyarakat adat, korban diskriminasi, dan 
                pelanggaran hak asasi manusia lintas suku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
