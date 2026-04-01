import heroImage from "@/assets/hero-kaaba.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ka'bah Makkah"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10">
          <span className="text-sm font-semibold text-gold">✦ Berizin Resmi Kemenag RI</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-primary-foreground">
          Wujudkan Niat Suci ke{" "}
          <span className="text-gold">Baitullah</span> dengan Aman dan Nyaman
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Perjalanan ibadah Anda dimulai di sini. Kami menyediakan layanan haji dan umrah terpercaya dengan fasilitas terbaik dan pembimbing berpengalaman.
        </p>

        <a href="#paket">
          <Button
            size="lg"
            className="gradient-gold text-foreground font-bold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Lihat Paket Keberangkatan
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
