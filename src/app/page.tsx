'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  HardHat, 
  Wrench, 
  Home, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('jasa')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }, [])

  const services = [
    {
      icon: Building2,
      title: 'Bangunan Komersial',
      description: 'Konstruksi gedung perkantoran, pertokoan, dan fasilitas bisnis lainnya',
      features: ['Desain Modern', 'Struktur Kokoh', 'Tepat Waktu']
    },
    {
      icon: Home,
      title: 'Bangunan Residensial',
      description: 'Pembangunan rumah tinggal, apartemen, dan kompleks perumahan',
      features: ['Desain Ergonomis', 'Kualitas Terjamin', 'Harga Kompetitif']
    },
    {
      icon: Wrench,
      title: 'Renovasi & Maintenance',
      description: 'Jasa renovasi bangunan dan pemeliharaan struktur bangunan',
      features: ['Tim Profesional', 'Material Berkualitas', 'Garansi Pekerjaan']
    }
  ]

  const projects = [
    {
      name: 'Gedung Kantor Pemerintah',
      location: 'Jayapura',
      status: 'Selesai',
      year: '2023'
    },
    {
      name: 'Kompleks Perumahan',
      location: 'Jayapura Selatan',
      status: 'Selesai',
      year: '2023'
    },
    {
      name: 'Fasilitas Komersial',
      location: 'Entrop',
      status: 'Berjalan',
      year: '2024'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Kualitas Terjamin',
      description: 'Standar kualitas tinggi dengan material terbaik dan tenaga ahli berpengalaman'
    },
    {
      icon: Award,
      title: 'Berpengalaman',
      description: 'Pengalaman bertahun-tahun dalam industri konstruksi di Papua'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Tenaga ahli yang terampil dan berkomitmen pada hasil terbaik'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <img src="/logo.svg" alt="CV PATUPA PAPUA Logo" className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">CV PATUPA PAPUA</h1>
                <p className="text-orange-100 text-sm">Profesional Konstruksi & Bangunan</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#beranda" className="hover:text-orange-200 transition">Beranda</a>
              <a href="#layanan" className="hover:text-orange-200 transition">Layanan</a>
              <a href="#proyek" className="hover:text-orange-200 transition">Proyek</a>
              <a href="#tentang" className="hover:text-orange-200 transition">Tentang</a>
              <a href="#kontak" className="hover:text-orange-200 transition">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                🏗️ Konstruksi Profesional
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Membangun Masa Depan Papua dengan
                <span className="text-orange-600"> Kualitas Terbaik</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                CV PATUPA PAPUA adalah perusahaan konstruksi terpercaya di Jayapura yang 
                berkomitmen memberikan hasil terbaik untuk setiap proyek bangunan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Lihat Proyek
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <Building2 className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Konstruksi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk kebutuhan bangunan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-orange-200">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyek" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proyek Terbaru
            </h2>
            <p className="text-xl text-gray-600">
              Hasil kerja kami yang membanggakan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 flex items-center justify-center transition-colors duration-300">
                    <Building2 className="w-16 h-16 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant={project.status === 'Selesai' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="tentang" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih CV PATUPA PAPUA
            </h2>
            <p className="text-xl text-gray-600">
              Nilai-nilai yang menjadi fondasi kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Hubungi Kami untuk Proyek Anda
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Siap untuk mewujudkan proyek konstruksi impian Anda? 
                Tim profesional kami siap membantu.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Jaya Asri Blok AB 34, Entrop, Jayapura Selatan</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>0878-5534-0727</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@patupapapua.co.id</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Konsultasi Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  name="message"
                  placeholder="Deskripsi Proyek"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">CV PATUPA PAPUA</h3>
              </div>
              <p className="text-gray-400">
                Profesional konstruksi dan bangunan terpercaya di Papua.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Bangunan Komersial</li>
                <li>Bangunan Residensial</li>
                <li>Renovasi & Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Proyek</li>
                <li>Karir</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV PATUPA PAPUA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}