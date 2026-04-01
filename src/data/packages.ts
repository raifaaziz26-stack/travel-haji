import paketHaji from "@/assets/paket-haji.jpg";
import paketUmrah from "@/assets/paket-umrah.jpg";
import paketTurki from "@/assets/paket-turki.jpg";

export interface TravelPackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

export const travelPackages: TravelPackage[] = [
  {
    id: "haji-furoda",
    name: "Paket Haji Furoda",
    price: "Rp 150.000.000",
    duration: "25 Hari",
    image: paketHaji,
    description: "Perjalanan haji eksklusif dengan fasilitas premium dan bimbingan ustadz berpengalaman.",
    highlights: ["Hotel Bintang 5", "Makan 3x Sehari", "Visa & Tiket PP"],
  },
  {
    id: "umrah-reguler",
    name: "Paket Umrah Reguler",
    price: "Rp 28.000.000",
    duration: "9 Hari",
    image: paketUmrah,
    description: "Paket umrah terjangkau dengan pelayanan terbaik dan fasilitas lengkap.",
    highlights: ["Hotel Bintang 4", "Makan 3x Sehari", "City Tour Madinah"],
  },
  {
    id: "umrah-plus-turki",
    name: "Paket Umrah Plus Turki",
    price: "Rp 38.000.000",
    duration: "12 Hari",
    image: paketTurki,
    description: "Umrah sekaligus wisata ke Istanbul, Turki. Pengalaman ibadah dan budaya.",
    highlights: ["Hotel Bintang 5", "Tour Istanbul", "Hagia Sophia & Blue Mosque"],
  },
];

export const WHATSAPP_NUMBER = "6281234567890";

export function getWhatsAppLink(packageName: string): string {
  const message = encodeURIComponent(
    `Halo Admin, saya tertarik dengan ${packageName} yang ada di website.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
