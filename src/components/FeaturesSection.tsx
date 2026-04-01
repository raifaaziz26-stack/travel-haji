import { ShieldCheck, GraduationCap, Hotel, Headset, Plane, BookOpen } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Berizin Resmi Kemenag",
    desc: "Terdaftar dan diawasi oleh Kementerian Agama Republik Indonesia.",
  },
  {
    icon: GraduationCap,
    title: "Pembimbing Profesional",
    desc: "Ustadz berpengalaman menemani Anda dari keberangkatan hingga kepulangan.",
  },
  {
    icon: Hotel,
    title: "Hotel Bintang 5",
    desc: "Penginapan premium dekat Masjidil Haram dan Masjid Nabawi.",
  },
  {
    icon: Headset,
    title: "Layanan 24/7",
    desc: "Tim support siap membantu kapanpun Anda membutuhkan.",
  },
  {
    icon: Plane,
    title: "Penerbangan Langsung",
    desc: "Maskapai terpercaya dengan rute langsung ke Jeddah.",
  },
  {
    icon: BookOpen,
    title: "Manasik Gratis",
    desc: "Bimbingan manasik sebelum keberangkatan agar ibadah lebih khusyuk.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="keunggulan" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Keunggulan Kami</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
            Mengapa Memilih <span className="text-emerald-brand">Al-Safwa</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="w-14 h-14 rounded-xl gradient-emerald flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
