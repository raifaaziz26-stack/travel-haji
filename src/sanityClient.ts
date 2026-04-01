import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'cvl2ktku', // Ganti dengan ID yang kamu copy tadi
  dataset: 'production',
  useCdn: false, // Gunakan true agar website lebih cepat (mengambil data dari cache Sanity)
  apiVersion: '2023-05-03', // Gunakan tanggal hari ini atau biarkan default
})