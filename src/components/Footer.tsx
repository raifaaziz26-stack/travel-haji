import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/packages";

const Footer = () => {
  return (
    <footer className="bg-emerald-brand text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-3">
              Al-<span className="text-gold">Safwa</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Melayani perjalanan ibadah haji dan umrah sejak 2010. Terdaftar resmi di Kementerian Agama Republik Indonesia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Jl. Raya Merdeka No. 123, Jakarta Pusat, DKI Jakarta
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                Senin - Sabtu, 08.00 - 17.00 WIB
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Al-Safwa Travel. Semua hak dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
