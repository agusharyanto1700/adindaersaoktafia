'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock, Star, ChefHat, Coffee, Utensils } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('makanan')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="ADINDA ERSA OKTAFIA Logo" className="w-10 h-10 rounded-full" />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ADINDA ERSA OKTAFIA
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#menu">
                <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                  Menu
                </Button>
              </Link>
              <Link href="#about">
                <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                  Tentang
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                  Kontak
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                ADINDA ERSA OKTAFIA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Kedai Makanan Autentik dengan Cita Rasa Nusantara
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3">
                <ChefHat className="mr-2 h-5 w-5" />
                Lihat Menu
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas Terbaik</h3>
                <p className="text-gray-600">Bahan pilihan segar dan berkualitas tinggi</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Resep Autentik</h3>
                <p className="text-gray-600">Resep tradisional dengan sentuhan modern</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Layanan Cepat</h3>
                <p className="text-gray-600">Pelayanan cepat dan ramah untuk pelanggan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Menu Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600">Nikmati berbagai pilihan makanan dan minuman lezat</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('makanan')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'makanan'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <Utensils className="inline mr-2 h-4 w-4" />
                Makanan
              </button>
              <button
                onClick={() => setActiveTab('minuman')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'minuman'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                <Coffee className="inline mr-2 h-4 w-4" />
                Minuman
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'makanan' ? (
              <>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                      <Utensils className="h-16 w-16 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Nasi Goreng Special</h3>
                    <p className="text-gray-600 mb-4">Nasi goreng dengan bumbu rahasia dan topping lengkap</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">Rp 25.000</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <Utensils className="h-16 w-16 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mie Ayam Bakso</h3>
                    <p className="text-gray-600 mb-4">Mie ayam dengan bakso homemade dan kuah gurih</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">Rp 20.000</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                      <Utensils className="h-16 w-16 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ayam Bakar Madu</h3>
                    <p className="text-gray-600 mb-4">Ayam bakar dengan balutan madu dan bumbu spesial</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">Rp 30.000</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                      <Coffee className="h-16 w-16 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Es Teh Manis</h3>
                    <p className="text-gray-600 mb-4">Teh manis dingin yang menyegarkan</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">Rp 5.000</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <Coffee className="h-16 w-16 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Kopi Susu</h3>
                    <p className="text-gray-600 mb-4">Kopi susu dengan kualitas terbaik</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">Rp 8.000</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                      <Coffee className="h-16 w-16 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Jus Alpukat</h3>
                    <p className="text-gray-600 mb-4">Jus alpukat segar dengan madu</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">Rp 12.000</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Tentang <span className="font-extrabold">ADINDA ERSA OKTAFIA</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Kedai <span className="font-bold text-orange-600">ADINDA ERSA OKTAFIA</span> adalah destinasi kuliner yang menyajikan berbagai makanan dan minuman autentik dengan cita rasa Nusantara yang khas.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Dengan komitmen terhadap kualitas dan kepuasan pelanggan, kami menggunakan bahan-bahan pilihan segar dan resep turun temurun yang telah disesuaikan dengan selera modern.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-600 mb-2">Berkualitas</h4>
                  <p className="text-sm text-gray-600">Bahan segar pilihan</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600 mb-2">Higienis</h4>
                  <p className="text-sm text-gray-600">Proses memasak bersih</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-600 mb-2">Terjangkau</h4>
                  <p className="text-sm text-gray-600">Harga bersahabat</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600 mb-2">Layanan</h4>
                  <p className="text-sm text-gray-600">Ramah dan cepat</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-6 flex items-center justify-center">
                <ChefHat className="h-32 w-32 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Visi & Misi</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Visi</h4>
                  <p className="text-gray-600">Menjadi kedai makanan pilihan utama di Krian dengan kualitas terbaik dan pelayanan memuaskan.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Misi</h4>
                  <p className="text-gray-600">Menyajikan makanan berkualitas dengan harga terjangkau dan menciptakan pengalaman kuliner yang tak terlupakan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">Kunjungi kedai kami atau hubungi untuk pemesanan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Alamat</h3>
                      <p className="text-gray-600">
                        DSN.TAMBAK UTARA, Desa/Kelurahan Tambakkemerakan, Kec. Krian, Kab. Sidoarjo, Prov. Jawa Timur 61262
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telepon</h3>
                      <p className="text-gray-600">085353874912</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Jam Buka</h3>
                      <p className="text-gray-600">Senin - Minggu: 08:00 - 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Pesan Anda"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="ADINDA ERSA OKTAFIA Logo" className="w-10 h-10 rounded-full" />
                <span className="ml-3 text-xl font-bold text-white">ADINDA ERSA OKTAFIA</span>
              </div>
              <p className="text-orange-100">
                Kedai makanan autentik dengan cita rasa Nusantara yang khas dan memuaskan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Link Cepat</h3>
              <div className="space-y-2">
                <Link href="#menu" className="block text-orange-100 hover:text-white">
                  Menu
                </Link>
                <Link href="#about" className="block text-orange-100 hover:text-white">
                  Tentang Kami
                </Link>
                <Link href="#contact" className="block text-orange-100 hover:text-white">
                  Kontak
                </Link>
                <Link href="/privacy" className="block text-orange-100 hover:text-white">
                  Kebijakan Privasi
                </Link>
                <Link href="/terms" className="block text-orange-100 hover:text-white">
                  Syarat & Ketentuan
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <div className="space-y-2 text-orange-100">
                <p>📍 DSN.TAMBAK UTARA, Tambakkemerakan, Krian, Sidoarjo</p>
                <p>📞 085353874912</p>
                <p>🕐 Senin - Minggu: 08:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-100">
            <p>&copy; 2024 ADINDA ERSA OKTAFIA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}