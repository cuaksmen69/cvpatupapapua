'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  ArrowLeft, 
  Eye, 
  Lock, 
  Database, 
  UserCheck,
  FileText,
  Clock,
  AlertCircle,
  Mail,
  Building2
} from 'lucide-react'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro')

  const sections = [
    {
      id: 'intro',
      title: 'Pendahuluan',
      icon: FileText,
      content: 'Pengantar kebijakan privasi CV PATUPA PAPUA'
    },
    {
      id: 'data-collection',
      title: 'Pengumpulan Data',
      icon: Database,
      content: 'Bagaimana kami mengumpulkan informasi Anda'
    },
    {
      id: 'data-usage',
      title: 'Penggunaan Data',
      icon: Eye,
      content: 'Bagaimana data Anda digunakan'
    },
    {
      id: 'data-protection',
      title: 'Perlindungan Data',
      icon: Lock,
      content: 'Keamanan informasi pribadi Anda'
    },
    {
      id: 'user-rights',
      title: 'Hak Pengguna',
      icon: UserCheck,
      content: 'Hak Anda atas data pribadi'
    },
    {
      id: 'retention',
      title: 'Penyimpanan Data',
      icon: Clock,
      content: 'Lama penyimpanan informasi'
    },
    {
      id: 'changes',
      title: 'Perubahan Kebijakan',
      icon: AlertCircle,
      content: 'Pembaruan kebijakan privasi'
    }
  ]

  const privacyContent = {
    intro: {
      title: 'Kebijakan Privasi CV PATUPA PAPUA',
      lastUpdated: '1 Januari 2024',
      content: `
        <p class="mb-4">Selamat datang di CV PATUPA PAPUA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan layanan konstruksi kami.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Informasi Perusahaan</h3>
        <p class="mb-4"><strong>CV PATUPA PAPUA</strong> adalah perusahaan konstruksi yang berbasis di Jayapura, Papua. Kami menyediakan jasa konstruksi bangunan komersial, residensial, dan renovasi dengan standar kualitas tinggi.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Kontak Privasi</h3>
        <p class="mb-4">Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Email: privacy@patupapapua.co.id</li>
          <li>Telepon: 0878-5534-0727</li>
          <li>Alamat: Jaya Asri Blok AB 34, Entrop, Jayapura Selatan, Jayapura, Papua 99224</li>
        </ul>
      `
    },
    'data-collection': {
      title: 'Pengumpulan Data Pribadi',
      content: `
        <h3 class="text-xl font-bold mb-3">Data yang Kami Kumpulkan</h3>
        <p class="mb-4">Kami dapat mengumpulkan jenis informasi berikut:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Informasi Identifikasi Pribadi</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Alamat fisik</li>
          <li>Informasi pembayaran</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Informasi Bisnis</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Nama perusahaan</li>
          <li>Jabatan</li>
          <li>Detail proyek konstruksi</li>
          <li>Dokumen perizinan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Informasi Teknis</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Alamat IP</li>
          <li>Jenis browser</li>
          <li>Informasi perangkat</li>
          <li>Data penggunaan website</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Cara Pengumpulan</h4>
        <p class="mb-4">Kami mengumpulkan informasi melalui:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Formulir kontak dan konsultasi online</li>
          <li>Komunikasi langsung (telepon, email, pertemuan)</li>
          <li>Kontrak dan dokumen proyek</li>
          <li>Cookie dan teknologi pelacakan website</li>
        </ul>
      `
    },
    'data-usage': {
      title: 'Penggunaan Data Pribadi',
      content: `
        <h3 class="text-xl font-bold mb-3">Bagaimana Kami Menggunakan Data Anda</h3>
        <p class="mb-4">Kami menggunakan informasi pribadi Anda untuk:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Layanan Konstruksi</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Menyiapkan penawaran dan estimasi proyek</li>
          <li>Mengelola kontrak dan perjanjian kerja</li>
          <li>Koordinasi proyek dan komunikasi dengan klien</li>
          <li>Penagihan dan manajemen pembayaran</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Komunikasi</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Memberikan update proyek secara berkala</li>
          <li>Mengirim informasi layanan kami</li>
          <li>Menanggapi pertanyaan dan permintaan Anda</li>
          <li>Memberikan dukungan pelanggan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Peningkatan Layanan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Analisis untuk meningkatkan kualitas layanan</li>
          <li>Pengembangan produk dan layanan baru</li>
          <li>Penelitian pasar dan tren industri</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">4. Kepatuhan Hukum</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Memenuhi kewajiban hukum dan peraturan</li>
          <li>Perlindungan hak-hak hukum kami</li>
          <li>Cooperasi dengan penegak hukum</li>
        </ul>
      `
    },
    'data-protection': {
      title: 'Perlindungan Data Pribadi',
      content: `
        <h3 class="text-xl font-bold mb-3">Keamanan Informasi</h3>
        <p class="mb-4">CV PATUPA PAPUA berkomitmen untuk melindungi data pribadi Anda dengan:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Teknologi Keamanan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Enkripsi data sensitif</li>
          <li>Firewall dan sistem deteksi intrusi</li>
          <li>Backup data teratur dan aman</li>
          <li>Update keamanan sistem secara berkala</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Kebijakan Internal</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Akses terbatas untuk data pribadi</li>
          <li>Pelatihan keamanan data untuk staf</li>
          <li>Protokol penanganan data breach</li>
          <li>Audit keamanan rutin</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Berbagi Data Pihak Ketiga</h4>
        <p class="mb-4">Kami hanya berbagi data Anda dengan:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Subkontraktor dan mitra proyek (dengan persetujuan)</li>
          <li>Penyedia layanan pembayaran</li>
          <li>Otoritas pemerintah (jika diwajibkan oleh hukum)</li>
          <li>Penasihat hukum dan keuangan</li>
        </ul>
      `
    },
    'user-rights': {
      title: 'Hak Pengguna atas Data Pribadi',
      content: `
        <h3 class="text-xl font-bold mb-3">Hak-Hak Anda</h3>
        <p class="mb-4">Sebagai pemilik data, Anda memiliki hak-hak berikut:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Hak Akses</h4>
        <p class="mb-4">Anda berhak mengetahui data pribadi apa yang kami miliki tentang Anda dan bagaimana kami menggunakannya.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Hak Koreksi</h4>
        <p class="mb-4">Anda dapat memperbarui atau mengoreksi informasi pribadi yang tidak akurat atau tidak lengkap.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Hak Penghapusan</h4>
        <p class="mb-4">Anda dapat meminta penghapusan data pribadi Anda, kecuali jika kami diwajibkan menyimpannya untuk kepentingan hukum atau kontraktual.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">4. Hak Pembatasan</h4>
        <p class="mb-4">Anda dapat membatasi pengolahan data pribadi Anda dalam keadaan tertentu.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">5. Hak Portabilitas</h4>
        <p class="mb-4">Anda berhak menerima data pribadi Anda dalam format terstruktur dan dapat digunakan.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">6. Hak Penolakan</h4>
        <p class="mb-4">Anda dapat menolak pengolahan data pribadi Anda untuk tujuan pemasaran langsung.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Cara Melaksanakan Hak Anda</h4>
        <p class="mb-4">Untuk melaksanakan hak-hak Anda, silakan hubungi kami melalui:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Email: privacy@patupapapua.co.id</li>
          <li>Telepon: 0878-5534-0727</li>
          <li>Surat: Alamat kantor kami</li>
        </ul>
      `
    },
    retention: {
      title: 'Penyimpanan dan Retensi Data',
      content: `
        <h3 class="text-xl font-bold mb-3">Kebijakan Penyimpanan Data</h3>
        <p class="mb-4">Kami menyimpan data pribadi Anda sesuai dengan kebutuhan bisnis dan kewajiban hukum:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Periode Penyimpanan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li><strong>Data Proyek:</strong> Minimum 10 tahun setelah proyek selesai</li>
          <li><strong>Data Keuangan:</strong> Minimum 10 tahun untuk kepatuhan pajak</li>
          <li><strong>Data Karyawan:</strong> Sesuai dengan peraturan ketenagakerjaan</li>
          <li><strong>Data Marketing:</strong> 2 tahun setelah interaksi terakhir</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Kriteria Penghapusan</h4>
        <p class="mb-4">Data akan dihapus ketika:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Tidak lagi diperlukan untuk tujuan pengumpulan</li>
          <li>Anda menarik persetujuan dan tidak ada kewajiban hukum</li>
          <li>Periode retensi telah berakhir</li>
          <li>Diwajibkan oleh hukum atau perintah pengadilan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Metode Penghapusan</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Penghapusan digital yang aman</li>
          <li>Pemusnahan dokumen fisik yang terenkripsi</li>
          <li>Verifikasi penghapusan lengkap</li>
        </ul>
      `
    },
    changes: {
      title: 'Perubahan Kebijakan Privasi',
      content: `
        <h3 class="text-xl font-bold mb-3">Pembaruan Kebijakan</h3>
        <p class="mb-4">CV PATUPA PAPUA dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">1. Kapan Kami Memperbarui</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Perubahan dalam praktik bisnis kami</li>
          <li>Pembaruan peraturan dan hukum yang berlaku</li>
          <li>Peningkatan teknologi dan keamanan</li>
          <li>Umpan balik dari pelanggan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">2. Cara Kami Memberitahu</h4>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Pemberitahuan di website kami</li>
          <li>Email ke pelanggan yang terdaftar</li>
          <li>Pemberitahuan langsung untuk perubahan signifikan</li>
        </ul>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">3. Efektif Perubahan</h4>
        <p class="mb-4">Perubahan kebijakan akan berlaku efektif setelah 30 hari dari pemberitahuan, kecuali untuk perubahan yang diperlukan oleh hukum yang dapat berlaku segera.</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">4. Tanggung Jawab Anda</h4>
        <p class="mb-4">Kami menyarankan Anda untuk secara berkala meninjau Kebijakan Privasi ini untuk tetap informasi tentang bagaimana kami melindungi data Anda.</p>
      `
    }
  }

  const currentContent = privacyContent[activeSection]

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
                <Shield className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">Kebijakan Privasi</h1>
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
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Pertanyaan Privasi?</h3>
                      <p className="text-gray-600 text-sm">Hubungi tim privasi kami</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Email Kami
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
                      <p className="text-gray-600 text-sm">Simpan kebijakan privasi</p>
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