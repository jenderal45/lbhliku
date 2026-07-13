import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "BERANDA", href: "#hero" },
  {
    name: "PROFIL",
    href: "#about",
    dropdown: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Visi & Misi", href: "#about" },
      { name: "Sejarah", href: "#about" },
    ],
  },
  {
    name: "INFORMASI",
    href: "#informasi",
    dropdown: [
      { name: "Berita", href: "#informasi" },
      { name: "Siaran Pers", href: "#informasi" },
      { name: "Kegiatan", href: "#informasi" },
    ],
  },
  {
    name: "PUBLIKASI",
    href: "#publikasi",
    dropdown: [
      { name: "Laporan", href: "#publikasi" },
      { name: "Buku", href: "#publikasi" },
      { name: "Policy Brief", href: "#publikasi" },
    ],
  },
  { name: "MASYARAKAT ADAT", href: "#statistik" },
  { name: "KONTAK", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0">
            <img
              src="https://raw.githubusercontent.com/jenderal45/lbhliku/main/app/img/logo-lbhliku.png"
              alt="Logo LBH LIKU"
              className="w-11 h-11 object-contain"
            />
          
            <div className="hidden sm:block">
              <span className="block text-white font-bold text-sm tracking-wide">
                LBH LIKU
              </span>
              <span className="block text-[10px] text-white/70 -mt-0.5">
                Lembaga Bantuan Hukum Lintas Suku
              </span>
            </div>
          </a>
    
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[11px] font-medium text-white/90 hover:text-[#C4A035] transition-colors uppercase tracking-wider"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-md py-2 min-w-[180px] border-t-2 border-[#8B6914]">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-[#8B6914]/10 hover:text-[#8B6914] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-white/90 hover:text-[#C4A035] transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-md shadow-xl p-2">
                  <input
                    type="text"
                    placeholder="Cari..."
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#8B6914]"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-[#C4A035] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-white/10 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm text-white/90 hover:text-[#C4A035] hover:bg-white/5 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
