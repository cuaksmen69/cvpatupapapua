'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  ArrowLeft, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Gavel,
  Users,
  DollarSign,
  Clock,
  Building2,
  Mail
} from 'lucide-react'

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('intro')

  const sections = [
    {
      id: 'intro',
      title: 'Pendahuluan',
      icon: FileText,
      content: 'Pengantar syarat dan ketentuan CV PATUPA PAPUA'
    },
    {
      id: 'services',
      title: 'Layanan',
      icon: Building2,
      content: 'Deskripsi layanan konstruksi'
    },
    {
      id: 'obligations',
      title: 'Kewajiban',
      icon: Shield,
      content: 'Hak dan kewajiban kedua belah pihak'
    },
    {
      id: 'payment',
      title: 'Pembayaran',
      icon: DollarSign,
      content: 'Syarat pembayaran dan penagihan'
    },
    {
      id: 'warranty',
      title: 'Garansi',
      icon: CheckCircle,
      content: 'Jaminan dan garansi pekerjaan'
    },
    {
      id: 'termination',
      title: 'Pemutusan',
      icon: AlertTriangle,
      content: 'Syarat pemutusan kontrak'
    },
    {
      id: 'dispute',
      title: 'Sengketa',
      icon: Gavel,
      content: 'Penyelesaian perselisihan'
    },
    {
      id: 'changes',
      title: 'Perubahan',
      icon: Clock,
      content: 'Pembaruan syarat dan ketentuan'
    }
  ]

  const termsContent = {
    intro: {
      title: 'Syarat dan Ketentuan Layanan CV PATUPA PAPUA',
      lastUpdated: '1 Januari 2024',
      content: `
        <p class="mb-4">Selamat datang di CV PATUPA PAPUA. Dokumen Syarat dan Ketentuan ini ("Syarat") mengatur penggunaan layanan konstruksi yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Informasi Perusahaan</h3>
        <p class="mb-4"><strong>CV PATUPA PAPUA</strong> adalah perusahaan konstruksi profesional yang berbasis di Jayapura, Papua, dengan pengalaman dalam berbagai proyek bangunan komersial dan residensial.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Penerimaan Syarat</h3>
        <p class="mb-4">Dengan menghubungi kami, meminta penawaran, atau menggunakan layanan konstruksi kami, Anda:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Menyatakan bahwa Anda telah membaca, memahami, dan menyetujui Syarat ini</li>
          <li>Setuju untuk terikat oleh Syarat ini secara hukum</li>
          <li>Menyatakan bahwa Anda memiliki kapasitas hukum untuk mengikat diri atau entitas yang Anda wakili</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Definisi</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>"Klien"</strong>: Individu atau entitas yang menggunakan layanan kami</li>
          <li><strong>"Layanan"</strong>: Jasa konstruksi, renovasi, dan konsultasi bangunan</li>
          <li><strong>"Proyek"</strong>: Pekerjaan konstruksi yang disepakati dalam kontrak</li>
          <li><strong>"Material"</strong>: Bahan bangunan dan perlengkapan yang digunakan</li>
        </ul>
      `
    },
    services: {
      title: 'Layanan Konstruksi',
      content: `
        <h3 class="text-xl font-bold mb-3">Ruang Lingkup Layanan</h3>
        <p class="mb-4">CV PATUPA PAPUA menyediakan layanan konstruksi meliputi:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Bangunan Komersial</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Konstruksi gedung perkantoran</li>
          <li>Bangunan pertokoan dan retail</li>
          <li>Fasilitas industri dan gudang</li>
          <li>Bangunan publik dan komersial lainnya</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Bangunan Residensial</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Rumah tinggal baru</li>
          <li>Renovasi dan perluasan rumah</li>
          <li>Kompleks perumahan</li>
          <li>Apartemen dan kondominium</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Layanan Tambahan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Konsultasi desain dan perencanaan</li>
          <li>Manajemen proyek</li>
          <li>Pemeliharaan dan perbaikan</li>
          <li>Supervisi konstruksi</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Standar Kualitas</h4>
        <p class="mb-4">Kami berkomitmen untuk:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Menggunakan material berkualitas sesuai spesifikasi</li>
          <li>Mengikuti standar konstruksi yang berlaku di Indonesia</li>
          <li>Mempekerjakan tenaga ahli yang berpengalaman</li>
          <li>Menyelesaikan proyek sesuai jadwal yang disepakati</li>
        </ul>
      `
    },
    obligations: {
      title: 'Hak dan Kewajiban',
      content: `
        <h3 class="text-xl font-bold mb-3">Kewajiban CV PATUPA PAPUA</h3>
        <p class="mb-4">Sebagai penyedia layanan, kami berkewajiban untuk:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Pelaksanaan Pekerjaan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Menyelesaikan proyek sesuai spesifikasi dan desain yang disepakati</li>
          <li>Memastikan kualitas pekerjaan sesuai standar industri</li>
          <li>Mengikuti jadwal pelaksanaan yang telah ditetapkan</li>
          <li>Memberikan laporan kemajuan proyek secara berkala</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Manajemen Proyek</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Menyediakan tenaga kerja yang terampil dan berpengalaman</li>
          <li>Mengelola material dan peralatan dengan efisien</li>
          <li>Memastikan keamanan dan keselamatan kerja</li>
          <li>Mengurus perizinan yang diperlukan (jika disepakati)</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Kewajiban Klien</h3>
        <p class="mb-4">Sebagai penerima layanan, Anda berkewajiban untuk:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Persiapan Lokasi</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Menyediakan akses ke lokasi proyek</li>
          <li>Memastikan lokasi siap untuk konstruksi</li>
          <li>Mengurus perizinan dasar (IMB, dll)</li>
          <li>Menyediakan utilitas dasar (listrik, air)</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Pembayaran dan Kerjasama</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Melakukan pembayaran sesuai jadwal yang disepakati</li>
          <li>Memberikan keputusan tepat waktu untuk perubahan desain</li>
          <li>Memfasilitasi inspeksi dan pengujian</li>
          <li>Memberikan informasi yang diperlukan untuk kelancaran proyek</li>
        </ul>
      `
    },
    payment: {
      title: 'Syarat Pembayaran',
      content: `
        <h3 class="text-xl font-bold mb-3">Struktur Pembayaran</h3>
        <p class="mb-4">Pembayaran untuk layanan konstruksi kami diatur sebagai berikut:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Uang Muka (Down Payment)</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Besaran: 30-50% dari total nilai kontrak</li>
          <li>Dibayar setelah penandatanganan kontrak</li>
          <li>Digunakan untuk pembelian material awal</li>
          <li>Tidak dapat dikembalikan setelah pekerjaan dimulai</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Pembayaran Progresif</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Dibayar setiap mencapai milestone tertentu</li>
          <li>Besaran disesuaikan dengan kemajuan pekerjaan</li>
          <li>Dilampiri laporan kemajuan dan dokumentasi foto</li>
          <li>Jatuh tempo 7 hari setelah invoice diterbitkan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Pembayaran Akhir</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Dibayar setelah proyek selesai 100%</li>
          <li>Setelah serah terima pekerjaan</li>
          <li>Dilampiri berita acara serah terima</li>
          <li>Sisa pembayaran setelah dipotong retensi</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">4. Retensi</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Besaran: 5-10% dari nilai kontrak</li>
          <li>Dibayarkan setelah masa pemeliharaan selesai</li>
          <li>Masa pemeliharaan: 3-6 bulan</li>
          <li>Digunakan untuk perbaikan kecil pasca-konstruksi</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Keterlambatan Pembayaran</h3>
        <p class="mb-4">Jika pembayaran terlambat:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Dikenakan denda 0.5% per hari dari nilai yang terlambat</li>
          <li>Pekerjaan dapat dihentikan sementara</li>
          <li>Kami tidak bertanggung jawab atas keterlambatan proyek</li>
          <li>Biaya penaltia akan ditagih bersama pembayaran berikutnya</li>
        </ul>
      `
    },
    warranty: {
      title: 'Garansi dan Jaminan',
      content: `
        <h3 class="text-xl font-bold mb-3">Jaminan Pekerjaan</h3>
        <p class="mb-4">CV PATUPA PAPUA memberikan jaminan untuk semua pekerjaan konstruksi:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Garansi Struktural</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Masa garansi: 10 tahun untuk elemen struktural utama</li>
          <li>Cakupan: fondasi, kolom, balok, plat lantai</li>
          <li>Syarat: tidak ada modifikasi tanpa persetujuan kami</li>
          <li>Klaim: harus dilaporkan dalam waktu 30 hari setelah ditemukan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Garansi Non-Struktural</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Masa garansi: 1 tahun untuk elemen non-struktural</li>
          <li>Cakupan: finishing, plumbing, electrical, pintu, jendela</li>
          <li>Pengecualian: kerusakan akibat pemakaian tidak wajar</li>
          <li>Perbaikan: dilakukan tanpa biaya tambahan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Garansi Material</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Mengikuti garansi dari produsen material</li>
          <li>Kami membantu proses klaim dengan supplier</li>
          <li>Dokumen garansi diserahkan bersama serah terima</li>
          <li>Berlaku untuk material yang kami pasok</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Pemeliharaan Pasca-Konstruksi</h3>
        <p class="mb-4">Selama masa pemeliharaan (3-6 bulan):</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Inspeksi berkala setiap bulan</li>
          <li>Perbaikan kecil tanpa biaya tambahan</li>
          <li>Konsultasi teknis gratis</li>
          <li>Dokumentasi perawatan diserahkan kepada klien</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Pengecualian Garansi</h3>
        <p class="mb-4">Garansi tidak berlaku untuk:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Kerusakan akibat bencana alam</li>
          <li>Modifikasi atau perubahan tanpa persetujuan</li>
          <li>Pemeliharaan yang tidak tepat</li>
          <li>Pemakaian di luar kapasitas desain</li>
        </ul>
      `
    },
    termination: {
      title: 'Pemutusan Kontrak',
      content: `
        <h3 class="text-xl font-bold mb-3">Syarat Pemutusan Kontrak</h3>
        <p class="mb-4">Kontrak dapat diakhiri dalam kondisi berikut:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Pemutusan oleh Klien</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Dapat dilakukan dengan pemberitahuan 30 hari</li>
          <li>Klien membayar semua pekerjaan yang telah selesai</li>
          <li>Membayar biaya pembatalan sebesar 10% dari nilai kontrak</li>
          <li>Menanggung biaya material yang telah dibeli</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Pemutusan oleh CV PATUPA PAPUA</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Jika klien gagal membayar lebih dari 30 hari</li>
          <li>Jika klien menghalangi pelaksanaan pekerjaan</li>
          <li>Jika terjadi force majeure yang berkepanjangan</li>
          <li>Dengan pemberitahuan 14 hari</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Pemutusan Bersama</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Dapat dilakukan atas kesepakatan bersama</li>
          <li>Perhitungan pembayaran final dilakukan bersama</li>
          <li>Dibuat berita acara pemutusan kontrak</li>
          <li>Tidak ada pihak yang dikenakan denda</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Force Majeure</h3>
        <p class="mb-4">Kontrak dapat ditangguhkan atau diakhiri jika terjadi:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Bencana alam (gempa, banjir, tsunami)</li>
          <li>Perang, kerusuhan, atau keadaan darurat</li>
          <li>Kebijakan pemerintah yang menghambat proyek</li>
          <li>Krisis ekonomi yang parah</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Prosedur Pemutusan</h3>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Pemberitahuan tertulis kepada pihak lainnya</li>
          <li>Penjelasan alasan pemutusan</li>
          <li>Perhitungan keuangan final</li>
          <li>Serah terima pekerjaan yang telah selesai</li>
        </ul>
      `
    },
    dispute: {
      title: 'Penyelesaian Sengketa',
      content: `
        <h3 class="text-xl font-bold mb-3">Mekanisme Penyelesaian Sengketa</h3>
        <p class="mb-4">Kami berkomitmen untuk menyelesaikan perselisihan secara damai:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Negosiasi Langsung</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Langkah pertama: diskusi antara manajemen kedua belah pihak</li>
          <li>Waktu: maksimal 14 hari sejak sengketa muncul</li>
          <li>Tujuan: mencari solusi yang saling menguntungkan</li>
          <li>Dokumentasi: semua kesepakatan ditulis secara formal</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Mediasi</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Jika negosiasi gagal, dilakukan mediasi dengan pihak ketiga netral</li>
          <li>Mediator dapat dari asosiasi konstruksi atau profesional independen</li>
          <li>Biaya mediasi dibagi rata antara kedua belah pihak</li>
          <li>Hasil mediasi bersifat mengikat jika disetujui kedua belah pihak</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Arbitrase</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Jika mediasi gagal, sengketa diselesaikan melalui arbitrase</li>
          <pihak>Arbitrase dilakukan oleh Badan Arbitrase Nasional Indonesia (BANI)</pihak>
          <li>Keputusan arbitrase bersifat final dan mengikat</li>
          <li>Biaya arbitrase ditanggung oleh pihak yang kalah</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">4. Pengadilan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Sebagai upaya terakhir, sengketa dapat dibawa ke pengadilan</li>
          <li>Yurisdiksi: Pengadilan Negeri Jayapura</li>
          <li>Hukum yang berlaku: Hukum Republik Indonesia</li>
          <li>Biaya hukum ditanggung masing-masing pihak</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Sengketa Umum</h3>
        <p class="mb-4">Sengketa yang sering terjadi dan penyelesaiannya:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Keterlambatan Proyek</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Analisis penyebab keterlambatan</li>
          <li>Perhitungan denda atau kompensasi</li>
          <li>Penyesuaian jadwal jika diperlukan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Masalah Kualitas</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Inspeksi bersama oleh ahli independen</li>
          <li>Perbaikan atau penggantian jika diperlukan</li>
          <li>Penyesuaian harga jika ada perbedaan spesifikasi</li>
        </ul>
      `
    },
    changes: {
      title: 'Perubahan Syarat dan Ketentuan',
      content: `
        <h3 class="text-xl font-bold mb-3">Pembaruan Kebijakan</h3>
        <p class="mb-4">CV PATUPA PAPUA berhak melakukan perubahan pada Syarat dan Ketentuan ini:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Alasan Perubahan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Perubahan peraturan perundang-undangan</li>
          <li>Peningkatan standar industri konstruksi</li>
          <li>Perubahan dalam praktik bisnis kami</li>
          <li>Umpan balik dari pelanggan</li>
          <li>Perlindungan kepentingan kedua belah pihak</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Proses Perubahan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Perubahan direview oleh tim hukum dan manajemen</li>
          <li>Disetujui oleh direksi perusahaan</li>
          <li>Diinformasikan kepada semua pelanggan</li>
          <li>Diterapkan setelah periode transisi</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Pemberitahuan Perubahan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Website diperbarui dengan tanggal perubahan</li>
          <li>Email notifikasi ke pelanggan terdaftar</li>
          <li>Pemberitahuan langsung untuk proyek yang sedang berjalan</li>
          <li>Dokumen fisik tersedia di kantor</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">4. Efektif Perubahan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Perubahan berlaku setelah 30 hari pemberitahuan</li>
          <li>Kontrak yang sudah ditandatangani menggunakan syarat lama</li>
          <li>Kontrak baru menggunakan syarat yang berlaku</li>
          <li>Perubahan material dapat berlaku segera jika required by law</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Kontak untuk Pertanyaan</h3>
        <p class="mb-4">Jika Anda memiliki pertanyaan tentang perubahan Syarat dan Ketentuan:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Email: legal@patupapapua.co.id</li>
          <li>Telepon: 0878-5534-0727</li>
          <li>Alamat: Jaya Asri Blok AB 34, Entrop, Jayapura Selatan</li>
          <li>Jam operasional: Senin-Jumat, 08:00-17:00 WIT</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3 mt-6">Versi Dokumen</h3>
        <p class="mb-4">Dokumen ini adalah versi 1.0 dan berlaku efektif sejak 1 Januari 2024. Versi sebelumnya tidak lagi berlaku dan digantikan oleh dokumen ini.</p>
      `
    }
  }

  const currentContent = termsContent[activeSection]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-orange-800"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
              <div className="flex items-center space-x-3">
                <img src="/logo.svg" alt="CV PATUPA PAPUA Logo" className="w-8 h-8" />
                <FileText className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">Syarat & Ketentuan</h1>
                  <p className="text-orange-100 text-sm">CV PATUPA PAPUA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-4">Navigasi</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-orange-100 text-orange-700 font-semibold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {currentContent.title}
                  </h2>
                  {currentContent.lastUpdated && (
                    <p className="text-sm text-gray-500">
                      Terakhir diperbarui: {currentContent.lastUpdated}
                    </p>
                  )}
                </div>
                
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: currentContent.content }}
                />
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Konsultasi Hukum</h3>
                      <p className="text-gray-600 text-sm">Diskusikan kontrak dengan tim kami</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Hubungi Tim Hukum
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Unduh Dokumen</h3>
                      <p className="text-gray-600 text-sm">Simpan syarat dan ketentuan</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Unduh PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logo.svg" alt="CV PATUPA PAPUA Logo" className="w-8 h-8" />
            <h3 className="text-lg font-bold">CV PATUPA PAPUA</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Profesional konstruksi dan bangunan terpercaya di Papua
          </p>
          <div className="text-sm text-gray-500">
            © 2024 CV PATUPA PAPUA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}