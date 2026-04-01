import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hj. Siti Aminah",
    role: "Jemaah Umrah 2024",
    text: "Alhamdulillah, pelayanan Al-Safwa sangat memuaskan. Hotel dekat dengan Masjidil Haram, pembimbing sangat sabar dan berpengalaman. Insya Allah akan berangkat lagi bersama Al-Safwa.",
    rating: 5,
  },
  {
    name: "H. Ahmad Fauzi",
    role: "Jemaah Haji Furoda 2023",
    text: "Pengalaman haji yang tak terlupakan. Semua fasilitas sesuai janji, bahkan melebihi ekspektasi. Tim Al-Safwa sangat profesional dan penuh perhatian kepada setiap jemaah.",
    rating: 5,
  },
  {
    name: "Ibu Ratna Dewi",
    role: "Jemaah Umrah Plus Turki 2024",
    text: "Paket umrah plus Turki sangat worth it! Ibadah umrah lancar, wisata di Istanbul juga sangat menyenangkan. Terima kasih Al-Safwa!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Testimoni</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
            Apa Kata <span className="text-emerald-brand">Jemaah</span> Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border relative"
            >
              <Quote className="text-gold/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
