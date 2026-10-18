import logo from "../../img/logo-lbhliku.png";
import { MapPin, Mail, Phone } from "lucide-react";

const kantorLBH = [
  "LBH LIKU Papua",
  "LBH LIKU Kalimantan Barat",
  "LBH LIKU Kalimantan Tengah",
  "LBH LIKU Sumatera Utara",
  "LBH LIKU Sumatera Barat",
  "LBH LIKU Sulawesi Tengah",
  "LBH LIKU Maluku",
  "LBH LIKU Nusa Tenggara Timur",
  "LBH LIKU Riau",
  "LBH LIKU Jambi",
  "LBH LIKU Bengkulu",
  "LBH LIKU Jakarta",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <img
                  src={logo}
                  alt="LBH LIKU LAW CENTER"
                  className="w-12 h-12 object-contain"
                />
              <div>
                <span className="text-white font-bold text-sm">LBH LIKU</span>
                <span className="block text-[10px] text-white/60 -mt-0.5">
                  Lembaga Bantuan Hukum Lintas Suku
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Bantuan hukum untuk masyarakat adat, korban diskriminasi, dan 
              pelanggaran hak asasi manusia lintas suku di Indonesia.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C4A035]" />
                <span>
                  Gp.portal, Jl. Kp. Utan, RT.04/RW.04, No.29, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-[#C4A035]" />
                <span>lbhliku@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-[#C4A035]" />
                <span>+62 822-6186-5636</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Offices */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wider">
              KANTOR LBH LIKU
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {kantorLBH.map((kantor) => (
                <a
                  key={kantor}
                  href="#"
                  className="text-white/60 text-xs hover:text-[#C4A035] transition-colors"
                >
                  {kantor}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 tracking-wider">
              TAUTAN CEPAT
            </h3>
            <div className="space-y-2">
              {[
                { name: "Tentang Kami", href: "#about" },
                { name: "Berita & Informasi", href: "#informasi" },
                { name: "Publikasi", href: "#publikasi" },
                { name: "Program", href: "#statistik" },
                { name: "Kontak", href: "#kontak" },
                { name: "Donasi", href: "#kontak" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/60 text-xs hover:text-[#C4A035] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <h3 className="text-white font-bold text-sm mb-3 mt-8 tracking-wider">
              IKUTI KAMI
            </h3>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter", "Youtube"].map((sosmed) => (
                <a
                  key={sosmed}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white/60 hover:bg-[#8B6914] hover:text-white transition-colors"
                >
                  <span className="text-[10px] font-bold">
                    {sosmed.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} LBH LIKU. Lembaga Bantuan Hukum
              Lintas Suku. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Bantuan hukum untuk rakyat miskin, buta hukum, dan korban
              pelanggaran HAM.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
