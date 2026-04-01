import { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/packages"; // Kita tetap pakai fungsi WhatsApp bawaannya
import { client } from "@/sanityClient"; // Mengambil kabel koneksi Sanity yang kamu buat tadi

const PackagesSection = () => {
  // State untuk menyimpan data dari Sanity
  const [packages, setPackages] = useState<any[]>([]);

  // Mengambil data saat komponen pertama kali dimuat
  useEffect(() => {
    // Ini disebut GROQ Query (Bahasa query milik Sanity)
    // Kita meminta Sanity memberikan: id, nama, harga, durasi, fasilitas, dan mengubah gambar menjadi URL asli
    const query = `*[_type == "paketTravel"]{
      _id,
      namaPaket,
      harga,
      durasi,
      deskripsi,
      fasilitas,
      "imageUrl": gambarThumbnail.asset->url
    }`;

    client.fetch(query)
      .then((data) => {
        console.log("Berhasil menarik data dari Sanity:", data);
        setPackages(data); // Memasukkan data ke dalam State React
      })
      .catch((error) => console.error("Gagal menarik data:", error));
  }, []);

  return (
    <section id="paket" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Paket Perjalanan</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
            Pilih Paket <span className="text-emerald-brand">Terbaik</span> untuk Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loop data dari variable packages yang berisi data Sanity */}
          {packages.map((pkg) => (
            <div
              key={pkg._id} // Menggunakan _id dari Sanity
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.imageUrl || "https://via.placeholder.com/800x600?text=Gambar+Belum+Ada"} // Menampilkan URL gambar Sanity
                  alt={pkg.namaPaket}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-gold text-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {/* Mengubah format angka menjadi Rupiah (Titik ribuan) */}
                  Rp {pkg.harga?.toLocaleString("id-ID")}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{pkg.namaPaket}</h3>
                
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                  <Clock size={14} />
                  <span>{pkg.durasi}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {pkg.deskripsi}
                </p>

                <ul className="flex flex-wrap gap-2 mb-5">
                  {/* Loop fasilitas dari array di Sanity */}
                  {pkg.fasilitas?.map((fasilitasItem: string, index: number) => (
                    <li key={index} className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {fasilitasItem}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink(pkg.namaPaket)} // Mengirim nama paket dari Sanity ke fungsi WA
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-emerald-brand hover:bg-emerald-light text-primary-foreground font-semibold group/btn">
                    Pesan Sekarang
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;